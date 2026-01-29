import { EMessageType, type TChatMessage } from "../../index.types";

const ChatMessage = ({ message }: { message: TChatMessage }) => {
  if (message.type === EMessageType.TEXT) {
    return <div className="p-2">{message.text}</div>;
  }

  return <div className="p-2">Unknown</div>;
};

export default ChatMessage;
