import React, { Suspense, useEffect } from "react";

import { useQueryLoader } from "react-relay";
import { BoardList } from "./BoardList.tsx";
import { BoardsQuery } from "./queries/BoardsQuery.tsx";

import { BoardsQuery as BoardsQueryType } from "./queries/__generated__/BoardsQuery.graphql.ts";
import { BoardListSkeleton } from "./skeletons/BoardListSkeleton.tsx";
import { ErrorBoundary } from "react-error-boundary";

const Boards = () => {
  const [queryRef, loadQuery] = useQueryLoader<BoardsQueryType>(BoardsQuery);

  useEffect(() => {
    loadQuery({});
  }, [loadQuery]);

  const refreshBoards = () => {
    loadQuery({}, { fetchPolicy: "network-only" });
  };

  return (
    <ErrorBoundary fallback={<div>Something went wrong on the board list</div>}>
      <Suspense fallback={<BoardListSkeleton />}>
        {queryRef ? (
          <BoardList queryRef={queryRef} refreshBoards={refreshBoards} />
        ) : null}
      </Suspense>
    </ErrorBoundary>
  );
};

export { Boards };
