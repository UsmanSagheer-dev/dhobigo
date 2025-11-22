import React from 'react'
import ProtectedRoute from '@/components/ProtectedRoute'

export default function FindDhobi() {
  return (
    <ProtectedRoute allowedRoles={["customer"]}>
      <div>
        find dhobi page
      </div>
    </ProtectedRoute>
  )
}
