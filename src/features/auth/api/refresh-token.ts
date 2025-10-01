import { api } from "@/lib/api-client";
import { RestResponse } from "@/types";
import { AuthResponse } from "@/types/auth";
import { useQuery } from "@tanstack/react-query";

const getAccessToken = async (): Promise<RestResponse<AuthResponse>> => {
  return await api.post('/auth/refresh-token');
};

export const useRefreshTokenQuery = () => {
  return useQuery<RestResponse<AuthResponse>>({
    queryKey: ['auth-refresh-token'],
    queryFn: getAccessToken,
    retry: false,
    enabled: false,
  });
};
