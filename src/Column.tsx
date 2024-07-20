import { graphql, useRefetchableFragment } from "react-relay";
import { Card } from "./Card.tsx";

import { monitorForElements } from "@atlaskit/pragmatic-drag-and-drop/element/adapter";
import { useEffect, useRef, useState } from "react";
import { extractClosestEdge } from "@atlaskit/pragmatic-drag-and-drop-hitbox/closest-edge";
import { reorderWithEdge } from "@atlaskit/pragmatic-drag-and-drop-hitbox/util/reorder-with-edge";
import { combine } from "@atlaskit/pragmatic-drag-and-drop/combine";
import { SimpleCardCreation } from "./SimpleCardCreation.tsx";

const Column = ({ fragmentRef }) => {
  const ref = useRef(null);
  const [cards, setCards] = useState([]);

  const [data, refetch] = useRefetchableFragment(
    graphql`
      fragment ColumnFragment on Column
      @refetchable(queryName: "ColumnRefetchQuery") {
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

  const refreshColumn = () => {
    refetch({ id: data.id }, { fetchPolicy: "network-only" });
  };

  return (
    <div className="flex-1 overflow-auto" ref={ref}>
      <div className="bg-gray-100 p-4 rounded-lg flex flex-col max-h-screen">
        <h2 className="text-lg font-semibold mb-2 px-2">{data.name}</h2>
        <div className="flex-1 p-2 mb-2 overflow-auto bg-gray-100">
          <div className="flex flex-col gap-2">
            {cards.map((card, index) => (
              <Card
                key={card.id}
                fragmentRef={card}
                position={card.position}
                index={index}
                onRemoveCard={refreshColumn}
              />
            ))}
          </div>
        </div>

        <SimpleCardCreation columnId={data.id} onCardCreated={refreshColumn} />
      </div>
    </div>
  );
};

export { Column };
