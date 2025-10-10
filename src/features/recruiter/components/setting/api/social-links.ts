import { api } from "@/lib/api-client";
import { useToastStore } from "@/stores";
import { RestResponse, SocialLink } from "@/types";
import { ResponseMessage } from "@/types/common";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { AxiosError } from "axios";
import { z } from "zod";

export const socialLinkSchema = z.object({
  facebookLink: z.string(),
  twitterLink: z.string(),
  linkedinLink: z.string(),
});

export const fetchSocialLinks = () => {
  return api.get("/recruiter/setting/social-link") as Promise<
    RestResponse<SocialLink>
  >;
};

export const useSocialLinks = () => {
  return useQuery({
    queryKey: ["social-links"],
    queryFn: fetchSocialLinks,
    select: (res) => res.data,
  });
};

export const updateSocialLinks = (data: SocialLink) => {
  return api.put("/recruiter/setting/social-link", data) as Promise<
    RestResponse<SocialLink>
  >;
};

export const useUpdateSocialLinks = () => {
  const queryClient = useQueryClient();
  const { addToast } = useToastStore();

  return useMutation({
    mutationFn: updateSocialLinks,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["social-links"] });
      addToast({
        title: "Success",
        message: "Social links updated successfully.",
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
