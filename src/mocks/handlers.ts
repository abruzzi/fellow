import {delay, graphql, HttpResponse} from "msw";

import boards from "./boards.json";
import board from "./board.json";
import user from "./user.json";

export const handlers = [
  graphql.query("BoardsQuery", async ({}) => {
    await delay();
    return HttpResponse.json(boards);
  }),

  graphql.query("BoardScreenQuery", async ({}) => {
    await delay();
    return HttpResponse.json(board);
  }),

  graphql.query("CurrentUserQuery", async ({}) => {
    await delay();
    return HttpResponse.json(user);
  }),

  graphql.query("NavigationQuery", async({}) => {
    await delay();
    return HttpResponse.json(user);
  }),

  graphql.mutation("ColumnMoveCardMutation", ({ variables }) => {
    const { cardId } = variables;
    return HttpResponse.json({
      data: {
        moveCard: {
          id: cardId,
          title: "",
          description: "",
          position: 100,
        },
      },
    });
  }),
];
