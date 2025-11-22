import React from 'react'
import ProtectedRoute from '@/components/ProtectedRoute'

export default function Support() {
  return (
    <ProtectedRoute allowedRoles={["customer"]}>
      <div>
        Support Page
      </div>
    </ProtectedRoute>
  )
}
