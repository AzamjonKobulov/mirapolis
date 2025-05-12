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
      <Reliable />
      <Deployment />
      <Useful />
      <Stats />
      <SuccessStories />
    </>
  );
}
