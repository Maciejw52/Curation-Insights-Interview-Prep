import { useMutation } from "@tanstack/react-query";
import { api } from "../api/client";

export const useSendMessage = () => {
  return useMutation({
    mutationFn: async (text: string) => {
        const res = await api.post("/chat", { text });
  return res.data;
    },
  });
};
