import React from 'react'

export default function Input() {
  return (
    <div>
      {/* create inpuut for otp */}
        <input type="text" maxLength={6} className='w-full p-4 border-2 border-borderColor rounded-lg text-center text-2xl  ' placeholder='Enter OTP' />
    </div>
  )
}
