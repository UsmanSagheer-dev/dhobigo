"use client";

import { Mail, Lock, User, ArrowLeft } from "lucide-react";
import Link from "next/link";
import CustomInput from "@/components/CustomInput";
import { useRegister } from "@/hooks/useRegister";
import Button from "@/components/Button";

export default function RegisterPage() {
  const { formData, setFormData, loading, error, handleSubmit } = useRegister();

  return (
    <div className="w-full rounded-xl shadow-2xl p-4 bg-white">
      <div className="text-center mb-12">
        <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
          Create Account
        </h1>
        <p className="mt-4 text-lg text-gray-600">
          Join us and start your laundry service journey
        </p>
      </div>

      {error && (
        <div className="bg-red-100 text-red-700 p-3 rounded-lg mb-4">
          {error}
        </div>
      )}

      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <CustomInput
          label="Full Name"
          icon={<User size={20} className="text-gray-500" />}
          inputProps={{
            type: "text",
            placeholder: "Enter your full name",
            required: true,
            value: formData.name,
            onChange: (e) => setFormData({ ...formData, name: e.target.value }),
          }}
        />

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
            placeholder: "Enter password",
            required: true,
            value: formData.password,
            onChange: (e) =>
              setFormData({ ...formData, password: e.target.value }),
          }}
        />

        <CustomInput
          label="Confirm Password"
          icon={<Lock size={20} className="text-gray-500" />}
          showPasswordToggle={true}
          inputProps={{
            type: "password",
            placeholder: "Confirm password",
            required: true,
            value: formData.confirmPassword,
            onChange: (e) =>
              setFormData({ ...formData, confirmPassword: e.target.value }),
          }}
        />

        <Button
          type="submit"
          disabled={loading}
          className="flex-1 bg-indigo-600 text-white py-3 rounded-lg font-semibold hover:bg-indigo-700 disabled:opacity-50"
        >
          {loading ? "Creating..." : "Sign Up"}
        </Button>
      </form>

      <div className="mt-6 text-center">
        <p className="text-gray-600">
          Already have an account?{" "}
          <Link
            href="/auth/login"
            className="text-indigo-600 hover:text-indigo-500 font-semibold"
          >
            Sign In
          </Link>
        </p>
      </div>
    </div>
  );
}
