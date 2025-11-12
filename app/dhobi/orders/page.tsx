'use client'

import { use, useEffect } from "react";
import Order from "../components/Order";
import { useDispatch, useSelector } from "react-redux";
import { fetchOrders } from "@/store/slices/ordersSlice";
import { types } from "util";
 

export default function Orders() {
  const dispatch = useDispatch();
useEffect(() => {
    dispatch(fetchOrders() as any);
  }, []);
  const orders = useSelector((state: any) => state.orders.orders);
  console.log(orders);
  return (
    <div className="p-5 flex flex-col gap-2">
      <h1>Active Orders</h1>
      <h1 className="text-[var(--textSecondary)]  ">
        فعال آرڈرز
      </h1>

      <div className="flex flex-col gap-5">
        {orders.length === 0 ? (
          <div className="bg-[var(--foreground)] flex flex-col gap-2  items-center justify-center h-60 rounded-lg mt-3 dark:bg-[var(--foreground)] ">
            <h1 className="text-[var(--textSecondary)] dark:text-[var(--textSecondary)]">
              No active orders
            </h1>
            <h1 className="text-[var(--textSecondary)] dark:text-[var(--textSecondary)]">
              کوئی فعال آرڈر نہیں
            </h1>
            <p className="text-[var(--textSecondary)] dark:text-[var(--textSecondary)]">
              Go online to start receiving orders
            </p>
          </div>
        ) : (
          <div className="flex flex-col gap-2 w-full">
            {orders.map((o : any) => (
              <Order key={o.orderId} {...o} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
