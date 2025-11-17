import React, { useState } from "react";
import { Eye, EyeOff } from "lucide-react";
import clsx from "clsx";
import { CustomInputProps } from "@/types/types";

const CustomInput: React.FC<CustomInputProps> = ({
  label,
  title,
  icon,
  showPasswordToggle = false,
  inputProps,
  className,
}) => {
  const [showPassword, setShowPassword] = useState(false);

  const togglePassword = () => setShowPassword(!showPassword);

  const inputType = showPasswordToggle
    ? showPassword
      ? "text"
      : "password"
    : inputProps?.type || "text";

  return (
    <div className={clsx("w-full", className)}>
      {label && (
        <label className="block text-sm font-medium text-gray-700 mb-2">
          {label}
        </label>
      )}

      <div className="relative">
        {icon && (
          <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-gray-500">
            {icon}
          </div>
        )}

        <input
          {...inputProps}
          type={inputType}
          title={title}
          className={clsx(
            "w-full h-12 px-4 pr-12 rounded-lg border border-gray-300  text-black",
            "placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all",
            icon ? "pl-12" : "pl-4",
            inputProps?.className
          )}
        />

        {showPasswordToggle && (
          <button
            type="button"
            onClick={togglePassword}
            className="absolute inset-y-0 right-0 pr-4 flex items-center text-gray-500 hover:text-gray-700 transition cursor-pointer"
          >
            {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
          </button>
        )}
      </div>
    </div>
  );
};

export default CustomInput;
