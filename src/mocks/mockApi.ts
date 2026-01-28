export const mockSendMessage = async (text: string) => {
  await new Promise((res) => setTimeout(res, 800));

  return {
    data: {
      message: `Response to: ${text}`
    }
  };
};
