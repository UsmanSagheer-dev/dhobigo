import React from 'react'
import { DollarSignIcon, PowerIcon } from 'lucide-react'
export default function DhobiPortalCard(props: any) {
  return (
    <div className='flex flex-1 items-center justify-between bg-foreground  p-5 rounded-lg'>
      <div className='flex flex-col  gap-1 items-start justify-center'>
        <p className='text-[14px]'>{props?.title}</p>
        <p className='font-urdu text-textSecondary'>{props?.urduTitle}</p>
        <p className={`${props.subtitleColor} `}>{props?.subtitle}</p>
      </div>
      <div className={`${props.iconbgColor}  text-white p-3 rounded-lg flex items-center justify-center`}>
       {props.icon}
      </div>
    </div>
  )
}
