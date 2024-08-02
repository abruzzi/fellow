import { http, HttpResponse } from "msw";

export const restHandlers = [
  http.post("/accept-invitation", () => {
    return HttpResponse.json({
      boardId: "7a9a4ed2-ef04-47b7-9877-fe3eb0da5a2e",
    });
  }),
];
