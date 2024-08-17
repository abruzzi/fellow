import { usePreloadedQuery } from "react-relay";
import React from "react";

import { BoardSkeleton } from "./skeletons/BoardSkeleton.tsx";
import { BoardQuery as BoardQueryType } from "./queries/__generated__/BoardQuery.graphql.ts";
import { BoardQuery } from "./queries/Board.ts";
import { Board } from "./Board.tsx";

// eslint-disable-next-line react/prop-types
export const BoardContainer = ({ queryRef }) => {
  const data = usePreloadedQuery<BoardQueryType>(BoardQuery, queryRef);

  console.log(data);

  if (!data.viewer.board) {
    return <BoardSkeleton />;
  }

  return <Board board={data.viewer.board} />;
};
