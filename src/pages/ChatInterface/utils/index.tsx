import type { TUseSendMessageResponse } from "../../../hooks/useSendChatMessage";
import { EMessageType } from "../index.types";

// Parse response to identify the possible response structures and assign each one a type
// Determine the minimum we need to display certain message types
export const getmessageProperties = (props: TUseSendMessageResponse) => {
  if (props.data.message) {
    return {
      type: EMessageType.TEXT,
      ...props.data,
    };
  }

  return {
    message: "Unknown response type - please try again",
    type: EMessageType.UNKNOWN,
  };
};
