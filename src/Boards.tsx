import { graphql, useLazyLoadQuery } from "react-relay";
import { Link } from "react-router-dom";
import { Header } from "./components/Header.tsx";

import React from "react";
import { Card } from "@nextui-org/react";
import { HiOutlinePlus } from "react-icons/hi";

const CreateNewBoard = () => {
  return (
    <li className="bg-slate-50 shadow-sm rounded-sm">
      <Link to={`/boards/new`}>
        <Card
          isFooterBlurred
          radius="sm"
          className="border-none h-20 w-60 p-4 justify-center font-light"
        >
          <div className="flex justify-center items-center gap-2">
            <HiOutlinePlus />
            <p>Create new board</p>
          </div>
        </Card>
      </Link>
    </li>
  );
};

const BoardCard = ({ board }) => {
  return (
    <li key={board.id} className="bg-slate-50 rounded-sm">
      <Link to={`/boards/${board.id}`}>
        <Card radius="sm" className="border-none h-20 w-60 p-4 bg-slate-100">
          <p className="font-bold">{board.name}</p>
        </Card>
      </Link>
    </li>
  );
};

const Boards = () => {
  const data = useLazyLoadQuery(
    graphql`
      query BoardsQuery {
        boards {
          id
          name
        }
      }
    `,
    {},
  );

  return (
    <div className={`container flex flex-col max-w-4xl m-auto my-8`}>
      <Header title="My Boards" />
      <ol className="flex flex-wrap justify-start gap-4">
        <CreateNewBoard />

        {data.boards.map((board) => (
          <BoardCard key={board.id} board={board} />
        ))}
      </ol>
    </div>
  );
};

export { Boards };
