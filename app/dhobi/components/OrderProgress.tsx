
import {Anvil, Check,CheckCircle, PackageOpen, WashingMachine, Wind, } from 'lucide-react';
import OrderStatusSelection from './OrderStatusSelection';
import Button from '@/components/Button';

export default function OrderProgress({ order }: { order: any }) {
    const orderStatus = [
        {
            heading: "Received",
            urduHeading: "موصول ہوا",
            icon: <PackageOpen />
        },
        {
            heading: "Washing",
            urduHeading: "دھونا",
            icon: <WashingMachine />
        },
        {
            heading: "Drying",
            urduHeading: "خشک کرنا",
            icon: <Wind />
        },
        {
            heading: "Pressing",
            urduHeading: "استری کرنا",
            icon: <Anvil />
        },
        {
            heading: "Ready for Delivery",
            urduHeading: "ترسیل کے لئے تیار",
            icon: <CheckCircle />
        },
        {
            heading: "Out for Delivery",
            urduHeading: "ترسیل کے لئے باہر",
            icon: <Wind />
        },
        {
            heading: "Delivered",
            urduHeading: "پہنچایا گیا",
            icon: <Check />
        }
    ];

    return (
        <div className='flex flex-col items-start justify-center gap-2 bg-[var(--foreground)] p-4 rounded-lg'>
            <h2>Update Status / حیثیت اپ ڈیٹ کریں</h2>
            <div className='flex flex-col w-full gap-4'>
                {orderStatus.map((status, index) => (
                    <OrderStatusSelection
                        key={index}
                        heading={status.heading}
                        urduHeading={status.urduHeading}
                        icon={status.icon}
                        order={order}
                    />
                ))}
            </div>
           <div className='flex flex-col w-full bg-[var(--background)] p-4 rounded-lg gap-2'>
            <h3 className='text-[var(--textSecondary)]'>Additional Notes / نوٹس</h3>
            <textarea
                className='w-full bg-[var(--foreground)] border border-[var(--borderColor)] rounded-lg p-2 text-[var(--textColor)]'
                rows={4}
                placeholder='Enter any additional notes here... / یہاں کوئی اضافی نوٹس درج کریں...'
            ></textarea>
           </div>
           <div className='w-full'>
            <Button title="Add additional Note / نوٹ شامل کریں" className='w-full bg-[var(--primary)]/90 hover:bg-[var(--primary)] ' />
           </div>
           
        </div>
    )
}

