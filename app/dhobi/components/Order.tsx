import Button from "@/component/Button";
import { MapPin, MessageSquareMore, Navigation, Phone, Star, } from "lucide-react";

export default function Order({
  orderId,
  customerPhoto,
  customerName,
  customerRating,
  customerAddress,
  customerDistance,
  orderWeight,
  totalItems,
  serviceType,
  scheduledPickup,
  scheduledDeadline,
  totalAmount,
}: any) {
  return (
    <div className="flex flex-col w-full gap-5 bg-[var(--foreground)] p-5 rounded-lg dark:bg-[var(--foreground)] ">
      
      {/* Order ID */}
      <div className="flex justify-between items-center">
        <div className="flex flex-col gap-1">
          <p className="text-xs text-[var(--textSecondary)]"># Order ID</p>
          <p className="text-sm text-[var(--TextColor)]">{orderId}</p>
        </div>

        <div className="flex gap-1">
          <div className="flex justify-center items-center text-xs text-red-500 bg-red-500/20 px-4 py-2 rounded-full">
            <p>Pickup Pending</p>
          </div>
          <div className="flex justify-center items-center text-xs text-blue-500 bg-blue-500/20 px-4 py-2 rounded-full">
            <p>Items Picked</p>
          </div>
        </div>
      </div>

      {/* Customer Info */}
      <div className="flex justify-between items-center">
        <div className="flex flex-row gap-2 items-center">
          <img src={customerPhoto} alt="Customer avatar" className="h-10 w-10 rounded-full" />
          
          <div>
            <p className="text-sm text-[var(--TextColor)]">{customerName}</p>
            <div className="flex items-center gap-2">
              <p className="text-sm text-[var(--textSecondary)]">{customerRating}</p>
              <Star className="text-yellow-300" size={14} />
            </div>
          </div>
        </div>

        <div className="flex gap-4 items-center">
          <div className="flex items-center bg-[var(--secondary)] rounded-2xl p-2">
            <MessageSquareMore color="white" />
          </div>
          <div className="flex items-center bg-[var(--primary)] rounded-2xl p-2">
            <Phone color="white" />
          </div>
        </div>
      </div>

      {/* Address */}
      <div className="flex gap-2 items-center bg-[var(--background)] p-3 rounded-lg">
        <MapPin color="var(--textSecondary)" />
        <div>
          <p className="text-sm text-[var(--textSecondary)]">{customerAddress}</p>
          <p className="text-xs text-[var(--primary)]">{customerDistance} km Away</p>
        </div>
      </div>

      {/* Order Details */}
  <div className="flex justify-evenly items-center overflow-x-auto lg:overflow-x-hidden w-[500px] lg:w-full gap-4 mt-2 border-t border-b pt-4 pb-4 border-[var(--border)]">
        <div className="text-center">
          <p className="text-sm text-[var(--textSecondary)]">Weight</p>
          <h3 className="text-sm text-[var(--TextColor)]">{orderWeight} kg</h3>
        </div>

        <div className="text-center">
          <p className="text-sm text-[var(--textSecondary)]">Total Items</p>
          <h3 className="text-sm text-[var(--TextColor)]">{totalItems} Items</h3>
        </div>

        <div className="text-center">
          <p className="text-sm text-[var(--textSecondary)]">Service</p>
          <h3 className="text-sm text-[var(--TextColor)]">{serviceType}</h3>
        </div>

        <div className="text-center">
          <p className="text-sm text-[var(--textSecondary)]">Scheduled Pickup</p>
          <h3 className="text-sm text-[var(--TextColor)]">{scheduledPickup}</h3>
        </div>

        <div className="text-center">
          <p className="text-sm text-[var(--textSecondary)]">Scheduled Deadline</p>
          <h3 className="text-sm text-[var(--TextColor)]">{scheduledDeadline}</h3>
        </div>

        <div className="text-center">
          <p className="text-sm text-[var(--textSecondary)]">Total Amount</p>
          <h3 className="text-sm text-[var(--TextColor)]">PKR {totalAmount}</h3>
        </div>
      </div>

      {/* Buttons */}
      <div className="flex justify-between mt-2 gap-2">
        <Button
          title="Navigate"
          className="flex-1 bg-[var(--secondary)] hover:bg-[var(--secondary)]"
          icon={<Navigation size={18} />}
        />
        <Button
          title="Start Pickup"
          className="flex-1 bg-[var(--primary)] hover:bg-[var(--primary)]"
        />
        <Button
          title="Driver Sent"
          className="flex-1 bg-[var(--textSecondary)] hover:bg-[var(--textSecondary)]"
        />
      </div>
    </div>
  );
}
