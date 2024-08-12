import { usePreloadedQuery } from "react-relay";
import { Column } from "./Column.tsx";
import { HiOutlineStar } from "react-icons/hi";
import React, { useEffect, useMemo, useState } from "react";

import { BoardSkeleton } from "./skeletons/BoardSkeleton.tsx";
import {
  Button,
  Input,
  Modal,
  ModalBody,
  ModalContent,
  ModalHeader,
  Select,
  SelectItem,
  useDisclosure,
} from "@nextui-org/react";
import { MdMoreHoriz } from "react-icons/md";
import { FiUserPlus } from "react-icons/fi";
import { useAuth } from "./AuthenticationContext.tsx";
import { useFavoriteBoards } from "./FavoriteBoardContext.tsx";
import { BoardQuery as BoardQueryType } from "./queries/__generated__/BoardQuery.graphql.ts";
import { BoardQuery } from "./queries/BoardQuery.ts";

const validateEmail = (value) =>
  value.match(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+.[A-Z]{2,4}$/i);

// eslint-disable-next-line react/prop-types
export const Board = ({ queryRef, refresh: refreshBoard }) => {
  const { token } = useAuth();
  const { toggleFavorite, favoriteBoards } = useFavoriteBoards();

  const [isFavorite, setFavorite] = useState<boolean>(false);
  const [role, setRole] = useState<string>("member");
  const [email, setEmail] = useState<string>("");
  const [isSendingInvite, setSendingInvite] = useState<boolean>(false);

  const { isOpen, onOpen, onClose, onOpenChange } = useDisclosure();

  const isInvalid = useMemo(() => {
    if (email === "") return false;
    return !validateEmail(email);
  }, [email]);

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

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleRoleSelect = (e) => {
    setRole(e.target.value);
  };

  const handleSendInvite = async (afterSubmit: () => void) => {
    setSendingInvite(true);
    try {
      // just send it out, we could handle it async
      await fetch(`${import.meta.env.VITE_BOARDS_BASE_URL}/invite`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({ email, boardId: data.board.id }),
      });
    } catch (error) {
      console.log(error);
    } finally {
      setSendingInvite(false);
    }

    if (!isInvalid) {
      afterSubmit();
    }
  };

  const handleFavoriteBoard = () => {
    toggleFavorite(data.board.id);
  };

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
                <Input
                  type="email"
                  label="Email"
                  size="sm"
                  isInvalid={isInvalid}
                  color={isInvalid ? "danger" : "default"}
                  errorMessage="Please enter a valid email"
                  onChange={handleEmailChange}
                />
                <Select
                  label="Select a role"
                  size="sm"
                  selectedKeys={[role]}
                  onChange={handleRoleSelect}
                  multiple={false}
                >
                  <SelectItem key="member">Member</SelectItem>
                  <SelectItem key="admin">Admin</SelectItem>
                </Select>
                <Button
                  color="primary"
                  startContent={<FiUserPlus />}
                  onPress={() => handleSendInvite(onClose)}
                  disabled={isInvalid || isSendingInvite}
                  isLoading={isSendingInvite}
                >
                  Send invitation
                </Button>
              </div>
              <div className="mb-4">
                <p className="font-light text-sm">
                  It might take some time for the invitation be derived
                </p>
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
