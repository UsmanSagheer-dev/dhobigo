import { ArrowLeft, Link } from "lucide";
import Order from "../components/Order";

export default function Orders() {
  const orders = [
    {
      orderId: "12345",
      customerPhoto:
        "https://res.cloudinary.com/dcli1vwir/image/upload/v1759141920/z8vsizsmp7ysh4jhhgjv.jpg",
      customerName: "John Doe",
      customerRating: "4.5",
      customerAddress: "Apartment 45, Gulshan-e-Iqbal, Karachi",
      customerDistance: "1.6",
      orderWeight: "1",
      totalItems: "5",
      serviceType: "Wash & Iron",
      scheduledPickup: "Today, 3:00 PM - 5:00 PM",
      scheduledDeadline: "Tomorrow, 3:00 PM - 5:00 PM",
      totalAmount: "500",
      status: "Coming for Pickup",
    },
    {
      orderId: "12346",
      customerPhoto:
        "https://res.cloudinary.com/dcli1vwir/image/upload/v1759141920/z8vsizsmp7ysh4jhhgjv.jpg",
      customerName: "Jane Smith",
      customerRating: "4.8",
      customerAddress: "House 12, Block 5, Gulshan-e-Iqbal, Karachi",
      customerDistance: "2.0",
      orderWeight: "2",
      totalItems: "3",
      serviceType: "Dry Cleaning",
      scheduledPickup: "Today, 4:00 PM - 6:00 PM",
      scheduledDeadline: "Tomorrow, 4:00 PM - 6:00 PM",
      totalAmount: "800",
      status: "Pickup Pending",
    },
    {
      orderId: "12347",
      customerPhoto:
        "https://res.cloudinary.com/dcli1vwir/image/upload/v1759141920/z8vsizsmp7ysh4jhhgjv.jpg",
      customerName: "Alice Johnson",
      customerRating: "4.2",
      customerAddress: "Flat 3B, Clifton, Karachi",
      customerDistance: "3.5",
      orderWeight: "1.5",
      totalItems: "4",
      serviceType: "Ironing",
      scheduledPickup: "Today, 5:00 PM - 7:00 PM",
      scheduledDeadline: "Tomorrow, 5:00 PM - 7:00 PM",
      totalAmount: "600",
      status: "Out for Delivery",
    },
    // Add more orders as needed FOR ALL STATUSES
    {
      orderId: "12348",
      customerPhoto:
        "https://res.cloudinary.com/dcli1vwir/image/upload/v1759141920/z8vsizsmp7ysh4jhhgjv.jpg",
      customerName: "Bob Brown",
      customerRating: "4.7",
      customerAddress: "House 22, PECHS, Karachi",
      customerDistance: "2.8",
      orderWeight: "2.5",
      totalItems: "6",
      serviceType: "Wash & Fold",
      scheduledPickup: "Today, 6:00 PM - 8:00 PM",
      scheduledDeadline: "Tomorrow, 6:00 PM - 8:00 PM",
      totalAmount: "700",
      status: "Delivered",
    },
    {
      orderId: "12349",
      customerPhoto:
        "https://res.cloudinary.com/dcli1vwir/image/upload/v1759141920/z8vsizsmp7ysh4jhhgjv.jpg",
      customerName: "Charlie Davis",
      customerRating: "4.3",
      customerAddress: "Apartment 10, Nazimabad, Karachi",
      customerDistance: "4.0",
      orderWeight: "1.2",
      totalItems: "2",
      serviceType: "Dry Cleaning",
      scheduledPickup: "Today, 7:00 PM - 9:00 PM",
      scheduledDeadline: "Tomorrow, 7:00 PM - 9:00 PM",
      totalAmount: "550",
      status: "cancelled",
    },
    {
      orderId: "12350",
      customerPhoto:
        "https://res.cloudinary.com/dcli1vwir/image/upload/v1759141920/z8vsizsmp7ysh4jhhgjv.jpg",
      customerName: "Diana Evans",
      customerRating: "4.6",
      customerAddress: "House 5, Clifton, Karachi",
      customerDistance: "3.2",
      orderWeight: "3",
      totalItems: "7",
      serviceType: "Wash & Iron",
      scheduledPickup: "Today, 8:00 PM - 10:00 PM",
      scheduledDeadline: "Tomorrow, 8:00 PM - 10:00 PM",
      totalAmount: "900",
      status: "Drying",
    },
    {
      orderId: "12351",
      customerPhoto:
        "https://res.cloudinary.com/dcli1vwir/image/upload/v1759141920/z8vsizsmp7ysh4jhhgjv.jpg",
      customerName: "Ethan Foster",
      customerRating: "4.4",
      customerAddress: "Flat 7A, Gulshan-e-Iqbal, Karachi",
      customerDistance: "1.9",
      orderWeight: "2.2",
      totalItems: "5",
      serviceType: "Ironing",
      scheduledPickup: "Today, 9:00 PM - 11:00 PM",
      scheduledDeadline: "Tomorrow, 9:00 PM - 11:00 PM",
      totalAmount: "650",
      status: "Completed",
    },
  ];

  return (
    <div className="p-5 flex flex-col gap-2">
      <h1>Active Orders</h1>
      <h1 className="text-[var(--textSecondary)]  ">
        فعال آرڈرز
      </h1>

      <div className="flex flex-col gap-5">
        {orders.length === 0 ? (
          <div className="bg-[var(--foreground)] flex flex-col gap-2  items-center justify-center h-60 rounded-lg mt-3 dark:bg-[var(--foreground)] ">
            <h1 className="text-[var(--textSecondary)] dark:text-[var(--textSecondary)]">
              No active orders
            </h1>
            <h1 className="text-[var(--textSecondary)] dark:text-[var(--textSecondary)]">
              کوئی فعال آرڈر نہیں
            </h1>
            <p className="text-[var(--textSecondary)] dark:text-[var(--textSecondary)]">
              Go online to start receiving orders
            </p>
          </div>
        ) : (
          <div className="flex flex-col gap-2 w-full">
            {orders.map((o) => (
              <Order key={o.orderId} {...o} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
