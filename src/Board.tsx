import { graphql, usePreloadedQuery } from "react-relay";
import { Column } from "./Column.tsx";
import { HiOutlineStar } from "react-icons/hi";
import React from "react";
import { BoardQuery } from "./__generated__/BoardQuery.graphql.ts";

import { BoardSkeleton } from "./skeletons/BoardSkeleton.tsx";
import {
  Button,
  Input,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  Select,
  SelectItem,
  useDisclosure,
} from "@nextui-org/react";
import { MdMoreHoriz } from "react-icons/md";
import { FiUserPlus } from "react-icons/fi";

// eslint-disable-next-line react/prop-types
export const Board = ({ queryRef, refresh: refreshBoard }) => {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

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
    <>
      <Modal isOpen={isOpen} onOpenChange={onOpenChange} size="md">
        <ModalContent>
          <>
            <ModalHeader className="flex flex-col gap-1">
              Collaborate with others
            </ModalHeader>
            <ModalBody>
              <div className="flex flex-col gap-4 py-2">
                <Input type="email" label="Email" size="sm" />
                <Select label="Select a role" size="sm">
                  <SelectItem>Member</SelectItem>
                  <SelectItem>Admin</SelectItem>
                </Select>
                <Button color="primary" startContent={<FiUserPlus />}>Send invitation</Button>
              </div>
              <div className="mb-4">
                <p className="font-light text-sm">It might take sometime for the invitation be derived</p>
              </div>
            </ModalBody>
          </>
        </ModalContent>
      </Modal>

      <div className="h-full flex flex-col">
        <div className="flex flex-row items-center gap-2 bg-slate-100 px-4 py-2 bg-opacity-50 backdrop-blur-md">
          <h2 className="text-xl text-slate-800 font-bold font-mono py-2">
            {data.board.name}
          </h2>
          <span className="mr-auto">
            <HiOutlineStar />
          </span>
          <Button
            color="primary"
            startContent={<FiUserPlus />}
            onPress={onOpen}
          >
            Invite others
          </Button>
          <Button isIconOnly variant="light">
            <MdMoreHoriz />
          </Button>
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
    </>
  );
};
