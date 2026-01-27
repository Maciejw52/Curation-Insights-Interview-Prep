import type { TChatMessages } from "../../index.types";

interface IMessagesContainer {
  messages: TChatMessages;
}

export const MessagesContainer = ({ messages }: IMessagesContainer) => {
  console.log("messages", messages);
  return (
    <div className="flex">
      {messages.map((message) => {
        return <div>{message.text}</div>;
      })}
    </div>
  );
};
