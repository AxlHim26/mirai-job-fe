import { api } from "@/lib/api-client";
import { RestResponse } from "@/types";
import { ConversationResponse } from "@/types/chat";
import { useQuery } from "@tanstack/react-query";

export const getConversations = (
  email: string
): Promise<RestResponse<ConversationResponse>> => {
  return api.get(`/conversations?email=${email}`);
};

export const useGetConversations = (email: string) => {
  return useQuery<RestResponse<ConversationResponse>>({
    queryKey: ["conversations", email],
    queryFn: () => getConversations(email),
    enabled: !!email,
  });
};
