import Button from "@/component/Button";
import { OfferCardProps } from "@/types/types";
import Image from "next/image";

export default function OfferCard({
  orderId,
  name = "Customer",
  avatarUrl,
  service = "Wash Only",
  pickupTime = "Today, 5:00 PM",
  distance = "1.8 km",
  weight = "3 kg",
  customerOffer = 250,
  yourRate = 280,
  timeRemaining = "7:17",
  status = "pending",
  onAccept,
  onCounter,
}: OfferCardProps) {
  const isAccepted = status === "accepted";
  return (
    <div
      className={`w-full bg-white dark:bg-[#061827] rounded-lg p-4 transition-colors duration-150 ${
        isAccepted
          ? "border-2 border-green-500 shadow-sm"
          : "border border-gray-100 dark:border-gray-800"
      }`}
    >
      {/* Top row: avatar + name and time box */}
      <div className="flex items-start justify-between">
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 rounded-full bg-gray-100 dark:bg-gray-700 overflow-hidden shrink-0">
            {avatarUrl ? (
              <Image
                src={avatarUrl}
                alt={name}
                width={48}
                height={48}
                className="w-full h-full object-cover"
              />
            ) : (
              <div className="w-full h-full flex items-center justify-center text-sm text-gray-600 dark:text-gray-300">
                {name.split(" ")[0][0] ?? "C"}
              </div>
            )}
          </div>

          <div>
            <div className="text-[16px] font-semibold">{name}</div>
            <div className="text-[13px] text-gray-500 dark:text-gray-400">
              {orderId}
            </div>
          </div>
        </div>

        <div className="ml-4">
          {isAccepted ? (
            <div className="text-xs bg-green-100 text-green-800 rounded-full px-3 py-1 flex items-center gap-2">
              <svg
                className="w-3 h-3"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M20 6L9 17l-5-5"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <span className="text-sm">Accepted</span>
            </div>
          ) : (
            <div className="text-xs bg-blue-50 dark:bg-white/5 text-blue-700 dark:text-blue-300 rounded-lg p-4 text-right">
              <div className="text-sm font-medium">{timeRemaining}</div>
              <div className="text-[10px] text-gray-600 dark:text-gray-300">
                باقی
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Info grid */}
      <div className="mt-4 grid grid-cols-2 gap-x-6 gap-y-2 text-sm text-gray-600 dark:text-gray-300">
        <div className="flex items-center gap-2">
          <svg
            className="w-4 h-4 text-gray-400"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M3 7h18M5 7v10a2 2 0 002 2h10a2 2 0 002-2V7"
            />
          </svg>
          <div>
            <div className="text-xs text-gray-500 dark:text-gray-400">
              Service
            </div>
            <div className="text-sm">{service}</div>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <svg
            className="w-4 h-4 text-gray-400"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M8 7V3m8 4V3M3 11h18M5 21h14a2 2 0 002-2V7H3v12a2 2 0 002 2z"
            />
          </svg>
          <div>
            <div className="text-xs text-gray-500 dark:text-gray-400">
              Pickup Time
            </div>
            <div className="text-sm">{pickupTime}</div>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <svg
            className="w-4 h-4 text-gray-400"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M17 20h5V4H2v16h5M12 4v16"
            />
          </svg>
          <div>
            <div className="text-xs text-gray-500 dark:text-gray-400">
              Distance
            </div>
            <div className="text-sm">{distance}</div>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <svg
            className="w-4 h-4 text-gray-400"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M20 12H4"
            />
          </svg>
          <div>
            <div className="text-xs text-gray-500 dark:text-gray-400">
              Weight
            </div>
            <div className="text-sm">{weight}</div>
          </div>
        </div>
      </div>

      {/* Offers section */}
      <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-3">
        <div className="rounded-lg border border-orange-200 bg-orange-50 p-4">
          <div className="text-xs text-orange-600 flex items-center gap-2">
            <svg
              className="w-4 h-4"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M3 12h6l3 8 4-16 2 12h6"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <span>Customer Offer</span>
          </div>
          <div className="mt-2 text-orange-700 text-2xl font-semibold">
            ₹{customerOffer}
          </div>
          <div className="mt-1 text-sm text-orange-600">
            11% below your rate
          </div>
        </div>

        <div className="rounded-lg border border-blue-200 bg-blue-50 p-4">
          <div className="text-xs text-blue-600 flex items-center gap-2">
            <svg
              className="w-4 h-4"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12 8v8M8 12h8"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <span>Your Rate</span>
          </div>
          <div className="mt-2 text-blue-700 text-2xl font-semibold">
            ₹{yourRate}
          </div>
        </div>
      </div>
      {/* Actions or accepted message */}
      <div className="mt-4">
        {!isAccepted ? (
          <div className="flex gap-3">
            <Button
              onClick={onCounter}
              className="flex-1 rounded-lg border border-gray-200 bg-gray-50 text-gray-800 py-3 text-center hover:bg-gray-100"
            >
              <span className="font-medium">Counter Offer</span>
            </Button>

            <Button
              onClick={onAccept}
              className="flex-1 rounded-lg bg-green-600 text-white py-3 text-center hover:bg-green-700"
            >
              <span className="font-medium">Accept قبول کریں</span>
            </Button>
          </div>
        ) : (
          <div className="rounded-lg border border-green-200 bg-green-50 p-6 text-center text-green-700">
            <div className="text-lg font-medium">
              Order moved to Active Orders
            </div>
            <div className="text-sm text-green-600 mt-1">
              آرڈر فعال آرڈرز میں منتقل ہوگیا
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
