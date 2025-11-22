"use client";

import { useSelector } from "react-redux";
import { RootState } from "@/store/store";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

interface PublicRouteProps {
  children: React.ReactNode;
}

export default function PublicRoute({ children }: PublicRouteProps) {
  const router = useRouter();
  const { isAuthenticated, user } = useSelector(
    (state: RootState) => state.auth
  );

  useEffect(() => {
    if (isAuthenticated && user) {
      // Redirect authenticated users to their respective dashboards
      switch (user.role) {
        case "customer":
          router.push("/dashboard");
          break;
        case "provider":
          router.push("/dhobi");
          break;
        case "rider":
          router.push("/rider/dashboard");
          break;
        case "admin":
          router.push("/admin");
          break;
        default:
          router.push("/dashboard");
      }
    }
  }, [isAuthenticated, user, router]);

  // If user is authenticated, don't show public route content
  if (isAuthenticated && user) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-indigo-600"></div>
      </div>
    );
  }

  return <>{children}</>;
}