import { useState } from "react";
import { useRouter } from "next/navigation";

interface ResetPasswordFormData {
  password: string;
  confirmPassword: string;
}

interface UseResetPasswordReturn {
  formData: ResetPasswordFormData;
  setFormData: (data: ResetPasswordFormData) => void;
  loading: boolean;
  error: string | null;
  success: string | null;
  handleSubmit: (e: React.FormEvent) => Promise<void>;
}

export const useResetPassword = (token: string): UseResetPasswordReturn => {
  const router = useRouter();
  const [formData, setFormData] = useState<ResetPasswordFormData>({
    password: "",
    confirmPassword: "",
  });
  
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    setSuccess(null);

    // Validation
    if (formData.password.length < 6) {
      setError("Password must be at least 6 characters long");
      setLoading(false);
      return;
    }

    if (formData.password !== formData.confirmPassword) {
      setError("Passwords do not match");
      setLoading(false);
      return;
    }

    try {
      // Dummy API call - replace with actual API
      await new Promise(resolve => setTimeout(resolve, 2000)); // Simulate API delay
      
      // Simulate success
      console.log("Password reset successful for token:", token);
      console.log("New password:", formData.password);
      
      setSuccess("Password has been reset successfully! Redirecting to login...");
      
      // Redirect to login after 2 seconds
      setTimeout(() => {
        router.push("/auth/login");
      }, 2000);
      
    } catch (err) {
      console.error("Reset password error:", err);
      setError("Something went wrong. Please try again or request a new reset link.");
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