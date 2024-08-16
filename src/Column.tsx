import React, { graphql, useFragment, useMutation } from "react-relay";
import { Card } from "./Card.tsx";

import {
  dropTargetForElements,
  monitorForElements,
} from "@atlaskit/pragmatic-drag-and-drop/element/adapter";
import { useEffect, useRef, useState } from "react";
import { combine } from "@atlaskit/pragmatic-drag-and-drop/combine";
import { SimpleCardCreation } from "./SimpleCardCreation.tsx";
import { CardHolder } from "./CardHolder.tsx";
import {
  ColumnFragment$key,
} from "./__generated__/ColumnFragment.graphql.ts";
import { ColumnSkeleton } from "./skeletons/ColumnSkeleton.tsx";

const ColumnFragment = graphql`
    fragment ColumnFragment on Column {
        id
        name
        position
        cards {
            id
            ...CardFragment
        }
        ...SimpleCardCreationFragment
    }
`;

const Column = ({ column }: { column: ColumnFragment$key }) => {
  const data = useFragment(ColumnFragment, column);

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
              ...BoardFragment
          }
      }
  `);

  const ref = useRef(null);
  const [aboutToDrop, setAboutToDrop] = useState(false);

  useEffect(() => {
    const element = ref.current;
    if (!element) {
      return;
    }

    return dropTargetForElements({
      element,
      onDrag() {
        setAboutToDrop(true);
      },
      onDragLeave() {
        setAboutToDrop(false);
      },
      onDrop() {
        setAboutToDrop(false);
      },
    });
  }, []);

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

          // we're moving into an empty column, put it to the top is fine
          if (targetData.id === "placeholder") {
            moveCard({
              variables: {
                cardId: sourceData.id,
                targetColumnId: targetData.columnId,
                targetPosition: 0,
              },
              onCompleted: () => {
                // refreshBoard(boardId);
              },
              onError: (error: unknown) => {
                // error
                console.log(error);
              },
            });
          } else {
            // we're reordering in a column
            const indexOfTarget = data.cards.findIndex(
              (card) => card.id === targetData.id,
            );

            if (indexOfTarget < 0) {
              return;
            }

            let targetPosition: unknown = -1;
            if (indexOfTarget === 0) {
              targetPosition = 0;
            } else if (indexOfTarget === data.cards.length - 1) {
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
                  // refreshColumn();
                } else {
                  // refreshBoard(boardId);
                }
              },
              onError: (error: unknown) => {
                // error
                console.log(error);
              },
            });
          }
        },
      }),
    );
  }, [moveCard, data.id, data.cards]);

  if (!data) {
    return <ColumnSkeleton numberOfCards={3} />;
  }

  return (
    <li className={`${isMoving ? "opacity-50" : ""} w-72 shrink-0`} ref={ref}>
      <div
        className={`bg-gray-50 p-4 rounded-md flex flex-col max-h-full ${aboutToDrop ? "bg-blue-100" : ""}`}
      >
        <h2 className="text-lg font-semibold mb-2 px-2 text-slate-600">
          {data.name}
        </h2>
        <div className={`flex-1 px-2 py-4 mb-2 overflow-auto`}>
          {data.cards.length > 0 && (
            <ol className="flex flex-col gap-4 shrink-0">
              {data.cards.map((card) => (
                <Card key={card.id} card={card} />
              ))}
            </ol>
          )}
          {data.cards.length === 0 && <CardHolder columnId={data.id} />}
        </div>

        <SimpleCardCreation column={data} />
      </div>
    </li>
  );
};

export { Column };
