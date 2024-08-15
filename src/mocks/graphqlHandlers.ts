import { delay, graphql, HttpResponse } from "msw";

import board from "./board.json";
import comments from "./comments.json";

import application from "./application.json";

export const graphqlHandlers = [
  graphql.query('ApplicationQuery', async ({}) => {
    await delay();
    return HttpResponse.json(application);
  }),

  graphql.query("BoardQuery", async ({}) => {
    await delay();
    return HttpResponse.json(board);
  }),

  graphql.query("CommentsQuery", async ({}) => {
    await delay();
    return HttpResponse.json(comments);
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

  graphql.mutation("FavoriteBoardContextToggleMutation", ({variables}) => {
    const { boardId } = variables;
    console.log(boardId);

    return HttpResponse.json({
      data: {
        toggleFavoriteBoard: {
          boardId
        }
      },
    });
  })
];
