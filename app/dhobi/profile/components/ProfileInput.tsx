"use client";
import { Props } from "@/types/types";
import React from "react";

const ProfileInput: React.FC<Props> = ({
  label,
  labelSecondary,
  value = "",
  placeholder,
  onChange,
  icon,
  readOnly = false,
  type = "text",
  name,
}) => {
  return (
    <div className="mb-4">
      <div className="mb-2 flex justify-between">
        <div className="text-sm font-medium">{label}</div>
        {labelSecondary ? (
          <div className="text-sm text-gray-500">{labelSecondary}</div>
        ) : null}
      </div>

      <div className="flex items-center bg-white dark:bg-gray-800 rounded-md border border-gray-200 dark:border-gray-700 px-3 py-2">
        {icon ? <div className="mr-3 text-gray-400">{icon}</div> : null}
        {onChange && !readOnly ? (
          <input
            name={name}
            type={type}
            value={value}
            placeholder={placeholder}
            onChange={(e) => onChange(e.target.value)}
            className="w-full bg-transparent outline-none text-sm"
          />
        ) : (
          <div className="w-full text-sm text-gray-700 dark:text-gray-200">
            {value || placeholder}
          </div>
        )}
      </div>
    </div>
  );
};

export default ProfileInput;
