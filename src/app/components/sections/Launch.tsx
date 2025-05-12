import Image from "next/image";
import Button from "../shared/Button";

export default function Launch() {
  return (
    <section
      id="launch"
      className="relative z-10 bg-white rounded-3xl lg:rounded-[4rem] -mt-10 lg:-mt-16 py-8 sm:py-28 lg:py-32"
    >
      <div className="max-w-base mx-auto flex-between flex-col lg:flex-row gap-10 px-3.5">
        {/* Left - Image */}
        <div className="sm:max-w-[536px]">
          <Image
            src="/assets/images/launch.png"
            alt="Image"
            width={2120}
            height={2056}
          />
        </div>

        {/* Right - Texts */}
        <div className="max-w-120 lg:max-w-160 space-y-6">
          <div className="space-y-3">
            <h2 className="text-start text-brand-dark-blue">Запуск под ключ</h2>
            <h3 className="text-brand-purple">
              Без привлечения IT-специалистов
            </h3>
            <p className="font-light leading-[22px] lg:text-xl/7">
              Мы возьмем на себе всю головную боль на этапе запуска системы,
              поможем с настройкой под ваши процессы и началом работы; готовые
              сценарии работы позволят вам запуститься в короткие сроки без
              привлечения своих ИТ-специалистов.
            </p>
          </div>
          <Button variant="gradient" className="w-full sm:w-[276px]">
            Перезвоните мне
          </Button>
        </div>
      </div>
    </section>
  );
}
