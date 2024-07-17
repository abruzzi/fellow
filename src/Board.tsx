import "./App.css";
import { graphql, useLazyLoadQuery } from "react-relay";
import { Column } from "./Column.tsx";
import { BoardQuery } from "./__generated__/BoardQuery.graphql.ts";

const rootBoardId = "8b03c009-3f38-4e6b-a25e-93aff63d56f1";

function Board() {
  const data = useLazyLoadQuery<BoardQuery>(
    graphql`
        query BoardQuery($boardId: ID!) {
            board(id: $boardId) {
                name
                columns {
                    id
                    ...ColumnFragment
                }
            }
        }
    `,
    { boardId: rootBoardId }
  );

  if (!data.board) {
    return <div className={`text-lg`}>something went wrong</div>;
  }

  return (
    <div className={`container flex flex-col max-w-4xl m-auto my-8`}>
      <h1 className={`text-4xl text-slate-800 font-bold font-mono my-8`}>
        {data.board.name}
      </h1>
      <div className={`flex flex-row gap-4`}>
        {data.board.columns.map((column) => (
          <Column key={column.id} fragmentRef={column} />
        ))}
      </div>
    </div>
  );
}

export default Board;
