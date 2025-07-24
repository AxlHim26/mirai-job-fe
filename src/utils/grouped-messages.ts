import { Message } from "@/features/dashboard-message/api/dashboard-message.mock";

interface GroupedMessage extends Message {
  showHeader: boolean;
  isLastInGroup: boolean;
}

export const processGroupedMessages = (
  messages: Message[]
): GroupedMessage[] => {
  return messages.map((message, index) => {
    const prev = messages[index - 1];
    const next = messages[index + 1];

    const showHeader =
      index === 0 ||
      message.isSender !== prev?.isSender ||
      message.senderName !== prev?.senderName;

    const isLastInGroup =
      index === messages.length - 1 ||
      message.isSender !== next?.isSender ||
      message.senderName !== next?.senderName;

    return {
      ...message,
      showHeader,
      isLastInGroup,
    };
  });
};
