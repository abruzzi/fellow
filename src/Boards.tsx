import React, { Suspense } from "react";

import { BoardListScreen } from "./BoardListScreen.tsx";

import { BoardListSkeleton } from "./skeletons/BoardListSkeleton.tsx";
import { ErrorBoundary } from "react-error-boundary";
import { useOutletContext } from "react-router-dom";
import { RootContextType } from "./types.ts";

const Boards = () => {
  const { queryRef, refreshQuery } = useOutletContext<RootContextType>();

  return (
    <ErrorBoundary fallback={<div>Something went wrong on the board list</div>}>
      <Suspense fallback={<BoardListSkeleton />}>
        <BoardListScreen queryRef={queryRef} refreshBoards={refreshQuery} />
      </Suspense>
    </ErrorBoundary>
  );
};

export { Boards };
