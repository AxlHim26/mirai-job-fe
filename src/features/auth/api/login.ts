import { useMutation } from "@tanstack/react-query";
import { AxiosError } from "axios";
import { useToast } from "@/hooks";
import { api } from "@/lib/api-client";
import { ResponseMessage } from "@/types/common";
import { z } from "zod";

export const loginInputSchema = z.object({
  email: z.string().min(1, "Required"),
  password: z.string().min(1, "Required"),
});

const postLoginData = (data: z.infer<typeof loginInputSchema>) => {
  return api.post("/auth/login", data);
};

export const useLogin = () => {
  const { addToast } = useToast();

  return useMutation({
    mutationFn: postLoginData,
    onSuccess: async () => {
      addToast({
        title: "Login success",
        message: "You have been logged in",
        type: "success",
      });
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