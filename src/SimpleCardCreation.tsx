import React from "react";

import { Button, Input } from "@nextui-org/react";
import { HiOutlinePlus, HiOutlineX } from "react-icons/hi";
import { ChangeEvent, KeyboardEvent, useState } from "react";
import { graphql, useFragment, useMutation } from "react-relay";
import { SimpleCardCreationFragment$key } from "./__generated__/SimpleCardCreationFragment.graphql.ts";

const SimpleCardCreationFragment = graphql`
  fragment SimpleCardCreationFragment on Column {
    id
  }
`;

const SimpleCardCreation = ({
  column,
}: {
  column: SimpleCardCreationFragment$key;
}) => {
  const data = useFragment(SimpleCardCreationFragment, column);

  const [title, setTitle] = useState<string>("");
  const [isEditing, setEditing] = useState<boolean>(false);

  const [createSimpleCard, isCreating] = useMutation(graphql`
    mutation SimpleCardCreationMutation($columnId: ID!, $title: String!) {
      createSimpleCard(columnId: $columnId, title: $title) {
        ...CardFragment
      }
    }
  `);

  const toggleEditing = () => {
    setEditing((isEditing) => !isEditing);
  };

  const handleCreateCard = () => {
    setTitle("");
    toggleEditing();

    createSimpleCard({
      variables: {
        columnId: data.id,
        title: title,
      },
      onCompleted: () => {
        // onCardCreated();
      },
      onError: (error) => {
        console.error("Mutation error:", error);
      },
      optimisticResponse: {
        createSimpleCard: {
          id: "new-id",
          title,
        },
      },
    });
  };
  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value);
  };

  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      handleCreateCard();
    }
  };

  const handleCancel = () => {
    setTitle("");
    toggleEditing();
  };

  return (
    <>
      {isEditing && (
        <div className={`flex flex-col gap-2`}>
          <Input
            variant="bordered"
            type="text"
            label="Title"
            placeholder="Type text for the title"
            autoFocus
            value={title}
            onChange={handleInputChange}
            onKeyDown={handleKeyDown}
          />
          <div className={`flex flex-row gap-2 align-middle`}>
            <Button color="primary" size="sm" onPress={handleCreateCard}>
              Add
            </Button>
            <Button
              isIconOnly
              size="sm"
              color="default"
              variant="light"
              aria-label="Cancel"
              onPress={handleCancel}
            >
              <HiOutlineX />
            </Button>
          </div>
        </div>
      )}

      {!isEditing && (
        <Button
          variant="light"
          color="default"
          startContent={<HiOutlinePlus />}
          onPress={toggleEditing}
          isLoading={isCreating}
        >
          Add a card
        </Button>
      )}
    </>
  );
};

export { SimpleCardCreation };
