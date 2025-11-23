import Link from 'next/link';
import React from 'react'

export default function Navbar() {
    // Navigation links for the navbar must be defined as object having name and route
    const Links: { name: string; route: string }[] = [
        { name: "Home", route: "/" },
        { name: "Your Orders", route: "/your-orders" },
        { name: "Find Dhobi", route: "/find-dhobi" },
        { name: "Become a Dhobi", route: "/become-dhobi" },
        { name: "Become a Rider", route: "/become-rider" },
      
    ];
  return (
    <div className='flex gap-6'>
        
            {Links.map((link) => (
               <Link key={link.name} href={link.route} className='text-textSecondary hover:text-textColor cursor-pointer transition duration-300 ease-in-out '>
                    {link.name}
                </Link>
            ))}
       
    </div>
  )
}
