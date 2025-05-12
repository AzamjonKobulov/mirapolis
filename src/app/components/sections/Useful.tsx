"use client";

import type React from "react";

import { useState, useEffect } from "react";
import { ChevronUp } from "lucide-react";
import Button from "../shared/Button";
import { useMediaQuery } from "../../hooks/useMediaQuery";

interface FeatureBlockProps {
  icon: () => React.ReactNode;
  title: string;
  description: string;
  className?: string;
}

const FeatureBlock = ({
  icon,
  title,
  description,
  className = "",
}: FeatureBlockProps) => {
  const [isOpen, setIsOpen] = useState(true);
  const isMobile = useMediaQuery("(max-width: 768px)");

  // Keep accordions open initially on both mobile and desktop
  useEffect(() => {
    setIsOpen(true);
  }, []);

  return (
    <div
      className={`bg-white ${
        isMobile
          ? "rounded-xl mb-4"
          : "rounded-xl p-5 lg:p-6 transition-all duration-300 h-full overflow-hidden"
      } ${className}`}
    >
      <div
        className={`${
          isMobile
            ? "py-3.5 px-2.5 flex items-center cursor-pointer rounded-xl"
            : "space-y-3"
        }`}
        onClick={() => isMobile && setIsOpen(!isOpen)}
      >
        <div className="block text-blue-500 mr-2">{icon()}</div>
        <h5 className="text-sm/4 xs:text-lg/5 lg:text-[28px]/8">{title}</h5>
        {isMobile && (
          <ChevronUp
            className={`size-6 shrink-0 ml-auto transition-all duration-300 ${
              isOpen ? "text-brand-purple" : "rotate-180"
            }`}
            size={20}
          />
        )}
      </div>

      <div
        className={`overflow-hidden rounded-b-xl transition-all duration-500 linear ${
          isMobile && !isOpen
            ? "max-h-0 opacity-0 mt-0"
            : isMobile
            ? "max-h-[500px] bg-brand-dark-blue/10 space-y-3.5 opacity-100 py-5 px-3.5"
            : "max-h-[500px] opacity-100 mt-4"
        }`}
      >
        {isMobile && <h5>{title}</h5>}
        <div className="leading-5.5 lg:text-xl/7 font-light">{description}</div>
      </div>
    </div>
  );
};

