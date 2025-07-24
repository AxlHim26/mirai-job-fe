import { useMutation } from "@tanstack/react-query";
import { AxiosError } from "axios";
import { z } from "zod";
import { redirect as redirectAfterLofin } from "@/lib/redirect";
import { useToastStore } from "@/stores/toast-store";
import { useAuthStore } from "@/stores/auth-store";
import { api } from "@/lib/api-client";
import { ResponseMessage } from "@/types/common";
import { RestResponse } from "@/types/rest-response";
import { AuthResponse } from "@/types/auth";
import { useNavigate, useSearchParams } from "react-router-dom";
import { useLocalStore } from "@/hooks";

export const loginInputSchema = z.object({
  email: z.string().min(1, "Required"),
  password: z.string().min(1, "Required"),
});

const postLoginData = (data: z.infer<typeof loginInputSchema>) => {
  return api.post("/auth/login", data) as Promise<RestResponse<AuthResponse>>;
};

export const useLogin = () => {
  const navigate = useNavigate()
  const { addToast } = useToastStore();
  const [searchParams] = useSearchParams();
  const [previousLoggedIn, setPreviousLoggedIn] = useLocalStore("previousLoggedIn", false);
  const [role, setRole] = useLocalStore("role", "");
  const redirectTo = searchParams.get("redirectTo");

  return useMutation({
    mutationFn: postLoginData,
    onSuccess: async (data) => {
      const response = data.data;
      addToast({
        title: "Login success",
        message: "You have been logged in",
        type: "success",
      });
      useAuthStore.setState({
        user: response.user,
        accessToken: response.token,
      });
      redirectAfterLofin({
        redirectTo: redirectTo || undefined,
        role: response.user.role.name,
        navigate,
      });
      setRole(response.user.role.name);
      setPreviousLoggedIn(true);
    },
    onError: (error: AxiosError) => {
      const data = error.response?.data as ResponseMessage;
      addToast({
        title: "Something went wrong",
        message: data?.message || "An unknown error occurred",
        type: "error",
      });
    },
  });
};
