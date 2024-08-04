import React, { useState } from "react";

import { usePreloadedQuery } from "react-relay";
import { ApplicationQuery } from "./queries/ApplicationQuery.tsx";
import { Link } from "react-router-dom";
import { HiOutlinePlus, HiOutlineStar } from "react-icons/hi";

import type { BoardsQuery as BoardsQueryType } from "./queries/__generated__/BoardsQuery.graphql.ts";
import { MdFeaturedPlayList, MdFeaturedVideo } from "react-icons/md";
import { Button } from "@nextui-org/react";
import { FaArrowLeftLong, FaArrowRightLong } from "react-icons/fa6";

// eslint-disable-next-line react/prop-types
export const SimpleBoardList = ({ queryRef }) => {
  const data = usePreloadedQuery<BoardsQueryType>(ApplicationQuery, queryRef);
  const [minimise, setMinimise] = useState<boolean>(false);

  const handleMinimiseClick = () => {
    setMinimise((min) => !min);
  };

  const isBoardFavorite = (boardId: string) => {
    return data.favoriteBoards.map((b) => b.id).includes(boardId);
  };

  return (
    <div
      className={`bg-slate-100 border-r-1 border-gray-300 bg-opacity-50 backdrop-blur-lg relative`}
    >
      <div className={`absolute top-2 ${minimise ? "-right-2" : "right-2"}`}>
        <Button
          isIconOnly
          size="sm"
          variant="light"
          onPress={handleMinimiseClick}
        >
          {minimise ? <FaArrowRightLong /> : <FaArrowLeftLong />}
        </Button>
      </div>

      {minimise ? (
        <div className="w-4" />
      ) : (
        <div>
          <div className="flex flex-row items-center mt-12 px-4">
            <h2 className="text-medium text-slate-800 font-bold font-mono py-2">
              My Boards
            </h2>
            <span className="ml-auto">
              <HiOutlinePlus />
            </span>
          </div>
          <ol className="flex flex-wrap justify-start flex-col w-64">
            {(data.boards || []).map((board) => (
              <li key={board.id}>
                <Link to={`/boards/${board.id}`}>
                  <div className="flex flex-row items-center gap-1 hover:bg-slate-100 px-4 py-1">
                    <span className="text-slate-700">
                      <MdFeaturedPlayList />
                    </span>
                    <p>{board.name}</p>
                    <span
                      className={`${isBoardFavorite(board.id) ? "text-orange-400" : "text-slate-700"} ml-auto`}
                    >
                      <HiOutlineStar />
                    </span>
                  </div>
                </Link>
              </li>
            ))}

            {(data.collaborateBoards || []).map((board) => (
              <li key={board.id}>
                <Link to={`/boards/${board.id}`}>
                  <div className="flex flex-row items-center gap-1 hover:bg-slate-100 px-4 py-1">
                    <span className="text-emerald-500">
                      <MdFeaturedVideo />
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
      )}
    </div>
  );
};
