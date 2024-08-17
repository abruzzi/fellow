import { useFragment } from "react-relay";
import { CreateNewBoard } from "./CreateNewBoard.tsx";
import React from "react";
import { Link } from "react-router-dom";
import { Card, CardHeader, Image } from "@nextui-org/react";

import { graphql } from "react-relay";
import { BoardListScreenFragment$key } from "./__generated__/BoardListScreenFragment.graphql.ts";
import { BoardSettingsFragment$key } from "./__generated__/BoardSettingsFragment.graphql.ts";
import { BoardSettingsFragment } from "./BoardSettings.tsx";

export const BoardListScreenFragment = graphql`
  fragment BoardListScreenFragment on Viewer {
    boards {
      id
      ...BoardSettingsFragment
    }
  }
`;
// eslint-disable-next-line react/prop-types
export const BoardListScreen = ({
  boards,
}: {
  boards: BoardListScreenFragment$key;
}) => {
  const data = useFragment(BoardListScreenFragment, boards);

  return (
    <div className={`container flex flex-col max-w-4xl m-auto my-8`}>
      <h1 className={`text-xl text-slate-800 font-bold font-mono py-2`}>
        My Boards
      </h1>
      <ol className="flex flex-wrap justify-start gap-4">
        <CreateNewBoard />
        {data.boards.map((board) => (
          <BoardListItem key={board.id} board={board} />
        ))}
      </ol>
    </div>
  );
};

const BoardListItem = ({ board }: { board: BoardSettingsFragment$key }) => {
  const data = useFragment(BoardSettingsFragment, board);

  return (
    <li key={data.id} className="bg-slate-50 rounded-lg">
      <Link to={`/boards/${data.id}`}>
        <Card className="border-none h-20 w-60">
          <CardHeader className="absolute z-10 top-1 flex-col !items-start">
            <p className="text-tiny text-slate-700 uppercase font-bold">
              {data.name}
            </p>
          </CardHeader>
          <Image
            removeWrapper
            alt={data.name}
            className="z-0 w-full h-full object-cover"
            src={data.imageUrl}
          />
        </Card>
      </Link>
    </li>
  );
};
