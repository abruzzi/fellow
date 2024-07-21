import { graphql, useMutation, useRefetchableFragment } from "react-relay";
import { Card } from "./Card.tsx";

import { monitorForElements } from "@atlaskit/pragmatic-drag-and-drop/element/adapter";
import { useCallback, useEffect, useRef, useState } from "react";
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
    // const cards = data.cards.slice().sort((a, b) => a.position - b.position);
    setCards(data.cards);
  }, [data.cards]);

  const [commit, isMoving] = useMutation(graphql`
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

          const indexOfSource = cards.findIndex(
            (card) => card.id === sourceData.id,
          );

          const indexOfTarget = cards.findIndex(
            (card) => card.id === targetData.id,
          );

          if (indexOfTarget < 0 || indexOfSource < 0) {
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

          commit({
            variables: {
              cardId: sourceData.id,
              targetColumnId: data.id,
              targetPosition: targetPosition,
            },
            onCompleted: () => {
              refreshColumn();
            },
            onError: (error) => {
              // error
              console.log(error);
            },
          });
        },
      }),
    );
  }, [cards, commit, data.id, refreshColumn]);

  return (
    <div
      className={`flex-1 overflow-auto ${isMoving ? "opacity-50" : ""}`}
      ref={ref}
    >
      <div className="bg-gray-100 p-4 rounded-lg flex flex-col max-h-screen">
        <h2 className="text-lg font-semibold mb-2 px-2 text-slate-600">
          {data.name}
        </h2>
        <div className="flex-1 p-2 mb-2 overflow-auto bg-gray-100">
          <div className="flex flex-col gap-4">
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
