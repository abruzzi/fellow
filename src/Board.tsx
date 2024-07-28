import {graphql, usePreloadedQuery} from "react-relay";
import {Column} from "./Column.tsx";
import {HiOutlineStar} from "react-icons/hi";
import React from "react";
import {BoardQuery} from "./__generated__/BoardQuery.graphql.ts";

import {BoardSkeleton} from "./skeletons/BoardSkeleton.tsx";

// eslint-disable-next-line react/prop-types
export const Board = ({ queryRef, refresh: refreshBoard }) => {
  const data = usePreloadedQuery<BoardQuery>(
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
    return <BoardSkeleton />;
  }

  return (
    <div className="h-full flex flex-col">
      <div className="flex flex-row items-center gap-2 bg-slate-100 px-4 py-2 bg-opacity-50 backdrop-blur-md">
        <h2 className="text-xl text-slate-800 font-bold font-mono py-2">
          {data.board.name}
        </h2>
        <span className="mr-auto">
          <HiOutlineStar />
        </span>
      </div>
      <div className="relative mt-4 flex-grow">
        <ol
          className={`flex flex-row gap-4 absolute top-0 left-0 bottom-0 right-0 select-none px-4`}
        >
          {data.board.columns.map((column) => (
            <Column
              key={column.id}
              fragmentRef={column}
              refreshBoard={refreshBoard}
            />
          ))}
        </ol>
      </div>
    </div>
  );
};
