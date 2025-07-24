import { api } from "@/lib/api-client";
import { RestResponse } from "@/types";
import { User } from "@/types/user";
import { useQuery } from "@tanstack/react-query";

const getUser = async (): Promise<RestResponse<User>> => {
  return await api.get('/auth/me');
};

export const useUserQuery = () => {
  return useQuery<RestResponse<User>>({
    queryKey: ['auth-user'],
    queryFn: getUser,
    retry: false,
    enabled: false,
  });
};
