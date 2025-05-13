"use client";

import { useState, useEffect } from "react";

interface OptionSelectorProps {
  label?: string;
  options: string[];
  value: string;
  onChange: (value: string) => void;
  fullWidthButtons?: boolean;
  responsive?: boolean;
}

export default function OptionSelector({
  label,
  options,
  value,
  onChange,
  fullWidthButtons = false,
  responsive = true,
}: OptionSelectorProps) {
  const [selected, setSelected] = useState<string>(value || options[0]);

  useEffect(() => {
    // Keep local state in sync with external value
    setSelected(value);
  }, [value]);

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>, opt: string) => {
    e.preventDefault();
    setSelected(opt);
    onChange(opt);
  };

  return (
    <div className="space-y-2">
      {label && <p className="leading-5">{label}</p>}
      <div
        className={`${
          responsive
            ? "flex flex-col xs:flex-row items-center"
            : "flex items-center"
        } bg-brand-dark-blue/[8%] rounded-lg text-sm/4 lg:text-base/5 p-1.5 lg:p-2`}
      >
        {options.map((opt) => (
          <button
            type="button"
            key={opt}
            className={`${fullWidthButtons ? "w-full xs:w-fit" : ""} ${
              opt === selected ? "bg-white shadow-select" : ""
            }
              rounded-lg hover:bg-white hover:shadow-select smooth-200 cursor-pointer p-2`}
            onClick={(e) => handleClick(e, opt)}
          >
            {opt}
          </button>
        ))}
      </div>
    </div>
  );
}