export default function Useful() {
  const features = [
    {
      icon: () => (
        <svg
          width="28"
          height="29"
          viewBox="0 0 28 29"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="size-[17.5px] sm:size-7"
        >
          <g clipPath="url(#clip0_2056_20784)">
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M14.0002 5.74609C12.109 5.74682 10.269 6.36022 8.75578 7.49441C7.24252 8.62861 6.13743 10.2225 5.60606 12.0375C5.07468 13.8524 5.14561 15.7907 5.80822 17.5619C6.47083 19.3332 7.68946 20.8421 9.28158 21.8626C10.8737 22.8832 12.7536 23.3604 14.6397 23.2229C16.5259 23.0854 18.3167 22.3406 19.7439 21.0999C21.1712 19.8592 22.1581 18.1896 22.5568 16.3409C22.9556 14.4923 22.7446 12.5643 21.9557 10.8456C21.8698 10.6366 21.8681 10.4026 21.9509 10.1924C22.0336 9.98216 22.1945 9.81212 22.3998 9.71783C22.6051 9.62355 22.8389 9.61232 23.0523 9.68651C23.2657 9.76069 23.4421 9.91454 23.5447 10.1158C24.4914 12.1784 24.7444 14.4921 24.2658 16.7105C23.7872 18.9289 22.6027 20.9325 20.8898 22.4212C19.1769 23.9099 17.0277 24.8036 14.7643 24.9684C12.5008 25.1332 10.2449 24.5602 8.33449 23.3352C6.42403 22.1103 4.96187 20.2993 4.16703 18.1736C3.37218 16.0479 3.28743 13.7219 3.92548 11.544C4.56352 9.36615 5.89002 7.45359 7.70626 6.09286C9.52251 4.73213 11.7307 3.99648 14.0002 3.99609V5.74609Z"
              fill="url(#paint0_linear_2056_20784)"
            />
            <path
              d="M14 8.31248V1.43148C14 1.34835 14.0237 1.26694 14.0684 1.1968C14.113 1.12666 14.1767 1.07069 14.252 1.03543C14.3272 1.00018 14.411 0.987101 14.4935 0.997735C14.5759 1.00837 14.6536 1.04227 14.7175 1.09548L18.8475 4.53598C19.0575 4.71098 19.0575 5.03298 18.8475 5.20798L14.7175 8.64848C14.6536 8.70168 14.5759 8.73559 14.4935 8.74622C14.411 8.75685 14.3272 8.74378 14.252 8.70852C14.1767 8.67327 14.113 8.61729 14.0684 8.54715C14.0237 8.47701 14 8.39561 14 8.31248Z"
              fill="url(#paint1_linear_2056_20784)"
            />
          </g>
          <defs>
            <linearGradient
              id="paint0_linear_2056_20784"
              x1="23.1741"
              y1="24.9961"
              x2="4.5033"
              y2="11.0063"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#763EDB" />
              <stop offset="1" stopColor="#0058E6" />
            </linearGradient>
            <linearGradient
              id="paint1_linear_2056_20784"
              x1="18.6885"
              y1="8.74979"
              x2="13.0571"
              y2="6.02676"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#763EDB" />
              <stop offset="1" stopColor="#0058E6" />
            </linearGradient>
            <clipPath id="clip0_2056_20784">
              <rect
                width="28"
                height="28"
                fill="white"
                transform="translate(0 0.496094)"
              />
            </clipPath>
          </defs>
        </svg>
      ),
      title: "Регулярные обновления",
      description:
        "Мы постоянно развиваем систему, добавляем в нее новые полезные функции и улучшения. Большие обновления проходят не реже каждого полугодия. Открытая дорожная карта развития системы с голосованием позволяет пользователям самим определять, что появится в обновлениях в первую очередь.",
    },
    {
      icon: () => (
        <svg
          width="29"
          height="29"
          viewBox="0 0 29 29"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="size-[17.5px] sm:size-7"
        >
          <g clipPath="url(#clip0_2056_20790)">
            <path
              d="M15.208 5.19893C16.3525 3.99318 18.3265 3.64843 20.654 3.88293C22.8135 4.09993 25.0343 4.79818 26.583 5.44568V22.8109C24.9765 22.1984 22.8958 21.5999 20.8308 21.3934C18.9163 21.1992 16.8443 21.3252 15.208 22.2544V5.19893ZM14.333 3.61693C12.6093 2.13468 10.1103 1.91418 7.83526 2.14168C5.18576 2.40943 2.51176 3.31768 0.845758 4.07543C0.692894 4.14495 0.563265 4.257 0.472345 4.39819C0.381425 4.53938 0.333054 4.70375 0.333008 4.87168V24.1217C0.333048 24.2681 0.369823 24.4121 0.439963 24.5406C0.510103 24.6691 0.611366 24.778 0.734477 24.8572C0.857588 24.9365 0.998611 24.9835 1.14463 24.9941C1.29065 25.0047 1.43699 24.9785 1.57026 24.9179C3.11376 24.2179 5.60051 23.3762 8.01026 23.1329C10.476 22.8844 12.5428 23.2852 13.6505 24.6677C13.7325 24.7699 13.8364 24.8524 13.9545 24.909C14.0726 24.9657 14.202 24.9951 14.333 24.9951C14.464 24.9951 14.5934 24.9657 14.7115 24.909C14.8296 24.8524 14.9335 24.7699 15.0155 24.6677C16.1233 23.2852 18.19 22.8844 20.654 23.1329C23.0655 23.3762 25.554 24.2179 27.0958 24.9179C27.229 24.9785 27.3754 25.0047 27.5214 24.9941C27.6674 24.9835 27.8084 24.9365 27.9315 24.8572C28.0546 24.778 28.1559 24.6691 28.2261 24.5406C28.2962 24.4121 28.333 24.2681 28.333 24.1217V4.87168C28.333 4.70375 28.2846 4.53938 28.1937 4.39819C28.1028 4.257 27.9731 4.14495 27.8203 4.07543C26.1543 3.31768 23.4803 2.40943 20.8308 2.14168C18.5558 1.91243 16.0568 2.13468 14.333 3.61693Z"
              fill="url(#paint0_linear_2056_20790)"
            />
          </g>
          <defs>
            <linearGradient
              id="paint0_linear_2056_20790"
              x1="26.5625"
              y1="24.9964"
              x2="5.40262"
              y2="5.63763"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#763EDB" />
              <stop offset="1" stopColor="#0058E6" />
            </linearGradient>
            <clipPath id="clip0_2056_20790">
              <rect
                width="28"
                height="28"
                fill="white"
                transform="translate(0.333008 0.496094)"
              />
            </clipPath>
          </defs>
        </svg>
      ),
      title: "База знаний",
      description:
        "Непрерывно пополняемая база знаний, где вы найдете ответы на все свои вопросы.",
    },
    {
      icon: () => (
        <svg
          width="29"
          height="29"
          viewBox="0 0 29 29"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="size-[17.5px] sm:size-7"
        >
          <g clipPath="url(#clip0_2056_20796)">
            <path
              d="M28.361 0.70593C28.5046 0.82854 28.6047 0.994329 28.6463 1.17853C28.688 1.36274 28.6689 1.55546 28.592 1.72793C25.9145 7.73043 20.2917 16.0254 16.1757 20.3479C15.022 21.5571 13.5992 22.4769 12.023 23.0324C11.9915 23.4297 11.918 23.9739 11.743 24.5514C11.3912 25.7047 10.5757 27.1397 8.75396 27.5964C6.98966 28.0166 5.16124 28.095 3.36746 27.8274C3.03391 27.7747 2.70505 27.6957 2.38396 27.5912C2.0869 27.5008 1.81002 27.354 1.56846 27.1589C1.40916 27.0235 1.28641 26.8502 1.21146 26.6549C1.11857 26.4044 1.12106 26.1285 1.21846 25.8797C1.38471 25.4509 1.77146 25.2147 2.02521 25.0887C2.71471 24.7439 3.11896 24.2959 3.54246 23.6432C3.70871 23.3912 3.86446 23.1234 4.04471 22.8172L4.24946 22.4707C4.51371 22.0244 4.81996 21.5257 5.20496 20.9867C6.12896 19.6934 7.30671 19.3679 8.26046 19.4187C8.48096 19.4309 8.68571 19.4624 8.86946 19.5027C8.97796 19.2017 9.11796 18.8377 9.28596 18.4387C9.74271 17.3554 10.4375 15.9554 11.3632 14.8179C15.1712 10.1454 22.1782 3.95743 27.318 0.63593C27.4762 0.5338 27.6632 0.485447 27.8511 0.498058C28.039 0.51067 28.2178 0.583572 28.361 0.70593Z"
              fill="url(#paint0_linear_2056_20796)"
            />
          </g>
          <defs>
            <linearGradient
              id="paint0_linear_2056_20796"
              x1="26.9274"
              y1="27.9828"
              x2="2.48004"
              y2="9.63964"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#763EDB" />
              <stop offset="1" stopColor="#0058E6" />
            </linearGradient>
            <clipPath id="clip0_2056_20796">
              <rect
                width="28"
                height="28"
                fill="white"
                transform="translate(0.666992 0.496094)"
              />
            </clipPath>
          </defs>
        </svg>
      ),
      title: "Кастомизация и брендирование",
      description:
        "Оформите интерфейс в фирменном стиле вашей компании. Гибкие настройки позволят сделать систему максимально соответствующей вашим задачам.",
    },
  ];

  const isMobile = useMediaQuery("(max-width: 768px)");

  return (
    <section id="deployment">
      <div className="max-w-base mx-auto space-y-8 lg:space-y-10 px-3.5">
        <h2>Будет полезно знать</h2>

        {/* Blocks */}
        <div
          className={
            isMobile ? "space-y-4" : "grid md:grid-cols-3 gap-5 lg:gap-6"
          }
        >
          {features.map((feature, index) => (
            <FeatureBlock
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
            />
          ))}
        </div>

        <div className="flex-center">
          <Button variant="gradient" className="w-full sm:w-auto">
            Попробовать бесплатно
          </Button>
        </div>
      </div>
    </section>
  );
}
