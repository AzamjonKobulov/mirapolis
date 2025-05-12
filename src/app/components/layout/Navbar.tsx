import Link from "next/link";
import Image from "next/image";
import Button from "../shared/Button";

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

export default function Navbar() {
  return (
    <header className="fixed lg:top-6 left-1/2 z-50 -translate-x-1/2 lg:max-w-base w-full lg:px-3.5">
      <nav className="flex-between bg-white/80 backdrop-blur-2xl border border-white/65 lg:rounded-xl shadow-feature py-2 px-3.5 lg:px-5">
        {/* Logo */}
        <div>
          <Image
            src="./assets/svgs/logo.svg"
            alt="Logo"
            width={201}
            height={28}
          />
        </div>

        {/* Links */}
        <ul className="hidden lg:flex items-center gap-3 text-xs xl:text-sm text-brand-dark-blue-100">
          {links.map((link) => (
            <li key={link.label}>
              <Link href={link.href} className="hover:opacity-50 smooth-200">
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Phone & Button */}
        <div className="hidden lg:flex items-center gap-4">
          <a
            href="tel:+7 (495) 646-04-04"
            className="text-sm xl:text-base text-brand-dark-blue-200 hover:opacity-50 smooth-200"
          >
            +7 (495) 646-04-04
          </a>

          <Button variant="gradient" className="!text-base !leading-5 !py-3">
            Попробовать <span className="hidden xl:inline">бесплатно</span>
          </Button>
        </div>

        {/* Mob Menu Btn */}
        <button className="lg:hidden group hover:bg-brand-dark-blue smooth-200 cursor-pointer rounded-lg p-1">
          <svg
            width="25"
            height="24"
            viewBox="0 0 25 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="fill-brand-dark-blue/60 group-hover:fill-white smooth-200"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M4.25 18C4.25 17.8011 4.32902 17.6103 4.46967 17.4697C4.61032 17.329 4.80109 17.25 5 17.25H20C20.1989 17.25 20.3897 17.329 20.5303 17.4697C20.671 17.6103 20.75 17.8011 20.75 18C20.75 18.1989 20.671 18.3897 20.5303 18.5303C20.3897 18.671 20.1989 18.75 20 18.75H5C4.80109 18.75 4.61032 18.671 4.46967 18.5303C4.32902 18.3897 4.25 18.1989 4.25 18ZM4.25 12C4.25 11.8011 4.32902 11.6103 4.46967 11.4697C4.61032 11.329 4.80109 11.25 5 11.25H20C20.1989 11.25 20.3897 11.329 20.5303 11.4697C20.671 11.6103 20.75 11.8011 20.75 12C20.75 12.1989 20.671 12.3897 20.5303 12.5303C20.3897 12.671 20.1989 12.75 20 12.75H5C4.80109 12.75 4.61032 12.671 4.46967 12.5303C4.32902 12.3897 4.25 12.1989 4.25 12ZM4.25 6C4.25 5.80109 4.32902 5.61032 4.46967 5.46967C4.61032 5.32902 4.80109 5.25 5 5.25H20C20.1989 5.25 20.3897 5.32902 20.5303 5.46967C20.671 5.61032 20.75 5.80109 20.75 6C20.75 6.19891 20.671 6.38968 20.5303 6.53033C20.3897 6.67098 20.1989 6.75 20 6.75H5C4.80109 6.75 4.61032 6.67098 4.46967 6.53033C4.32902 6.38968 4.25 6.19891 4.25 6Z"
            />
          </svg>
        </button>
      </nav>
    </header>
  );
}
