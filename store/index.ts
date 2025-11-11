import { configureStore } from "@reduxjs/toolkit";
import offersReducer from "./slices/offersSlice";
import { loadFromStorage, saveToStorage } from "@/utils/storage";
import IMAGES from "@/public/assets/images";

const STORAGE_KEY = "dhobigo_offers_v1";

function loadInitialOffers() {
  const stored = loadFromStorage(STORAGE_KEY);
  if (stored) return stored;

  return [
    {
      id: "1",
      orderId: "Order #12345",
      name: "Ali Ahmed",
      avatarUrl: IMAGES.usman.src,
      service: "Wash Only",
      pickupTime: "Today, 5:00 PM",
      distance: "1.8 km",
      weight: "3 kg",
      customerOffer: 250,
      yourRate: 280,
      timeRemaining: "7:17",
      status: "pending",
    },
    {
      id: "2",
      orderId: "Order #12346",
      name: "Sara Khan",
      avatarUrl: IMAGES.usman.src,
      service: "Wash & Fold",
      pickupTime: "Tomorrow, 10:00 AM",
      distance: "2.4 km",
      weight: "5 kg",
      customerOffer: 300,
      yourRate: 320,
      timeRemaining: "4:05",
      status: "pending",
    },

  ];
}

export const store = configureStore({
  reducer: { offers: offersReducer },
  preloadedState: { offers: { offers: loadInitialOffers() } },
});

store.subscribe(() => {
  const state = store.getState();
  saveToStorage(STORAGE_KEY, state.offers.offers);
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
