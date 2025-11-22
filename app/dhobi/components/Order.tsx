import Button from "@/components/Button";
import { MapPin, MessageSquareMore, Navigation, Phone, Star, } from "lucide-react";
import Link from 'next/link'
import OrderStatus from "./OrderStatus";
import { stat } from "fs";
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
  status,
}: any) {
  return (
    <div className="flex flex-col w-full gap-5 bg-foreground p-5 rounded-lg ">

      {/* Order ID */}
      <div className="flex justify-between items-center">
        <div className="flex flex-col gap-1">
          <p className="text-xs text-textSecondary"># Order ID</p>
          <p className="text-sm text-textColor">{orderId}</p>
        </div>

        <OrderStatus status={status} />

      </div>

      {/* Customer Info */}
      <div className="flex justify-between items-center">
        <div className="flex flex-row gap-2 items-center">
          <img src={customerPhoto} alt="Customer avatar" className="h-10 w-10 rounded-full" />

          <div>
            <p className="text-sm text-textColor">{customerName}</p>
            <div className="flex items-center gap-2">
              <p className="text-sm text-textSecondary">{customerRating}</p>
              <Star className="text-yellow-300" size={14} />
            </div>
          </div>
        </div>

        <div className="flex gap-4 items-center">
          <div className="flex items-center bg-secondary cursor-pointer rounded-2xl p-2">
            <MessageSquareMore color="white" />
          </div>
          <div className="flex items-center bg-primary cursor-pointer rounded-2xl p-2">
            <Phone color="white" />
          </div>
        </div>
      </div>

      {/* Address */}
      <div className="flex gap-2 items-center bg-background p-3 rounded-lg">
        <MapPin color="textSecondary" />
        <div>
          <p className="text-sm text-textSecondary">{customerAddress}</p>
          <p className="text-xs text-primary">{customerDistance} km Away</p>
        </div>
      </div>

      {/* Order Details */}
      <div className="flex justify-evenly items-center overflow-x-auto lg:overflow-x-hidden w-[500px] lg:w-full gap-4 mt-2 border-t border-b pt-4 pb-4 border-border ">
        <div className="text-center">
          <p className="text-sm text-textSecondary">Weight</p>
          <h3 className="text-sm text-textColor">{orderWeight} kg</h3>
        </div>

        <div className="text-center">
          <p className="text-sm text-textSecondary">Total Items</p>
          <h3 className="text-sm text-textColor">{totalItems} Items</h3>
        </div>

        <div className="text-center">
          <p className="text-sm text-textSecondary">Service</p>
          <h3 className="text-sm text-textColor">{serviceType}</h3>
        </div>

        <div className="text-center">
          <p className="text-sm text-textSecondary">Scheduled Pickup</p>
          <h3 className="text-sm text-textColor">{scheduledPickup}</h3>
        </div>

        <div className="text-center">
          <p className="text-sm text-textSecondary">Scheduled Deadline</p>
          <h3 className="text-sm text-textColor">{scheduledDeadline}</h3>
        </div>

        <div className="text-center">
          <p className="text-sm text-textSecondary">Total Amount</p>
          <h3 className="text-sm text-textColor">PKR {totalAmount}</h3>
        </div>
      </div>

      {/* Buttons */}
      {(status === "Pickup Pending") ? (
        <div className="flex justify-between mt-2 gap-2">
          <Button
            title="Navigate"
            className="flex-1 bg-secondary hover:bg-secondaryhover"
            icon={<Navigation size={18} />}
          />
          <Link href={`/dhobi/orders/pickup/${orderId}`} className="flex-1">
            <Button

              title="Start Pickup"
              className="w-full bg-primary hover:bg-primaryhover"
            />
          </Link>
          <Button
            title="Driver Sent"
            className="flex-1 bg-textSecondary hover:bg-textSecondary"
          />
        </div>) : status === "Washing" || status === "Coming for Pickup" || status === "Drying" || status === "Ironing" ? (
          <div>
            <Link href={`/dhobi/orders/laundary-progress/${orderId}`} >
              <Button
                title="Update Status"
                className="w-full bg-primary hover:bg-primaryhover"
              />
            </Link>
          </div>
        ) : status === "Out for Delivery" ? (
          <div className="flex justify-between mt-2 gap-2">
            <Button
              title="Start Delivery"
              className="w-full bg-primary hover:bg-primaryhover"
            />
          </div>
        ) : status === "Delivered" ? (
          <div>
            <Button
              title="Complete Order"
              className="w-full bg-primary hover:bg-primaryhover"
            />
          </div>
        ) : status === "cancelled" ? (
          <div className="flex justify-between mt-2 gap-2">
            <Button
              title="Update Status"
              disabled
              className="w-full bg-textSecondary hover:bg-textSecondary "
              style={{ cursor: "no-drop" }}
            />
            <Button
              title="Leave Review"
              className="w-full bg-yellow-500 hover:bg-yellow-600"
            />
          </div>) : (<div className="flex justify-between mt-2 gap-2">
            <Button
              title="Order Completed"
              disabled
              className="w-full bg-textSecondary hover:bg-textSecondary"
              style={{ cursor: "no-drop" }}
            />
            <Button
              title="Leave Review"
              className="w-full bg-yellow-500 hover:bg-yellow-600"
            />
          </div>)
      }

    </div>
  );
}
