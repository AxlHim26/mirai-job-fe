import { api } from "@/lib/api-client";
import { useToastStore } from "@/stores";
import { RecruiterResponse, RestResponse } from "@/types";
import { ResponseMessage } from "@/types/common";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { AxiosError } from "axios";

import { z } from "zod";

export const companySettingsSchema = z.object({
  name: z.string().min(1, "Company name is required").default(""),
  website: z.string().url("Invalid website URL").default(""),
  location: z
    .array(z.string().min(1))
    .min(1, "At least one location is required")
    .default([]),
  employee: z.string().min(1, "Employee field is required").default(""),
  industry: z.string().min(1, "Industry is required").default(""),
  foundedDate: z.object({
    day: z.string().min(1).default(""),
    month: z.string().min(1).default(""),
    year: z.string().min(1).default(""),
  }),
  techStack: z
    .array(z.string().min(1))
    .min(1, "At least one tech stack is required")
    .default([]),
  description: z.string().default(""),
  benefit: z.string().default(""),
});

export const fetchRecruiterSettings = () => {
  return api.get("/recruiter/setting") as Promise<
    RestResponse<RecruiterResponse>
  >;
};

export const useRecruiterSettings = () => {
  return useQuery({
    queryKey: ["recruiter-settings"],
    queryFn: fetchRecruiterSettings,
    select: (res) => res.data,
  });
};

export const updateRecruiterSettings = (data: RecruiterResponse) => {
  return api.put("/recruiter/setting", data) as Promise<
    RestResponse<RecruiterResponse>
  >;
};

export const useUpdateRecruiterSettings = () => {
  const queryClient = useQueryClient();
  const { addToast } = useToastStore();

  return useMutation({
    mutationFn: updateRecruiterSettings,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["recruiter-settings"] });
      addToast({
        title: "Success",
        message: "Recruiter settings updated successfully.",
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
