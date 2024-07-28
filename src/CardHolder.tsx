import { useEffect, useRef, useState } from "react";
import { dropTargetForElements } from "@atlaskit/pragmatic-drag-and-drop/element/adapter";
import DropIndicator from "@atlaskit/pragmatic-drag-and-drop-react-drop-indicator/box";
import { combine } from "@atlaskit/pragmatic-drag-and-drop/combine";
import {
  attachClosestEdge,
  Edge,
  extractClosestEdge,
} from "@atlaskit/pragmatic-drag-and-drop-hitbox/closest-edge";

import React from "react";
import { Card as NextCard } from "@nextui-org/react";

const CardHolder = ({ columnId }: { columnId: string }) => {
  const ref = useRef(null);
  const [closestEdge, setClosestEdge] = useState<Edge>(null);

  useEffect(() => {
    const element = ref.current;

    const dropConfig = {
      element: element,
      canDrop({ source }) {
        return source.element !== element;
      },
      getData({ input, element }) {
        return attachClosestEdge(
          { columnId: columnId, position: 0, id: 'placeholder' },
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

    return combine(dropTargetForElements(dropConfig));
  }, [columnId]);

  return (
    <div className="relative">
      <NextCard
        shadow="none"
        className={`bg-transparent border-slate-700 h-4`}
        ref={ref}
      ></NextCard>

      {closestEdge && <DropIndicator edge={closestEdge} />}
    </div>
  );
};

export { CardHolder };
