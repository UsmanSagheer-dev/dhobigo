"use client";
import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Backpack, House, Package, User } from "lucide-react";

type Props = {
  onNavigate?: () => void;
};

export default function Sidebar({ onNavigate }: Props) {
  const pathname = usePathname() || "";

  const links: {
    href: string;
    label: string;
    icon: React.ReactNode;
    exact?: boolean;
  }[] = [
    { href: "/dhobi", label: "Home", icon: <House />, exact: true },
    { href: "/dhobi/orders", label: "Orders", icon: <Backpack /> },
    { href: "/dhobi/offers", label: "Offers", icon: <Package /> },
    { href: "/dhobi/profile", label: "Profile", icon: <User /> },
  ];

  return (
    <nav
      style={{
        padding: 24,
        backgroundColor: "var(--card)",
        height: "100%",
        boxSizing: "border-box",
        borderRight: "1px solid var(--border)",
      }}
    >
      <div style={{ marginBottom: 28 }}>
        <Link
          href="/dhobi"
          style={{
            textDecoration: "none",
            color: "var(--accent)",
            fontWeight: 700,
            fontSize: 18,
          }}
          onClick={() => onNavigate?.()}
        >
          DhoobiGo
        </Link>
        <div style={{ fontSize: 12, color: "var(--muted)" }}>Dhobi Portal</div>
      </div>

      <ul
        style={{
          listStyle: "none",
          padding: 0,
          margin: 0,
          display: "grid",
          gap: 12,
        }}
      >
        {links.map((l) => {
          const isActive = l.exact
            ? pathname === l.href
            : pathname === l.href || pathname.startsWith(l.href + "/");
          const style: React.CSSProperties = {
            ...navLinkStyle,
            background: isActive ? "var(--accent)" : undefined,
            color: isActive ? "#fff" : "var(--foreground)",
          };

          return (
            <li key={l.href} className="w-full">
              <Link href={l.href} style={style} onClick={() => onNavigate?.()}>
                <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                  {/* icons use currentColor so they'll become white when the link is active */}
                  <span
                    style={{ display: "inline-flex", alignItems: "center" }}
                  >
                    {l.icon}
                  </span>
                  <span>{l.label}</span>
                </div>
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}

const navLinkStyle: React.CSSProperties = {
  display: "flex",
  alignItems: "center",
  gap: 12,
  padding: "12px 18px",
  borderRadius: 12,
  color: "var(--foreground)",
  textDecoration: "none",
  minWidth: 180,
  // make it easier to scan and look consistent
  transition: "background 150ms ease, color 150ms ease",
};
