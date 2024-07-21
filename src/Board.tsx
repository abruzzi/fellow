import { graphql, usePreloadedQuery } from "react-relay";
import { Column } from "./Column.tsx";
import { Header } from "./components/Header.tsx";
import { Link } from "react-router-dom";

export const Board = ({ queryRef, refresh: refreshBoard }) => {
  const data = usePreloadedQuery(
    graphql`
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
    `,
    queryRef,
  );

  if (!data.board) {
    return (
      <div className={`text-lg`}>
        Something went wrong on the board
        <Link to="/boards">Back to all boards</Link>
      </div>
    );
  }

  return (
    <div>
      <Header title={data.board.name} />
      <ol className={`flex flex-row gap-4`}>
        {data.board.columns.slice().map((column) => (
          <Column
            key={column.id}
            fragmentRef={column}
            refreshBoard={refreshBoard}
          />
        ))}
      </ol>
    </div>
  );
};
