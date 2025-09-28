export type Conversation = {
  id: number;
  lastMsg: string;
  lastMsgTime: number;
  senderEmail: string;
  partnerAvatar: string;
  partnerName: string;
};

export type ConversationResponse = {
  conversations: Conversation[];
};

export type MessageRequest = {
  senderEmail: string;
  content?: string;
  fileUrl?: string;
};

export type MessageResponse = {
  id: number;
  content: string;
  createAt: string;
  senderEmail: string;
  senderName: string;
  fileUrl?: string;
};

export type MessagesResponse = {
  messages: MessageResponse[];
  hasMore: boolean;
  page: number;
};

export type SocketMessage = {
  id: number;
  content: string;
  createAt: string;
  senderEmail: string;
  senderName: string;
  fileUrl?: string;
};

export type ConversationState = {
  conversations: Conversation[];
  selectedId: number | null;
  loading: boolean;
};

export type MessageState = {
  messages: Record<number, MessageResponse[]>;
  loading: boolean;
  hasMore: Record<number, boolean>;
  page: Record<number, number>;
};
