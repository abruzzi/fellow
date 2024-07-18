import { graphql, useQueryLoader } from "react-relay";
import { Suspense, useEffect } from "react";
import { Board } from "./Board.tsx";

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
  }, [loadQuery, queryRef]);

  if (!queryRef) {
    return <div>Loading initial query...</div>;
  }

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Board queryRef={queryRef} refresh={loadQuery} />
    </Suspense>
  );
};
