import { graphql, useMutation, useRefetchableFragment } from "react-relay";
import { Card } from "./Card.tsx";

import { monitorForElements } from "@atlaskit/pragmatic-drag-and-drop/element/adapter";
import { useCallback, useEffect, useRef, useState } from "react";
import { combine } from "@atlaskit/pragmatic-drag-and-drop/combine";
import { SimpleCardCreation } from "./SimpleCardCreation.tsx";
import { CardHolder } from "./CardHolder.tsx";

const Column = ({ fragmentRef, refreshBoard }) => {
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
    setCards(data.cards);
  }, [data.cards]);

  const [moveCard, isMoving] = useMutation(graphql`
    mutation ColumnMoveCardMutation(
      $cardId: ID!
      $targetColumnId: ID!
      $targetPosition: Int!
    ) {
      moveCard(
        cardId: $cardId
        targetColumnId: $targetColumnId
        targetPosition: $targetPosition
      ) {
        id
        title
        description
        position
      }
    }
  `);

  const refreshColumn = useCallback(() => {
    refetch({ id: data.id }, { fetchPolicy: "network-only" });
  }, [data.id, refetch]);

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

          const indexOfTarget = cards.findIndex(
            (card) => card.id === targetData.id,
          );

          if (indexOfTarget < 0) {
            return;
          }

          let targetPosition = -1;
          if (indexOfTarget === 0) {
            targetPosition = 0;
          } else if (indexOfTarget === cards.length - 1) {
            targetPosition = -1;
          } else {
            targetPosition = targetData.position;
          }

          moveCard({
            variables: {
              cardId: sourceData.id,
              targetColumnId: data.id,
              targetPosition: targetPosition,
            },
            onCompleted: () => {
              if (sourceData.columnId === targetData.columnId) {
                refreshColumn();
              } else {
                refreshBoard();
              }
            },
            onError: (error) => {
              // error
              console.log(error);
            },
          });
        },
      }),
    );
  }, [cards, moveCard, data.id, refreshBoard, refreshColumn]);

  return (
    <li
      className={`flex-1 overflow-auto ${isMoving ? "opacity-50" : ""}`}
      ref={ref}
    >
      <div className="bg-gray-100 p-4 rounded-lg flex flex-col max-h-screen">
        <h2 className="text-lg font-semibold mb-2 px-2 text-slate-600">
          {data.name}
        </h2>
        <div className="flex-1 p-2 mb-2 overflow-auto bg-gray-100">
          {cards.length > 0 && (
            <ol className="flex flex-col gap-4">
              {cards.map((card) => (
                <Card
                  key={card.id}
                  fragmentRef={card}
                  position={card.position}
                  onRemoveCard={refreshColumn}
                />
              ))}
            </ol>
          )}
          {cards.length === 0 && <CardHolder columnId={data.id} />}
        </div>

        <SimpleCardCreation columnId={data.id} onCardCreated={refreshColumn} />
      </div>
    </li>
  );
};

export { Column };
