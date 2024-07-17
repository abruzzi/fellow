import { graphql, usePreloadedQuery, useQueryLoader } from "react-relay";
import { Column } from "./Column.tsx";
import { HTML5Backend } from "react-dnd-html5-backend";
import { DndProvider } from "react-dnd";
import { Suspense, useEffect } from "react";

const rootBoardId = "8b03c009-3f38-4e6b-a25e-93aff63d56f1";

const BoardQuery = graphql`
  query BoardQuery($boardId: ID!) {
    board(id: $boardId) {
      name
      columns {
        id
        position
        ...ColumnFragment
      }
    }
  }
`;

export const App = () => {
  const [queryRef, loadQuery] = useQueryLoader(BoardQuery);

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

function Board({ queryRef, refresh }) {
  const data = usePreloadedQuery(BoardQuery, queryRef);

  if (!data.board) {
    return <div className={`text-lg`}>something went wrong</div>;
  }

  const onMoveCard = () => {
    refresh({ boardId: rootBoardId }, { fetchPolicy: "network-only" });
  };

  return (
    <DndProvider backend={HTML5Backend}>
      <div className={`container flex flex-col max-w-4xl m-auto my-8`}>
        <h1 className={`text-4xl text-slate-800 font-bold font-mono my-8`}>
          {data.board.name}
        </h1>
        <div className={`flex flex-row gap-4`}>
          {data.board.columns
            .slice()
            .sort((a, b) => a.position - b.position)
            .map((column) => (
              <Column
                key={column.id}
                fragmentRef={column}
                onMoveCard={onMoveCard}
              />
            ))}
        </div>
      </div>
    </DndProvider>
  );
}
