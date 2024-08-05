import { useQueryLoader } from "react-relay";
import React, { Suspense, useCallback, useEffect } from "react";

import { Board } from "./Board.tsx";
import { BoardScreenSkeleton } from "./skeletons/BoardScreenSkeleton.tsx";
import { BoardSkeleton } from "./skeletons/BoardSkeleton.tsx";
import { ErrorBoundary } from "react-error-boundary";
import { BoardQuery } from "./queries/BoardQuery.ts";
import { useNavigate, useOutletContext, useParams } from "react-router-dom";
import { SidebarSkeleton } from "./skeletons/SidebarSkeleton.tsx";
import { SimpleBoardList } from "./SimpleBoardList.tsx";
import { RootContextType } from "./types.ts";

export const BoardScreen = () => {
  const { queryRef } = useOutletContext<RootContextType>();
  const { boardId } = useParams();

  const [boardQueryRef, loadBoardQuery] = useQueryLoader(BoardQuery);

  const navigate = useNavigate();

  if (!boardId) {
    navigate("/boards");
  }

  const refreshBoard = useCallback(
    (id: string) => {
      loadBoardQuery({ boardId: id }, { fetchPolicy: "store-and-network" });
    },
    [loadBoardQuery],
  );

  useEffect(() => {
    refreshBoard(boardId);
  }, [refreshBoard, boardId]);

  if (!boardQueryRef) {
    return <BoardScreenSkeleton />;
  }

  return (
    <div className="h-full flex">
      <ErrorBoundary fallback={<div>Something went wrong on the sidebar</div>}>
        <Suspense fallback={<SidebarSkeleton />}>
          <SimpleBoardList queryRef={queryRef} />
        </Suspense>
      </ErrorBoundary>
      <div className="flex-grow">
        <ErrorBoundary fallback={<div>Something went wrong on the board</div>}>
          <Suspense fallback={<BoardSkeleton />}>
            <Board queryRef={boardQueryRef} refresh={refreshBoard} />
          </Suspense>
        </ErrorBoundary>
      </div>
    </div>
  );
};
