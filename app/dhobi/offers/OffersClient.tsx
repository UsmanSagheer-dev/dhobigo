"use client";
import Button from "@/components/Button";
import { RefreshCw } from "lucide-react";
import { useState } from "react";
import OfferCard from "../components/OfferCard";
import CounterModal from "../components/CounterModal";
import { useDispatch, useSelector } from "react-redux";
import { RootState, AppDispatch } from "@/store";
import { Offer } from "@/types/types";
import {
  acceptOffer,
  selectPending,
  selectAccepted,
  updateOffer,
} from "@/store/slices/offersSlice";

const OffersClient = () => {
  const [tab, setTab] = useState<"pending" | "accepted">("pending");

  const dispatch = useDispatch<AppDispatch>();

  const pendingOffers = useSelector((state: RootState) =>
    selectPending(state)
  ) as Offer[];
  const acceptedOffers = useSelector((state: RootState) =>
    selectAccepted(state)
  ) as Offer[];

  const [modalOpen, setModalOpen] = useState(false);
  const [selectedOffer, setSelectedOffer] = useState<Offer | null>(null);

  function handleAccept(id: string) {
    dispatch(acceptOffer(id));
    setTab("accepted");
  }

  function handleCounter(id: string) {
    const o = pendingOffers.find((p) => p.id === id) ?? null;
    setSelectedOffer(o);
    setModalOpen(true);
  }

  function handleSendCounter(amount: number) {
    if (!selectedOffer) return;
    const updated: Offer = { ...selectedOffer, yourRate: amount };
    dispatch(updateOffer(updated));
    setModalOpen(false);
    setSelectedOffer(null);
    setTab("pending");
  }

  return (
    <div className="p-5 gap-2">
      <div className="flex justify-between items-center mb-5">
        <div>
          <h1 className="text-[20px]">Customer Offers</h1>
          <h1 className="font-urdu text-textSecondary">
            کسٹمر آفرز
          </h1>
        </div>

        <Button title="Refresh" icon={<RefreshCw />} />
      </div>

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
            <span>Pending ({pendingOffers.length})</span>
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
            Accepted ({acceptedOffers.length})
          </Button>
        </nav>

        <div className="mt-6">
          {tab === "pending" ? (
            <div className="space-y-3">
              {pendingOffers.length === 0 ? (
                <div className="p-6 text-sm text-(--textSecondary) text-center">
                  No offer at this time
                </div>
              ) : (
                pendingOffers.map((o) => (
                  <OfferCard
                    key={o.id}
                    {...o}
                    onAccept={() => handleAccept(o.id)}
                    onCounter={() => handleCounter(o.id)}
                  />
                ))
              )}
            </div>
          ) : (
            <div className="space-y-3">
              {acceptedOffers.length === 0 ? (
                <div className="p-6 text-sm text-(--textSecondary)">
                  No accepted offers yet.
                </div>
              ) : (
                acceptedOffers.map((o) => (
                  <OfferCard
                    key={o.id}
                    {...o}
                    onAccept={() => {}}
                    onCounter={() => {}}
                  />
                ))
              )}
            </div>
          )}
        </div>
      </div>

      <CounterModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        offer={selectedOffer}
        onSend={handleSendCounter}
      />
    </div>
  );
};

export default OffersClient;
