"use client";
import React, { useEffect, useState } from "react";
import { Offer } from "@/types/types";
import Button from "@/components/Button";

type Props = {
  isOpen: boolean;
  onClose: () => void;
  offer?: Offer | null;
  onSend: (amount: number) => void;
};

export default function CounterModal({ isOpen, onClose, offer, onSend }: Props) {
  const [value, setValue] = useState<number>(offer?.yourRate ?? offer?.customerOffer ?? 0);

  useEffect(() => {
    if (offer) setValue(offer.yourRate ?? offer.customerOffer ?? 0);
  }, [offer]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <div className="absolute inset-0 bg-black/40" onClick={onClose} />

      <div className="relative w-[92%] max-w-lg bg-white dark:bg-[#0b1720] rounded-2xl shadow-lg p-6">
        <div className="flex items-start justify-between">
          <div>
            <h3 className="text-lg font-semibold">Counter Offer</h3>
            <div className="text-sm text-gray-500">جوابی پیشکش</div>
          </div>
          <button onClick={onClose} className="text-gray-500 hover:text-gray-700">✕</button>
        </div>

        <div className="mt-4 grid grid-cols-2 gap-4">
          <div className="rounded-lg border border-orange-200 bg-orange-50 p-4 text-center">
            <div className="text-xs text-orange-600">Customer Offer</div>
            <div className="mt-2 text-orange-700 text-2xl font-semibold">₹{offer?.customerOffer}</div>
          </div>

          <div className="rounded-lg border border-blue-200 bg-blue-50 p-4 text-center">
            <div className="text-xs text-blue-600">Your Rate</div>
            <div className="mt-2 text-blue-700 text-2xl font-semibold">₹{offer?.yourRate}</div>
          </div>
        </div>

        <div className="mt-6">
          <div className="text-sm font-medium">Your Counter Offer</div>
          <div className="mt-2 flex items-center gap-2 bg-gray-50 border border-gray-200 rounded-md px-3 py-2">
            <span className="text-xl">₹</span>
            <input
              className="w-full bg-transparent outline-none text-lg dark:text-black"
              type="number"
              value={value}
              onChange={(e) => setValue(Number(e.target.value))}
              min={offer?.customerOffer ?? 0}
            />
          </div>
          <div className="mt-2 text-xs text-gray-500">Minimum: ₹{offer?.customerOffer} (customer's offer)</div>
        </div>

        <div className="mt-4">
          <div className="text-sm font-medium">Quick Suggestions:</div>
          <div className="mt-2 flex gap-2 flex-wrap">
            {[270, 300, 265, 280].map((v) => (
              <button
                key={v}
                onClick={() => setValue(v)}
                className="px-3 py-2 rounded-md border border-gray-200 text-sm hover:bg-gray-100"
              >
                ₹{v}
              </button>
            ))}
          </div>
        </div>

        <div className="mt-6">
          <div className="rounded-md bg-yellow-50 border border-yellow-100 p-4 text-sm text-yellow-800">
            <div className="font-medium">Tip: Counter offers closer to customer's price are more likely to be accepted</div>
            <div className="text-xs mt-1">نوٹ: کسٹمر کی قیمت کے قریب جوابی پیشکش قبول ہونے کا زیادہ امکان ہے</div>
          </div>
        </div>

        <div className="mt-6">
          <Button
            onClick={() => {
              onSend(value);
            }}
            className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-md text-center cursor-pointer"
          >
            Send Counter Offer / جوابی پیشکش بھےجیں
          </Button>
        </div>
      </div>
    </div>
  );
}
