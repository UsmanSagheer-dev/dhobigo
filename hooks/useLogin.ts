import { useState } from "react";
import { useRouter } from "next/navigation";

export const useLogin = () => {
  const router = useRouter();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      // API currently unavailable — using dummy data for local testing.
      /*
      const response = await fetch("/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok) {
        setError(data.message || "Login failed");
        return;
      }
      */

      const dummyRole = formData.email.includes("provider")
        ? "provider"
        : formData.email.includes("rider")
        ? "rider"
        : "customer";

      const data = {
        token: "dummy-token",
        user: { role: dummyRole, status: "approved" },
      } as any;

      localStorage.setItem("token", data.token);

      if (data.user.role === "customer") {
        router.push("/dashboard");
      } else if (data.user.role === "provider") {
        if (data.user.status === "approved") {
          router.push("/provider/dashboard");
        } else if (data.user.status === "pending") {
          setError("Your application is pending admin approval.");
        } else {
          setError("Your application was rejected. Please contact support.");
        }
      } else if (data.user.role === "rider") {
        if (data.user.status === "approved") {
          router.push("/rider/dashboard");
        } else if (data.user.status === "pending") {
          setError("Your application is pending admin approval.");
        } else {
          setError("Your application was rejected. Please contact support.");
        }
      }
    } catch (err) {
      setError("Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  return { formData, setFormData, loading, error, handleSubmit };
};