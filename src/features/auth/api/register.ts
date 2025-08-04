import { useMutation } from "@tanstack/react-query";
import { AxiosError } from "axios";
import React from "react";
import { useOverlayStore } from "@/stores/overlay-store";
import { useToastStore } from "@/stores/toast-store";
import { api } from "@/lib/api-client";
import { ResponseMessage } from "@/types/common";
import { z } from "zod";

export const registerInputSchema = z.object({
  fullName: z.string().min(1, "Required"),
  email: z.string().min(1, "Required").email("Invalid email"),
  password: z.string().min(6, "Password must be at least 6 characters"),
  role: z.string(),
});

export const registerFormSchema = registerInputSchema.omit({ role: true });

const postRegisterData = (data: z.infer<typeof registerInputSchema>) => {
  return api.post("/auth/register", data);
};

export const useRegister = (alert: React.ReactNode) => {
  const { display } = useOverlayStore();
  const { addToast } = useToastStore();

  return useMutation({
    mutationFn: postRegisterData,
    onSuccess: () => {
      display(alert);
    },
    onError: (error: AxiosError) => {
      const data = error.response?.data as ResponseMessage;

      addToast({
        title: "Something went wrong",
        message: data.message,
        type: "error",
      });
    },
  });
};
