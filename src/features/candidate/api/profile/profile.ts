import { useQuery } from "@tanstack/react-query";
import { api } from "@/lib/api-client";
import { RestResponse } from "@/types";

export interface CandidateProfileResponse {
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

const fetchCandidateProfile = async (): Promise<
  RestResponse<CandidateProfileResponse>
> => {
  const response = (await api.get(
    "/candidate/profile"
  )) as RestResponse<CandidateProfileResponse>;
  return response;
};

export const useCandidateProfile = () => {
  return useQuery({
    queryKey: ["candidate-profile"],
    queryFn: fetchCandidateProfile,
    select: (res) => res.data,
  });
};
