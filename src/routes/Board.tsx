import { BoardScreen } from "../BoardScreen.tsx";
import { useParams } from "react-router-dom";
import React from "react";

const Board = () => {
  const { boardId = "" } = useParams();

  return <BoardScreen id={boardId} />;
};

export { Board };
