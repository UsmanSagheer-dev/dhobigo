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
            "w-full h-12 px-4 pr-12 rounded-lg border border-gray-300 bg-white text-black",
            "focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all",
            "[&:-webkit-autofill]:!bg-white [&:-webkit-autofill]:!text-black",
            "[&:-webkit-autofill:hover]:!bg-white [&:-webkit-autofill:hover]:!text-black",
            "[&:-webkit-autofill:focus]:!bg-white [&:-webkit-autofill:focus]:!text-black",
            "[&:-webkit-autofill:active]:!bg-white [&:-webkit-autofill:active]:!text-black",
            "[&:-webkit-autofill]:shadow-[inset_0_0_0_1000px_white]",
            "[&:-webkit-autofill]:[-webkit-text-fill-color:black]",
            icon ? "pl-12" : "pl-4",
            inputProps?.className
          )}
          style={{
            backgroundColor: 'white !important',
            color: 'black !important',
            WebkitTextFillColor: 'black !important'
          }}
        />

        {showPasswordToggle && (
          <button
            type="button"
            onClick={togglePassword}
            className="absolute inset-y-0 right-0 pr-4 flex items-center text-gray-500 hover:text-gray-700 transition cursor-pointer"
          >
            {showPassword ? <Eye size={20} /> : <EyeOff size={20} />}
          </button>
        )}
      </div>
    </div>
  );
};

export default CustomInput;
