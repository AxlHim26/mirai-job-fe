import { api } from "./api-client";

export interface LogoutResponse {
  message?: string;
  status?: number;
}

export const logoutApi = async (): Promise<LogoutResponse> => {
  const response = await api.post("/auth/logout");
  return response;
};
