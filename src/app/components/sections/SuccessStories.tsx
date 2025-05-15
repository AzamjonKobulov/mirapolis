"use client";

import Image from "next/image";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

// import required modules
import { Navigation } from "swiper/modules";

type Stat = {
  title: string;
  description: string;
};

type Slide = {
  id: number;
  logo: string;
  title: string;
  review: string;
  clientImage: string;
  clientName: string;
  clientJob: string;
  stats: Stat[];
};

const clients: Slide[] = [
  {
    id: 1,
    logo: "/assets/images/success-client-logo-2.svg",
    title:
      "Запустили обучение продажам для 14 000 сотрудников и партнеров на Мираполис Таланты и очень довольны работой!",
    review:
      "Первоначальные требования к системе мы сформулировали самостоятельно. А команда Mirapolis помогла нам лучше понять, как можно решить наши задачи при помощи системы. И ежедневно помогает нам в решении новых задач и интересных нестандартных кейсов. ",
    clientImage: "/assets/images/client-avatar-2.jpg",
    clientName: "Елена Слуцкая",
    clientJob: "руководитель отдела обучения партнерской сети",
    stats: [
      {
        title: "С 1 000 до 14 000",
        description: "Увеличилось количество обученных",
      },
      {
        title: "С 2 раза",
        description: "Сократился срок адаптации новичков",
      },
      {
        title: "С 20 до 95 % ",
        description: "Вырослка “доходность” курсов",
      },
      {
        title: "До 90%",
        description: "Выросла популярность курсов",
      },
    ],
  },
  {
    id: 2,
    logo: "/assets/images/success-client-logo-3.svg",
    title:
      "«Орматек» автоматизировал адаптацию и перевел в онлайн обучение сотрудников 600+ магазинов по всей России",
    review:
      "За последние полтора года произошел качественный скачок в обучении. С помощью встроенных инструментов Mirapolis нам удалось структурировать не только адаптационное обучение, но и обучение сотрудников, давно работающих в компании.",
    clientImage: "/assets/images/client-avatar-3.jpg",
    clientName: "Юлия Шкляева",
    clientJob: "руководитель отдела обучения",
    stats: [
      {
        title: "600+ торговых точек",
        description: "переведены на дистанционное обучение.",
      },
      {
        title: "1500+ сотрудников сети",
        description: "переведены на адаптацию на новой платформе.",
      },
      {
        title: "Единое окно",
        description:
          "Система стала единым окном для управления всеми процессами обучения.",
      },
      {
        title: "Единый стандарт",
        description:
          "Система позволила стандартизировать обучение во всех филиалах.",
      },
    ],
  },
  {
    id: 3,
    logo: "/assets/images/success-client-logo-4.svg",
    title:
      "Курс на профессионализм с microlearning: как устроено обучение в «Эвалар»",
    review:
      "Новый подход к обучению помог нам не упустить прибыль. Мы и дальше будем его развивать и делать его эффективнее, чтобы сотрудники могли улучшать свой и наш результат. На ближайшее будущее мы ставим себе задачу сделать обучение еще более гибким, используя возможности системы Mirapolis.",
    clientImage: "/assets/images/client-avatar-4.jpg",
    clientName: "Ирина Симонова",
    clientJob: "руководитель корпоративного учебного центра «Эвалар» в Москве",
    stats: [
      {
        title: "80 000 человек",
        description: "прошли обучение через систему.",
      },
      {
        title: "В 2 раза",
        description: "выросло количество обучающихся сотрудников.",
      },
      {
        title: "100% в онлайн",
        description: "переведено продуктовое обучение",
      },
      {
        title: "Единый стандарт",
        description:
          "Систем позволила стандартизировать обучение во всей сети.",
      },
    ],
  },
];

