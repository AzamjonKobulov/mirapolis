"use client";

import Image from "next/image";
import Button from "../shared/Button";
import { useModalsContext } from "@/app/contexts/ModalsContext";

export default function Hero() {
  const { toggleFreeTrialModal, toggleOrderCallModal } = useModalsContext();

  return (
    <section
      id="hero"
      className="bg-hero lg:max-h-[760px] rounded-b-[2.5rem] lg:rounded-b-[4rem] !pb-20 lg:pb-32 pt-28 sm:pt-32"
    >
      <div className="max-w-base mx-auto px-3.5">
        {/* Texts */}
        <div className="max-w-[800px] mx-auto text-center text-white">
          <h1 className="text-5xl/[48px] sm:text-6xl/[60px] lg:text-[80px]/[80px]">
            Единая экосистема HR-сервисов
          </h1>
          <h3 className="opacity-80 mt-3">Забота об HR в каждом клике</h3>
          {/* Buttons */}
          <div className="flex-center flex-col xs:flex-row gap-3.5 mt-8">
            <Button
              onClick={toggleFreeTrialModal}
              variant="white"
              className="w-full sm:w-auto"
            >
              Попробовать бесплатно
            </Button>
            <Button
              onClick={toggleOrderCallModal}
              variant="outline"
              className="w-full sm:w-auto"
            >
              Заказать консультацию
            </Button>
          </div>
        </div>

        {/* Banner & Features */}
        <div className="max-w-base mx-auto relative -bottom-10 lg:px-3.5">
          {/* Banner Image */}
          <div className="aspect-video lg:aspect-auto md:max-w-xl lg:max-w-3xl xl:max-w-[920px] lg:h-[400px] mx-auto border border-white/45 bg-white/40 backdrop-blur-[32px] rounded-xl lg:rounded-[20px] p-1 sm:p-3 lg:p-4">
            <div className="size-full shadow-banner rounded-[10.5008px] lg:rounded-[14px] overflow-hidden">
              <Image
                src="/assets/images/banner.png"
                alt="Application"
                width={2560}
                height={1272}
                className="size-full lg:object-cover object-top"
              />
            </div>
          </div>

          {/* Features */}
          <div className="lg:absolute inset-0 lg:size-full grid xs:grid-cols-2 -mt-3 xs:-mt-9 lg:mt-0 xs:pt-5 lg:pt-0 px-2">
            {/* Feature 1 */}
            <div className="md:absolute top-4 left-0 md:max-w-[125px] sm:h-20 md:h-auto bg-white/80 lg:bg-white/70 backdrop-blur-[32px] rounded-2xl lg:rounded-xl shadow-feature -mt-1.5 lg:-mt-0">
              <div className="size-full flex md:flex-col items-center border border-white/75   rounded-2xl lg:rounded-xl overflow-hidden">
                <Image
                  src="/assets/images/feature-1.png"
                  alt="Image"
                  width={550}
                  height={420}
                  className="size-[60px] sm:size-20 md:size-auto object-cover rounded-[10px] lg:rounded-xl"
                />

                <div className="flex md:flex-col gap-1 lg:space-y-1 text-xs lg:text-sm md:text-center leading-3 lg:leading-4 px-3.5 lg:px-2 py-2">
                  <p className="font-bold text-transparent bg-clip-text bg-btn">
                    Более 1500
                  </p>
                  <p>довольных клиентов</p>
                </div>
              </div>
            </div>
            {/* Feature 2 */}
            <div className="order-4 xs:order-2 md:absolute -bottom-24 lg:-bottom-10 left-20 md:max-w-32 lg:max-w-[161px] sm:h-20 md:h-auto bg-white/80 lg:bg-white/70 backdrop-blur-[32px] rounded-2xl lg:rounded-xl shadow-feature -mt-1.5 lg:-mt-0">
              <div className="size-full flex md:flex-col items-center border border-white/75 rounded-2xl lg:rounded-xl overflow-hidden">
                <Image
                  src="/assets/images/feature-2.png"
                  alt="Image"
                  width={550}
                  height={420}
                  className="size-[60px] sm:size-20 md:w-32 md:h-28 lg:w-40 lg:h-[140px] object-cover rounded-[10px] lg:rounded-xl"
                />

                <div className="flex lg:flex-col gap-1 space-y-1 text-xs lg:text-sm md:text-center  leading-3 lg:leading-4 px-3.5 md:px-2 py-2">
                  <p>Защита персональных данных, соответствие 152-ФЗ</p>
                </div>
              </div>
            </div>
            {/* Feature 3 */}
            <div className="order-3 xs:order-2 md:absolute bottom-5 right-20 md:size-36 lg:size-[172px] sm:h-20 md:h-auto bg-white/80 lg:bg-white/70 backdrop-blur-[32px] rounded-2xl lg:rounded-xl shadow-feature -mt-1.5 lg:-mt-0">
              <div className="size-full flex md:flex-col items-center border border-white/75   rounded-2xl lg:rounded-xl overflow-hidden">
                <Image
                  src="/assets/images/feature-3.png"
                  alt="Image"
                  width={550}
                  height={420}
                  className="size-[60px] sm:size-20 md:w-[172px] md:h-[136px] object-cover rounded-[10px] lg:rounded-xl "
                />

                <div className="flex lg:flex-col gap-1 space-y-1 text-xs lg:text-base md:text-center  leading-3 lg:leading-4 px-3.5 lg:px-1 py-2">
                  <p>Умная AI-навигация</p>
                </div>
              </div>
            </div>
            {/* Feature 4 */}
            <div className="order-2 xs:order-4 md:absolute -top-20 right-0 md:size-[125px] sm:h-20 md:h-auto bg-white/80 lg:bg-white/70 backdrop-blur-[32px] rounded-2xl lg:rounded-xl shadow-feature -mt-1.5 lg:-mt-0">
              <div className="size-full flex md:flex-col items-center border border-white/75   rounded-2xl lg:rounded-xl overflow-hidden">
                <Image
                  src="/assets/images/feature-4.png"
                  alt="Image"
                  width={550}
                  height={420}
                  className="size-[60px] sm:size-20 md:size-[125px] object-cover rounded-[10px] lg:rounded-xl"
                />

                <div className="flex lg:flex-col gap-1 space-y-1 text-xs lg:text-sm md:text-center  leading-3 lg:leading-4 px-3.5 lg:px-1 py-2">
                  <p>Доступно с мобильного</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
