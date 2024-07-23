import {
  Button,
  Card,
  Input,
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@nextui-org/react";
import { HiOutlinePlus } from "react-icons/hi";
import React, { ChangeEvent, KeyboardEvent, useState } from "react";
import { graphql, useMutation } from "react-relay";

export const CreateNewBoard = ({ refreshBoards }) => {
  const [name, setName] = useState("");
  const [createBoard, isCreating] = useMutation(graphql`
    mutation CreateNewBoardMutation($name: String!) {
      createBoard(name: $name) {
        id
        name
      }
    }
  `);

  const handleCreateBoard = () => {
    createBoard({
      variables: {
        name: name,
      },
      onCompleted: (response) => {
        console.log(response);
        setIsOpen(false);
        refreshBoards();
      },
      onError: (error) => {
        console.log(error);
      },
    });
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  };

  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      handleCreateBoard();
    }
  };
  const [isOpen, setIsOpen] = useState(false);

  return (
    <li className="bg-slate-50 shadow-sm rounded-sm">
      <Popover
        placement="bottom"
        showArrow
        offset={10}
        isOpen={isOpen}
        onOpenChange={(open) => setIsOpen(open)}
      >
        <PopoverTrigger>
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
        </PopoverTrigger>
        <PopoverContent className="w-[240px]">
          {(titleProps) => (
            <div className="px-1 py-2 w-full">
              <p
                className="text-small font-bold text-foreground"
                {...titleProps}
              >
                Board name
              </p>
              <div className="mt-2 flex flex-col gap-2 w-full">
                <Input
                  autoFocus
                  defaultValue="100%"
                  label="Name"
                  size="sm"
                  variant="bordered"
                  value={name}
                  onChange={handleChange}
                  onKeyDown={handleKeyDown}
                />
                <Button
                  onPress={handleCreateBoard}
                  color="primary"
                  disabled={isCreating}
                >
                  Create
                </Button>
              </div>
            </div>
          )}
        </PopoverContent>
      </Popover>
    </li>
  );
};
