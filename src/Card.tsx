import { graphql, useFragment } from "react-relay";
import { CardFragment$key as CardFragment } from "./__generated__/CardFragment.graphql.ts";
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
import { HiOutlinePencil } from "react-icons/hi";

import React from "react";
import {
  Card as NextCard,
  CardHeader,
  CardBody,
  Button,
  useDisclosure,
} from "@nextui-org/react";
import { CardEditor } from "./CardEditor.tsx";

const Card = ({ fragmentRef, index, onCardRemoved }) => {
  const ref = useRef(null);
  const [isDragging, setDragging] = useState<boolean>(false);
  const [closestEdge, setClosestEdge] = useState<Edge>(null);
  const [hovered, setHovered] = useState<boolean>(false);

  const data = useFragment<CardFragment>(
    graphql`
      fragment CardFragment on Card {
        id
        title
        description
        position
      }
    `,
    fragmentRef,
  );

  useEffect(() => {
    const element = ref.current;

    const dragConfig = {
      element: element,
      getInitialData: () => {
        const { id, position } = data;
        return { id, position };
      },
      onDragStart: () => {
        setDragging(true);
      },
      onDrop: () => setDragging(false),
    };

    const dropConfig = {
      element: element,
      canDrop({ source }) {
        // not allowing dropping on yourself
        return source.element !== element;
      },
      getData({ input, element }) {
        const { id, position } = data;
        return attachClosestEdge(
          { id, position },
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
  }, [data, index]);

  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  return (
    <div className="relative">
      <NextCard
        shadow="none"
        className={`py-4 ${isDragging ? "opacity-50" : ""}`}
        ref={ref}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        <CardHeader className="py-0 px-4 flex-col items-start">
          <h4 className="font-bold text-large text-slate-800">{data.title}</h4>
          {hovered && (
            <div className="absolute right-2 top-2 delay-100">
              <Button
                isIconOnly
                color="default"
                variant="flat"
                aria-label="Edit"
                onClick={onOpen}
              >
                <HiOutlinePencil />
              </Button>
            </div>
          )}
        </CardHeader>

        {data.description && (
          <CardBody className="overflow-visible py-2 ">
            <p className="text-slate-700">{data.description}</p>
          </CardBody>
        )}
      </NextCard>

      {closestEdge && <DropIndicator edge={closestEdge} />}

      <CardEditor
        cardId={data.id}
        cardTitle={data.title}
        cardDescription={data.description}
        isOpen={isOpen}
        onOpenChange={onOpenChange}
        onCardRemoved={onCardRemoved}
      />
    </div>
  );
};

export { Card };
