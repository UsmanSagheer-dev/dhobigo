"use client"
import { PowerIcon } from 'lucide-react'
import React, { useState } from 'react'

export default function DhobiPortalHero() {
  const [active, setActive] = useState(false);

  const handleClick = () => {
    setActive(!active);
    console.log("clicked");
  };

  return (
      <div className='flex items-center gap-2 flex-col bg-white dark:bg-slate-900 p-10 rounded-lg mt-5'>
            <p  >Your are {active ? 'Online' : 'Offline'}</p>
            <p className='  font-bold'>آپ {active ? 'آن لائن ہیں' : 'آف لائن ہیں'}</p>
    <div 
      onClick={handleClick} 
      className={`h-50 w-50 rounded-full flex items-center justify-center transition-all duration-300 relative
        ${active ? 'bg-green-500  ' : 'bg-gray-300 shadow-md'}`}
    >
      {active && <div className="absolute m-auto h-40 w-40 inset-0 rounded-full bg-green-500/30 animate-ping"></div>}
      <PowerIcon className='text-white relative z-10' size={50} />
    </div>
   {active && <div>
      <p className='text-green-500'>✓ Accepting orders  </p>
      <p> آرڈرز قبول کر رہے ہیں</p>
    </div>}
     </div>
  );
}