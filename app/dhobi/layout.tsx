import React from 'react'
import DhobiShell from './DhobiShell'
import ProtectedRoute from '@/components/ProtectedRoute'

export const metadata = {
  title: 'Dhobi',
}

export default function DhobiLayout({ children }: { children: React.ReactNode }) {
  return (
    // <ProtectedRoute allowedRoles={["provider"]}>{/* </ProtectedRoute> */}
      <DhobiShell>{children}</DhobiShell>
    
  )
}
