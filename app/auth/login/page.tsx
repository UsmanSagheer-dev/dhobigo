"use client";

import { useLogin } from "../../../hooks/useLogin";
import { Mail, Lock } from "lucide-react";
import Link from "next/link";
import CustomInput from "@/components/CustomInput";

export default function LoginPage() {
  const { formData, setFormData, loading, error, handleSubmit } = useLogin();

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 to-purple-100 flex items-center justify-center p-4">
      <div className="max-w-md w-full bg-white rounded-xl shadow-2xl p-8">
        <h2 className="text-3xl font-bold text-center text-indigo-600 mb-6">
          Login to Dhoobi Go
        </h2>

        {error && (
          <div className="bg-red-100 text-red-700 p-3 rounded-lg mb-4">
            {error}
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

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-indigo-600 text-white py-3 rounded-lg font-semibold hover:bg-indigo-700 disabled:opacity-50"
          >
            {loading ? "Logging in..." : "Login"}
          </button>
        </form>

        <div className="mt-6 text-center">
          <p className="text-gray-600 mb-4">Don't have an account?</p>
          <div className="flex flex-col gap-2">
            <Link href="/auth/register/customer">
              <button className="w-full bg-blue-100 text-blue-700 py-2 rounded-lg font-semibold hover:bg-blue-200">
                Sign up as Customer
              </button>
            </Link>
            <Link href="/auth/register/provider">
              <button className="w-full bg-green-100 text-green-700 py-2 rounded-lg font-semibold hover:bg-green-200">
                Apply as Provider
              </button>
            </Link>
            <Link href="/auth/register/rider">
              <button className="w-full bg-orange-100 text-orange-700 py-2 rounded-lg font-semibold hover:bg-orange-200">
                Apply as Rider
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
