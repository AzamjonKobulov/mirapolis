"use client";

import { AnimatePresence } from "framer-motion";
import Choose from "./components/sections/Choose";
import Clients from "./components/sections/Clients";
import Deployment from "./components/sections/Deployment";
import Hero from "./components/sections/Hero";
import Integration from "./components/sections/Integration";
import Launch from "./components/sections/Launch";
import MobileApp from "./components/sections/MobileApp";
import Reliable from "./components/sections/Reliable";
import Stats from "./components/sections/Stats";
import SuccessStories from "./components/sections/SuccessStories";
import System from "./components/sections/System";
import Useful from "./components/sections/Useful";

import { useModalsContext } from "@/app/contexts/ModalsContext";
import FreeTrialModal from "./components/FreeTrialModal";
import OrderCallModal from "./components/OrderCallModal";
import SuccessModal from "./components/SuccessModal";

export default function Home() {
  const { openFreeTrialModal, openOrderCallModal, openSuccessModal } =
    useModalsContext();
  return (
    <>
      <Hero />
      <Clients />
      <Choose />
      <System />
      <Integration />
      <MobileApp />
      <Launch />
      <Reliable />
      <Deployment />
      <Useful />
      <Stats />
      <SuccessStories />

      {/* Free Trial Modal */}
      <AnimatePresence>
        {openFreeTrialModal && <FreeTrialModal />}
      </AnimatePresence>

      {/* Order A Call Modal */}
      <AnimatePresence>
        {openOrderCallModal && <OrderCallModal />}
      </AnimatePresence>

      {/* Success Modal */}
      <AnimatePresence>{openSuccessModal && <SuccessModal />}</AnimatePresence>
    </>
  );
}
