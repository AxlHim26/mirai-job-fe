import { api } from "@/lib/api-client";
import { useToastStore } from "@/stores";
import { RestResponse } from "@/types";
import { ResponseMessage } from "@/types/common";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { AxiosError } from "axios";
import { z } from "zod";

export const updateEmailSchema = z.object({
  newEmail: z.string().email("Invalid email").default(""),
});

export const changePasswordSchema = z
  .object({
    oldPassword: z.string().min(8, "Minimum 8 characters").default(""),
    newPassword: z.string().min(8, "Minimum 8 characters").default(""),
  })
  .refine((v) => v.oldPassword !== v.newPassword, {
    path: ["newPassword"],
    message: "New password must be different from old password",
  });

export type UpdateEmailInput = z.infer<typeof updateEmailSchema>;
export type ChangePasswordInput = z.infer<typeof changePasswordSchema>;

export type AccountResponse = {
  email: string;
  emailVerified: boolean;
};

export const fetchAccount = () =>
  api.get("/account") as Promise<RestResponse<AccountResponse>>;

export const putEmail = (data: UpdateEmailInput) =>
  api.put("/account/email", data) as Promise<RestResponse<AccountResponse>>;

export const putPassword = (data: ChangePasswordInput) =>
  api.put("/account/password", data) as Promise<RestResponse<null>>;

export const useAccount = () =>
  useQuery({
    queryKey: ["account"],
    queryFn: fetchAccount,
    select: (res) => res.data,
  });

export const useUpdateEmail = () => {
  const qc = useQueryClient();
  const { addToast } = useToastStore();

  return useMutation({
    mutationFn: putEmail,
    onSuccess: () => {
      qc.invalidateQueries({ queryKey: ["account"] });
      addToast({
        title: "Success",
        message: "Email updated. Please verify if required.",
        type: "success",
      });
    },
    onError: (e: AxiosError) => {
      const data = e.response?.data as ResponseMessage;
      addToast({
        title: "Update Failed",
        message: data?.message || "Unable to update email",
        type: "error",
      });
    },
  });
};

export const useChangePassword = () => {
  const { addToast } = useToastStore();

  return useMutation({
    mutationFn: putPassword,
    onSuccess: () => {
      addToast({
        title: "Success",
        message: "Password changed successfully.",
        type: "success",
      });
    },
    onError: (e: AxiosError) => {
      const data = e.response?.data as ResponseMessage;
      addToast({
        title: "Change Failed",
        message: data?.message || "Unable to change password",
        type: "error",
      });
    },
  });
};
