import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "@/store/store";
import { resetPassword, clearError, clearSuccess } from "@/store/slices/authSlice";
import { ResetPasswordFormData, UseResetPasswordReturn } from "@/types/types";

export const useResetPassword = (token: string): UseResetPasswordReturn => {
  const router = useRouter();
  const dispatch = useDispatch<AppDispatch>();
  const { loading, error, success } = useSelector((state: RootState) => state.auth);
  
  const [formData, setFormData] = useState<ResetPasswordFormData>({
    password: "",
    confirmPassword: "",
  });

  // Handle navigation on successful password reset
  useEffect(() => {
    if (success && success.includes("Password has been reset successfully")) {
      const timer = setTimeout(() => {
        router.push("/auth/login");
      }, 2000);
      return () => clearTimeout(timer);
    }
  }, [success, router]);

  const handleSubmit = async (e: React.FormEvent) => {
      e.preventDefault();
    dispatch(clearError());
    dispatch(clearSuccess());

    const resultAction = await dispatch(resetPassword({
      token,
      password: formData.password,
      confirmPassword: formData.confirmPassword,
    }));

    if (resetPassword.fulfilled.match(resultAction)) {
      console.log("Password reset successful for token:", token);
      
      // Reset form on success
      setFormData({
        password: "",
        confirmPassword: "",
      });
    }
  };

  const clearMessages = () => {
    dispatch(clearError());
    dispatch(clearSuccess());
  };

  return {
    formData,
    setFormData,
    loading,
    error,
    success,
    handleSubmit,
    clearMessages,
  };
};
