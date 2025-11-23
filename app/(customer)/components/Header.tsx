import ThemeToggle from "@/components/ThemeToggle"
import Navbar from "./Navbar"
import Logo from "@/components/Logo"

export default function Header() {


  return (
    <div className='bg-foreground/80 p-5 flex justify-between items-center sticky top-0 z-50'>
      <div className="absolute inset-0 backdrop-blur-[5px] -z-10"></div>
      <div className="absolute bottom-0 left-0 right-0 h-0.25 bg-gradient-to-r from-primary/30 via-primary/90 to-primary/30 -z-10"></div>
      <div><Logo /></div>
      <Navbar />
      <div className="flex items-center gap-5">
        <div><ThemeToggle /></div>
        <div>Action Buttons</div>
      </div>
    </div>
  )
}
