import { useState } from "react";

interface ForgotPasswordFormData {
  email: string;
}

interface UseForgotPasswordReturn {
  formData: ForgotPasswordFormData;
  setFormData: (data: ForgotPasswordFormData) => void;
  loading: boolean;
  error: string | null;
  success: string | null;
  handleSubmit: (e: React.FormEvent) => Promise<void>;
}

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
      // Dummy API call - replace with actual API
      await new Promise(resolve => setTimeout(resolve, 2000)); // Simulate API delay
      
      // Simulate success
      console.log("Password reset email sent to:", formData.email);
      setSuccess("Password reset link has been sent to your email address.");
      
      // Clear form after success
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