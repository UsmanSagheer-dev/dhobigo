import React from 'react'
import ProtectedRoute from '@/components/ProtectedRoute'

export default function YourOrders() {
  return (
    <ProtectedRoute allowedRoles={["customer"]}>
      <div>
        Your Orders Page
      </div>
    </ProtectedRoute>
  )
}
