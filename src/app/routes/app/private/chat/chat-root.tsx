import {
  MessageSidebar,
  MessageConversation,
} from "@/features/chat/components";
import { useConversationStore } from "@/stores/conversation-store";
import { useAuthStore } from "@/stores";
import { useEffect } from "react";
import { ROLES } from "@/consts";

const ChatRootRoute = () => {
  const { conversations, selectedId, fetchConversations, selectConversation } =
    useConversationStore();
  const user = useAuthStore((state) => state.user);

  useEffect(() => {
    if (user?.email) {
      fetchConversations(user.email);
    }
  }, [user?.email, fetchConversations]);

  return (
    <div className="flex h-screen">
      <MessageSidebar
        conversations={conversations}
        selectedId={selectedId}
        onSelect={selectConversation}
      />
      <div className="flex-1 h-screen">
        {selectedId ? (
          <MessageConversation
            role={ROLES.ROLE_CANDIDATE}
            conversationId={selectedId}
          />
        ) : (
          <div className="flex items-center justify-center h-full">
            <div className="text-center text-gray-500">
              <h2 className="text-xl font-semibold mb-2">
                Choose a conversation
              </h2>
              <p>Select a conversation from the list to start chatting</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ChatRootRoute;
