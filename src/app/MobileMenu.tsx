import Link from "next/link";
import { motion } from "framer-motion";

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
    href: "#integration",
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
    href: "#success-stories",
  },
];

export default function MobileMenu() {
  return (
    <motion.ul
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      exit={{ y: -20, opacity: 0 }}
      transition={{ duration: 0.3 }}
      className="lg:hidden absolute right-3.5 top-16 w-fit text-sm/4 text-center text-brand-dark-blue/80 bg-white/90 backdrop-blur-[32px] divide-y divide-brand-dark-blue/5 border border-white rounded-xl shadow-menu py-3.5"
    >
      {links.map((link) => (
        <li key={link.label} className="p-2.5">
          <Link href={link.href} className="hover:text-brand-purple smooth-200">
            {link.label}
          </Link>
        </li>
      ))}
      <li className="p-2.5">
        <a href="tel:+7 (495) 646-04-04" className="text-brand-dark-gray">
          +7 (495) 646-04-04
        </a>
      </li>
    </motion.ul>
  );
}
