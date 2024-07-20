import React, { useState } from "react";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  Input,
  Textarea,
} from "@nextui-org/react";
import { graphql, useMutation } from "react-relay";
import { HiOutlineMenu } from "react-icons/hi";
import { HiOutlineMenuAlt2 } from "react-icons/hi";

export const CardEditor = ({
  cardId,
  cardTitle,
  cardDescription,
  isOpen,
  onCardRemoved,
  onOpenChange,
}: {
  cardId: string;
  cardTitle: string;
  cardDescription: string;
  isOpen: boolean;
  onCardRemoved: () => void;
  onOpenChange: () => void;
}) => {
  const [title, setTitle] = useState(cardTitle);
  const [description, setDescription] = useState(cardDescription);

  const [commit, isDeleting] = useMutation(graphql`
    mutation CardDeleteMutation($id: ID!) {
      deleteCard(cardId: $id) {
        id
        position
      }
    }
  `);

  const handleDelete = () => {
    commit({
      variables: { id: cardId },
      onCompleted: () => {
        onCardRemoved();
      },
      onError: () => {
        // error
      },
    });
  };

  const handleUpdate = () => {
    // update database through graphql
  };

  return (
    <Modal isOpen={isOpen} onOpenChange={onOpenChange} placement="top-center">
      <ModalContent>
        {(onClose) => (
          <>
            <ModalHeader className="flex flex-col gap-1">Edit card</ModalHeader>
            <ModalBody>
              <Input
                autoFocus
                endContent={<HiOutlineMenu />}
                label="Title"
                placeholder="Enter card title"
                value={title}
              />

              <Textarea
                label="Description"
                endContent={<HiOutlineMenuAlt2 />}
                placeholder="Enter your description"
                value={description}
              />
            </ModalBody>
            <ModalFooter>
              <Button color="default" variant="flat" onPress={onClose}>
                Cancel
              </Button>
              <Button color="primary" onPress={handleUpdate}>
                Update
              </Button>
            </ModalFooter>
          </>
        )}
      </ModalContent>
    </Modal>
  );
};
