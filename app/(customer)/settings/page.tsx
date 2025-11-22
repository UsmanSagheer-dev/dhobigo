import React from 'react'
import ProtectedRoute from '@/components/ProtectedRoute'

export default function Settings() {
  return (
    <ProtectedRoute allowedRoles={["customer"]}>
      <div>
        Settings Page
      </div>
    </ProtectedRoute>
  )
}
