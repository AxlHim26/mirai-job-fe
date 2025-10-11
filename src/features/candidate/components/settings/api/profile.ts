import { z } from "zod";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { api } from "@/lib/api-client";
import { useToastStore } from "@/stores/toast-store";
import { RestResponse } from "@/types";

export const profileSchema = z.object({
  name: z.string().min(1, "Name is required"),
  email: z.string().min(1, "Email is required").email("Invalid email format"),
  phone: z.string().min(1, "Phone number is required"),
  address: z.string().min(1, "Address is required"),
  bio: z.string().optional(),
  avatar: z.string().optional(),
  experience: z.string().optional(),
  education: z.string().optional(),
  skills: z.array(z.string()).optional(),
});

export const profileInputSchema = profileSchema;

export type ProfileInputValues = z.infer<typeof profileInputSchema>;

export interface CandidateResponse {
  name: string;
  email: string;
  bio: string;
  address: string;
  phone: string;
  avatar: string;
  experience: string;
  education: string;
  skills: string[];
}

const fetchCandidateSettings = async (): Promise<
  RestResponse<CandidateResponse>
> => {
  const response = (await api.get(
    "/candidate/setting"
  )) as RestResponse<CandidateResponse>;
  return response;
};

const updateCandidateSettings = async (
  data: ProfileInputValues
): Promise<RestResponse<CandidateResponse>> => {
  const response = (await api.put(
    "/candidate/setting",
    data
  )) as RestResponse<CandidateResponse>;
  return response;
};

export const useCandidateSettings = () => {
  return useQuery({
    queryKey: ["candidate-settings"],
    queryFn: fetchCandidateSettings,
    select: (res) => res.data,
  });
};

export const useUpdateCandidateSettings = () => {
  const queryClient = useQueryClient();
  const { addToast } = useToastStore();

  return useMutation({
    mutationFn: updateCandidateSettings,
    onSuccess: () => {
      addToast({
        title: "Success",
        message: "Profile updated successfully",
        type: "success",
      });
      queryClient.invalidateQueries({ queryKey: ["candidate-settings"] });
    },
    onError: (error: unknown) => {
      const errorMessage =
        error && typeof error === "object" && "response" in error
          ? (error as { response?: { data?: { message?: string } } }).response
              ?.data?.message
          : "Failed to update profile";

      addToast({
        title: "Error",
        message: errorMessage || "Failed to update profile",
        type: "error",
      });
    },
  });
};
