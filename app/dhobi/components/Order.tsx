import Button from '@/component/Button'
import { MapPin, MessageSquareMore, Navigation, Phone, Star } from 'lucide-react'
import React from 'react'

export default function Order(props: any) {
    return (
        // props: orderId, customerPhoto, customerName, customerRating, customerAddress, customerDistance, orderWeight, totalItems, serviceType, scheduledPickup, scheduledDeadline, totalAmount
        <div className=' flex flex-col w-full gap-5 bg-[var(--foreground)] p-5 rounded-lg dark:bg-[var(--foreground)] '>
            <div className='flex justify-between items-center '>
                <div className='flex flex-col gap-1 '>

                    <p className='text-xs text-[var(--textSecondary)] dark:text-[var(--textSecondary)]'># Order ID</p>
                    <p className='text-sm text-[var(--TextColor)] dark:text-[var(--TextColor)]'>{props.orderId}</p>

                </div>
                <div className='flex gap-1'>
                <div className='flex justify-center items-center box-border text-xs text-red-500 dark:text-[var(--textSecondary)] bg-red-500/20  px-4 py-2 rounded-full'>
                    <p className='align-middle'>Pickup Pending</p>
                </div>
                <div className='flex justify-center items-center box-border text-xs text-blue-500 dark:text-[var(--textSecondary)] bg-blue-500/20  px-4 py-2 rounded-full'>
                    <p className='align-middle'>Items Picked</p>
                </div>
                </div>
            </div>
            <div className='flex justify-between items-center '>
                <div className='flex flex-row gap-2  justify-center items-center'>
                    <div className='rounded-full'>
                        <img src={props.customerPhoto} alt='Customer avatar' className='h-10 w-10 rounded-full' />
                    </div>
                    <div className=''>
                        <p className='text-sm text-[var(--TextColor)] dark:text-[var(--TextColor)]'>{props.customerName}</p>
                        <div className='flex flex-row justify-center items-center align-middle gap-2 '>
                            <p className='text-sm text-[var(--textSecondary)] dark:text-[var(--textSecondary)] '>{props.customerRating}</p>
                            <Star className='align-middle text-yellow-300 ' size={14} /> </div>
                    </div>
                </div>
                <div className='flex flex-row gap-4  justify-center items-center'>
                    <div className='flex justify-center items-center align-middle bg-[var(--secondary)]  rounded-2xl p-2'> <MessageSquareMore color='white' /></div>
                    <div className='flex justify-center items-center align-middle bg-[var(--primary)] rounded-2xl  p-2'>  <Phone color='white'/></div>
                </div>
            </div>
            <div className='flex gap-2 items-center flex-1 bg-[var(--background)] dark:bg-[var(--background)] p-3 rounded-lg'>
                <MapPin color='var(--textSecondary)' />
                <div>
                    <p className='text-sm text-[var(--textSecondary)] dark:text-[var(--textSecondary)]'>{props.customerAddress}</p>
                    <p className='text-xs text-[var(--primary)] dark:text-[var(--primary)]'>{props.customerDistance} km Away</p>
                </div>
            </div>
            <div className='flex justify-evenly items-center overflow-x-scroll  w-[500px] lg:w-full   gap-4 mt-2 border-t border-b pt-4 pb-4 border-[var(--border)]  '>
                <div className='flex flex-col items-center'>
                    <p className='text-sm text-[var(--textSecondary)] dark:text-[var(--textSecondary)]'>Weight</p>
                    <h3 className='text-sm text-[var(--TextColor)] dark:text-[var(--TextColor)]'>{props.orderWeight} kg</h3>
                </div>
                <div>
                    <p className='text-sm text-[var(--textSecondary)] dark:text-[var(--textSecondary)]'>Total Items</p>
                    <h3 className='text-sm text-[var(--TextColor)] dark:text-[var(--TextColor)]'>{props.totalItems} Items</h3>
                </div>
                <div className='flex flex-col items-center'>
                    <p className='text-sm text-[var(--textSecondary)] dark:text-[var(--textSecondary)]'>Service</p>
                    <h3 className='text-sm text-[var(--TextColor)] dark:text-[var(--TextColor)]'>{props.serviceType}</h3>
                </div>
                <div className='flex flex-col items-center'>
                    <p className='text-sm text-[var(--textSecondary)] dark:text-[var(--textSecondary)]'>Scheduled Pickup</p>
                    <h3 className='text-sm text-[var(--TextColor)] dark:text-[var(--TextColor)]'>{props.scheduledPickup}</h3>
                </div>
                <div>
                    <p className='text-sm text-[var(--textSecondary)] dark:text-[var(--textSecondary)]'>Scheduled Deadline</p>
                    <h3 className='text-sm text-[var(--TextColor)] dark:text-[var(--TextColor)]'>{props.scheduledDeadline}</h3>
                </div>
                <div className='flex flex-col items-center'>
                    <p className='text-sm text-[var(--textSecondary)] dark:text-[var(--textSecondary)]'>Total Amount</p>
                    <h3 className='text-sm text-[var(--TextColor)] dark:text-[var(--TextColor)]'>PKR {props.totalAmount}</h3>
                </div>
            </div>
            <div className='flex justify-between items-center mt-2 gap-2'>
                <Button Title='Navigate' className='flex-1 bg-[var(--secondary)] hover:bg-[var(--secondary)]' icon={<Navigation size={18} />} />
                <Button Title='Start Pickup' className='flex-1  bg-[var(--primary)] hover:bg-[var(--primary)] '/>
                <Button Title='Driver Sent' className='flex-1 bg-[var(--textSecondary)] hover:bg-[var(--textSecondary)] '/>
            </div>
        </div>
    )
}
