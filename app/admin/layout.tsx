import React from 'react'
import ProtectedRoute from '@/components/ProtectedRoute'

export const metadata = {
  title: 'Admin Panel',
}

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  return (
    <ProtectedRoute allowedRoles={["admin"]}>
      {children}
    </ProtectedRoute>
  )
}