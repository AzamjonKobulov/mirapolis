"use client";

import { useState, FormEvent } from "react";
import OptionSelector from "../OptionSelector";
import { motion } from "framer-motion";
import Button from "./Button";
import { X } from "lucide-react";
import { useModalsContext } from "@/app/contexts/ModalsContext";

interface FormValues {
  name: string;
  company: string;
  email: string;
  phone: string;
  agree: boolean;
}

interface ContactFormProps {
  showClose?: boolean;
  onClose?: () => void;
  showUserCountSelector?: boolean;
  showContactMethodSelector?: boolean;
  initialUserCount?: string;
  initialContactMethod?: string;
  modalTitle?: string;
  modalDescription?: React.ReactNode;
}

export default function ContactForm({
  showClose = false,
  onClose,
  showUserCountSelector = true,
  showContactMethodSelector = true,
  initialUserCount = "До 100",
  initialContactMethod = "Звонок",
  modalTitle = "Попробовать бесплатно",
  modalDescription = (
    <p>
      Попробуйте <b>14-дневный бесплатный</b> период.
    </p>
  ),
}: ContactFormProps) {
  const { toggleSuccessModal, toggleFreeTrialModal, toggleOrderCallModal } =
    useModalsContext();

  const [contactMethod, setContactMethod] =
    useState<string>(initialContactMethod);
  const [userCount, setUserCount] = useState<string>(initialUserCount);

  const [formValues, setFormValues] = useState<FormValues>({
    name: "",
    company: "",
    email: "",
    phone: "",
    agree: false,
  });

  const [touched, setTouched] = useState<
    Partial<Record<keyof FormValues, boolean>>
  >({});
  const [submitted, setSubmitted] = useState<boolean>(false);

  const validateEmail = (email: string): boolean =>
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  const validatePhone = (phone: string): boolean =>
    /^\+?[0-9\s\-()]{10,}$/.test(phone);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setSubmitted(true);

    const errors = {
      name: !formValues.name.trim(),
      email: !validateEmail(formValues.email),
      phone: !validatePhone(formValues.phone),
      agree: !formValues.agree,
    };

    if (Object.values(errors).some(Boolean)) return;

    // ✅ Validation passed
    console.log("Form submitted:", formValues);
    toggleSuccessModal();

    if (showUserCountSelector) {
      toggleFreeTrialModal();
    } else {
      toggleOrderCallModal();
    }
  };

  const getError = (field: keyof FormValues): boolean => {
    if (!submitted && !touched[field]) return false;
    if (field === "email") return !validateEmail(formValues.email);
    if (field === "phone") return !validatePhone(formValues.phone);
    if (field === "agree") return !formValues.agree;
    return !formValues[field]?.toString().trim();
  };

  return (
    <motion.div
      initial={{ y: 20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      exit={{ y: 20, opacity: 0 }}
      transition={{ duration: 0.2 }}
      className={`relative sm:w-2/3 ${
        showUserCountSelector ? "lg:max-w-[608px]" : "lg:max-w-[540px]"
      } bg-white size-full xs:size-auto xs:rounded-[20px] text-brand-dark-blue space-y-7 overflow-auto  px-3.5 py-8 lg:px-8`}
    >
      {/* Close button */}
      {showClose && (
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-brand-dark-blue hover:text-brand-red"
          type="button"
        >
          <X size={20} />
        </button>
      )}

      {/* Title & Text */}
      <div className="space-y-3">
        <h3>{modalTitle}</h3>
        {modalDescription}
      </div>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="space-y-1">
          <input
            type="text"
            placeholder="Ваше имя"
            className={`input ${getError("name") ? "outline-brand-red" : ""}`}
            value={formValues.name}
            onChange={(e) =>
              setFormValues((prev) => ({ ...prev, name: e.target.value }))
            }
            onBlur={() => setTouched((prev) => ({ ...prev, name: true }))}
          />
          {getError("name") && (
            <p className="text-xs leading-4 text-brand-red">
              Обязательное поле
            </p>
          )}
        </div>

        <input
          type="text"
          placeholder="Название компании"
          className="input"
          value={formValues.company}
          onChange={(e) =>
            setFormValues((prev) => ({ ...prev, company: e.target.value }))
          }
        />

        <div className="space-y-1">
          <input
            type="email"
            placeholder="*Ваш email"
            className={`input ${getError("email") ? "outline-brand-red" : ""}`}
            value={formValues.email}
            onChange={(e) =>
              setFormValues((prev) => ({ ...prev, email: e.target.value }))
            }
            onBlur={() => setTouched((prev) => ({ ...prev, email: true }))}
          />
          {getError("email") && (
            <p className="text-xs leading-4 text-brand-red">
              Введите адрес в формате name@domen.ru
            </p>
          )}
        </div>

        <div className="space-y-1">
          <input
            type="text"
            placeholder="*Ваш телефон"
            className={`input ${
              getError("phone") ? "outline outline-1 outline-brand-red" : ""
            }`}
            value={formValues.phone}
            onChange={(e) =>
              setFormValues((prev) => ({ ...prev, phone: e.target.value }))
            }
            onBlur={() => setTouched((prev) => ({ ...prev, phone: true }))}
          />
          {getError("phone") && (
            <p className="text-xs leading-4 text-brand-red">
              Укажите верный формат номера телефона
            </p>
          )}
        </div>

        {/* User Count Option */}
        {showUserCountSelector && (
          <OptionSelector
            label="Укажите планируемое количество пользователей"
            options={[
              "До 100",
              "от 100 до 500",
              "от 500 до 1000",
              "Свыше 1000",
            ]}
            value={userCount}
            onChange={(val: string) => setUserCount(val)}
            fullWidthButtons={true}
            responsive={true}
          />
        )}

        {showContactMethodSelector && (
          <OptionSelector
            label="Какой способ связи для вас удобнее?"
            options={["Звонок", "WhatsApp", "Telegram", "Email"]}
            value={contactMethod}
            onChange={(val: string) => setContactMethod(val)}
            fullWidthButtons={false}
            responsive={false}
          />
        )}

        <div className="space-y-3 pt-4 xs:pt-5">
          <Button variant="gradient" className="w-full">
            {showUserCountSelector ? "Запросить доступ" : "Отправить заявку"}
          </Button>

          <div className="space-y-3.5 xs:space-y-3 text-sm/4 xs:text-base/5 text-brand-dark-blue/80">
            {/* Checkbox 1 */}
            <label
              htmlFor="check1"
              className="flex items-center gap-2 cursor-pointer"
            >
              <input
                type="checkbox"
                className="hidden"
                id="check1"
                checked={formValues.agree}
                onChange={(e) =>
                  setFormValues((prev) => ({
                    ...prev,
                    agree: e.target.checked,
                  }))
                }
              />
              <div
                className={`size-4.5 xs:size-5 shrink-0 flex-center rounded border ${
                  getError("agree")
                    ? "border-brand-red"
                    : "border-brand-dark-blue/80"
                }`}
              >
                {formValues.agree && (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 448 512"
                    className="size-3 xs:size-4 fill-white bg-brand-dark-blue"
                  >
                    <path d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z" />
                  </svg>
                )}
              </div>
              <div>
                <p>Даю согласие на обработку персональных данных</p>
                {getError("agree") && (
                  <p className="text-xs leading-4 text-brand-red">
                    Необходимо согласие с обработкой персональных данных
                  </p>
                )}
              </div>
            </label>

            {/* Checkbox 2 */}
            <label
              htmlFor="check2"
              className="flex items-center gap-2 cursor-pointer"
            >
              <input type="checkbox" className="hidden" id="check2" />
              <div className="size-4.5 xs:size-5 shrink-0 flex-center border border-brand-dark-blue/80 rounded">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 448 512"
                  className="size-3 xs:size-4 hidden fill-white"
                >
                  <path d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z" />
                </svg>
              </div>
              Даю согласие на получение новостей HR-Tech и
              рекламно-информационных материалов
            </label>
          </div>
        </div>
      </form>
    </motion.div>
  );
}
