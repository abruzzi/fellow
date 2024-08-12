import React, { useState } from "react";

import { usePreloadedQuery } from "react-relay";
import { ApplicationQuery } from "./queries/ApplicationQuery.ts";
import { Link } from "react-router-dom";
import { HiOutlinePlus, HiOutlineStar } from "react-icons/hi";

import type { ApplicationQuery as ApplicationQueryType } from "./queries/__generated__/ApplicationQuery.graphql.ts";
import { MdFeaturedPlayList, MdFeaturedVideo } from "react-icons/md";
import { Button } from "@nextui-org/react";
import { FaArrowLeftLong, FaArrowRightLong } from "react-icons/fa6";
import { useFavoriteBoards } from "./FavoriteBoardContext.tsx";
import { SidebarSkeleton } from "./skeletons/SidebarSkeleton.tsx";

// eslint-disable-next-line react/prop-types
export const SimpleBoardList = ({ queryRef }) => {
  const data = usePreloadedQuery<ApplicationQueryType>(
    ApplicationQuery,
    queryRef,
  );

  const { favoriteBoards } = useFavoriteBoards();

  const [minimise, setMinimise] = useState<boolean>(false);

  const handleMinimiseClick = () => {
    setMinimise((min) => !min);
  };

  const isBoardFavorite = (boardId: string) => {
    return favoriteBoards.map((b) => b.id).includes(boardId);
  };

  if (!queryRef) {
    return <SidebarSkeleton />;
  }

  return (
    <div
      className={`bg-slate-100 border-r-1 border-gray-300 bg-opacity-50 backdrop-blur-lg relative`}
    >
      <div className={`absolute top-2 ${minimise ? "right-2" : "right-2"}`}>
        <Button
          isIconOnly
          size="sm"
          variant="light"
          onPress={handleMinimiseClick}
          className="text-slate-600"
        >
          {minimise ? <FaArrowRightLong /> : <FaArrowLeftLong />}
        </Button>
      </div>

      {minimise ? (
        <div className="flex flex-row items-center justify-center w-12 mt-16">
          <ol className="flex flex-wrap justify-start flex-col">
            {(data.boards || []).map((board) => (
              <li key={board.id}>
                <Link to={`/boards/${board.id}`}>
                  <Button
                    isIconOnly
                    title={board.name}
                    variant="light"
                    radius="sm"
                  >
                    <MdFeaturedPlayList className="text-slate-600" />
                  </Button>
                </Link>
              </li>
            ))}

            {(data.collaborateBoards || []).map((board) => (
              <li key={board.id}>
                <Link to={`/boards/${board.id}`}>
                  <Button
                    isIconOnly
                    title={board.name}
                    variant="light"
                    radius="sm"
                  >
                    <MdFeaturedVideo className="text-green-500" />
                  </Button>
                </Link>
              </li>
            ))}
          </ol>
        </div>
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
                  <div className="flex flex-row items-center gap-2 hover:bg-slate-100 px-4 py-1">
                    <MdFeaturedPlayList className="text-slate-600" />
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
                  <div className="flex flex-row items-center gap-2 hover:bg-slate-100 px-4 py-1">
                    <MdFeaturedVideo className="text-emerald-500" />
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
