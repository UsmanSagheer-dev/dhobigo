"use client"

import { Sun, Moon } from "lucide-react";
import { useTheme } from "next-themes";

export default function ThemeToggle() {
  const {theme, setTheme} = useTheme();   
  const isDark = theme === "dark";
  const handlethemechange = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  
  };

  return (
    <button
      aria-label="Toggle theme"
      onClick={() => handlethemechange( )}
      style={{
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        border: "none",
        background: "transparent",
        cursor: "pointer",
        padding: 6,
        color: "var(--color-textSecondary)",
        transition: "color 0.3s ease",
        
      
      }}
    >
      {isDark ? <Sun size={18} /> : <Moon size={18} />}
    </button>
  );
}
