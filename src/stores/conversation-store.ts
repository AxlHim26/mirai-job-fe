import { create } from "zustand";
import { Conversation, ConversationState } from "@/types/chat";
import { getConversations } from "@/features/chat/api";

interface ConversationStoreState extends ConversationState {
  fetchConversations: (userEmail: string) => Promise<void>;
  selectConversation: (id: number | null) => void;
  selectedConversation: () => Conversation | null;
}

export const useConversationStore = create<ConversationStoreState>(
  (set, get) => ({
    conversations: [],
    selectedId: null,
    loading: false,

    fetchConversations: async (email) => {
      set({ loading: true });
      try {
        const res = await getConversations(email);
        if (Array.isArray(res.data?.conversations)) {
          set({ conversations: res.data.conversations, loading: false });
        } else {
          set({ conversations: [], loading: false });
        }
      } catch (err) {
        console.error("Failed to fetch conversations:", err);
        set({ conversations: [], loading: false });
      }
    },

    selectConversation: (id) => set({ selectedId: id }),

    selectedConversation: () => {
      const { conversations, selectedId } = get();
      return conversations.find((c) => c.id === selectedId) || null;
    },
  })
);
