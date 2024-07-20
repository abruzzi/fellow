import { graphql, useLazyLoadQuery } from "react-relay";
import { Link } from "react-router-dom";
import { Header } from "./components/Header.tsx";

const Boards = () => {
  const data = useLazyLoadQuery(
    graphql`
      query BoardsQuery {
        boards {
          id
          name
        }
      }
    `,
    {},
  );

  return (
    <div className={`container flex flex-col max-w-4xl m-auto my-8`}>
      <Header title="My Boards" />
      <ol className="flex flex-wrap justify-start gap-4">
        {data.boards.map((board) => (
          <li
            key={board.id}
            className="bg-slate-50 shadow-sm rounded-lg p-4 w-60"
          >
            <Link to={`/boards/${board.id}`}>
              <div className="text-lg font-semibold text-center text-slate-700">
                {board.name}
              </div>
            </Link>
          </li>
        ))}
      </ol>
    </div>
  );
};

export { Boards };
