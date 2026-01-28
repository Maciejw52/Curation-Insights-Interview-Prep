import { delay, http, HttpResponse } from "msw";

export const handlers = [
  http.post<never, never>("/api/chat", async ({ request }) => {
    const { text } = await request.json();

    await delay(1000)

    return HttpResponse.json({
      data: {
        message: `Response to: ${text}`
      }
    })
  }),
];