export default function SuccessStories() {
  return (
    <section id="success-stories" className="lg:space-y-10">
      <div
        className="max-w-base mx-auto space-y-8
       px-3.5"
      >
        <h2>Истории успеха наших клиентов</h2>

        {/* Slides */}
        <Swiper
          navigation={{ nextEl: ".next", prevEl: ".prev" }}
          loop={true}
          modules={[Navigation]}
          className="mySwiper"
        >
          {clients.map((client) => (
            <SwiperSlide key={client.id}>
              <div className="flex flex-col lg:flex-row items-stretch">
                {/* Left - Client's Review */}
                <div className="lg:w-1/2 xl:w-177 relative z-10 bg-brand-gray px-3.5 py-5 sm:p-8 rounded-2xl sm:rounded-[1.25rem]">
                  {/* Company */}
                  <div className="space-y-3.5 sm:space-y-6 sm:border-b border-brand-dark-blue/10 sm:pb-6">
                    {/* Clien't Logo */}
                    <div className="w-32">
                      <Image
                        src={client.logo}
                        alt={client.title}
                        width={320}
                        height={200}
                        className="w-full"
                      />
                    </div>

                    <h3 className="text-2xl/7 sm:text-[32px]/9">
                      {client.title}
                    </h3>
                  </div>

                  {/* Client's Review */}
                  <div className="space-y-3.5 sm:space-y-6 pt-3.5 sm:pt-6">
                    <svg
                      width="28"
                      height="21"
                      viewBox="0 0 28 21"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="shrink-0 hidden sm:block"
                    >
                      <path
                        d="M0 20.4961V12.9872C0 9.42848 0.873079 6.61709 2.61924 4.55303C4.38999 2.48898 6.96004 1.13666 10.3294 0.496094V4.19716C7.82082 4.95635 6.13614 6.26122 5.27536 8.11175C4.83267 9.08447 4.64822 10.0928 4.722 11.1367H10.5138V20.4961H0ZM27.8155 4.19716C25.3316 4.93263 23.6592 6.26122 22.7984 8.18293C22.3065 9.20309 22.1098 10.1877 22.2082 11.1367H28V20.4961H17.4862V12.9872C17.4862 9.38103 18.3838 6.55778 20.1792 4.51745C21.9991 2.47711 24.5446 1.13666 27.8155 0.496094V4.19716Z"
                        fill="#282828"
                      />
                    </svg>

                    {/* Review */}
                    <p className="font-light leading-5.5 sm:text-xl/6">
                      {client.review}
                    </p>

                    {/* Client's Personal Info */}
                    <div className="flex items-center gap-3 pt-2.5 sm:pt-0">
                      <div className="size-15 shrink rounded-full overflow-hidden">
                        <Image
                          src={client.clientImage}
                          alt={client.clientName}
                          width={425}
                          height={446}
                          className="size-full object-cover"
                        />
                      </div>
                      <div className="space-y-1 text-brand-dark-blue">
                        <p className="font-bold text-sm/6 sm:text-xl/6">
                          {client.clientName}
                        </p>
                        <p className="font-light text-sm/6 sm:text-xl/6">
                          {client.clientJob}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Right - Client's Stats */}
                <div className="bg-success-story flex-1 space-y-4 font-light text-white divide-y divide-white/15 rounded-b-2xl sm:rounded-r-[1.25rem] -mt-5 lg:mt-0 lg:-ml-8 px-3.5 pb-5 pt-10 sm:pt-12 lg:pt-8 lg:pl-16 sm:px-8 sm:py-8">
                  {client.stats.map((stat) => (
                    <div
                      key={stat.title}
                      className="space-y-1.5 sm:space-y-3 pb-4"
                    >
                      <p className="font-normal sm:font-light text-xl/6 sm:text-[40px]/10">
                        {stat.title}
                      </p>
                      <p className="leading-5.5 sm:text-xl/7">
                        {stat.description}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Navigation Buttons */}
        <div className="flex-center gap-8">
          {/* Next */}
          <button
            className="prev size-14 shrink flex-center bg-white rounded-2xl hover:opacity-80 smooth-200 cursor-pointer"
            aria-label="Previous Slide"
          >
            <svg
              width="24"
              height="25"
              viewBox="0 0 24 25"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M18.0004 12.497C18.0004 12.696 17.9213 12.8867 17.7807 13.0274C17.64 13.168 17.4493 13.247 17.2504 13.247H8.56086L11.7814 16.466C11.8511 16.5358 11.9064 16.6186 11.9441 16.7097C11.9819 16.8008 12.0013 16.8984 12.0013 16.997C12.0013 17.0957 11.9819 17.1933 11.9441 17.2844C11.9064 17.3755 11.8511 17.4583 11.7814 17.528C11.7116 17.5978 11.6288 17.6531 11.5377 17.6908C11.4466 17.7286 11.349 17.748 11.2504 17.748C11.1517 17.748 11.0541 17.7286 10.963 17.6908C10.8719 17.6531 10.7891 17.5978 10.7194 17.528L6.21936 13.028C6.14952 12.9584 6.0941 12.8756 6.0563 12.7845C6.01849 12.6934 5.99902 12.5957 5.99902 12.497C5.99902 12.3984 6.01849 12.3007 6.0563 12.2096C6.0941 12.1185 6.14952 12.0357 6.21936 11.966L10.7194 7.46604C10.8602 7.32521 11.0512 7.24609 11.2504 7.24609C11.4495 7.24609 11.6405 7.32521 11.7814 7.46604C11.9222 7.60687 12.0013 7.79788 12.0013 7.99704C12.0013 8.19621 11.9222 8.38721 11.7814 8.52804L8.56086 11.747H17.2504C17.4493 11.747 17.64 11.8261 17.7807 11.9667C17.9213 12.1074 18.0004 12.2981 18.0004 12.497Z"
                fill="#000F27"
              />
            </svg>
          </button>
          {/* Prev */}
          <button
            className="next size-14 shrink flex-center bg-white rounded-2xl hover:opacity-80 smooth-200 cursor-pointer"
            aria-label="Next Slide"
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M6 12.0009C6 11.802 6.07902 11.6113 6.21967 11.4706C6.36032 11.33 6.55109 11.2509 6.75 11.2509H15.4395L12.219 8.03195C12.0782 7.89112 11.9991 7.70011 11.9991 7.50095C11.9991 7.30178 12.0782 7.11078 12.219 6.96995C12.3598 6.82912 12.5508 6.75 12.75 6.75C12.9492 6.75 13.1402 6.82912 13.281 6.96995L17.781 11.4699C17.8508 11.5396 17.9063 11.6224 17.9441 11.7135C17.9819 11.8046 18.0013 11.9023 18.0013 12.0009C18.0013 12.0996 17.9819 12.1973 17.9441 12.2884C17.9063 12.3795 17.8508 12.4623 17.781 12.5319L13.281 17.0319C13.1402 17.1728 12.9492 17.2519 12.75 17.2519C12.5508 17.2519 12.3598 17.1728 12.219 17.0319C12.0782 16.8911 11.9991 16.7001 11.9991 16.5009C11.9991 16.3018 12.0782 16.1108 12.219 15.9699L15.4395 12.7509H6.75C6.55109 12.7509 6.36032 12.6719 6.21967 12.5313C6.07902 12.3906 6 12.1999 6 12.0009Z"
                fill="#000F27"
              />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
}
