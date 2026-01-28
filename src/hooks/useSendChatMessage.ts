import { useMutation } from "@tanstack/react-query";
import { mockSendMessage } from "../mocks/mockApi";

export const useSendMessage = () => {
  return useMutation({
    mutationFn: (text: string) => mockSendMessage(text),
  });
};
