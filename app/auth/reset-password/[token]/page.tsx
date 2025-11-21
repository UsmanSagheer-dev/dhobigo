"use client";

import { Lock, ArrowLeft } from "lucide-react";
import Link from "next/link";
import CustomInput from "@/components/CustomInput";
import { useParams } from "next/navigation";
import { useResetPassword } from "@/hooks/useResetPassword";

export default function ResetPasswordPage() {
  const params = useParams();
  const token = params.token as string;
  const { formData, setFormData, loading, error, success, handleSubmit } = useResetPassword(token);

  return (
    <div className="w-full rounded-xl shadow-2xl p-4 bg-white">
      <div className="text-center mb-12">
        <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
          Reset Password
        </h1>
        <p className="mt-4 text-lg text-gray-600">
          Enter your new password to reset your account
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
          label="New Password"
          icon={<Lock size={20} className="text-gray-500" />}
          showPasswordToggle={true}
          inputProps={{
            type: "password",
            placeholder: "Enter new password",
            required: true,
            value: formData.password,
            onChange: (e) =>
              setFormData({ ...formData, password: e.target.value }),
          }}
        />

        <CustomInput
          label="Confirm New Password"
          icon={<Lock size={20} className="text-gray-500" />}
          showPasswordToggle={true}
          inputProps={{
            type: "password",
            placeholder: "Confirm new password",
            required: true,
            value: formData.confirmPassword,
            onChange: (e) =>
              setFormData({ ...formData, confirmPassword: e.target.value }),
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
            {loading ? "Resetting..." : "Reset Password"}
          </button>
        </div>
      </form>
    </div>
  );
}
