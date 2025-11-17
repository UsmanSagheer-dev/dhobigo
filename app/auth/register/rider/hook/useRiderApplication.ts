import { useState, ChangeEvent } from "react";
import { useRouter } from "next/navigation";
import { FormDataRider } from "@/types/types";

export const useRiderApplication = () => {
  const router = useRouter();
  const [step, setStep] = useState<number>(1);
  const [formData, setFormData] = useState<FormDataRider>({
    name: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",
    cnicFront: null,
    cnicBack: null,
    drivingLicense: null,
    bikeModel: "",
    bikeNumber: "",
    bikePhotos: [],
    coverageAreas: [],
    experience: "",
  });

  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>("");

  const areaOptions: string[] = [
    "Gulshan",
    "DHA",
    "Clifton",
    "Saddar",
    "Korangi",
    "Malir",
    "North Nazimabad",
    "Bahria Town",
  ];

  const handleAreaToggle = (area: string): void => {
    setFormData((prev) => ({
      ...prev,
      coverageAreas: prev.coverageAreas.includes(area)
        ? prev.coverageAreas.filter((a) => a !== area)
        : [...prev.coverageAreas, area],
    }));
  };

  const handleFileChange = (
    e: ChangeEvent<HTMLInputElement>,
    field: "cnicFront" | "cnicBack" | "drivingLicense" | "bikePhotos"
  ): void => {
    const files = e.target.files;
    if (!files) return;

    if (field === "bikePhotos") {
      setFormData((prev) => ({ ...prev, bikePhotos: Array.from(files) }));
    } else {
      setFormData((prev) => ({ ...prev, [field]: files[0] }));
    }
  };

  const handleSubmit = async (
    e: React.FormEvent<HTMLFormElement>
  ): Promise<void> => {
    e.preventDefault();
    setError("");

    if (formData.password !== formData.confirmPassword) {
      setError("Passwords do not match");
      return;
    }

    setLoading(true);

    try {
      const formDataToSend = new FormData();

      (Object.keys(formData) as (keyof FormDataRider)[]).forEach((key) => {
        if (
          ![
            "bikePhotos",
            "cnicFront",
            "cnicBack",
            "drivingLicense",
            "coverageAreas",
          ].includes(key)
        ) {
          formDataToSend.append(key, formData[key] as string);
        }
      });

      formDataToSend.append(
        "coverageAreas",
        JSON.stringify(formData.coverageAreas)
      );
      formDataToSend.append("role", "rider");

      if (formData.cnicFront)
        formDataToSend.append("cnicFront", formData.cnicFront);
      if (formData.cnicBack)
        formDataToSend.append("cnicBack", formData.cnicBack);
      if (formData.drivingLicense)
        formDataToSend.append("drivingLicense", formData.drivingLicense);
      formData.bikePhotos.forEach((photo, index) => {
        formDataToSend.append(`bikePhoto${index}`, photo);
      });

      const response: { ok: boolean; json: () => Promise<{ message: string }> } = await new Promise((resolve) =>
        setTimeout(
          () =>
            resolve({
              ok: true,
              json: async () => ({ message: "Mock submission successful" }),
            }),
          1000
        )
      );

      const data = await response.json();

      if (response.ok) {
        router.push("/auth/application-submitted?role=rider");
      } else {
        setError(data.message || "Application submission failed");
      }
    } catch (err) {
      setError("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const nextStep = (): void => {
    if (step < 3) setStep(step + 1);
  };

  const prevStep = (): void => {
    if (step > 1) setStep(step - 1);
  };

  return {
    step,
    formData,
    loading,
    error,
    areaOptions,
    handleAreaToggle,
    handleFileChange,
    handleSubmit,
    nextStep,
    prevStep,
    setFormData,
  };
};
