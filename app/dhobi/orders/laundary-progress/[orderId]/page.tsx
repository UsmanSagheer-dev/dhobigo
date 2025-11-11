import Link from 'next/link'
import { ArrowLeft, } from 'lucide-react'
export default function LaundryProgress() {
  const orders =
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
  };
  return (
    <div className="p-5 flex flex-col gap-2">
      <div className='flex justify-start items-center gap-4 text-[var(--textColor)] text-lg  '>
        <Link href={`/dhobi/orders`}>
          <ArrowLeft size={20} />
        </Link>
        <span>
          <h1>Laundry Progress</h1>
          <h1 className="text-[var(--textSecondary)]  ">لانڈری کی پیشرفت </h1>
        </span>
      </div>
      <div className='flex justify-between gap-2 bg-[var(--foreground)] p-4 rounded-lg'>
         <div>
          <p className='text-sm text-[var(--textSecondary)]'>#Order ID</p>
          <p className='text-[var(--textColor)]'>{orders.orderId}</p>
        </div>
        <div>
          <p className='text-sm text-[var(--textSecondary)]'>Customer</p>
          <p className='text-[var(--textColor)]'>{orders.customerName}</p>
        </div>
      </div>
      <div className='flex justify-between gap-2 bg-[var(--foreground)] p-4 rounded-lg'>
        
      </div>
    </div>
  )
}
