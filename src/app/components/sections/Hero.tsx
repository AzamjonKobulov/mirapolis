"use client";

import Image from "next/image";
import Button from "../shared/Button";
import { useModalsContext } from "@/app/contexts/ModalsContext";

export default function Hero() {
  const { toggleFreeTrialModal, toggleOrderCallModal } = useModalsContext();

  return (
    <section id="hero" className="p-3.5 xl:p-8">
      <div className="lg:max-h-[760px] mx-auto relative xs:!pb-20 lg:pb-32 mt-12 sm:mt-14 lg:mt-20 py-7 md:pt-10">
        <div className="size-full absolute inset-0 rounded-2xl xs:rounded-3xl overflow-hidden">
          <div className="relative size-full">
            <Image
              src="/assets/images/bg-hero.png"
              alt="Bg Image"
              fill
              className="absolute inset-0 size-full hidden xs:block"
            />

            {/* Mobile */}
            <Image
              src="/assets/images/bg-hero-mobile.png"
              alt="Bg Image"
              fill
              className="absolute inset-0 size-full xs:hidden"
            />
          </div>
        </div>

        <div className="max-w-base mx-auto relative z-10 px-3.5">
          {/* Texts */}
          <div className="max-w-[800px] mx-auto text-center text-white">
            <h1 className="text-[2.5rem]/12 sm:text-6xl/15 lg:text-[5rem]/20 tracking-tighter">
              Единая экосистема HR-сервисов
            </h1>
            <h3 className="opacity-80 mt-3">Забота об HR в каждом клике</h3>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-1 sm:gap-3 text-[13px]/4 lg:text-lg/5 tracking-tight mt-7">
              <div className="flex items-center gap-1">
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="size-4 lg:size-auto"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M10 20C9.98 14.4839 5.51055 10.0185 0 10.0185C5.52284 10.0185 10 5.53303 10 0C10.0199 5.51606 14.4894 9.98147 20 9.98147C14.4771 9.98147 10 14.467 10 20Z"
                    fill="white"
                  />
                </svg>
                1500+ клиентов
              </div>
              <div className="flex items-center gap-1">
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="size-4 lg:size-auto"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M10 20C9.98 14.4839 5.51055 10.0185 0 10.0185C5.52284 10.0185 10 5.53303 10 0C10.0199 5.51606 14.4894 9.98147 20 9.98147C14.4771 9.98147 10 14.467 10 20Z"
                    fill="white"
                  />
                </svg>
                AI-навигация
              </div>
              <div className="flex items-center gap-1">
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="size-4 lg:size-auto"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M10 20C9.98 14.4839 5.51055 10.0185 0 10.0185C5.52284 10.0185 10 5.53303 10 0C10.0199 5.51606 14.4894 9.98147 20 9.98147C14.4771 9.98147 10 14.467 10 20Z"
                    fill="white"
                  />
                </svg>
                Доступно на мобильном
              </div>
              <div className="flex items-center gap-1">
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="size-4 lg:size-auto"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M10 20C9.98 14.4839 5.51055 10.0185 0 10.0185C5.52284 10.0185 10 5.53303 10 0C10.0199 5.51606 14.4894 9.98147 20 9.98147C14.4771 9.98147 10 14.467 10 20Z"
                    fill="white"
                  />
                </svg>
                Соответствует 152-ФЗ
              </div>
            </div>
            {/* Buttons */}
            <div className="flex-center flex-col xs:flex-row gap-3.5 mt-7">
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
          <div className="hidden xs:block max-w-base mx-auto relative -bottom-10 lg:px-3.5">
            {/* Banner Image */}
            <div className="md:max-w-xl lg:max-w-3xl xl:max-w-[920px] lg:h-[489px] mx-auto border border-white/45 bg-white/40 backdrop-blur-[32px] rounded-xl lg:rounded-[20px] p-1 lg:p-2">
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
          </div>
        </div>
      </div>
    </section>
  );
}
