import { graphql, useQueryLoader } from "react-relay";
import React, { Suspense, useCallback, useEffect } from "react";

import { Board } from "./Board.tsx";
import { Sidebar } from "./Sidebar.tsx";

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
    return (
      <div className={`container flex flex-col max-w-4xl m-auto my-8`}>
        <div>Loading initial query...</div>
      </div>
    );
  }

  return (
    <div className="h-full flex">
      <Sidebar />
      <div className={`flex-grow`}>
        <Suspense fallback={<div>Loading...</div>}>
          <Board queryRef={queryRef} refresh={refreshBoard} />
        </Suspense>
      </div>
    </div>
  );
};
