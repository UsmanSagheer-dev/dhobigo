"use client";

import { useLogin } from "../../../hooks/useLogin";
import { Mail, Lock } from "lucide-react";
import Link from "next/link";
import CustomInput from "@/components/CustomInput";

export default function LoginPage() {
  const { formData, setFormData, loading, error, success, handleSubmit } = useLogin();

  return (
    <div className="w-full  rounded-xl shadow-2xl p-4 bg-white">
      <div className="text-center mb-12">
        <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
          Welcome Back!
        </h1>
        <p className="mt-4 text-lg text-gray-600">
          Log in to schedule pickup & track your fresh laundry
        </p>
      </div>
      {error && (
        <div className="bg-red-100 text-red-700 p-3 rounded-lg mb-4">
          {error}
        </div>
      )}
      
      {success && (
        <div className="bg-green-100 text-green-700 p-3 rounded-lg mb-4">
          {success}
        </div>
      )}

      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <CustomInput
          label="Email Address"
          icon={<Mail size={20} className="text-gray-500" />}
          inputProps={{
            type: "email",
            placeholder: "usman@example.com",
            required: true,
            value: formData.email,
            onChange: (e) =>
              setFormData({ ...formData, email: e.target.value }),
          }}
        />

        <CustomInput
          label="Password"
          icon={<Lock size={20} className="text-gray-500" />}
          showPasswordToggle={true}
          inputProps={{
            type: "password",
            placeholder: "*******",
            required: true,
            value: formData.password,
            onChange: (e) =>
              setFormData({ ...formData, password: e.target.value }),
          }}
        />

        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center">
            <input
              type="checkbox"
              id="remember"
              className="h-4 w-4 bg-white border-2 border-gray-300 rounded text-green-600 focus:ring-green-500 focus:ring-2 checked:bg-green-600 checked:border-green-600 appearance-none relative cursor-pointer transition-colors duration-200 ease-in-out checked:after:content-['✓'] checked:after:text-white checked:after:text-xs checked:after:font-bold checked:after:absolute checked:after:top-0 checked:after:left-0 checked:after:w-full checked:after:h-full checked:after:flex checked:after:items-center checked:after:justify-center"
            />
            <label
              htmlFor="remember"
              className="ml-2 block text-sm text-gray-700 cursor-pointer"
            >
              Remember me
            </label>
          </div>
          <div>
            <Link
              href="/auth/forgot-password"
              className="text-sm text-indigo-600 hover:text-indigo-500"
            >
              Forgot password?
            </Link>
          </div>
        </div>

        <button
          type="submit"
          disabled={loading}
          className="w-full bg-indigo-600 text-white py-3 rounded-lg font-semibold hover:bg-indigo-700 disabled:opacity-50"
        >
          {loading ? "Logging in..." : "Login"}
        </button>
      </form>

      <div className="mt-6 flex  items-center justify-center text-center gap-2">
        <p className="text-gray-600 ">Don't have an account?</p>
        <Link
          href="/auth/register"
          className="text-indigo-600 hover:text-indigo-500 font-semibold"
        >
          Sign Up
        </Link>
      </div>
    </div>
  );
}
