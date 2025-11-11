import { Offer } from "@/types/types";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type OffersState = { offers: Offer[] };

const initialState: OffersState = { offers: [] };

const offersSlice = createSlice({
  name: "offers",
  initialState,
  reducers: {
    setOffers(state, action: PayloadAction<Offer[]>) {
      state.offers = action.payload;
    },
    acceptOffer(state, action: PayloadAction<string>) {
      const id = action.payload;
      state.offers = state.offers.map((o) =>
        o.id === id ? { ...o, status: "accepted" } : o
      );
    },
    updateOffer(state, action: PayloadAction<Offer>) {
      const updated = action.payload;
      const index = state.offers.findIndex((o) => o.id === updated.id);
      if (index !== -1) state.offers[index] = updated;
      else state.offers.push(updated);
    },
  },
});

export const { setOffers, acceptOffer, updateOffer } = offersSlice.actions;
export default offersSlice.reducer;

export const selectOffers = (state: any) => state.offers.offers;
export const selectPending = (state: any) =>
  state.offers.offers.filter((o: Offer) => o.status === "pending");
export const selectAccepted = (state: any) =>
  state.offers.offers.filter((o: Offer) => o.status === "accepted");
