import Choose from "./components/sections/Choose";
import Clients from "./components/sections/Clients";
import Hero from "./components/sections/Hero";
import Integration from "./components/sections/Integration";
import Launch from "./components/sections/Launch";
import MobileApp from "./components/sections/MobileApp";
import System from "./components/sections/System";

export default function Home() {
  return (
    <>
      <Hero />
      <Clients />
      <Choose />
      <System />
      <Integration />
      <MobileApp />
      <Launch />
    </>
  );
}
