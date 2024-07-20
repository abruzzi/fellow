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

import React from "react";
import { Card as NextCard, CardHeader, CardBody } from "@nextui-org/react";

const Card = ({ fragmentRef, index }) => {
  const ref = useRef(null);
  const [isDragging, setDragging] = useState<boolean>(false);
  const [closestEdge, setClosestEdge] = useState<Edge>(null);

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

  return (
    <div className="relative">
      <NextCard shadow="none" className={`py-4 ${isDragging ? "opacity-50" : ""}`} ref={ref}>
        <CardHeader className="py-0 px-4 flex-col items-start">
          <h4 className="font-bold text-large">{data.title}</h4>
        </CardHeader>
        <CardBody className="overflow-visible py-2">
          <p>{data.description}</p>
        </CardBody>
      </NextCard>
      {closestEdge && <DropIndicator edge={closestEdge} />}
    </div>
  );
};

export { Card };
