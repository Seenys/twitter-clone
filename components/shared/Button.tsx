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
    <button className=" " onClick={onClick}>
      {label}
    </button>
  );
};

export default Button;
