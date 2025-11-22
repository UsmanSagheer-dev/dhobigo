import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "@/store/store";
import {
  registerUser,
  clearError,
  clearSuccess,
} from "@/store/slices/authSlice";
import { RegisterFormData, UseRegisterReturn } from "@/types/types";

export const useRegister = (): UseRegisterReturn => {
  const router = useRouter();
  const dispatch = useDispatch<AppDispatch>();

  const { loading, error, success } = useSelector(
    (state: RootState) => state.auth
  );

  const [formData, setFormData] = useState<RegisterFormData>({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  useEffect(() => {
    if (success && success.includes("Registration successful")) {
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

    const resultAction = await dispatch(registerUser(formData));

    if (registerUser.fulfilled.match(resultAction)) {
      // Reset form on success
      setFormData({
        name: "",
        email: "",
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
