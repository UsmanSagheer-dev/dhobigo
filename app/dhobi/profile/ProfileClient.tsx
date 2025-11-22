"use client";
import Button from "@/components/Button";
import { useState } from "react";

import { useSelector } from "react-redux";
import { RootState } from "@/store/store";
import { Offer } from "@/types/types";
import { selectPending, selectAccepted } from "@/store/slices/offersSlice";
import EarningsPanel from "./components/EarningsPanel";
import ProfileForm from "./components/ProfileForm";

const ProfileClient = () => {
  const [tab, setTab] = useState<"earnings" | "profile">("earnings");

  const pendingOffers = useSelector((state: RootState) => selectPending(state)) as Offer[];
  const acceptedOffers = useSelector((state: RootState) => selectAccepted(state)) as Offer[];

  const totalEarnings = acceptedOffers.reduce((sum, o) => {
    const val = typeof o.yourRate === "number" ? o.yourRate : o.customerOffer ?? 0;
    return sum + val;
  }, 0);

  return (
    <div className="p-5 gap-2">
      <div className="flex justify-between items-center mb-5">
        <div>
          <h1 className="text-[20px]">Earnings</h1>
          <h1 className="font-urdu text-textSecondary  ">کمائی</h1>
        </div>
      </div>

      {/* Tabs */}
      <nav className="flex items-center gap-4 mb-4">
        <Button
          variant="text"
          onClick={() => setTab("earnings")}
          className={`pb-3 -mb-px text-sm font-medium transition-colors ${
            tab === "earnings"
              ? "text-blue-600 border-b-2 border-blue-600"
              : "text-gray-600 dark:text-gray-300"
          }`}
        >
          Earnings / <span className="font-urdu">کمائی</span>
        </Button>

        <Button
          variant="text"
          onClick={() => setTab("profile")}
          className={`pb-3 -mb-px text-sm font-medium transition-colors ${
            tab === "profile"
              ? "text-blue-600 border-b-2 border-blue-600"
              : "text-gray-600 dark:text-gray-300"
          }`}
        >
          Profile / <span className="font-urdu">پروفائل</span>
        </Button>
      </nav>

      {/* Content */}
      {tab === "earnings" ? (
        <EarningsPanel totalEarnings={totalEarnings} completedJobs={acceptedOffers.length} pendingOffers={pendingOffers.length} />
      ) : (
        <ProfileForm />
      )}
    </div>
  );
};

export default ProfileClient;
