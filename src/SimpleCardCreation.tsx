import { Button, Input } from "@nextui-org/react";
import { HiOutlinePlus, HiOutlineX } from "react-icons/hi";
import { ChangeEvent, KeyboardEvent, useState } from "react";
import { graphql, useMutation } from "react-relay";

const SimpleCardCreation = ({
  columnId,
  onCardCreated,
}: {
  columnId: string;
  onCardCreated: () => void;
}) => {
  const [title, setTitle] = useState<string>("");
  const [isEditing, setEditing] = useState<boolean>(false);

  const [commit, isCreating] = useMutation(graphql`
      mutation SimpleCardCreationMutation($columnId: ID!, $title: String!) {
          createSimpleCard(columnId: $columnId, title: $title) {
              id
              title
          }
      }
  `);

  const toggleEditing = () => {
    setEditing((isEditing) => !isEditing);
  };

  const handleCreateCard = () => {
    setTitle("");
    toggleEditing();

    commit({
      variables: {
        columnId: columnId,
        title: title,
      },
      onCompleted: () => {
        onCardCreated();
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
            <Button color="primary" onPress={handleCreateCard}>
              Add
            </Button>
            <Button
              isIconOnly
              color="default"
              variant="solid"
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
