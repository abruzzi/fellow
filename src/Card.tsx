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
      getData({ input, element }) {
        return attachClosestEdge(data, {
          element,
          input,
          allowedEdges: ["top", "bottom"],
        });
      },
      onDrag: ({ self, source }) => {
        const isSource = source.element === element;
        if (isSource) {
          setClosestEdge(null);
          return;
        }

        const closestEdge = extractClosestEdge(self.data);

        const sourceIndex = source.data.index;

        const isItemBeforeSource = index === sourceIndex - 1;
        const isItemAfterSource = index === sourceIndex + 1;

        const isDropIndicatorHidden =
          (isItemBeforeSource && closestEdge === "bottom") ||
          (isItemAfterSource && closestEdge === "top");

        if (isDropIndicatorHidden) {
          setClosestEdge(null);
          return;
        }

        setClosestEdge(closestEdge);
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
    <div className={`relative`}>
      <article
        ref={ref}
        className={`border-slate-700 bg-slate-50 rounded-md shadow-sm p-4 hover:cursor-grab ${isDragging ? "opacity-50" : ""}`}
      >
        <h1 className={`font-bold`}>{data.title}</h1>
        <p className={`text-slate-700`}>{data.description}</p>
      </article>
      {closestEdge && <DropIndicator edge={closestEdge} gap='4px' />}
    </div>
  );
};

export { Card };
