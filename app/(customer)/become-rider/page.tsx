import React from 'react'
import ProtectedRoute from '@/components/ProtectedRoute'

export default function BecomeRider() {
  return (
    <ProtectedRoute allowedRoles={["customer"]}>
      <div>
        Become Rider Page
      </div>
    </ProtectedRoute>
  )
}
