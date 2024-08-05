import { usePreloadedQuery } from "react-relay";
import { CreateNewBoard } from "./CreateNewBoard.tsx";
import React from "react";
import { Link } from "react-router-dom";
import { Card } from "@nextui-org/react";
import { ApplicationQuery } from "./queries/ApplicationQuery.ts";

import type { ApplicationQuery as ApplicationQueryType } from "./queries/__generated__/ApplicationQuery.graphql.ts";

import { BoardListSkeleton } from "./skeletons/BoardListSkeleton.tsx";

// eslint-disable-next-line react/prop-types
export const BoardListScreen = ({ queryRef, refreshBoards }) => {
  const data = usePreloadedQuery<ApplicationQueryType>(
    ApplicationQuery,
    queryRef,
  );

  if (!queryRef) {
    return <BoardListSkeleton />;
  }

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
