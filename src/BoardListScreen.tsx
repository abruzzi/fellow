import { usePreloadedQuery } from "react-relay";
import { CreateNewBoard } from "./CreateNewBoard.tsx";
import React from "react";
import { Link } from "react-router-dom";
import { Card, CardHeader, Image } from "@nextui-org/react";
import { ApplicationQuery } from "./queries/ApplicationQuery.ts";

import type { ApplicationQuery as ApplicationQueryType } from "./queries/__generated__/ApplicationQuery.graphql.ts";

import { BoardListSkeleton } from "./skeletons/BoardListSkeleton.tsx";

// eslint-disable-next-line react/prop-types
export const BoardListScreen = ({ queryRef }) => {
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
        <CreateNewBoard />
        {data.boards.map((board) => (
          <li key={board.id} className="bg-slate-50 rounded-lg">
            <Link to={`/boards/${board.id}`}>
              <Card className="border-none h-20 w-60">
                <CardHeader className="absolute z-10 top-1 flex-col !items-start">
                  <p className="text-tiny text-slate-700 uppercase font-bold">
                    {board.name}
                  </p>
                </CardHeader>
                <Image
                  removeWrapper
                  alt={board.name}
                  className="z-0 w-full h-full object-cover"
                  src={board.imageUrl}
                />
              </Card>
            </Link>
          </li>
        ))}
      </ol>
    </div>
  );
};
