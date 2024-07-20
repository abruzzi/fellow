import { graphql, useLazyLoadQuery } from "react-relay";
import { Link } from "react-router-dom";
import { Header } from "./components/Header.tsx";
import {Button, Input} from "@nextui-org/react";
import { HiOutlinePlus } from "react-icons/hi";
import { HiOutlineX } from "react-icons/hi";

import { useState } from "react";

const Column = ({ name }: { name: string }) => {
  const [isEditing, setEditing] = useState<boolean>(false);

  const toggleEditing = () => {
    setEditing((isEditing) => !isEditing);
  };

  return (
    <div className="flex-1 overflow-auto">
      <div className="bg-gray-100 p-4 rounded-lg flex flex-col max-h-screen">
        <h2 className="text-lg font-semibold mb-4">{name}</h2>
        <div className="flex-1 p-4 mb-4 overflow-auto">
          {" "}
          {/* Placeholder for tickets */}
        </div>
        {isEditing && <div className={`flex flex-col gap-2`}>
          <Input variant="bordered" type="text" label="Title" placeholder="Type text for the title" autoFocus />
          <div className={`flex flex-row gap-2 align-middle`}>
            <Button color="primary" onClick={toggleEditing}>Add</Button>
            <Button isIconOnly color="default" variant="solid" aria-label="Cancel" onClick={toggleEditing}>
              <HiOutlineX />
            </Button>
          </div>
        </div>}
        {!isEditing && (
          <Button
            variant="light"
            color="default"
            startContent={<HiOutlinePlus />}
            onClick={toggleEditing}
          >
            Add a card
          </Button>
        )}
      </div>
    </div>
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
        {data.boards.map((board) => (
          <li
            key={board.id}
            className="bg-slate-50 shadow-sm rounded-lg p-4 w-60"
          >
            <Link to={`/boards/${board.id}`}>
              <div className="text-lg font-semibold text-center text-slate-700">
                {board.name}
              </div>
            </Link>
          </li>
        ))}
      </ol>

      <div className="min-h-screen flex overflow-hidden gap-4 py-4">
        <Column name={"To Do"} />
        <Column name={"In Progress"} />
        <Column name={"Done"} />
      </div>
    </div>
  );
};

export { Boards };
