import Image from "next/image"

export default function Logo() {
  return (
    <div className="inline-flex justify-between items-center gap-2 cursor-pointer ">
      <div className="rounded-lg bg-primary flex justify-center items-center w-10 h-10  text-4xl" ><p className="text-textColor font-logo">D</p></div>
      <div className="text-textColor text-3xl font-bold">DhobiGo</div>
    </div>
  )
}
