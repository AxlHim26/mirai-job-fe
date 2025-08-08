import React, { useEffect } from "react";
import { DashboardLayout } from "@/components/layouts/dashboard/main";
import { MessageSidebar } from "@/features/dashboard-message/components/message-sidebar";
import { MessageConversation } from "@/features/dashboard-message/components/message-conversation";
import { ROLES } from "@/hooks";
import { useAuthStore } from "@/stores";
import { useConversationStore } from "@/stores/conversation-store";

const DashboardMessage: React.FC = () => {
  const user = useAuthStore((state) => state.user);
  const { conversations, selectedId, fetchConversations, selectConversation } =
    useConversationStore();

  useEffect(() => {
    if (user?.email) {
      fetchConversations(user?.email);
    }
  }, [user?.email, fetchConversations]);

  return (
    <DashboardLayout
      title="Messages"
      role={ROLES.ROLE_RECRUITER}
    >
      <div className="flex">
        <div className="flex-1">
          <MessageConversation
            role={ROLES.ROLE_RECRUITER}
            conversationId={selectedId || 0}
          />
        </div>
        <div className="hidden md:flex md:w-[350px]">
          <MessageSidebar
            conversations={conversations}
            selectedId={selectedId}
            onSelect={selectConversation}
          />
        </div>
      </div>
    </DashboardLayout>
  );
};

export default DashboardMessage;
