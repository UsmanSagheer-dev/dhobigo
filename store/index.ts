import { configureStore } from "@reduxjs/toolkit";
import offersReducer from "./slices/offersSlice";
import profileReducer from "./slices/profileSlice";
import { loadFromStorage, saveToStorage } from "@/utils/storage";
import IMAGES from "@/public/assets/images";

const STORAGE_KEY = "dhobigo_offers_v1";
const PROFILE_STORAGE_KEY = "dhobigo_profile_v1";

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

const initialOffers = loadInitialOffers();
const initialProfile = loadFromStorage(PROFILE_STORAGE_KEY);

export const store = configureStore({
  reducer: { offers: offersReducer, profile: profileReducer },
  preloadedState: { offers: { offers: initialOffers }, profile: initialProfile || undefined },
});

store.subscribe(() => {
  const state = store.getState();
  try {
    saveToStorage(STORAGE_KEY, state.offers.offers);
  } catch (e) {
    // ignore storage errors
  }

  try {
    // persist profile slice (without status/error)
    const { profile } = state as any;
    if (profile) {
      const { name, nameUrdu, phone, shopAddress, workingHours } = profile;
      saveToStorage(PROFILE_STORAGE_KEY, { name, nameUrdu, phone, shopAddress, workingHours });
    }
  } catch (e) {
    // ignore storage errors
  }
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
