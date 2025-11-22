'use client';
import React, {use} from 'react';
import { useSelector } from 'react-redux';
import Link from 'next/link'
import { ArrowLeft, } from 'lucide-react'
import OrderProgress from '@/app/dhobi/components/OrderProgress';
export default function LaundryProgress({ params }: { params: any}) {
   const OrderDetails: any = use(params);
  const ordertobePickedUpId = Number(OrderDetails.orderId);
   const ordersFetched: Array<any> = useSelector((state: any) => state.orders.orders);
  const order = ordersFetched.find((o: any) => o.orderId === ordertobePickedUpId);
  return (
    <div className="p-5 flex flex-col gap-2">
      <div className='flex justify-start items-center gap-4 text-textColor text-lg  '>
        <Link href={`/dhobi/orders`}>
          <ArrowLeft size={20} />
        </Link>
        <span>
          <h1>Laundry Progress</h1>
          <h1 className="text-textSecondary  ">لانڈری کی پیشرفت </h1>
        </span>
      </div>
      <div className='flex justify-between gap-2 bg-foreground p-4 rounded-lg'>
         <div>
          <p className='text-sm text-textSecondary'>#Order ID</p>
          <p className='text-textColor'>{order.orderId}</p>
        </div>
        <div>
          <p className='text-sm text-textSecondary'>Customer</p>
          <p className='text-textColor'>{order.customerName}</p>
        </div>
      </div>
      <OrderProgress order={order} />  
    </div>
  )
}
