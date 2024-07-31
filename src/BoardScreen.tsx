import { graphql, useQueryLoader } from "react-relay";
import React, { Suspense, useCallback, useEffect } from "react";

import { Board } from "./Board.tsx";
import { Sidebar } from "./Sidebar.tsx";
import { BoardScreenSkeleton } from "./skeletons/BoardScreenSkeleton.tsx";
import { BoardSkeleton } from "./skeletons/BoardSkeleton.tsx";

export const BoardScreen = ({ id }: { id: string }) => {
  const [queryRef, loadQuery] = useQueryLoader(graphql`
    query BoardScreenQuery($boardId: ID!) {
      board(id: $boardId) {
        id
        name
        columns {
          id
          position
          ...ColumnFragment
        }
      }
    }
  `);

  const refreshBoard = useCallback(
    (id: string) => {
      loadQuery({ boardId: id }, { fetchPolicy: "store-and-network" });
    },
    [loadQuery],
  );

  useEffect(() => {
    if (!queryRef) {
      refreshBoard(id);
    }
  }, [queryRef, refreshBoard, id]);

  useEffect(() => {
    refreshBoard(id);
  }, [id, refreshBoard]);

  if (!queryRef) {
    return <BoardScreenSkeleton />;
  }

  return (
    <div className="h-full flex">
      <Sidebar />
      <div className="flex-grow">
        <Suspense fallback={<BoardSkeleton />}>
          <Board queryRef={queryRef} refresh={refreshBoard} />
        </Suspense>
      </div>
    </div>
  );
};
