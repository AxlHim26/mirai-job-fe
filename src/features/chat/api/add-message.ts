import { api } from "@/lib/api-client";
import { RestResponse } from "@/types";
import { MessageRequest, MessageResponse } from "@/types/chat";
import { useMutation, useQueryClient } from "@tanstack/react-query";

export const addMessage = (
  messageData: MessageRequest
): Promise<RestResponse<MessageResponse>> => {
  return api.post("/messages", messageData);
};

export const useAddMessage = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: addMessage,
    onSuccess: () => {
      // Invalidate messages queries to refetch updated data
      queryClient.invalidateQueries({ queryKey: ["messages"] });
    },
  });
};
