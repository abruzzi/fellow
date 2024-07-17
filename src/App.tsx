import "./App.css";
import { graphql, useLazyLoadQuery } from "react-relay";

const rootBoardId = "8b03c009-3f38-4e6b-a25e-93aff63d56f1";

function App() {
  const data = useLazyLoadQuery(
    graphql`
      query AppBoardQuery($boardId: ID!) {
        board(id: $boardId) {
          name
          columns {
            id
            name
            position
            cards {
              id
              title
              description
            }
          }
        }
      }
    `,
    { boardId: rootBoardId }
  );

  if (!data.board) {
    return <div className={`text-lg`}>something went wrong</div>;
  }

  return <div>{data.board.name}</div>;
}

export default App;
