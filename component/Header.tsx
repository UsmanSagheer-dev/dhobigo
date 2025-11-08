import { Bell, User } from "lucide-react";
import ThemeToggle from "./ThemeToggle";

export default function Header() {
  return (
    <header
      style={{
        padding: 16,
        borderBottom: "1px solid var(--border)",
        backgroundColor: "var(--card)",
        display: "flex",
        justifyContent: "flex-end",
        alignItems: "center",
      }}
    >
      <div style={{ display: "flex", gap: 20, alignItems: "center" }}>
        <div className="cursor-pointer">
          <ThemeToggle />
        </div>
        <div className="cursor-pointer">
          <Bell />
        </div>

        <div className="bg-amber-50 border rounded-full p-2 cursor-pointer ">
          <User />
        </div>
      </div>
    </header>
  );
}
