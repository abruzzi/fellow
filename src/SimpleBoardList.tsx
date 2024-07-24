import React from "react";

import { usePreloadedQuery } from "react-relay";
import { BoardsQuery } from "./BoardsQuery.tsx";
import { Link } from "react-router-dom";
import { HiOutlinePlus, HiOutlineStar } from "react-icons/hi";
import { HiViewBoards } from "react-icons/hi";

export const SimpleBoardList = ({ queryRef }) => {
  const data = usePreloadedQuery(BoardsQuery, queryRef);

  return (
    <div className={`px-4 bg-slate-100 border-r-1`}>
      <div className="flex flex-row items-center mt-12">
        <h2 className="text-medium text-slate-800 font-bold font-mono py-2">
          My Boards
        </h2>
        <span className="ml-auto">
          <HiOutlinePlus />
        </span>
      </div>
      <ol className="flex flex-wrap justify-start gap-2 flex-col w-64">
        {data.boards.map((board) => (
          <li key={board.id}>
            <Link to={`/boards/${board.id}`}>
              <div className="flex flex-row items-center gap-1 hover:bg-slate-100">
                <span className="text-slate-700">
                  <HiViewBoards color="gray" />
                </span>
                <p>{board.name}</p>
                <span className="ml-auto">
                  <HiOutlineStar />
                </span>
              </div>
            </Link>
          </li>
        ))}
      </ol>
    </div>
  );
};
