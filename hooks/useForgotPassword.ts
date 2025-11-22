import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "@/store";
import { forgotPassword, clearError, clearSuccess } from "@/store/slices/authSlice";
import { ForgotPasswordFormData, UseForgotPasswordReturn } from "@/types/types";

export const useForgotPassword = (): UseForgotPasswordReturn => {
  const dispatch = useDispatch<AppDispatch>();
  const { loading, error, success } = useSelector((state: RootState) => state.auth);
  
  const [formData, setFormData] = useState<ForgotPasswordFormData>({
    email: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    dispatch(clearError());
    dispatch(clearSuccess());

    const resultAction = await dispatch(forgotPassword(formData.email));
    
    if (forgotPassword.fulfilled.match(resultAction)) {
      // Show toast if available
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

      // Reset form on success
      setFormData({ email: "" });
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
