"use client";

import { Mail, ArrowLeft } from "lucide-react";
import Link from "next/link";
import CustomInput from "@/components/CustomInput";
import { useForgotPassword } from "@/hooks/useForgotPassword";

export default function ForgotPasswordPage() {
  const { formData, setFormData, loading, error, success, handleSubmit } = useForgotPassword();

  return (
    <div className="w-full rounded-xl shadow-2xl p-4 bg-white">
      <div className="text-center mb-12">
        <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
          Forgot Password?
        </h1>
        <p className="mt-4 text-lg text-gray-600">
          Enter your email address and we'll send you a reset link
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

        <div className="flex gap-3">
          <Link href="/auth/login" className="flex-1">
            <button
              type="button"
              className="w-full bg-gray-100 text-gray-700 py-3 rounded-lg font-semibold hover:bg-gray-200 flex items-center justify-center gap-2"
            >
              <ArrowLeft size={20} />
              Back to Login
            </button>
          </Link>

          <button
            type="submit"
            disabled={loading}
            className="flex-1 bg-indigo-600 text-white py-3 rounded-lg font-semibold hover:bg-indigo-700 disabled:opacity-50"
          >
            {loading ? "Sending..." : "Send Reset Link"}
          </button>
        </div>
      </form>
    </div>
  );
}
