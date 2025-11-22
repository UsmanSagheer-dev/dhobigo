'use client';
import Button from '@/components/Button'
import Input from '@/components/Input';
import { ArrowLeft, CameraIcon, MapPin, Navigation, QrCode } from 'lucide-react'
import React, {use} from 'react';
import { useSelector } from 'react-redux';
import Link from 'next/link'


export default function Pickup({ params }: { params: any}) {
  const OrderDetails: any = use(params);
  const ordertobePickedUpId = Number(OrderDetails.orderId);
   const ordersFetched: Array<any> = useSelector((state: any) => state.orders.orders);
  const order = ordersFetched.find((o: any) => o.orderId === ordertobePickedUpId);
  

  return (

    <div className='flex flex-col justify-center p-5 gap-4'>
      <div className='flex justify-start items-center gap-4 text-textColor text-lg  '>
        <Link href={`/dhobi/orders`}>
          <ArrowLeft size={20} />
        </Link>
        <span>
          <h1>Pickup</h1>
          <h1 className="text-textSecondary  ">پک اپ</h1>
        </span>
      </div>
      <div className='flex flex-col justify-center items-center relative  gap-2 bg-indigo-200  p-10 rounded-lg'>
        <MapPin size={40} className=' text-primary' />
        <h1 className=' text-2xl text-textColor/60 dark:text-black/60 '>Customer Location</h1>
        <p className=' text-textSecondary dark:text-black/60  '>{order.customerDistance} km away</p>
        <Button className='absolute bottom-4 right-4' icon={<Navigation size={15} />} >
          Navigate
        </Button>
      </div>
      <div className='flex justify-start gap-2 bg-foreground p-4 rounded-lg'>
        <div className='flex h-12 w-12 rounded-full overflow-hidden'>
          <img src={order.customerPhoto} alt="map" className='object-contain w-full rounded-lg' />
        </div>
        <div>
          <p className='text-textColor'>{order.customerName}</p>
          <p className='text-sm text-textSecondary'>{order.customerAddress}</p>
        </div>
      </div>
      <div className='flex flex-col justify-centre gap-2 bg-foreground items-start gap-5 p-4 rounded-lg'>
        <h3>Pickup Steps / پک اپ کے اقدامات</h3>
        <ol className='flex flex-col gap-4 p-5 w-full'>
          <li className='list-decimal text-textColor '>
            <p>Take Photo of Clothes / کپڑوں کی تصویر لیں</p>
            <div className='flex flex-col justify-center items-center h-30 rounded-lg gap-2 mt-2 text-textSecondary bg-foreground border-2 border-dashed border-borderColor p-5'>
              <span className='text-3xl '>
                <CameraIcon />
              </span>
              <p className=''>Take a clear photo of the clothes to be picked up / اٹھانے کے لیے کپڑوں کی واضح تصویر لیں</p>
            </div>
          </li>
          <li className='list-decimal text-textColor '>
            <p>Scan Qr Code On Bag / بیگ پر کیو آر کوڈ اسکین کریں</p>
            <div className='flex flex-col justify-center items-center h-30 rounded-lg gap-2 mt-2 text-textSecondary bg-foreground border-2 border-dashed border-borderColor p-5'>
              <span className='text-3xl '>
                <QrCode />
              </span>
              <p className=''>Tap to Scan QR / بیگ پر کیو آر کوڈ اسکین کریں</p>
            </div>
          </li>
          <li className='list-decimal text-textColor '>
            <p>Enter Customer OTP / گاہک کا او ٹی پی درج کریں</p>
            <div className='flex flex-col justify-center items-center h-30 rounded-lg gap-2 mt-2 text-textSecondary bg-foreground  p-5'>
              <Input />
            </div>
          </li>


        </ol>
      </div>
      <Button className='mt-4 bg-secondary'  >Confirm Pickup</Button>
    </div>
  )
}
