import React, { useState } from "react";
import { DashboardLayout } from "@/components/layouts/dashboard/main";
import { MessageSidebar } from "@/features/dashboard-message/components/message-sidebar";
import { MessageConversation } from "@/features/dashboard-message/components/message-conversation";
import { Authorization, ROLES } from "@/lib/authorization";
import {
  Conversation,
  Message,
  mockConversations,
} from "@/features/dashboard-message/api/dashboard-message.mock";
import { ProtectedRoute } from "@/lib/auth";

const DashboardMessage: React.FC = () => {
  const [selectedId, setSelectedId] = useState<number | null>(
    mockConversations[0]?.id || null
  );
  const [conversations, setConversations] =
    useState<Conversation[]>(mockConversations);

  const selectedConversation: Conversation | null =
    mockConversations.find((c) => c.id === selectedId) || null;

  const handleSendMessage = (conversationId: number, message: Message) => {
    setConversations((prev) =>
      prev.map((conv) =>
        conv.id === conversationId
          ? { ...conv, messages: [...conv.messages, message] }
          : conv
      )
    );
  };

  return (
    <ProtectedRoute>
      <Authorization
        allowedRoles={[ROLES.ROLE_RECRUITER]}
        forbiddenFallback={
          <div className="flex items-center justify-center h-full">
            <h1 className="text-2xl font-bold text-red-500">Access Denied</h1>
          </div>
        }
      >
        <DashboardLayout
          title="Messages"
          role={ROLES.ROLE_RECRUITER}
        >
          <div className="flex">
            <div className="flex-1">
              <MessageConversation
                role={ROLES.ROLE_RECRUITER}
                conversation={selectedConversation || null}
                onSendMessage={handleSendMessage}
              />
            </div>
            <div className="hidden md:flex md:w-[350px]">
              <MessageSidebar
                conversations={conversations}
                selectedId={selectedId}
                onSelect={setSelectedId}
              />
            </div>
          </div>
        </DashboardLayout>
      </Authorization>
    </ProtectedRoute>
  );
};

export default DashboardMessage;
