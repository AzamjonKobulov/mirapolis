"use client";

import { FC, ButtonHTMLAttributes } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "gradient" | "white" | "outline" | "tab";
  className?: string;
  children: React.ReactNode;
  onClick?: () => void;
}

const Button: FC<ButtonProps> = ({
  variant = "",
  children,
  className = "",
  onClick,
  ...props
}) => {
  const variantStyle: Record<string, string> = {
    gradient:
      "bg-btn text-white leading-5 lg:leading-6 lg:text-xl hover:opacity-70 ",
    white:
      "bg-white text-brand-dark-blue leading-5 lg:leading-6 lg:text-xl hover:opacity-70",
    outline:
      "border border-white/60 text-white leading-5 lg:leading-6 lg:text-xl hover:bg-white hover:text-brand-dark-blue",
    tab: "group flex items-center gap-2 backdrop-blur-[60px] border border-white/12 shadow-tab text-white text-sm lg:text-base leading-4 lg:leading-5 hover:bg-white hover:text-brand-dark-blue hover:border-white !rounded-full !p-3",
  };

  const classes = `${variantStyle[variant]}  ${className}`;

  return (
    <button
      className={`${classes} cursor-pointer rounded-xl smooth-200 py-3.5 px-5 lg:py-4 lg:px-6`}
      {...props}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
