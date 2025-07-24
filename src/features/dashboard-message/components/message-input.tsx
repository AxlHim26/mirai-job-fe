import React, { useRef, useState } from "react";
import { LocalIcon } from "@/assets/icons/local-icon";
import EmojiPicker, { EmojiClickData } from "emoji-picker-react";

type MessageInputProps = {
  onSend: (message: string, file: File | null) => void;
};

export const MessageInput: React.FC<MessageInputProps> = ({ onSend }) => {
  const [text, setText] = useState<string>("");
  const [showEmoji, setShowEmoji] = useState(false);
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleSend = () => {
    const trimmed = text.trim();

    if (!trimmed && !selectedFile) return;

    onSend(trimmed, selectedFile);

    setText("");
    setSelectedFile(null);
  };

  const addEmoji = (emojiData: EmojiClickData) => {
    setText((prev) => prev + emojiData.emoji);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") handleSend();
  };

  const handleAttachmentClick = () => {
    fileInputRef.current?.click();
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (files && files.length > 0) {
      setSelectedFile(files[0]);
    }
    e.target.value = "";
  };

  const removeFile = () => {
    setSelectedFile(null);
  };

  return (
    <div className="flex flex-col gap-2">
      {selectedFile && (
        <div className="flex flex-wrap gap-2 px-4">
          <div className="flex items-center gap-1 bg-gray-100 px-2 py-1 rounded text-sm">
            <span className="truncate max-w-[100px]">{selectedFile.name}</span>
            <button
              onClick={removeFile}
              className="text-red-500 font-bold cursor-pointer"
            >
              ×
            </button>
          </div>
        </div>
      )}

      <div className="flex items-center gap-2 px-4 py-3 border border-[#D6DDEB] rounded relative">
        <LocalIcon
          iconName="AttachmentIcon"
          height={20}
          width={20}
          className="cursor-pointer"
          onClick={handleAttachmentClick}
        />
        <input
          type="file"
          ref={fileInputRef}
          className="hidden"
          onChange={handleFileChange}
          accept="image/*,video/*,.pdf,.doc,.docx,.txt,.xlsx,.xls"
        />

        <input
          type="text"
          placeholder="Reply message"
          className="flex-1 px-4 py-2 text-sm focus:outline-none"
          value={text}
          onChange={(e) => setText(e.target.value)}
          onKeyDown={handleKeyDown}
        />

        <LocalIcon
          iconName="EmojiIcon"
          height={20}
          width={20}
          className="cursor-pointer"
          onClick={() => setShowEmoji(!showEmoji)}
        />

        {showEmoji && (
          <div className="absolute bottom-[100%] right-8 z-50">
            <EmojiPicker onEmojiClick={addEmoji} />
          </div>
        )}

        <button
          onClick={handleSend}
          className={`w-[70px] h-[40px] flex justify-center items-center p-[10px] rounded bg-[#4640DE] hover:opacity-90 transition 
            ${!text.trim() && !selectedFile && "opacity-50"}`}
          title="Send"
        >
          <LocalIcon
            iconName="arrowRight"
            height={20}
            width={20}
            className="text-white"
          />
        </button>
      </div>
    </div>
  );
};
