import { usePreloadedQuery } from "react-relay";
import { Column } from "./Column.tsx";
import { HiOutlineStar } from "react-icons/hi";
import React, { useEffect, useState } from "react";

import { BoardSkeleton } from "./skeletons/BoardSkeleton.tsx";
import { Button, useDisclosure } from "@nextui-org/react";
import { FiUserPlus } from "react-icons/fi";
import { useFavoriteBoards } from "./FavoriteBoardContext.tsx";
import { BoardQuery as BoardQueryType } from "./queries/__generated__/BoardQuery.graphql.ts";
import { BoardQuery } from "./queries/BoardQuery.ts";
import { BoardSettings } from "./BoardSettings.tsx";
import { InviteModel } from "./InviteModel.tsx";

// eslint-disable-next-line react/prop-types
export const Board = ({ queryRef }) => {
  const { toggleFavorite, favoriteBoards } = useFavoriteBoards();

  const [isFavorite, setFavorite] = useState<boolean>(false);

  const { isOpen, onOpen, onClose, onOpenChange } = useDisclosure();

  const data = usePreloadedQuery<BoardQueryType>(BoardQuery, queryRef);

  useEffect(() => {
    if (data.board && favoriteBoards) {
      const isFav = favoriteBoards
        .map((board) => board.id)
        .includes(data.board.id);
      setFavorite(isFav);
    }
  }, [data, favoriteBoards]);

  if (!data.board) {
    return <BoardSkeleton />;
  }

  const handleFavoriteBoard = () => {
    toggleFavorite(data.board.id);
  };

  return (
    <>
      <InviteModel
        boardId={data.board.id}
        isOpen={isOpen}
        onOpenChange={onOpenChange}
        onClose={onClose}
      />

      <div className="h-full flex flex-col relative w-full overflow-x-auto">
        {data.board.imageUrl && (
          <div
            className="absolute top-0 left-0 right-0 bottom-0 bg-gradient-to-br from-slate-50 to-slate-100 bg-cover bg-center"
            style={{
              backgroundImage: `url(${data.board.imageUrl})`,
            }}
          />
        )}
        <div className="flex flex-row items-center gap-2 bg-slate-100 px-4 py-2 bg-opacity-50 backdrop-blur-md">
          <h2 className="text-xl text-slate-800 font-bold font-mono py-2">
            {data.board.name}
          </h2>
          <span className="mr-auto">
            <Button
              isIconOnly
              size="md"
              variant="light"
              onPress={handleFavoriteBoard}
              className={`${isFavorite ? "text-orange-400" : "text-slate-700"}`}
            >
              <HiOutlineStar />
            </Button>
          </span>
          <Button
            color="primary"
            startContent={<FiUserPlus />}
            onPress={onOpen}
          >
            Share
          </Button>
        </div>
        <div className="relative my-4 flex-grow">
          <ol
            className={`flex flex-row gap-4 absolute top-0 left-0 bottom-0 right-0 select-none px-4`}
          >
            {data.board.columns.map((column) => (
              <Column key={column.id} column={column} />
            ))}
          </ol>
        </div>
      </div>

      <BoardSettings board={data.board} />
    </>
  );
};
