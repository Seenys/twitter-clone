import React from "react";

type ButtonProps = {
  label: string;
  secondary?: boolean;
  fullWidth?: boolean;
  large?: boolean;
  disabled?: boolean;
  outline?: boolean;
  onClick: () => void;
};

const Button: React.FC<ButtonProps> = ({
  label,
  secondary,
  fullWidth,
  large,
  disabled,
  outline,
  onClick,
}) => {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`
      disabled:opacity-70
      disabled:cursor-not-allowed
      rounded-full
      font-semibold
      hover:opacity-80
      transition
      border-2
      ${fullWidth ? "w-full" : "w-fit"}
      ${large ? "py-3 px-5 text-xl" : "py-2 px-4 text-md"}
      ${
        secondary
          ? "bg-white text-black border-black"
          : "bg-sky-500 text-white border-sky-500"
      }
      ${outline ? "bg-transparent text-white border-white" : ""}
      `}
    >
      {label}
    </button>
  );
};

export default Button;
