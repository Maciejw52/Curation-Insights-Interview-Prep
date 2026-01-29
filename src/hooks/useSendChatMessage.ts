import { useMutation } from "@tanstack/react-query";
import { api } from "../api/client";

export type TUseSendMessageResponse = {data: { message: string } }

export const useSendMessage = () => {
  return useMutation({
    mutationFn: async (text: string) => {
      const res = await api.post<TUseSendMessageResponse>("/chat", { text });
      return res.data;
    },
  });
};
