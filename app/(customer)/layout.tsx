
'use client';

import { ThemeProvider } from "next-themes";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { useSelector } from "react-redux";
import { RootState } from "@/store/store";
import { useRouter, usePathname } from "next/navigation";
import { useEffect } from "react";

export default function CustomerLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const { isAuthenticated, user } = useSelector((state: RootState) => state.auth);
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    // Only redirect from the landing page if user is authenticated
    if (isAuthenticated && user && pathname === '/') {
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
  }, [isAuthenticated, user, router, pathname]);

  return (
    <>
      <Header />
      <div className="min-h-screen bg-gradient-to-b from-primary/20 stops-90 via-background  to-background">
      {children}
      </div>
      <Footer />
    </>
  );
}
