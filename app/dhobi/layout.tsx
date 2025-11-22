import React from 'react'
import DhobiShell from './DhobiShell'

export const metadata = {
  title: 'Dhobi',
}

export default function DhobiLayout({ children }: { children: React.ReactNode }) {
  return (
    // DhobiShell - now using global Redux provider from root layout
    <DhobiShell>{children}</DhobiShell>
  )
}
