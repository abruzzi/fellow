import { graphql, useLazyLoadQuery } from "react-relay";
import { Link } from "react-router-dom";

const Boards = () => {
  const data = useLazyLoadQuery(graphql`
    query BoardsQuery {
      boards {
        id
        name
      }
    }
  `);

  return (
    <ol>
      {data.boards.map((board) => (
        <li>
          <Link to={`boards/${board.id}`}>{board.name}</Link>
        </li>
      ))}
    </ol>
  );
};

export { Boards };
