import { FormData } from "@/types/types";
import { useState } from "react";

export const useProviderApplication = () => {
  const [step, setStep] = useState<number>(1);
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",
    shopName: "",
    shopAddress: "",
    latitude: "",
    longitude: "",
    cnicFront: null,
    cnicBack: null,
    shopPhotos: [],
    services: [],
    experience: "",
    bankName: "",
    accountNumber: "",
    accountTitle: "",
  });

  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>("");

  const serviceOptions: string[] = [
    "Wash",
    "Dry Clean",
    "Iron",
    "Fold",
    "Express Service",
  ];

  const handleServiceToggle = (service: string): void => {
    setFormData((prev) => ({
      ...prev,
      services: prev.services.includes(service)
        ? prev.services.filter((s) => s !== service)
        : [...prev.services, service],
    }));
  };

  const handleFileChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    field: "cnicFront" | "cnicBack" | "shopPhotos"
  ): void => {
    const files = e.target.files;
    if (!files) return;

    if (field === "shopPhotos") {
      setFormData((prev) => ({ ...prev, shopPhotos: Array.from(files) }));
    } else {
      setFormData((prev) => ({ ...prev, [field]: files[0] }));
    }
  };

  const nextStep = (): void => {
    if (step < 4) setStep(step + 1);
  };

  const prevStep = (): void => {
    if (step > 1) setStep(step - 1);
  };

  return {
    step,
    formData,
    setFormData,
    loading,
    error,
    serviceOptions,
    handleServiceToggle,
    handleFileChange,
    nextStep,
    prevStep,
  };
};
