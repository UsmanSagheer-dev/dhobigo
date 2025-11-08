import React from 'react'
import DhobiShell from './DhobiShell'

export const metadata = {
  title: 'Dhobi',
}

export default function DhobiLayout({ children }: { children: React.ReactNode }) {
  return (
    // DhobiShell is a client component that handles responsive sidebar + header
    <DhobiShell>{children}</DhobiShell>
  )
}
