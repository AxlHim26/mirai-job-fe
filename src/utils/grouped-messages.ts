import { Message } from "@/types/message";

interface GroupedMessage extends Message {
  showHeader: boolean;
  isLastInGroup: boolean;
}

export const processGroupedMessages = (
  messages: Message[],
  currentUserEmail: string
): GroupedMessage[] => {
  return messages.map((message, index) => {
    const prev = messages[index - 1];
    const next = messages[index + 1];

    const showHeader =
      index === 0 ||
      message.senderEmail !== prev?.senderEmail ||
      message.senderName !== prev?.senderName;

    const isLastInGroup =
      index === messages.length - 1 ||
      message.senderEmail !== next?.senderEmail ||
      message.senderName !== next?.senderName;

    return {
      ...message,
      isSender: message.senderEmail === currentUserEmail,
      showHeader,
      isLastInGroup,
    };
  });
};
