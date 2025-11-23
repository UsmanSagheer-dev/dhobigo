"use client";

import { ThemeProvider } from "next-themes";
import Header from "./components/Header";
import Footer from "./components/Footer";
import ProtectedRoute from "@/components/ProtectedRoute";
import { usePathname } from "next/navigation";

export default function CustomerLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const pathname = usePathname();


  return (
    <ThemeProvider attribute="class">
      <Header />
      <div className="min-h-screen bg-gradient-to-b from-primary/20 stops-90 via-background  to-background">
        {children}
      </div>
      <Footer />
    </ThemeProvider>
  );
}
