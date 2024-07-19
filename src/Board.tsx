import { graphql, useMutation, usePreloadedQuery } from "react-relay";
import { Column } from "./Column.tsx";
import { useEffect } from "react";
import { monitorForElements } from "@atlaskit/pragmatic-drag-and-drop/element/adapter";

const rootBoardId = "8b03c009-3f38-4e6b-a25e-93aff63d56f1";

export const Board = ({ queryRef, refresh }) => {
  const data = usePreloadedQuery(
    graphql`
      query BoardQuery($boardId: ID!) {
        board(id: $boardId) {
          name
          columns {
            id
            position
            ...ColumnFragment
          }
        }
      }
    `,
    queryRef,
  );

  const [commit, isUpdating] = useMutation(graphql`
    mutation BoardMutation(
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

  useEffect(() => {
    return monitorForElements({
      onDrop: ({ source, location }) => {
        const target = location.current.dropTargets[0];

        if(!target) {
          return;
        }

        console.log(source, target);
        // commit({
        //   variables: {
        //     cardId: source.data.id,
        //     targetColumnId: target.data.id,
        //     targetPosition: 1,
        //   },
        //   onCompleted: (response) => {
        //     console.log("Mutation completed:", response);
        //     refresh({ boardId: rootBoardId }, { fetchPolicy: "network-only" });
        //   },
        //   onError: (error) => {
        //     console.error("Mutation error:", error);
        //   },
        //   updater: () => {},
        // });
      },
    });
  }, [commit, refresh]);

  if (!data.board) {
    return <div className={`text-lg`}>something went wrong</div>;
  }

  return (
    <div className={`${isUpdating ? "opacity-50" : ""}`}>
      <h1 className={`text-4xl text-slate-800 font-bold font-mono my-8`}>
        {data.board.name}
      </h1>
      <div className={`flex flex-row gap-4`}>
        {data.board.columns.slice().map((column) => (
          <Column key={column.id} fragmentRef={column} />
        ))}
      </div>
    </div>
  );
};
