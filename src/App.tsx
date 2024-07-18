import { graphql, useQueryLoader } from "react-relay";
import { Suspense, useEffect } from "react";
import { Board } from "./Board.tsx";

const rootBoardId = "8b03c009-3f38-4e6b-a25e-93aff63d56f1";

export const App = () => {
  const [queryRef, loadQuery] = useQueryLoader(graphql`
    query AppQuery($boardId: ID!) {
      board(id: $boardId) {
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
      loadQuery({ boardId: rootBoardId });
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
