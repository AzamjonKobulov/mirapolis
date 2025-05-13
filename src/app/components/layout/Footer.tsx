"use client";

import Image from "next/image";
import Link from "next/link";

import ContactModal from "../shared/ContactModal";

type NavLink = {
  label: string;
  href: string;
};

const links: NavLink[] = [
  {
    label: "Возможности",
    href: "#choose",
  },
  {
    label: "Интеграции",
    href: "#integratioin",
  },
  {
    label: "Мобильное приложение",
    href: "#mobile-app",
  },
  {
    label: "Запуск",
    href: "#launch",
  },
  {
    label: "Кейсы клиентов",
    href: "#success",
  },
];

export default function Footer() {
  return (
    <footer className="bg-brand-dark-gray text-white/60 rounded-t-[2.25rem] lg:rounded-t-[4rem] py-14 lg:py-16">
      <div className="max-w-base mx-auto flex flex-col sm:flex-row items-stretch justify-between gap-8 px-3.5">
        {/* Left - Logo Contacts and Links */}
        <div className="flex flex-col lg:flex-row items-center xs:items-start gap-8 text-center xs:text-start">
          {/*  Logo & Contacts */}
          <div className="h-full flex flex-col lg:justify-between gap-7 mb-auto">
            {/* Logo */}
            <div>
              <Image
                src="./assets/svgs/logo-footer.svg"
                alt="Logo"
                width={201}
                height={28}
              />
            </div>

            {/* Contacts */}
            <div className="space-y-3.5 xs:space-y-8">
              <ul>
                <li>
                  <a
                    href="mailto:info@mirapolis.ru"
                    className="hover:text-brand-purple smooth-200"
                  >
                    info@mirapolis.ru
                  </a>
                </li>
                <li>
                  <a
                    href="tel:+7 (495) 646-04-04 "
                    className="hover:text-brand-purple smooth-200"
                  >
                    +7 (495) 646-04-04
                  </a>
                </li>
              </ul>

              {/* Socials */}
              <div className="flex items-center justify-center xs:justify-start gap-3">
                <a
                  href="#"
                  className="size-12 shrink flex-center bg-white/15 rounded-lg hover:bg-brand-purple smooth-200"
                >
                  <svg
                    width="24"
                    height="25"
                    viewBox="0 0 24 25"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M0 2.21509C0 1.26559 0.789 0.496094 1.7625 0.496094H22.2375C23.211 0.496094 24 1.26559 24 2.21509V22.7771C24 23.7266 23.211 24.4961 22.2375 24.4961H1.7625C0.789 24.4961 0 23.7266 0 22.7771V2.21509ZM7.4145 20.5871V9.74959H3.813V20.5871H7.4145ZM5.6145 8.26909C6.87 8.26909 7.6515 7.43809 7.6515 6.39709C7.629 5.33359 6.8715 4.52509 5.6385 4.52509C4.4055 4.52509 3.6 5.33509 3.6 6.39709C3.6 7.43809 4.3815 8.26909 5.5905 8.26909H5.6145ZM12.9765 20.5871V14.5346C12.9765 14.2106 13.0005 13.8866 13.0965 13.6556C13.356 13.0091 13.9485 12.3386 14.9445 12.3386C16.248 12.3386 16.7685 13.3316 16.7685 14.7896V20.5871H20.37V14.3711C20.37 11.0411 18.594 9.49309 16.224 9.49309C14.313 9.49309 13.4565 10.5431 12.9765 11.2826V11.3201H12.9525C12.9605 11.3076 12.9685 11.2951 12.9765 11.2826V9.74959H9.3765C9.4215 10.7666 9.3765 20.5871 9.3765 20.5871H12.9765Z"
                      fill="white"
                    />
                  </svg>
                </a>
                <a
                  href="#"
                  className="size-12 shrink flex-center bg-white/15 rounded-lg hover:bg-brand-purple smooth-200"
                >
                  <svg
                    width="24"
                    height="25"
                    viewBox="0 0 24 25"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M12.0765 3.49414H12.21C13.443 3.49864 19.6905 3.54364 21.375 3.99664C21.8842 4.13489 22.3483 4.40437 22.7207 4.77815C23.0932 5.15193 23.361 5.61692 23.4975 6.12664C23.649 6.69664 23.7555 7.45114 23.8275 8.22964L23.8425 8.38564L23.8755 8.77564L23.8875 8.93164C23.985 10.3026 23.997 11.5866 23.9985 11.8671V11.9796C23.997 12.2706 23.9835 13.6416 23.8755 15.0696L23.8635 15.2271L23.85 15.3831C23.775 16.2411 23.664 17.0931 23.4975 17.7201C23.3615 18.2301 23.0938 18.6953 22.7212 19.0691C22.3487 19.443 21.8844 19.7123 21.375 19.8501C19.635 20.3181 13.0215 20.3511 12.105 20.3526H11.892C11.4285 20.3526 9.5115 20.3436 7.5015 20.2746L7.2465 20.2656L7.116 20.2596L6.8595 20.2491L6.603 20.2386C4.938 20.1651 3.3525 20.0466 2.622 19.8486C2.11273 19.7109 1.6486 19.4418 1.27609 19.0683C0.903575 18.6947 0.63577 18.2298 0.4995 17.7201C0.333 17.0946 0.222 16.2411 0.147 15.3831L0.135 15.2256L0.123 15.0696C0.0489714 14.0532 0.0079498 13.0347 0 12.0156L0 11.8311C0.003 11.5086 0.015 10.3941 0.096 9.16414L0.1065 9.00964L0.111 8.93164L0.123 8.77564L0.156 8.38564L0.171 8.22964C0.243 7.45114 0.3495 6.69514 0.501 6.12664C0.63704 5.61671 0.904743 5.15151 1.27727 4.77766C1.6498 4.40382 2.11405 4.13448 2.6235 3.99664C3.354 3.80164 4.9395 3.68164 6.6045 3.60664L6.8595 3.59614L7.1175 3.58714L7.2465 3.58264L7.503 3.57214C8.93056 3.5262 10.3587 3.5007 11.787 3.49564H12.0765V3.49414ZM9.6 8.30914V15.5361L15.8355 11.9241L9.6 8.30914Z"
                      fill="white"
                    />
                  </svg>
                </a>
                <a
                  href="#"
                  className="size-12 shrink flex-center bg-white/15 rounded-lg hover:bg-brand-purple smooth-200"
                >
                  <svg
                    width="24"
                    height="25"
                    viewBox="0 0 24 25"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M7.539 22.9952C16.596 22.9952 21.5505 15.4907 21.5505 8.99418C21.5505 8.78418 21.5505 8.57118 21.5415 8.36118C22.5061 7.66291 23.3386 6.79841 24 5.80818C23.099 6.20546 22.1441 6.46729 21.1665 6.58518C22.1963 5.96964 22.9676 5.00113 23.337 3.85968C22.3695 4.43287 21.3105 4.83524 20.2065 5.04918C19.4643 4.25872 18.4821 3.73506 17.4121 3.55932C16.3421 3.38358 15.2441 3.56556 14.288 4.07709C13.3319 4.58861 12.5712 5.40112 12.1237 6.38877C11.6761 7.37642 11.5668 8.48408 11.8125 9.54018C9.85461 9.44201 7.93922 8.93338 6.19056 8.04729C4.4419 7.16121 2.89903 5.91745 1.662 4.39668C1.03401 5.4813 0.842361 6.76428 1.12597 7.98508C1.40958 9.20588 2.14718 10.273 3.189 10.9697C2.40831 10.9432 1.64478 10.7335 0.96 10.3577V10.4252C0.961346 11.5614 1.35496 12.6623 2.07431 13.5418C2.79366 14.4213 3.79462 15.0255 4.908 15.2522C4.48539 15.3686 4.04884 15.4266 3.6105 15.4247C3.30148 15.4256 2.99307 15.397 2.6895 15.3392C3.00418 16.3173 3.61691 17.1724 4.44187 17.7849C5.26683 18.3974 6.2627 18.7365 7.29 18.7547C5.54483 20.1254 3.3891 20.8688 1.17 20.8652C0.778981 20.8668 0.388235 20.8443 0 20.7977C2.25227 22.2336 4.86795 22.996 7.539 22.9952Z"
                      fill="white"
                    />
                  </svg>
                </a>
              </div>
            </div>
          </div>

          {/* Links */}
          <ul className="space-y-4 leading-5 xl:text-xl/6 mt-auto">
            {links.map((link) => (
              <li key={link.label}>
                <Link
                  href={link.href}
                  className="hover:text-brand-purple smooth-200"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Right - Form */}
        <ContactModal
          showClose={false}
          showUserCountSelector={false}
          showContactMethodSelector={false}
        />
      </div>
    </footer>
  );
}
