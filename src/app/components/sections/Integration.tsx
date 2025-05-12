import Image from "next/image";
import Button from "../shared/Button";

export default function Integration() {
  return (
    <section id="integration" className="lg:rounded-b-0 pb-9 sm:pb-28 lg:pb-32">
      <div className="max-w-base mx-auto px-3.5">
        <h2>Интеграции</h2>

        {/* Content */}
        <div className="flex flex-col-reverse lg:flex-row xl:items-center justify-between gap-8 mt-8 lg:mt-10">
          {/* Left - Info Part */}
          <div className="integration-block lg:max-w-[535px] bg-white/5 text-white divide-y divide-white/10 border border-white/10 rounded-[17.5008px] lg:rounded-[20px] px-3.5 lg:p-3">
            {/* Top */}
            <div className="py-5 sm:py-6 sm:px-4">
              <h5 className="!text-[28px]/8">
                Интегрируемся с вашей рабочей средой
              </h5>
              <ul className="list-disc font-light text-xl leading-7 mt-4 pl-5">
                <li>
                  Кадровыми системами: 1С, БОСС-Кадровик, SAP, Парус, Галактика
                  и другими
                </li>
                <li>Корпоративными порталами</li>
                <li>Почтой</li>
                <li>Job-сайтами</li>
                <li>Календарями</li>
                <li>SMS-шлюзами</li>
                <li>
                  Единой авторизацией, LDAP, KeyLock, oAuth, авторизацией через
                  Bitrix24
                </li>
              </ul>
            </div>
            {/* Mid */}
            <div className="py-5 sm:py-6 sm:px-4">
              <h5 className="!text-[28px]/8">Индивидуальные интеграции</h5>
              <p className="max-w-96 font-light text-xl leading-7 mt-4">
                любой сложности для бесшовного взаимодействия другими системами
              </p>
            </div>
            {/* Bottom */}
            <div className="py-5 sm:py-6 sm:px-4">
              <h5 className="!text-[28px]/8">Индивидуальные интеграции </h5>
            </div>
          </div>

          {/* Right - Integration Logos */}
          <div className="lg:max-w-1/2 xl:max-w-[646px]">
            <Image
              src="/assets/images/integration.png"
              alt="Integration"
              width={2600}
              height={2200}
              className="xl:w-full hidden lg:block"
            />
            <Image
              src="/assets/images/integration-mobile.png"
              alt="Integration"
              width={1200}
              height={1000}
              className="w-full lg:hidden"
            />
          </div>
        </div>

        <Button
          variant="gradient"
          className="w-[276px] hidden lg:block mx-auto mt-10"
        >
          Перезвоните мне
        </Button>
      </div>
    </section>
  );
}
