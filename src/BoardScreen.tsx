import { useQueryLoader } from "react-relay";
import React, { Suspense, useCallback, useEffect } from "react";

import { BoardContainer } from "./BoardContainer.tsx";
import { BoardScreenSkeleton } from "./skeletons/BoardScreenSkeleton.tsx";
import { BoardSkeleton } from "./skeletons/BoardSkeleton.tsx";
import { ErrorBoundary } from "react-error-boundary";
import { useNavigate, useOutletContext, useParams } from "react-router-dom";
import { SimpleBoardList } from "./SimpleBoardList.tsx";
import { RootContextType } from "./types.ts";
import { BoardQuery } from "./queries/Board.ts";

export const BoardScreen = () => {
  const { applicationData } = useOutletContext<RootContextType>();
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
      <SimpleBoardList boards={applicationData.viewer} />
      <div className="flex-grow flex flex-row w-full">
        <ErrorBoundary fallback={<div>Something went wrong on the board</div>}>
          <Suspense fallback={<BoardSkeleton />}>
            <BoardContainer queryRef={boardQueryRef} />
          </Suspense>
        </ErrorBoundary>
      </div>
    </div>
  );
};
