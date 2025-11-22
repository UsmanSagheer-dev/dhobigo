import React from 'react'
import ProtectedRoute from '@/components/ProtectedRoute'

export default function BecomeDhobi() {
  return (
    <ProtectedRoute allowedRoles={["customer"]}>
      <div>
        become dhobie page
      </div>
    </ProtectedRoute>
  )
}
