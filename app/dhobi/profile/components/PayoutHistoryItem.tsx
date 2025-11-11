"use client";
import { PayoutHistoryItemProps } from "@/types/types";
import { CreditCard } from "lucide-react";
import React from "react";


const PayoutHistoryItem: React.FC<PayoutHistoryItemProps> = ({ date, orders, amount, status = "Paid" }) => {
  return (
    <div className="flex items-center justify-between bg-white dark:bg-gray-500 rounded-lg p-4 shadow-sm mb-3">
      <div className="flex items-center gap-4">
        <div className="h-12 w-12 rounded-lg bg-green-50 flex items-center justify-center">
          <div >
            <CreditCard  size={24} color="green" />
            </div>
        </div>
        <div>
          <div className="font-medium dark:text-black">{date}</div>
          <div className="text-sm text-gray-500 dark:text-black">{orders} orders</div>
        </div>
      </div>

      <div className="text-right">
        <div className="font-semibold text-green-600">₹{amount}</div>
        <div className={`text-sm ${status === "Paid" ? "text-green-500" : "text-orange-500"}`}>{status}</div>
      </div>
    </div>
  );
};

export default PayoutHistoryItem;
