import type { ButtonHTMLAttributes, FC } from "react";

import cls from "classnames";

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary";
}

const Button: FC<Props> = ({ variant = "primary", className, ...props }) => {
  return (
    <button
      data-variant={variant}
      className={cls(
        "px-4 py-2 rounded-md",
        variant === "primary" && "bg-blue-500 text-white",
        variant === "secondary" && "bg-gray-300 text-gray-800",
        className,
      )}
      {...props}
    />
  );
};

export default Button;
