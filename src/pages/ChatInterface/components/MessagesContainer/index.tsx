import type { TChatMessages } from "../../index.types";

interface IMessagesContainer {
  messages: TChatMessages;
}

export const MessagesContainer = ({ messages }: IMessagesContainer) => (
  <div className="flex flex-col-reverse max-w-[60vw] overflow-y-hidden min-w-[60vw] mx-auto">
    {messages.map((message, idx) => (
      <div key={idx} className="p-2">
        {idx + 1}. {message.text}
      </div>
    ))}
  </div>
);
