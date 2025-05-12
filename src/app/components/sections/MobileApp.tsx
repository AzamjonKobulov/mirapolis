import Image from "next/image";
import Button from "../shared/Button";

export default function MobileApp() {
  return (
    <section
      id="mobile-app"
      className="bg-mob-app relative lg:rounded-t-[4rem] pb-36 pt-28 lg:pt-32 lg:pb-48"
    >
      {/* Top Block */}
      <div className="lg:hidden h-8 absolute top-0 w-full z-10 bg-brand-dark-blue rounded-b-[35px]"></div>

      <div className="max-w-[948px] mx-auto flex-between flex-col lg:flex-row gap-8 lg:gap-12 px-3.5">
        {/* Left - Image */}
        <div className="max-w-[510px]">
          <Image
            src="/assets/images/phones.png"
            alt="phones"
            width={2040}
            height={2700}
          />
        </div>

        {/* Right - Texts */}
        <div className="max-w-120 lg:max-w-90 space-y-6">
          <div className="space-y-3 text-white">
            <h2 className="text-start">Мобильное приложение</h2>
            <h3>И мобильная адаптация</h3>
            <p className="opacity-90 font-light leading-5.5 lg:text-xl/7">
              Возможность работать со всеми необходимыми функциям и материалам
              системы из любой точки, дайте своим сотрудникам больше
              мобильности.
            </p>
          </div>
          <Button variant="white" className="w-full">
            Попробовать бесплатно
          </Button>
        </div>
      </div>
    </section>
  );
}
