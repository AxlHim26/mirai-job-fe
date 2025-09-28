import { api } from "@/lib/api-client";
import { RestResponse } from "@/types";
import { useMutation } from "@tanstack/react-query";

export const deleteMessage = (
  messageId: string
): Promise<RestResponse<void>> => {
  return api.delete(`/messages/${messageId}`);
};

export const useDeleteMessage = (messageId: string) => {
  return useMutation({
    mutationKey: ["delete-message", messageId],
    mutationFn: () => deleteMessage(messageId),
  });
};
