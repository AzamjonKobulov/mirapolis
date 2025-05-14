"use client";

import {
  createContext,
  useContext,
  useState,
  ReactNode,
  Dispatch,
  SetStateAction,
} from "react";

type ModalsContextType = {
  openOrderCallModal: boolean;
  openFreeTrialModal: boolean;
  openSuccessModal: boolean;
  setOpenOrderCallModal: Dispatch<SetStateAction<boolean>>;
  setOpenFreeTrialModal: Dispatch<SetStateAction<boolean>>;
  setOpenSuccessModal: Dispatch<SetStateAction<boolean>>;
  toggleOrderCallModal: () => void;
  toggleFreeTrialModal: () => void;
  toggleSuccessModal: () => void;
};

const ModalsContext = createContext<ModalsContextType | undefined>(undefined);

export const ModalsContextProvider = ({
  children,
}: {
  children: ReactNode;
}) => {
  const [openOrderCallModal, setOpenOrderCallModal] = useState(false);
  const [openFreeTrialModal, setOpenFreeTrialModal] = useState(false);
  const [openSuccessModal, setOpenSuccessModal] = useState(false);

  function toggleOrderCallModal() {
    setOpenOrderCallModal((open) => !open);
    document.body.classList.toggle("overflow-hidden");
  }

  function toggleFreeTrialModal() {
    setOpenFreeTrialModal((open) => !open);
    document.body.classList.toggle("overflow-hidden");
  }

  function toggleSuccessModal() {
    setOpenSuccessModal((open) => !open);
    document.body.classList.toggle("overflow-hidden");
  }

  return (
    <ModalsContext.Provider
      value={{
        openOrderCallModal,
        openFreeTrialModal,
        openSuccessModal,
        setOpenOrderCallModal,
        setOpenFreeTrialModal,
        setOpenSuccessModal,
        toggleOrderCallModal,
        toggleFreeTrialModal,
        toggleSuccessModal,
      }}
    >
      {children}
    </ModalsContext.Provider>
  );
};

// Custom hook for easier consumption
export const useModalsContext = () => {
  const context = useContext(ModalsContext);
  if (!context) {
    throw new Error(
      "useModalsContext must be used within a ModalsContextProvider"
    );
  }
  return context;
};
