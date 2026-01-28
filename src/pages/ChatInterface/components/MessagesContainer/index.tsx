import { useEffect, useRef } from "react";
import type { TChatMessages } from "../../index.types";

interface IMessagesContainer {
  messages: TChatMessages;
}

export const MessagesContainer = ({ messages }: IMessagesContainer) => {
  const containerRef = useRef<HTMLDivElement>(null);

  // Ensure scroll down everytime messages is updated
  // Can later change this to only scrolldown undef certain conditions
  useEffect(() => {
    const currentRef = containerRef.current;
    if (currentRef) {
      currentRef.scrollTop = currentRef.scrollHeight;
    }
  }, [messages]);
  return (
    <div
      ref={containerRef}
      className="flex flex-col max-w-[60vw] overflow-y-auto min-w-[60vw] mx-auto"
    >
      {messages.map((message, idx) => (
        <div key={idx} className="p-2">
          {idx + 1}. {message.text}
        </div>
      ))}
    </div>
  );
};
