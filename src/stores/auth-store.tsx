import { create } from "zustand";
import { persist } from "zustand/middleware";
import { User } from "@/types/user";
import { logoutApi } from "@/lib/auth-api";

type AuthStore = {
  accessToken: string | null;
  user: User | null;
  setAccessToken: (token: string | null) => void;
  setUser: (user: User | null) => void;
  logout: () => Promise<void>;
};

// Helper function to clear all storage
const clearAllStorage = () => {
  // Clear localStorage
  localStorage.clear();

  // Clear sessionStorage
  sessionStorage.clear();

  // Clear all cookies
  document.cookie.split(";").forEach((cookie) => {
    const eqPos = cookie.indexOf("=");
    const name = eqPos > -1 ? cookie.substr(0, eqPos) : cookie;
    document.cookie = `${name.trim()}=;expires=Thu, 01 Jan 1970 00:00:00 GMT;path=/`;
    document.cookie = `${name.trim()}=;expires=Thu, 01 Jan 1970 00:00:00 GMT;path=/;domain=${window.location.hostname}`;
    document.cookie = `${name.trim()}=;expires=Thu, 01 Jan 1970 00:00:00 GMT;path=/;domain=.${window.location.hostname}`;
  });
};

export const useAuthStore = create<AuthStore>()(
  persist(
    (set) => ({
      accessToken: null,
      user: null,
      setAccessToken: (token) => set({ accessToken: token }),
      setUser: (user) => set({ user }),
      logout: async () => {
        try {
          // Call backend logout API to invalidate refresh token
          await logoutApi();
        } catch (error) {
          // Continue with logout even if API call fails
          console.error("Logout API error:", error);
        } finally {
          // Clear all storage and state
          clearAllStorage();
          set({ accessToken: null, user: null });

          // Redirect to login page
          window.location.href = "/auth/login";
        }
      },
    }),
    {
      name: "auth-storage",
      // Only persist accessToken and user, not logout function
      partialize: (state) => ({
        accessToken: state.accessToken,
        user: state.user,
      }),
    }
  )
);
