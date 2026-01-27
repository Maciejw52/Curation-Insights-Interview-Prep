import { useState } from "react";
import { ChatInput } from "./components/ChatInput";

import { EMessageCreatedBy, type TChatMessages } from "./index.types";
import { MessagesContainer } from "./components/MessagesContainer";

export const ChatInterface = () => {
  const [messages, setMessages] = useState<TChatMessages>([]);

  const handleSend = async (text: string) => {
    if (!text.trim()) return;

    const userMessage = {
      id: Date.now(),
      createdBy: EMessageCreatedBy.USER,
      text,
    };
    setMessages((prev) => [...prev, userMessage]);
  };

  return (
    <div className="flex flex-col max-h-[75vh]">
      <MessagesContainer messages={messages} />
      <ChatInput onSend={handleSend} />
    </div>
  );
};
