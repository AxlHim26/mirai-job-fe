import { api } from "@/lib/api-client";
import { RestResponse } from "@/types";
import { MessagesResponse } from "@/types/chat";
import { useQuery } from "@tanstack/react-query";

export const getMessages = (
  conversationId: number,
  page: number = 0,
  size: number = 20
): Promise<RestResponse<MessagesResponse>> => {
  return api.get(`/messages/conversation/${conversationId}`, {
    params: { page, size },
  });
};

export const useGetMessages = (
  conversationId: number,
  page: number = 0,
  size: number = 20
) => {
  return useQuery<RestResponse<MessagesResponse>>({
    queryKey: ["messages", conversationId, page, size],
    queryFn: () => getMessages(conversationId, page, size),
    enabled: !!conversationId,
  });
};
