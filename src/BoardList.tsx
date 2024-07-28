import { usePreloadedQuery } from "react-relay";
import { CreateNewBoard } from "./CreateNewBoard.tsx";
import React from "react";
import { Link } from "react-router-dom";
import { Card } from "@nextui-org/react";
import { BoardsQuery } from "./queries/BoardsQuery.tsx";

import type { BoardsQuery as BoardsQueryType } from "./queries/__generated__/BoardsQuery.graphql";

// eslint-disable-next-line react/prop-types
export const BoardList = ({ queryRef, refreshBoards }) => {
  const data = usePreloadedQuery<BoardsQueryType>(BoardsQuery, queryRef);

  return (
    <div className={`container flex flex-col max-w-4xl m-auto my-8`}>
      <h1 className={`text-xl text-slate-800 font-bold font-mono py-2`}>
        My Boards
      </h1>
      <ol className="flex flex-wrap justify-start gap-4">
        <CreateNewBoard refreshBoards={refreshBoards} />
        {data.boards.map((board) => (
          <li key={board.id} className="bg-slate-50 rounded-lg">
            <Link to={`/boards/${board.id}`}>
              <Card
                radius="sm"
                className="border-none h-20 w-60 p-4 bg-slate-100"
              >
                <p className="font-bold">{board.name}</p>
              </Card>
            </Link>
          </li>
        ))}
      </ol>
    </div>
  );
};
