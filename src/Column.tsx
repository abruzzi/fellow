import { graphql, useFragment } from "react-relay";
import { Card } from "./Card.tsx";
import { ColumnFragment$key as ColumnFragment } from "./__generated__/ColumnFragment.graphql.ts";

import {
  dropTargetForElements,
  monitorForElements,
} from "@atlaskit/pragmatic-drag-and-drop/element/adapter";
import { useEffect, useRef, useState } from "react";
import { extractClosestEdge } from "@atlaskit/pragmatic-drag-and-drop-hitbox/closest-edge";
import { reorderWithEdge } from "@atlaskit/pragmatic-drag-and-drop-hitbox/util/reorder-with-edge";
import { combine } from "@atlaskit/pragmatic-drag-and-drop/combine";

const Column = ({ fragmentRef }) => {
  const ref = useRef(null);
  const [isDraggedOver, setIsDraggedOver] = useState(false);
  const [cards, setCards] = useState([]);

  const data = useFragment<ColumnFragment>(
    graphql`
      fragment ColumnFragment on Column {
        id
        name
        position
        cards {
          id
          position
          ...CardFragment
        }
      }
    `,
    fragmentRef,
  );

  useEffect(() => {
    setCards(() => data.cards);
  }, [data.cards]);

  useEffect(() => {
    return combine(
      monitorForElements({
        onDrop: ({ source, location }) => {
          const target = location.current.dropTargets[0];
          if (!target) {
            return;
          }

          const sourceData = source.data;
          const targetData = target.data;

          const indexOfSource = cards.findIndex(
            (card) => card.id === sourceData.id,
          );
          const indexOfTarget = cards.findIndex(
            (card) => card.id === targetData.id,
          );

          if (indexOfTarget < 0 || indexOfSource < 0) {
            return;
          }

          const closestEdgeOfTarget = extractClosestEdge(targetData);

          const reordered = reorderWithEdge({
            list: cards,
            startIndex: indexOfSource,
            indexOfTarget,
            closestEdgeOfTarget,
            axis: "vertical",
          });

          setCards(reordered);
        },
      }),
    );
  }, [cards]);

  return (
    <section
      ref={ref}
      className={`bg-slate-100 p-4 flex-1 rounded-md min-h-[70vh] h-[70vh] ${isDraggedOver ? "bg-slate-200" : ""} `}
    >
      <h1 className={`text-lg uppercase text-slate-500 py-2`}>{data.name}</h1>
      <div className={`flex flex-col gap-2`}>
        {cards.map((card, index) => (
          <Card
            key={card.id}
            fragmentRef={card}
            position={card.position}
            index={index}
          />
        ))}
      </div>
    </section>
  );
};

export { Column };
