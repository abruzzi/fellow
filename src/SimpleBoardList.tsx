import React, { useState } from "react";

import { graphql, useFragment } from "react-relay";
import { Link } from "react-router-dom";
import { HiOutlinePlus, HiOutlineStar } from "react-icons/hi";

import { MdFeaturedPlayList, MdFeaturedVideo } from "react-icons/md";
import { Button } from "@nextui-org/react";
import { FaArrowLeftLong, FaArrowRightLong } from "react-icons/fa6";
import { useFavoriteBoards } from "./FavoriteBoardContext.tsx";
import { SimpleBoardListFragment$key } from "./__generated__/SimpleBoardListFragment.graphql.ts";
import { BoardSettingsFragment$key } from "./__generated__/BoardSettingsFragment.graphql.ts";
import { BoardSettingsFragment } from "./BoardSettings.tsx";

export const SimpleBoardListFragment = graphql`
  fragment SimpleBoardListFragment on Viewer {
    collaborateBoards {
      id
      ...BoardSettingsFragment
    }
    boards {
      id
      ...BoardSettingsFragment
    }
  }
`;

type SimpleBoardListProps = {
  boards: SimpleBoardListFragment$key;
};

export const SimpleBoardList = ({ boards }: SimpleBoardListProps) => {
  const data = useFragment<SimpleBoardListFragment$key>(
    SimpleBoardListFragment,
    boards,
  );

  const { favoriteBoards } = useFavoriteBoards();

  const [minimise, setMinimise] = useState<boolean>(false);

  const handleMinimiseClick = () => {
    setMinimise((min) => !min);
  };

  const isBoardFavorite = (boardId: string) => {
    return favoriteBoards.map((b) => b.id).includes(boardId);
  };

  return (
    <div
      className={`bg-slate-100 border-r-1 border-gray-300 bg-opacity-50 backdrop-blur-lg relative`}
    >
      <div className={`absolute top-4 ${minimise ? "right-2" : "right-2"}`}>
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
        <div className="flex flex-row items-center justify-center w-12 mt-16 transition-all duration-500 ease-in-out">
          <ol className="flex flex-wrap justify-start flex-col">
            {(data.boards || []).map((board) => (
              <MiniBoardListItem board={board} key={board.id} />
            ))}

            {(data.collaborateBoards || []).map((board) => (
              <MiniCollaborateBoardListItem board={board} key={board.id} />
            ))}
          </ol>
        </div>
      ) : (
        <div className="transition-width duration-500 ease-in-out">
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
              <BoardListItem
                board={board}
                key={board.id}
                isBoardFavorite={isBoardFavorite}
              />
            ))}

            {(data.collaborateBoards || []).map((board) => (
              <CollaborateBoardListItem board={board} key={board.id} />
            ))}
          </ol>
        </div>
      )}
    </div>
  );
};

const MiniBoardListItem = ({ board }: { board: BoardSettingsFragment$key }) => {
  const data = useFragment(BoardSettingsFragment, board);

  return (
    <li key={data.id}>
      <Link to={`/boards/${data.id}`}>
        <Button isIconOnly title={data.name} variant="light" radius="sm">
          <MdFeaturedPlayList className="text-slate-600" />
        </Button>
      </Link>
    </li>
  );
};

const MiniCollaborateBoardListItem = ({
  board,
}: {
  board: BoardSettingsFragment$key;
}) => {
  const data = useFragment(BoardSettingsFragment, board);

  return (
    <li key={data.id}>
      <Link to={`/boards/${data.id}`}>
        <Button isIconOnly title={data.name} variant="light" radius="sm">
          <MdFeaturedVideo className="text-green-500" />
        </Button>
      </Link>
    </li>
  );
};

const BoardListItem = ({
  board,
  isBoardFavorite,
}: {
  board: BoardSettingsFragment$key;
  isBoardFavorite: (id: string) => boolean;
}) => {
  const data = useFragment(BoardSettingsFragment, board);

  return (
    <li key={data.id}>
      <Link to={`/boards/${data.id}`}>
        <div className="flex flex-row items-center gap-2 hover:bg-slate-100 px-4 py-1">
          <MdFeaturedPlayList className="text-slate-600" />
          <p>{data.name}</p>
          <span
            className={`${isBoardFavorite(data.id) ? "text-orange-400" : "text-slate-700"} ml-auto`}
          >
            <HiOutlineStar />
          </span>
        </div>
      </Link>
    </li>
  );
};

const CollaborateBoardListItem = ({
  board,
}: {
  board: BoardSettingsFragment$key;
}) => {
  const data = useFragment(BoardSettingsFragment, board);

  return (
    <li key={data.id}>
      <Link to={`/boards/${data.id}`}>
        <div className="flex flex-row items-center gap-2 hover:bg-slate-100 px-4 py-1">
          <MdFeaturedVideo className="text-emerald-500" />
          <p>{data.name}</p>
          <span className="ml-auto">
            <HiOutlineStar />
          </span>
        </div>
      </Link>
    </li>
  );
};
