'use client';
import { Bell, List, User , X} from "lucide-react";
import ThemeToggle from "@/components/ThemeToggle"
import { useState, ReactElement } from "react";

import Sidebar from "./Sidebar";
import { truncateSync } from "fs";
export default function ActionButtons() {
 
    const [isOpen, setIsOpen] = useState(false);
  return (
  
    <div className="flex items-center gap-5">
        <div><ThemeToggle /></div>
        <div><Bell size={20} className="text-textSecondary hover:text-textColor cursor-pointer transition duration-300 ease-in-out " /></div>
        <div><User size={20} className="text-textSecondary hover:text-textColor cursor-pointer transition duration-300 ease-in-out " /></div>
        <div> {isOpen ?  <X onClick={() => setIsOpen(!isOpen)} size={20} className="text-textSecondary hover:text-textColor cursor-pointer transition duration-300 ease-in-out md:hidden " />  : <List onClick={() => setIsOpen(!isOpen)} size={20} className="text-textSecondary hover:text-textColor cursor-pointer transition duration-300 ease-in-out md:hidden " /> }</div>
        {isOpen && <Sidebar />}
      </div>
  )
}
