import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

interface User {
  name: string;
  email: string;
  phone: string;
}

interface Order {
  id: string;
  provider: string;
  status: string;
  createdAt: string;
}

export const useCustomerDashboard = () => {
  const router = useRouter();
  const [user, setUser] = useState<User | null>(null);
  const [orders, setOrders] = useState<Order[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      console.warn("No token found. Redirecting to login page.");
      router.push("/dashboard");
      return;
    }

    console.log("Token found. Fetching user data and orders.");
    fetchUserData();
    fetchOrders();
  }, [router]);

  const fetchUserData = async () => {
    await new Promise((resolve) =>
      setTimeout(() => resolve("Mock user data fetched"), 1000)
    );
    setUser({ name: "John Doe", email: "john.doe@example.com", phone: "1234567890" });
    setLoading(false);
  };

  const fetchOrders = async () => {
    await new Promise((resolve) =>
      setTimeout(() => resolve("Mock orders fetched"), 1000)
    );
    setOrders([
      {
        id: "1",
        provider: "Laundry Service A",
        status: "Delivered",
        createdAt: "2025-11-15",
      },
      {
        id: "2",
        provider: "Laundry Service B",
        status: "Processing",
        createdAt: "2025-11-16",
      },
    ]);
  };

  const handleLogout = () => {
    localStorage.removeItem("token");
    router.push("/");
  };

  return {
    user,
    orders,
    loading,
    handleLogout,
  };
};