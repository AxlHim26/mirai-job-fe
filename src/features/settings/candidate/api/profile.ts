import { api } from "@/lib/api-client";
import { useToastStore } from "@/stores";
import { RestResponse } from "@/types";
import { ResponseMessage } from "@/types/common";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { AxiosError } from "axios";
import { z } from "zod";

export const profileSchema = z.object({
  fullName: z.string().min(1, "Full name is required").default(""),
  phone: z.string().min(1, "Phone number is required").default(""),
  email: z.string().email("Invalid email").default(""),
  dob: z.string().min(1, "Date of birth is required").default(""),
  gender: z.enum(["Male", "Female", "Other"]).default("Male"),
  accountType: z.enum(["Job Seeker", "Employer"]).default("Job Seeker"),
});

export type ProfileResponse = z.infer<typeof profileSchema>;

export const fetchProfileSettings = () => {
  return api.get("/profile/setting") as Promise<RestResponse<ProfileResponse>>;
};

export const updateProfileSettings = (data: ProfileResponse) => {
  return api.put("/profile/setting", data) as Promise<
    RestResponse<ProfileResponse>
  >;
};

export const useProfileSettings = () => {
  return useQuery({
    queryKey: ["profile-settings"],
    queryFn: fetchProfileSettings,
    select: (res) => res.data,
  });
};

export const useUpdateProfileSettings = () => {
  const queryClient = useQueryClient();
  const { addToast } = useToastStore();

  return useMutation({
    mutationFn: updateProfileSettings,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["profile-settings"] });
      addToast({
        title: "Success",
        message: "Profile updated successfully.",
        type: "success",
      });
    },
    onError: (error: AxiosError) => {
      const data = error.response?.data as ResponseMessage;
      addToast({
        title: "Update Failed",
        message: data?.message || "An unknown error occurred",
        type: "error",
      });
    },
  });
};
