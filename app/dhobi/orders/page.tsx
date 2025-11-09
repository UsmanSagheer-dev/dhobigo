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
    },
  ];

  return (
    <div className="p-5 flex flex-col gap-2">
      <h1>Active Orders</h1>
      <h1 className="text-[var(--textSecondary)] dark:text-[var(--textSecondary)] ">
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
