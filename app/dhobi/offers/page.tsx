'use client';
import Button from "@/component/Button";
import { RefreshCw } from "lucide-react";
import React, { useState } from "react";
import OfferCard from "../components/OfferCard";
import IMAGES from "@/public/assets/images";

const Offers = () => {
  const [tab, setTab] = useState<"pending" | "accepted">("pending");

  return (
    <div className="p-5 gap-2">
      <div className="flex justify-between items-center mb-5">
        <div>
          <h1 className="text-[20px]">Customer Offers</h1>
          <h1 className="text-(--textSecondary) dark:text-(--textSecondary)">
            کسٹمر آفرز
          </h1>
        </div>

        <Button title="Refresh" icon={<RefreshCw />} />
      </div>

      {/* Tabs section */}
      <div>
        <nav className="flex items-center gap-8 border-b border-gray-200 dark:border-gray-700">
          <Button
            variant="text"
            onClick={() => setTab("pending")}
            className={`pb-3 -mb-px text-sm font-medium transition-colors duration-150 ${
              tab === "pending"
                ? "text-blue-600 border-b-2 border-blue-600"
                : "text-gray-600 dark:text-gray-300"
            }`}
          >
            <span>Pending (2)</span>
          </Button>

          <Button
            variant="text"
            onClick={() => setTab("accepted")}
            className={`pb-3 -mb-px text-sm font-medium transition-colors duration-150 ${
              tab === "accepted"
                ? "text-blue-600 border-b-2 border-blue-600"
                : "text-gray-600 dark:text-gray-300"
            }`}
          >
            Accepted (0)
          </Button>
        </nav>

        <div className="mt-6">
          {tab === "pending" ? (
            <div className="space-y-3">
              {/* Replace these placeholders with real offer cards when data is available */}
              <OfferCard
                avatarUrl={IMAGES.usman.src}
                orderId="Order #12345"
                name="Ali Ahmed"
                service="Wash Only"
                pickupTime="Today, 5:00 PM"
                distance="1.8 km"
                weight="3 kg"
                customerOffer={250}
                yourRate={280}
                timeRemaining="7:17"
                onAccept={() => console.log('Accepted order #12345')}
                onCounter={() => console.log('Counter offer for #12345')}
              />

              <OfferCard
                orderId="Order #12346"
                name="Sara Khan"
                service="Wash & Fold"
                pickupTime="Tomorrow, 10:00 AM"
                distance="2.4 km"
                weight="5 kg"
                customerOffer={300}
                yourRate={320}
                timeRemaining="4:05"
                onAccept={() => console.log('Accepted order #12346')}
                onCounter={() => console.log('Counter offer for #12346')}
              />
            </div>
          ) : (
            <div className="p-6 text-sm text-(--textSecondary)">No accepted offers yet.</div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Offers;
