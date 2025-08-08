import { create } from "zustand";
import { api } from "@/lib/api-client";

export type Conversation = {
  id: number;
  lastMsg: string;
  lastMsgTime: number;
  senderEmail: string;
  partnerAvatar: string;
  partnerName: string;
};

interface ConversationState {
  conversations: Conversation[];
  selectedId: number | null;
  loading: boolean;
  fetchConversations: (userEmail: string) => Promise<void>;
  selectConversation: (id: number | null) => void;
  selectedConversation: () => Conversation | null;
}

export const useConversationStore = create<ConversationState>((set, get) => ({
  conversations: [],
  selectedId: null,
  loading: false,

  fetchConversations: async (email) => {
    set({ loading: true });
    try {
      const res = await api.get(`/conversations?email=${email}`);
      if (Array.isArray(res.data)) {
        set({ conversations: res.data, loading: false });
      } else {
        console.error("Unexpected API response:", res.data);
        set({ conversations: [], loading: false });
      }
    } catch (err) {
      console.error(err);
      set({ conversations: [], loading: false });
    }
  },

  selectConversation: (id) => set({ selectedId: id }),

  selectedConversation: () => {
    const { conversations, selectedId } = get();
    return conversations.find((c) => c.id === selectedId) || null;
  },
}));
