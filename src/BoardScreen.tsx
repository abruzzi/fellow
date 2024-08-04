import { useQueryLoader } from "react-relay";
import React, { Suspense, useCallback, useEffect } from "react";

import { Board } from "./Board.tsx";
import { Sidebar } from "./Sidebar.tsx";
import { BoardScreenSkeleton } from "./skeletons/BoardScreenSkeleton.tsx";
import { BoardSkeleton } from "./skeletons/BoardSkeleton.tsx";
import { ErrorBoundary } from "react-error-boundary";
import { BoardQuery } from "./queries/BoardQuery.ts";
import { useNavigate, useParams } from "react-router-dom";

export const BoardScreen = () => {
  const { boardId = "" } = useParams();

  const [queryRef, loadQuery] = useQueryLoader(BoardQuery);

  const navigate = useNavigate();

  if (!boardId || boardId.length === 0) {
    navigate("/boards");
  }

  const refreshBoard = useCallback(
    (id: string) => {
      loadQuery({ boardId: id }, { fetchPolicy: "store-and-network" });
    },
    [loadQuery],
  );

  useEffect(() => {
    if (!queryRef) {
      refreshBoard(boardId);
    }
  }, [queryRef, refreshBoard, boardId]);

  if (!queryRef) {
    return <BoardScreenSkeleton />;
  }

  return (
    <div className="h-full flex">
      <Sidebar />
      <div className="flex-grow">
        <ErrorBoundary fallback={<div>Something went wrong on the board</div>}>
          <Suspense fallback={<BoardSkeleton />}>
            <Board queryRef={queryRef} refresh={refreshBoard} />
          </Suspense>
        </ErrorBoundary>
      </div>
    </div>
  );
};
