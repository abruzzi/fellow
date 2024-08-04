import React, { Suspense } from "react";

import { BoardList } from "./BoardList.tsx";

import { BoardListSkeleton } from "./skeletons/BoardListSkeleton.tsx";
import { ErrorBoundary } from "react-error-boundary";
import { useOutletContext } from "react-router-dom";
import { PreloadedQuery } from "react-relay";

import { ApplicationQuery as ApplicationQueryType } from "./queries/__generated__/ApplicationQuery.graphql.ts";

type RootContextType = {
  queryRef: PreloadedQuery<ApplicationQueryType>;
  refreshQuery: () => void;
};

const Boards = () => {
  const { queryRef, refreshQuery } = useOutletContext<RootContextType>();

  return (
    <ErrorBoundary fallback={<div>Something went wrong on the board list</div>}>
      <Suspense fallback={<BoardListSkeleton />}>
        {queryRef ? (
          <BoardList queryRef={queryRef} refreshBoards={refreshQuery} />
        ) : null}
      </Suspense>
    </ErrorBoundary>
  );
};

export { Boards };
