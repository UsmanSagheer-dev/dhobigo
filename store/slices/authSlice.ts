import { AuthState, User } from "@/types/types";
import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";

const initialState: AuthState = {
  user: null,
  token: null,
  isAuthenticated: false,
  loading: false,
  error: null,
  success: null,
};

export const loginUser = createAsyncThunk<
  { token: string; user: User },
  { email: string; password: string },
  { rejectValue: string }
>(
  "auth/login",
  async (
    credentials: { email: string; password: string },
    { rejectWithValue }
  ) => {
    try {
      // API currently unavailable — using dummy data for local testing.
      /*
      const response = await fetch("/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(credentials),
      });

      const data = await response.json();

      if (!response.ok) {
        return rejectWithValue(data.message || "Login failed");
      }
      */

      const dummyRole: User["role"] = credentials.email.includes("provider")
        ? "provider"
        : credentials.email.includes("rider")
        ? "rider"
        : "customer";

      const providerStatus: User["providerStatus"] = credentials.email.includes(
        "approved"
      )
        ? "approved"
        : credentials.email.includes("pending")
        ? "pending"
        : "none";

      const data: { token: string; user: User } = {
        token: "dummy-token",
        user: {
          id: "1",
          email: credentials.email,
          name: "Test User",
          role: dummyRole,
          providerStatus,
        },
      };
      // Store token in localStorage
      if (typeof window !== "undefined") {
        localStorage.setItem("token", data.token);
        localStorage.setItem("user", JSON.stringify(data.user));
      }

      return data;
    } catch (error: any) {
      return rejectWithValue(error.message || "Something went wrong");
    }
  }
);

export const registerUser = createAsyncThunk(
  "auth/register",
  async (
    userData: {
      name: string;
      email: string;
      password: string;
      confirmPassword: string;
    },
    { rejectWithValue }
  ) => {
    try {
      // Validation
      if (userData.name.trim().length < 2) {
        return rejectWithValue("Name must be at least 2 characters long");
      }

      if (userData.password.length < 6) {
        return rejectWithValue("Password must be at least 6 characters long");
      }

      if (userData.password !== userData.confirmPassword) {
        return rejectWithValue("Passwords do not match");
      }

      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 2000));

      // Dummy API response
      const data = {
        message: "Registration successful",
        user: {
          id: "new-user",
          name: userData.name,
          email: userData.email,
        },
      };

      return data;
    } catch (error: any) {
      return rejectWithValue(error.message || "Something went wrong");
    }
  }
);

export const forgotPassword = createAsyncThunk(
  "auth/forgotPassword",
  async (email: string, { rejectWithValue }) => {
    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 2000));

      // Dummy response
      return {
        message: "Password reset link has been sent to your email address.",
        email,
      };
    } catch (error: any) {
      return rejectWithValue(error.message || "Something went wrong");
    }
  }
);

export const resetPassword = createAsyncThunk(
  "auth/resetPassword",
  async (
    {
      token,
      password,
      confirmPassword,
    }: { token: string; password: string; confirmPassword: string },
    { rejectWithValue }
  ) => {
    try {
      // Validation
      if (password.length < 6) {
        return rejectWithValue("Password must be at least 6 characters long");
      }

      if (password !== confirmPassword) {
        return rejectWithValue("Passwords do not match");
      }

      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 2000));

      // Dummy response
      return {
        message: "Password has been reset successfully!",
        token,
      };
    } catch (error: any) {
      return rejectWithValue(error.message || "Something went wrong");
    }
  }
);

export const logoutUser = createAsyncThunk("auth/logout", async () => {
  // Clear localStorage
  if (typeof window !== "undefined") {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
  }
  return null;
});

// Load user from localStorage
export const loadUserFromStorage = createAsyncThunk(
  "auth/loadFromStorage",
  async () => {
    if (typeof window !== "undefined") {
      const token = localStorage.getItem("token");
      const userStr = localStorage.getItem("user");

      if (token && userStr) {
        try {
          const user = JSON.parse(userStr);
          return { token, user };
        } catch (error) {
          // Clear corrupted data
          localStorage.removeItem("token");
          localStorage.removeItem("user");
        }
      }
    }
    return null;
  }
);

// Auth slice
const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    clearError: (state) => {
      state.error = null;
    },
    clearSuccess: (state) => {
      state.success = null;
    },
    setError: (state, action: PayloadAction<string>) => {
      state.error = action.payload;
    },
    setSuccess: (state, action: PayloadAction<string>) => {
      state.success = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      // Login cases
      .addCase(loginUser.pending, (state) => {
        state.loading = true;
        state.error = null;
        state.success = null;
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.loading = false;
        state.isAuthenticated = true;
        state.user = action.payload.user;
        state.token = action.payload.token;
        state.error = null;
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
        state.isAuthenticated = false;
        state.user = null;
        state.token = null;
      })

      // Register cases
      .addCase(registerUser.pending, (state) => {
        state.loading = true;
        state.error = null;
        state.success = null;
      })
      .addCase(registerUser.fulfilled, (state, action) => {
        state.loading = false;
        state.success = action.payload.message;
        state.error = null;
      })
      .addCase(registerUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      })

      // Forgot password cases
      .addCase(forgotPassword.pending, (state) => {
        state.loading = true;
        state.error = null;
        state.success = null;
      })
      .addCase(forgotPassword.fulfilled, (state, action) => {
        state.loading = false;
        state.success = action.payload.message;
        state.error = null;
      })
      .addCase(forgotPassword.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      })

      // Reset password cases
      .addCase(resetPassword.pending, (state) => {
        state.loading = true;
        state.error = null;
        state.success = null;
      })
      .addCase(resetPassword.fulfilled, (state, action) => {
        state.loading = false;
        state.success = action.payload.message;
        state.error = null;
      })
      .addCase(resetPassword.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      })

      // Logout cases
      .addCase(logoutUser.fulfilled, (state) => {
        state.user = null;
        state.token = null;
        state.isAuthenticated = false;
        state.loading = false;
        state.error = null;
        state.success = null;
      })

      // Load from storage cases
      .addCase(loadUserFromStorage.fulfilled, (state, action) => {
        if (action.payload) {
          state.user = action.payload.user;
          state.token = action.payload.token;
          state.isAuthenticated = true;
        }
      });
  },
});

export const { clearError, clearSuccess, setError, setSuccess } =
  authSlice.actions;
export default authSlice.reducer;
