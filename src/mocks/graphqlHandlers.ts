import { delay, graphql, HttpResponse } from "msw";

import boards from "./boards.json";
import board from "./board.json";
import user from "./user.json";
import comments from "./comments.json";

import application from "./application.json";

export const graphqlHandlers = [
  graphql.query('ApplicationQuery', async ({}) => {
    await delay();
    return HttpResponse.json(application);
  }),

  graphql.query("BoardsQuery", async ({}) => {
    await delay();
    return HttpResponse.json(boards);
  }),

  graphql.query("BoardQuery", async ({}) => {
    await delay();
    return HttpResponse.json(board);
  }),

  graphql.query("BoardScreenQuery", async ({}) => {
    await delay();
    return HttpResponse.json(board);
  }),

  graphql.query("CommentsQuery", async ({}) => {
    await delay();
    return HttpResponse.json(comments);
  }),

  graphql.query("CurrentUserQuery", async ({}) => {
    await delay();
    return HttpResponse.json(user);
  }),

  graphql.query("NavigationQuery", async ({}) => {
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

  graphql.mutation("FavoriteBoardContextToggleMutation", ({variables}) => {
    const { boardId } = variables;
    return HttpResponse.json({
      data: {
        toggleFavoriteBoard: {
          boardId
        }
      },
    });
  })
];
