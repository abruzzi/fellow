import { graphql, useQueryLoader } from "react-relay";
import { Suspense, useEffect } from "react";

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

  useEffect(() => {
    if (!queryRef) {
      loadQuery({ boardId: id });
    }
  }, [id, loadQuery, queryRef]);

  if (!queryRef) {
    return <div>Loading initial query...</div>;
  }

  return (
    <div className={`container flex flex-col max-w-4xl m-auto my-8`}>
      <Suspense fallback={<div>Loading...</div>}>
        <Board queryRef={queryRef} refresh={loadQuery} />
      </Suspense>
    </div>
  );
};

import { Board } from "./Board.tsx";
