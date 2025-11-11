import { Anvil, Check, CheckCircle, PackageOpen, WashingMachine, Wind, } from 'lucide-react';

type Props = {
    heading: string;
    urduHeading: string;
    icon: React.ReactNode;
}

export default function OrderStatusSelection({ heading, urduHeading, icon }: Props) {
    return (
        <div className='flex justify-between items-center bg-[var(--background)] p-4 rounded-lg w-full cursor-pointer hover:shadow-md'>
            <div className='flex justify-start items-center gap-2'>
                <div className='flex justify-center items-center w-11 h-11 rounded-full text-[var(--textSecondary)] bg-[var(--textSecondary)]/20'>
                    {icon}
                </div>
                <div>
                    <h3>{heading ? heading : ''}</h3>
                    <h3 className='text-[var(--textSecondary)]'>{urduHeading ? urduHeading : ''}</h3>
                </div>
            </div >
            <div> <CheckCircle className='w-7 h-7 text-[var(--secondary)]' /></div>
        </div>
    )
}
