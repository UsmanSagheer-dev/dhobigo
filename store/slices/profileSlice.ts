import { createSlice, PayloadAction, createAsyncThunk } from "@reduxjs/toolkit";

export type ProfileData = {
  name: string;
  nameUrdu?: string;
  phone?: string;
  shopAddress?: string;
  workingHours?: string;
};

type ProfileState = ProfileData & {
  status: "idle" | "loading" | "succeeded" | "failed";
  error?: string | null;
};

const initialState: ProfileState = {
  name: "Ahmed Ali",
  nameUrdu: "",
  phone: "+92 300 1234567",
  shopAddress: "Shop 45, Main Market, Karachi",
  workingHours: "9:00 AM - 9:00 PM",
  status: "idle",
  error: null,
};

// Async thunk that simulates saving profile to an API and persists to localStorage
export const saveProfile = createAsyncThunk(
  "profile/saveProfile",
  async (profile: ProfileData, { rejectWithValue }) => {
    try {
      // simple validation
      if (!profile.name || !profile.phone) {
        throw new Error("Name and phone are required");
      }

      // simulate network latency
      await new Promise((res) => setTimeout(res, 700));

      return profile as ProfileData;
    } catch (err: any) {
      return rejectWithValue(err.message || "Save failed");
    }
  }
);

const profileSlice = createSlice({
  name: "profile",
  initialState,
  reducers: {
    setProfile(state, action: PayloadAction<Partial<ProfileData>>) {
      Object.assign(state, action.payload);
    },
    clearError(state) {
      state.error = null;
      state.status = "idle";
    },
  },
  extraReducers: (builder) => {
    builder.addCase(saveProfile.pending, (state) => {
      state.status = "loading";
      state.error = null;
    });
    builder.addCase(saveProfile.fulfilled, (state, action) => {
      state.status = "succeeded";
      state.error = null;
      Object.assign(state, action.payload);
    });
    builder.addCase(saveProfile.rejected, (state, action) => {
      state.status = "failed";
      state.error = (action.payload as string) || action.error.message || "Save failed";
    });
  },
});

export const { setProfile, clearError } = profileSlice.actions;
export default profileSlice.reducer;

export const selectProfile = (state: any) => state.profile as ProfileState;
