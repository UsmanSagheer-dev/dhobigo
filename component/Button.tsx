import React from "react";

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  title?: React.ReactNode;
  icon?: React.ReactNode;
  variant?: "solid" | "text";
};

export default function Button({
  title,
  icon,
  className = "",
  children,
  variant = "solid",
  ...rest
}: ButtonProps) {
  const label = title ?? children;

  const baseSolid =
    "inline-flex items-center justify-center py-2 px-4 rounded-lg bg-(--primary) text-(--foreground) cursor-pointer";
  const baseText =
    "inline-flex items-center justify-center p-0 bg-transparent rounded-none cursor-pointer";

  return (
    <button
      {...rest}
      className={`${variant === "text" ? baseText : baseSolid} ${className}` }
    >
      {icon && <span className="mr-2 flex items-center">{icon}</span>}
      {label && <span className="whitespace-nowrap">{label}</span>}
    </button>
  );
}
