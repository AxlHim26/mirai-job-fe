import { useMutation } from "@tanstack/react-query";
import { AxiosError } from "axios";
import React from "react";
import { useOverlay, useToast } from "@/hooks";
import { api } from "@/lib/api-client";
import { ResponseMessage } from "src/types/common";
import { z } from "zod";

export const registerInputSchema = z.object({
  fullName: z.string().min(1, "Required"),
  email: z.string().min(1, "Required").email("Invalid email"),
  password: z.string().min(6, "Password must be at least 6 characters"),
  roleName: z.string(),
});

export const registerFormSchema = registerInputSchema.omit({ roleName: true });

const postRegisterData = (data: z.infer<typeof registerInputSchema>) => {
  return api.post("/auth/register", data);
};

export const useRegister = (alert: React.ReactNode) => {
  const { display } = useOverlay();
  const { addToast } = useToast();

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
