
import ProtectedRoute from '@/components/ProtectedRoute'

export default function Inbox() {
  return (
    <ProtectedRoute allowedRoles={["customer"]}>
      <div>
          <h1>Customer Inbox</h1>
      </div>
    </ProtectedRoute>
  )
}
