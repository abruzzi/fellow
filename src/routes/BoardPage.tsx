import { App } from "../App.tsx";
import { useParams } from "react-router-dom";

const BoardPage = () => {
  const { boardId = "" } = useParams();
  return <App id={boardId} />;
};

export { BoardPage };
