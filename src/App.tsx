import { graphql, useQueryLoader } from "react-relay";
import { Suspense, useCallback, useEffect } from "react";

export const App = ({ id }: { id: string }) => {
  const [queryRef, loadQuery] = useQueryLoader(graphql`
    query AppQuery($boardId: ID!) {
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

  const refreshBoard = useCallback(() => {
    loadQuery({ boardId: id }, { fetchPolicy: "store-and-network" });
  }, [id, loadQuery]);

  useEffect(() => {
    if (!queryRef) {
      refreshBoard();
    }
  }, [queryRef, refreshBoard]);

  if (!queryRef) {
    return (
      <div className={`container flex flex-col max-w-4xl m-auto my-8`}>
        <div>Loading initial query...</div>
      </div>
    );
  }

  return (
    <div className={`container flex flex-col max-w-4xl m-auto my-8`}>
      <Suspense fallback={<div>Loading...</div>}>
        <Board queryRef={queryRef} refresh={refreshBoard} />
      </Suspense>
    </div>
  );
};

import { Board } from "./Board.tsx";
