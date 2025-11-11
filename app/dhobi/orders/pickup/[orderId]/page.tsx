import Button from '@/component/Button'
import Input from '@/component/Input';
import { ArrowLeft, CameraIcon, MapPin, Navigation, QrCode } from 'lucide-react'

import Link from 'next/link'
export default function Pickup() {
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

    <div className='flex flex-col justify-center p-5 gap-4'>
      <div className='flex justify-start items-center gap-4 text-[var(--textColor)] text-lg  '>
        <Link href={`/dhobi/orders`}>
          <ArrowLeft size={20} />
        </Link>
        <span>
          <h1>Pickup</h1>
          <h1 className="text-[var(--textSecondary)]  ">پک اپ</h1>
        </span>
      </div>
      <div className='flex flex-col justify-center items-center relative  gap-2 bg-indigo-200  p-10 rounded-lg'>
        <MapPin size={40} className=' text-[var(--primary)]' />
        <h1 className=' text-2xl text-[var(--textColor)]/60 dark:text-black/60 '>Customer Location</h1>
        <p className=' text-[var(--textSecondary)] dark:text-black/60  '>2.3 km away</p>
        <Button className='absolute bottom-4 right-4' icon={<Navigation size={15} />} >
          Navigate
        </Button>
      </div>
      <div className='flex justify-start gap-2 bg-[var(--foreground)] p-4 rounded-lg'>
        <div className='flex h-12 w-12 rounded-full overflow-hidden'>
          <img src={orders.customerPhoto} alt="map" className='object-contain w-full rounded-lg' />
        </div>
        <div>
          <p className='text-[var(--textColor)]'>{orders.customerName}</p>
          <p className='text-sm text-[var(--textSecondary)]'>{orders.customerAddress}</p>
        </div>
      </div>
      <div className='flex flex-col justify-centre gap-2 bg-[var(--foreground)] items-start gap-5 p-4 rounded-lg'>
        <h3>Pickup Steps / پک اپ کے اقدامات</h3>
        <ol className='flex flex-col gap-4 p-5 w-full'>
          <li className='list-decimal text-[var(--textColor)] '>
            <p>Take Photo of Clothes / کپڑوں کی تصویر لیں</p>
            <div className='flex flex-col justify-center items-center h-30 rounded-lg gap-2 mt-2 text-[var(--textSecondary)] bg-[var(--foreground)] border-2 border-dashed border-[var(--borderColor)] p-5'>
              <span className='text-3xl '>
                <CameraIcon />
              </span>
              <p className=''>Take a clear photo of the clothes to be picked up / اٹھانے کے لیے کپڑوں کی واضح تصویر لیں</p>
            </div>
          </li>
          <li className='list-decimal text-[var(--textColor)] '>
            <p>Scan Qr Code On Bag / بیگ پر کیو آر کوڈ اسکین کریں</p>
            <div className='flex flex-col justify-center items-center h-30 rounded-lg gap-2 mt-2 text-[var(--textSecondary)] bg-[var(--foreground)] border-2 border-dashed border-[var(--borderColor)] p-5'>
              <span className='text-3xl '>
                <QrCode />
              </span>
              <p className=''>Tap to Scan QR / بیگ پر کیو آر کوڈ اسکین کریں</p>
            </div>
          </li>
          <li className='list-decimal text-[var(--textColor)] '>
            <p>Enter Customer OTP / گاہک کا او ٹی پی درج کریں</p>
            <div className='flex flex-col justify-center items-center h-30 rounded-lg gap-2 mt-2 text-[var(--textSecondary)] bg-[var(--foreground)]  p-5'>
              <Input />
            </div>
          </li>


        </ol>
      </div>
      <Button className='mt-4 bg-[var(--secondary)]'  >Confirm Pickup</Button>
    </div>
  )
}
