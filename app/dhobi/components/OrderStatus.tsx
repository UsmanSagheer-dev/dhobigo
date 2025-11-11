export default function OrderStatus({ status }: { status: string }) {
    return (
        <div className={`flex justify-center items-center text-xs 
        ${status === "Pickup Pending" ? "text-orange-500 bg-orange-500/20" :
                status === "Coming for Pickup" ? "text-sky-500 bg-sky-500/20" :
                    status === "Picked" ? "text-lime-500 bg-lime-500/20" :
                        status === "Washing" ? "text-indigo-500 bg-indigo-500/20" :
                            status === "Drying" ? "text-yellow-500 bg-yellow-500/20" :
                                status === "Ironing" ? "text-purple-500 bg-purple-500/20" :
                                    status === "Out for Delivery" ? "text-blue-500 bg-blue-500/20" :
                                        status === "Delivered" ? "text-green-500 bg-green-500/20" :
                                            status === "Completed" ? "text-emerald-500 bg-emerald-500/20 " :
                                                "text-red-500 bg-red-500/20"}
        px-4 py-2 rounded-full`}>
            <p>{status}</p>
        </div>
    )
}
