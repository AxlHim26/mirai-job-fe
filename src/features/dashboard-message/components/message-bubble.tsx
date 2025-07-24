import { LocalImage } from "@/assets/images/local-image";
import { getFileType } from "@/utils/upload";
import React from "react";

type MessageBubbleProps = {
  content?: string;
  time: string;
  isSender: boolean;
  showHeader?: boolean;
  avatarUrl?: string;
  senderName?: string;
  file?: string;
  isLastInGroup?: boolean;
};

export const MessageBubble: React.FC<MessageBubbleProps> = ({
  content,
  file,
  time,
  isSender,
  showHeader = false,
  avatarUrl = "",
  senderName = "",
  isLastInGroup = true,
}) => {
  return (
    <div
      className={`flex ${isSender ? "justify-end" : "justify-start"} mb-0.5`}
    >
      {!isSender && (
        <div className={`mr-2 ${showHeader ? "visible" : "invisible"}`}>
          {avatarUrl ? (
            <img
              src={avatarUrl}
              alt={senderName}
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
            {senderName}
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
          {file
            ? (() => {
                const type = getFileType(file);

                if (type === "image") {
                  return (
                    <img
                      src={file}
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
                      <source src={file} />
                      Trình duyệt không hỗ trợ video.
                    </video>
                  );
                } else {
                  return (
                    <a
                      href={file}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-500 underline pl-2"
                    >
                      Tải tệp đính kèm
                    </a>
                  );
                }
              })()
            : null}
        </div>

        {isLastInGroup && (
          <span className="text-xs text-[#7C8493] mt-1">{time}</span>
        )}
      </div>
    </div>
  );
};
