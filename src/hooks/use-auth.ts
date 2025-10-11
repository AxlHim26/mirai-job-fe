import { useAuthStore } from "@/stores/auth-store";

export const useAuth = () => {
  const { user, accessToken, logout } = useAuthStore();

  return {
    user,
    accessToken,
    isLoading: false,
    logout,
  };
};
