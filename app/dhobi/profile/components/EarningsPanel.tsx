"use client";
import React from "react";
import PayoutHistoryItem from "./PayoutHistoryItem";

type Props = {
  totalEarnings: number;
  completedJobs: number;
  pendingOffers: number;
};

const EarningsPanel: React.FC<Props> = ({
  totalEarnings,

}) => {
  const today = Math.min(2500, totalEarnings);
  const thisWeek = Math.min(14000, totalEarnings);

  const history = [
    { date: "2025-11-06", orders: 6, amount: 2800, status: "Paid" as const },
    { date: "2025-11-05", orders: 8, amount: 3200, status: "Paid" as const },
    { date: "2025-11-04", orders: 5, amount: 2100, status: "Paid" as const },
    { date: "2025-11-03", orders: 7, amount: 2500, status: "Pending" as const },
  ];

  return (
    <div className="space-y-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="p-4 bg-white dark:bg-gray-800 rounded-md shadow-sm flex items-center justify-between">
          <div>
            <div className="text-sm text-(--textSecondary)">Today</div>
            <div className="text-2xl font-semibold">₹{today}</div>
          </div>
          <div className="h-10 w-10 rounded-lg bg-green-100 text-green-600 flex items-center justify-center">
            $
          </div>
        </div>

        <div className="p-4 bg-white dark:bg-gray-800 rounded-md shadow-sm flex items-center justify-between">
          <div>
            <div className="text-sm text-(--textSecondary)">This Week</div>
            <div className="text-2xl font-semibold">₹{thisWeek}</div>
          </div>
          <div className="h-10 w-10 rounded-lg bg-blue-100 text-blue-600 flex items-center justify-center">
            $
          </div>
        </div>
      </div>

      <div className="p-4 bg-white dark:bg-gray-800 rounded-md shadow-sm">
        <h3 className="text-lg font-medium mb-3">
          Payout History / <span className="font-urdu">ادائیگی کی تاریخ</span>
        </h3>

        <div>
          {history.map((h) => (
            <PayoutHistoryItem
              key={h.date}
              date={h.date}
              orders={h.orders}
              amount={h.amount}
              status={h.status}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default EarningsPanel;
