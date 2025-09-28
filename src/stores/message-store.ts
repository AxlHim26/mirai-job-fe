import { create } from "zustand";
import { api } from "@/lib/api-client";
import { Message } from "@/types/message";

interface MessageState {
  messages: Record<number, Message[]>;
  loading: boolean;
  hasMore: Record<number, boolean>;
  page: Record<number, number>;
  fetchMessages: (conversationId: number, append?: boolean) => Promise<void>;
  addMessages: (conversationId: number, messages: Message[]) => void;
  clearMessages: (conversationId: number) => void;
}

export const useMessageStore = create<MessageState>((set, get) => ({
  messages: {},
  loading: false,
  hasMore: {},
  page: {},

  fetchMessages: async (conversationId, append = false) => {
    const currentPage = get().page[conversationId] ?? 0;
    const nextPage = append ? currentPage + 1 : 0;

    set({ loading: true });
    try {
      const res = await api.get(`/messages/conversation/${conversationId}`, {
        params: { page: nextPage, size: 20 },
      });

      const fetchedMessages: Message[] = res.data || [];
      const existingMessages = get().messages[conversationId] || [];

      set((state) => ({
        messages: {
          ...state.messages,
          [conversationId]: append
            ? [...fetchedMessages, ...existingMessages]
            : fetchedMessages,
        },
        page: {
          ...state.page,
          [conversationId]: nextPage,
        },
        hasMore: {
          ...state.hasMore,
          [conversationId]: fetchedMessages.length > 0,
        },
        loading: false,
      }));
    } catch (err) {
      console.error(err);
      set({ loading: false });
    }
  },

  addMessages: (conversationId, newMessages) => {
    set((state) => {
      const existing = state.messages[conversationId] || [];
      const merged = [...existing];

      newMessages.forEach((msg) => {
        const isDuplicate = merged.some(
          (m) =>
            m.id === msg.id ||
            (m.senderEmail === msg.senderEmail &&
              m.content === msg.content &&
              m.fileUrl === msg.fileUrl &&
              m.createAt === msg.createAt)
        );
        if (!isDuplicate) {
          merged.push(msg);
        }
      });

      return {
        messages: {
          ...state.messages,
          [conversationId]: merged,
        },
      };
    });
  },

  clearMessages: (conversationId) =>
    set((state) => {
      const newMessages = { ...state.messages };
      delete newMessages[conversationId];
      return { messages: newMessages };
    }),
}));
