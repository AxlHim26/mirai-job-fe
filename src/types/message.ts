export type Message = {
  id?: number;
  content: string;
  createAt: string;
  isSender?: boolean;
  senderEmail?: string;
  senderName?: string;
  showHeader?: boolean;
  fileUrl?: string;
  isLastInGroup?: boolean;
};
