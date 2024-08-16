import { graphql, useFragment, useMutation } from "react-relay";
import { useEffect, useRef, useState } from "react";
import {
  draggable,
  dropTargetForElements,
} from "@atlaskit/pragmatic-drag-and-drop/element/adapter";
import DropIndicator from "@atlaskit/pragmatic-drag-and-drop-react-drop-indicator/box";
import { combine } from "@atlaskit/pragmatic-drag-and-drop/combine";
import {
  attachClosestEdge,
  Edge,
  extractClosestEdge,
} from "@atlaskit/pragmatic-drag-and-drop-hitbox/closest-edge";
import { HiOutlineTrash } from "react-icons/hi";
import { HiOutlineMenuAlt2 } from "react-icons/hi";

import React from "react";
import {
  Card as NextCard,
  CardHeader,
  Button,
  useDisclosure,
  CardBody,
  Image,
  Modal,
  ModalContent,
} from "@nextui-org/react";
import { CardEditor } from "./CardEditor.tsx";
import { CardFragment$key } from "./__generated__/CardFragment.graphql.ts";
import { RegularCardContent } from "./RegularCardContent.tsx";
import { ImageCardContent } from "./ImageCardContent.tsx";
import { Comments } from "./Comments.tsx";

const CardFragment = graphql`
  fragment CardFragment on Card {
    id
    title
    description
    position
    imageUrl
    column {
      id
    }
    ...CommentsFragment
    ...CardEditorFragment
  }
`;

// eslint-disable-next-line react/prop-types
const Card = ({ card }: { card: CardFragment$key }) => {
  const ref = useRef(null);
  const [isDragging, setDragging] = useState<boolean>(false);
  const [closestEdge, setClosestEdge] = useState<Edge>(null);
  const [hovered, setHovered] = useState<boolean>(false);

  const data = useFragment<CardFragment$key>(CardFragment, card);

  const [deleteCard, isDeleting] = useMutation(graphql`
      mutation CardDeleteMutation($id: ID!) {
          deleteCard(cardId: $id) {
              ...ColumnFragment
          }
      }
  `);

  const handleDelete = () => {
    deleteCard({
      variables: { id: data.id },
      onCompleted: () => {
        // onRemoveCard();
      },
      onError: () => {
        // error
      },
    });
  };

  useEffect(() => {
    const element = ref.current;

    const dragConfig = {
      element: element,
      getInitialData: () => {
        const { id, position, column } = data;
        return { id, position, columnId: column.id };
      },
      onDragStart: () => {
        setDragging(true);
      },
      onDrop: () => setDragging(false),
    };

    const dropConfig = {
      element: element,
      canDrop({ source }) {
        return source.element !== element;
      },
      getData({ input, element }) {
        const { id, position, column } = data;
        return attachClosestEdge(
          { id, position, columnId: column.id },
          {
            element,
            input,
            allowedEdges: ["top", "bottom"],
          },
        );
      },
      onDrag: ({ self }) => {
        const closestEdge = extractClosestEdge(self.data);
        setClosestEdge(closestEdge);
      },
      getIsSticky() {
        return true;
      },
      onDragLeave() {
        setClosestEdge(null);
      },
      onDrop() {
        setClosestEdge(null);
      },
    };

    return combine(draggable(dragConfig), dropTargetForElements(dropConfig));
  }, [data]);

  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  return (
    <li className="relative" onClick={onOpen}>
      <NextCard
        shadow="sm"
        className={`${isDragging ? "opacity-50" : ""} rounded-md hover:cursor-pointer`}
        ref={ref}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        {data.imageUrl ? (
          <ImageCardContent
            title={data.title}
            description={data.description}
            imageUrl={data.imageUrl}
          />
        ) : (
          <RegularCardContent
            title={data.title}
            description={data.description}
          />
        )}
      </NextCard>

      {closestEdge && <DropIndicator edge={closestEdge} gap="1rem" />}

      <Modal
        isOpen={isOpen}
        onOpenChange={onOpenChange}
        placement="top-center"
        size="2xl"
        scrollBehavior="outside"
      >
        <ModalContent className="px-8 pt-6 pb-10">
          <>
            <CardEditor card={data} />
            <Comments card={data} />
          </>
        </ModalContent>
      </Modal>
    </li>
  );
};

export { Card };
