
import ProtectedRoute from '@/components/ProtectedRoute'

export default function Profile() {
  return (
    <ProtectedRoute allowedRoles={["customer"]}>
      <div>
          Profile Settings Page
      </div>
    </ProtectedRoute>
  )
}
