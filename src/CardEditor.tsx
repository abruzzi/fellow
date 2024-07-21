import React, { ChangeEvent, useState } from "react";
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
import { HiOutlineTicket } from "react-icons/hi";


export const CardEditor = ({
  cardId,
  cardTitle,
  cardDescription,
  isOpen,
  onRemoveCard,
  onOpenChange,
}: {
  cardId: string;
  cardTitle: string;
  cardDescription: string;
  isOpen: boolean;
  onRemoveCard: () => void;
  onOpenChange: () => void;
}) => {
  const [title, setTitle] = useState(cardTitle);
  const [description, setDescription] = useState(cardDescription);
  const [error, setError] = useState();

  const [commitUpdate, isUpdating] = useMutation(graphql`
    mutation CardEditorUpdateMutation(
      $id: ID!
      $title: String!
      $description: String!
    ) {
      updateCard(cardId: $id, title: $title, description: $description) {
        id
        position
      }
    }
  `);

  const handleUpdate = (afterUpdate: () => void) => {
    commitUpdate({
      variables: { id: cardId, title, description },
      onCompleted: () => {
        onRemoveCard();
        afterUpdate();
      },
      onError: (error) => {
        // error
        setError(error.message);
      },
    });
  };

  const onTitleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value);
  };

  const onDescriptionChange = (e: ChangeEvent<HTMLInputElement>) => {
    setDescription(e.target.value);
  };

  return (
    <Modal isOpen={isOpen} onOpenChange={onOpenChange} placement="top-center">
      <ModalContent>
        {(onClose) => (
          <>
            <ModalHeader className="flex flex-col gap-1">
              <div className={`flex flex-row items-center gap-2`}>
                <HiOutlineTicket />
                <h4 className="text-slate-600">Edit card</h4>
              </div>

            </ModalHeader>
            {error && <p className="text-red-500">{error}</p>}
            <ModalBody>
              <Input
                autoFocus
                endContent={<HiOutlineMenu />}
                label="Title"
                placeholder="Enter card title"
                value={title}
                onChange={onTitleChange}
                radius="sm"
              />
              <Textarea
                label="Description"
                endContent={<HiOutlineMenuAlt2 />}
                placeholder="Enter your description"
                value={description}
                onChange={onDescriptionChange}
                radius="sm"
              />
            </ModalBody>
            <ModalFooter>
              <Button color="default" variant="flat" onPress={onClose}>
                Cancel
              </Button>
              <Button
                color="primary"
                onPress={() => handleUpdate(onClose)}
                disabled={isUpdating}
              >
                Update
              </Button>
            </ModalFooter>
          </>
        )}
      </ModalContent>
    </Modal>
  );
};
