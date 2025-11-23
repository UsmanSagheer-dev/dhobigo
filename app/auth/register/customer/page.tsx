"use client";

import { useState, ChangeEvent, FormEvent } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { RegisterForm } from "@/types/types";
import CustomInput from "@/components/CustomInput";

export default function CustomerRegister() {
  const router = useRouter();

  const [formData, setFormData] = useState<RegisterForm>({
    name: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",
  });

  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>("");

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setError("");

    if (formData.password !== formData.confirmPassword) {
      setError("Passwords do not match");
      return;
    }

    setLoading(true);

    try {
      const response = await fetch("/api/auth/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...formData,
          role: "customer",
        }),
      });

      const data = await response.json();

      if (response.ok) {
        localStorage.setItem("token", data.token);
        router.push("/dashboard");
      } else {
        setError(data.message || "Registration failed");
      }
    } catch (err) {
      setError("Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center p-4">
      <div className="max-w-md w-full bg-white rounded-xl shadow-2xl p-8">
        <h2 className="text-3xl font-bold text-center text-indigo-600 mb-6">
          Customer Registration
        </h2>

        {error && (
          <div className="bg-red-100 text-red-700 p-3 rounded-lg mb-4">
            {error}
          </div>
        )}

        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <CustomInput
            label="Full Name"
            inputProps={{
              placeholder: "Enter your name",
              type: "text",
              name: "name",
              required: true,
              className:
                "w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500",
              value: formData.name,
              onChange: handleInputChange,
            }}
          />

          {/* Email */}
          <CustomInput
            label="Email"
            inputProps={{
              placeholder: "Enter your email",
              type: "email",
              name: "email",
              required: true,
              className:
                "w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500",
              value: formData.email,
              onChange: handleInputChange,
            }}
          />

          {/* Phone */}
          <CustomInput
            label="Phone Number"
            inputProps={{
              placeholder: "03001234567",
              type: "tel",
              name: "phone",
              required: true,
              className:
                "w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500",
              value: formData.phone,
              onChange: handleInputChange,
            }}
          />

          {/* Password */}
          <CustomInput
            label="Password"
            showPasswordToggle={true}
            inputProps={{
              placeholder: "Enter your password",
              name: "password",
              required: true,
              className:
                "w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500",
              value: formData.password,
              onChange: handleInputChange,
            }}
          />

          <CustomInput
            label="Confirm Password"
            showPasswordToggle={true}
            inputProps={{
              placeholder: "Confirm your password",
              name: "confirmPassword",
              required: true,
              className:
                "w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500",
              value: formData.confirmPassword,
              onChange: handleInputChange,
            }}
          />

          {/* Submit Button */}
          <button
            type="submit"
            disabled={loading}
            className="w-full bg-indigo-600 text-white py-3 rounded-lg font-semibold hover:bg-indigo-700 disabled:opacity-50"
          >
            {loading ? "Registering..." : "Register"}
          </button>
        </form>

        <p className="text-center text-gray-600 mt-6">
          Already have an account?{" "}
          <Link
            href="/auth/login"
            className="text-indigo-600 font-semibold hover:underline"
          >
            Login
          </Link>
        </p>
      </div>
    </div>
  );
}
