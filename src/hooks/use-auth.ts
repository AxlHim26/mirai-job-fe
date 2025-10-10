import React from "react";
import { useAuthStore } from "@/stores/auth-store";
import { useQuery } from "@tanstack/react-query";
import { api } from "@/lib/api-client";
import { User } from "@/types/user";

interface AuthResponse {
  data: User;
  message?: string;
  status?: number;
}

export const useAuth = () => {
  const { user, accessToken, setUser, setAccessToken, logout } = useAuthStore();

  // Fetch current user data from backend
  const { data: currentUser, isLoading } = useQuery({
    queryKey: ["current-user"],
    queryFn: async (): Promise<AuthResponse> => {
      const response = await api.get("/auth/me");
      return response;
    },
    enabled: !!accessToken, // Only fetch if we have access token
    retry: false,
  });

  // Update user data when currentUser changes
  React.useEffect(() => {
    if (currentUser?.data && !user) {
      setUser(currentUser.data);
    }
  }, [currentUser, user, setUser]);

  return {
    user: user || currentUser?.data,
    accessToken,
    isLoading,
    logout,
    setUser,
    setAccessToken,
  };
};
