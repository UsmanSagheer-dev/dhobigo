import React from 'react'
import Link from 'next/link'

export default function Sidebar() {
  return (
    <nav style={{ padding: 24 }}>
      <div style={{ marginBottom: 28 }}>
        <Link href="/dhobi" style={{ textDecoration: 'none', color: '#0b5fff', fontWeight: 700, fontSize: 18 }}>
          DhoobiGo
        </Link>
        <div style={{ fontSize: 12, color: '#666' }}>Dhobi Portal</div>
      </div>

      <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'grid', gap: 12 }}>
        <li>
          <Link href="/dhobi" style={navLinkStyle}>🏠 Home</Link>
        </li>
        <li>
          <Link href="/dhobi/orders" style={navLinkStyle}>📦 Orders</Link>
        </li>
        <li>
          <Link href="/dhobi/offers" style={navLinkStyle}>🏷️ Offers</Link>
        </li>
        <li>
          <Link href="/dhobi/profile" style={navLinkStyle}>👤 Profile</Link>
        </li>
      </ul>
    </nav>
  )
}

const navLinkStyle: React.CSSProperties = {
  display: 'inline-block',
  padding: '10px 14px',
  borderRadius: 10,
  color: '#333',
  textDecoration: 'none',
}
