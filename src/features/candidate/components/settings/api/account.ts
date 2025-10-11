import { z } from "zod";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { AxiosError } from "axios";
import { api } from "@/lib/api-client";
import { useToastStore } from "@/stores/toast-store";
import { ResponseMessage } from "@/types/common";

export const changePasswordSchema = z
  .object({
    currentPassword: z.string().min(1, "Current password is required"),
    newPassword: z
      .string()
      .min(6, "New password must be at least 6 characters"),
    confirmPassword: z.string().min(1, "Please confirm your password"),
  })
  .refine((data) => data.newPassword === data.confirmPassword, {
    message: "Passwords don't match",
    path: ["confirmPassword"],
  });

export const updateEmailSchema = z.object({
  newEmail: z
    .string()
    .min(1, "Email is required")
    .email("Invalid email format"),
  currentPassword: z.string().min(1, "Current password is required"),
});

export type ChangePasswordFormValues = z.infer<typeof changePasswordSchema>;
export type UpdateEmailFormValues = z.infer<typeof updateEmailSchema>;

const changePassword = async (data: ChangePasswordFormValues) => {
  const response = await api.post<ResponseMessage>(
    "/auth/change-password",
    data
  );
  return response.data;
};

const updateEmail = async (data: UpdateEmailFormValues) => {
  const response = await api.post<ResponseMessage>("/auth/update-email", data);
  return response.data;
};

const getAccountInfo = async () => {
  const response = await api.get("/candidate/setting");
  return response.data;
};

export const useChangePassword = () => {
  const queryClient = useQueryClient();
  const { addToast } = useToastStore();

  return useMutation({
    mutationFn: changePassword,
    onSuccess: () => {
      addToast({
        title: "Success",
        message: "Password changed successfully",
        type: "success",
      });
      queryClient.invalidateQueries({ queryKey: ["account"] });
    },
    onError: (error: AxiosError<ResponseMessage>) => {
      addToast({
        title: "Error",
        message: error.response?.data?.message || "Failed to change password",
        type: "error",
      });
    },
  });
};

export const useUpdateEmail = () => {
  const queryClient = useQueryClient();
  const { addToast } = useToastStore();

  return useMutation({
    mutationFn: updateEmail,
    onSuccess: () => {
      addToast({
        title: "Success",
        message: "Email updated successfully",
        type: "success",
      });
      queryClient.invalidateQueries({ queryKey: ["account"] });
    },
    onError: (error: AxiosError<ResponseMessage>) => {
      addToast({
        title: "Error",
        message: error.response?.data?.message || "Failed to update email",
        type: "error",
      });
    },
  });
};

export const useAccount = () => {
  return useQuery({
    queryKey: ["account"],
    queryFn: getAccountInfo,
  });
};
