import { ForgotPasswordFormData, UseForgotPasswordReturn } from "@/types/types";
import { useState } from "react";

export const useForgotPassword = (): UseForgotPasswordReturn => {
  const [formData, setFormData] = useState<ForgotPasswordFormData>({
    email: "",
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    setSuccess(null);

    try {
      await new Promise((resolve) => setTimeout(resolve, 2000));

      if (typeof window !== "undefined") {
        try {
          const mod = await import("@/utils/toast");
          const fn = (mod &&
            (mod.toast ??
              mod.default ??
              (typeof mod === "function" ? mod : undefined))) as
            | ((msg: string) => void)
            | undefined;
          if (fn) fn(`Password reset email sent to: ${formData.email}`);
        } catch (e) {
          console.log("Password reset email sent to:", formData.email);
        }
      }

      setSuccess("Password reset link has been sent to your email address.");

      setFormData({ email: "" });
    } catch (err) {
      console.error("Forgot password error:", err);
      setError("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return {
    formData,
    setFormData,
    loading,
    error,
    success,
    handleSubmit,
  };
};
