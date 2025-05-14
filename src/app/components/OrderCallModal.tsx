"use client";

import { useModalsContext } from "../contexts/ModalsContext";
import ContactForm from "./shared/ContactForm";

export default function OrderCallModal() {
  const { toggleOrderCallModal } = useModalsContext();

  return (
    <div className="fixed inset-0 z-50 bg-brand-dark-blue/40 flex-center xs:overflow-auto xs:pb-20 xs:pt-96 2xl:pt-20">
      <ContactForm
        onClose={toggleOrderCallModal}
        showClose={true}
        showUserCountSelector={false}
        modalTitle="Заказать звонок"
        modalDescription={
          <p className="leading-5.5 lg:text-xl/7 font-light">
            Ответим на Ваши вопросы, обсудим задачи, поделимся опытом, проведем
            демонстрацию и поможем сделать оптимальный выбор
          </p>
        }
      />
    </div>
  );
}
