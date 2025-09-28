import { LocalImage } from "@/assets/images/local-image";
import { useConversationStore } from "@/stores/conversation-store";
import { Message } from "@/types/message";
import { formatDate } from "@/utils";
import { getFileType } from "@/utils/upload";
import React from "react";

export const MessageBubble: React.FC<Message> = ({
  content,
  fileUrl,
  createAt,
  isSender,
  showHeader = false,
  isLastInGroup = true,
}) => {
  const partner = useConversationStore((state) => state.selectedConversation());

  return (
    <div
      className={`flex ${isSender ? "justify-end" : "justify-start"} mb-0.5`}
    >
      {!isSender && (
        <div className={`mr-2 ${showHeader ? "visible" : "invisible"}`}>
          {partner?.partnerAvatar ? (
            <img
              src={partner?.partnerAvatar}
              alt={partner?.partnerName}
              className="w-8 h-8 rounded-full object-cover"
            />
          ) : (
            <LocalImage
              imageName="CompanyLogo"
              height={32}
              width={32}
              className="rounded-full"
            />
          )}
        </div>
      )}

      <div
        className={`flex flex-col ${isSender ? "items-end" : "items-start"}`}
      >
        {!isSender && showHeader && (
          <span className="text-sm font-semibold text-[#515B6F] mb-1">
            {partner?.partnerName}
          </span>
        )}

        <div
          className={`px-4 py-2 rounded text-[16px] font-medium shadow-sm whitespace-pre-line break-words max-w-[850px]
            ${
              isSender
                ? "bg-[#F8F8FD] text-[#515B6F] rounded-br-none"
                : "bg-white border border-[#D6DDEB] text-[#515B6F] rounded-bl-none"
            }
            ${!showHeader && !isSender ? "mt-2" : ""}
          `}
        >
          {content && <span>{content}</span>}
          {fileUrl
            ? (() => {
                const type = getFileType(fileUrl);

                if (type === "image") {
                  return (
                    <img
                      src={fileUrl}
                      alt="image"
                      className="max-w-full rounded"
                    />
                  );
                } else if (type === "video") {
                  return (
                    <video
                      controls
                      className="max-w-full rounded"
                    >
                      <source src={fileUrl} />
                      Trình duyệt không hỗ trợ video.
                    </video>
                  );
                } else {
                  return (
                    <a
                      href={fileUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-500 underline pl-2"
                    >
                      Download file
                    </a>
                  );
                }
              })()
            : null}
        </div>

        {isLastInGroup && (
          <span className="text-xs text-[#7C8493] mt-1">
            {formatDate(createAt)}
          </span>
        )}
      </div>
    </div>
  );
};
