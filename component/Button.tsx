import React from "react";

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  title?: React.ReactNode;
  icon?: React.ReactNode;
};

export default function Button({
  title,
  icon,
  className = "",
  children,
  ...rest
}: ButtonProps) {
  const label = title ?? children;

  return (
    <button
      {...rest}
      className={`inline-flex items-center justify-center py-2 px-4 rounded-lg bg-(--primary) text-(--foreground) cursor-pointer ${className}`}
    >
      {icon && <span className="mr-2 flex items-center">{icon}</span>}
      {label && <span className="whitespace-nowrap ">{label}</span>}
    </button>
  );
}
