"use client";

import { Provider } from "react-redux";
import { store } from "@/store/store";
import AuthProvider from "@/components/AuthProvider";

export default function GlobalReduxProvider({ children }: { children: React.ReactNode }) {
  return (
    <Provider store={store}>
      <AuthProvider>
        {children}
      </AuthProvider>
    </Provider>
  );
}