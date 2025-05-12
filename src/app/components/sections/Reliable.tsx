import Image from "next/image";

type Feature = {
  img: string;
  text: string;
};

const features: Feature[] = [
  {
    img: "/assets/images/reliable-1.svg",
    text: "Входит в группу компаний 1С",
  },
  {
    img: "/assets/images/reliable-2.svg",
    text: "В реестре российского ПО",
  },
  {
    img: "/assets/images/reliable-3.svg",
    text: "Соответствует 152-ФЗ",
  },
  {
    img: "/assets/images/reliable-4.svg",
    text: "Хостинг только в надежных дата-центрах",
  },
  {
    img: "/assets/images/reliable-5.svg",
    text: "Регулярные проверки системы на информационную безопасность",
  },
];

export default function Reliable() {
  return (
    <section id="reliable">
      <div
        className="max-w-base mx-auto space-y-8 lg:space-y-10 py-28 lg:py-32
       px-3.5"
      >
        <h2>Надежность и безопасность</h2>

        <div className="bg-reliable grid xs:grid-cols-5 divide-y xs:divide-y-0 xs:divide-x divide-white/10 rounded-[17.5px] lg:rounded-[20px] xs:py-6 px-4">
          {features.map((f, idx) => (
            <div
              key={idx}
              className="flex flex-col items-center space-y-3 text-center text-white text-sm/4 py-5 xs:py-0"
            >
              <Image
                src={f.img}
                alt={f.text}
                width={64}
                height={64}
                className="size-auto"
              />
              <p>{f.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
