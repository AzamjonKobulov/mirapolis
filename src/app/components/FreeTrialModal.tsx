"use client";

import { useModalsContext } from "../contexts/ModalsContext";
import ContactForm from "./shared/ContactForm";

export default function FreeTrialModal() {
  const { toggleFreeTrialModal } = useModalsContext();

  return (
    <div className="fixed inset-0 z-50 bg-brand-dark-blue/40 flex-center xs:overflow-auto xs:pb-20 xs:pt-96 2xl:pt-20">
      <ContactForm onClose={toggleFreeTrialModal} showClose={true} />
    </div>
  );
}
