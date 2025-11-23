import React from 'react'
// import ProtectedRoute from '@/components/ProtectedRoute'

export const metadata = {
  title: 'Rider Dashboard',
}

export default function RiderLayout({ children }: { children: React.ReactNode }) {
  return (
    // <ProtectedRoute allowedRoles={["rider"]}>    </ProtectedRoute>
      {children}

  )
}