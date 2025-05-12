import Image from "next/image";
import Button from "../shared/Button";

export default function Deployment() {
  return (
    <section id="deployment">
      <div className="max-w-base mx-auto space-y-8 lg:space-y-10 px-3.5">
        <h2>Варианты развертывания</h2>

        {/* Items */}
        <div className="grid sm:grid-cols-2 gap-8">
          {/* Item 1 */}
          <div className="flex flex-col xl:flex-row rounded-2xl overflow-hidden">
            <div className="xl:w-[300px]">
              <Image
                src="/assets/images/deployment-1.png"
                alt="Image"
                width={300}
                height={380}
                className="size-full object-cover"
              />
            </div>

            <div className="flex-1 space-y-4 bg-white px-3.5 py-5 sm:p-6">
              <h3>В облаке</h3>
              <p className="font-light leading-5.5 text-xl/7">
                Используйте Мираполис Таланты как сервис - простой, быстрый и
                удобный способ работы с системой, - мы полностью позаботимся о
                безопасности ваших данных и обеспечим доступность системы для
                всех ваших сотрудников.
              </p>
            </div>
          </div>

          {/* Item 2 */}
          <div className="flex flex-col xl:flex-row rounded-2xl overflow-hidden">
            <div className="xl:w-[300px]">
              <Image
                src="/assets/images/deployment-2.png"
                alt="Image"
                width={300}
                height={380}
                className="size-full object-cover"
              />
            </div>

            <div className="flex-1 space-y-4 bg-white px-3.5 py-5 sm:p-6">
              <h3>На сервере</h3>
              <p className="font-light leading-5.5 text-xl/7">
                Мираполис Таланты в «коробке» - это копия облачной версии
                Мираполис Таланты, с которой можно работать на своём сервере.
                Система включает в себя все необходимые сервисы для цифровизации
                HR-процессов.
              </p>
            </div>
          </div>
        </div>

        <div className="flex-center">
          <Button variant="gradient" className="w-full sm:w-auto">
            Перезвоните мне
          </Button>
        </div>
      </div>
    </section>
  );
}
