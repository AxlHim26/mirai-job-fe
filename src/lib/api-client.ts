import Axios, { InternalAxiosRequestConfig } from "axios";
import { useAuthStore } from "@/stores/auth-store";
import { paths } from "@/config/paths";
import { useToastStore } from "@/stores/toast-store";

function authRequestInterceptor(config: InternalAxiosRequestConfig) {
  const token = useAuthStore.getState().accessToken;
  if (token) {
    config.headers["Authorization"] = `Bearer ${token}`;
  }
  config.headers["Accept"] = "application/json";
  return config;
}

export const api = Axios.create({
  baseURL: "https://summer-project-be-production.up.railway.app/api/",
  withCredentials: true,
});

api.interceptors.request.use(authRequestInterceptor);
api.interceptors.response.use(
  (response) => {
    return response.data;
  },
  (error) => {
    const message = error.response?.data?.message || error.message;

    if (error.response?.status === 401) {
      const searchParams = new URLSearchParams();
      const redirectTo =
        searchParams.get("redirectTo") || window.location.pathname;
      window.location.href = paths.auth.login.getHref(redirectTo);

      useToastStore.getState().addToast({
        title: "Unauthorized, Token Is Expired",
        message,
        type: "error",
      });
    }

    return Promise.reject(error);
  }
);
