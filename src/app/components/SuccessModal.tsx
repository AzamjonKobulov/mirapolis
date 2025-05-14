import Image from "next/image";
import { X } from "lucide-react";
import { useModalsContext } from "../contexts/ModalsContext";

export default function SuccessModal() {
  const { toggleSuccessModal } = useModalsContext();

  return (
    <div className="fixed inset-0 z-50 bg-brand-dark-blue/40 flex-center xs:overflow-auto xs:pb-20 xs:pt-96 2xl:pt-20 px-3.5">
      <div className="relative flex items-center gap-3 bg-brand-purple-light rounded-xl p-3">
        <Image
          src="/assets/images/success.png"
          alt="success image"
          width={52}
          height={52}
          className="rounded-lg"
        />

        <p className="leading-5 sm:text-xl/6 pr-3">
          Спасибо, ваша заявка принята! Менеджер свяжется с вами в ближайшее
          время
        </p>

        <button
          type="button"
          className="absolute top-2 right-2 text-brand-dark-blue hover:text-brand-red"
          onClick={toggleSuccessModal}
        >
          <X size={20} />
        </button>
      </div>
    </div>
  );
}
