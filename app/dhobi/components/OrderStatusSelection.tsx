'use client';
import { useState } from 'react';
import { Anvil, Check, CheckCircle, PackageOpen, WashingMachine, Wind, } from 'lucide-react';

type Props = {
    heading: string;
    urduHeading: string;
    icon: React.ReactNode;
    order: any;
}

export default function OrderStatusSelection({ heading, urduHeading, icon, order }: Props) {
  
    const handlestatusclick = () => {
        console.log(`${heading} clicked`);
    }
    return (
        <div onClick={handlestatusclick} className='flex justify-between items-center bg-background p-4 rounded-lg w-full cursor-pointer hover:shadow-md'>
            <div className='flex justify-start items-center gap-2'>
                <div className='flex justify-center items-center w-11 h-11 rounded-full text-textSecondary bg-textSecondary/20'>
                    {icon}
                </div>
                <div>
                    <h3>{heading ? heading : ''}</h3>
                    <h3 className='text-textSecondary'>{urduHeading ? urduHeading : ''}</h3>
                </div>
            </div >
            <div> <CheckCircle className='w-7 h-7 text-secondary' /></div>
        </div>
    )
}
