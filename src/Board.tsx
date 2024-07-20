import { graphql, useMutation, usePreloadedQuery } from "react-relay";
import { Column } from "./Column.tsx";
import { useEffect } from "react";
import { monitorForElements } from "@atlaskit/pragmatic-drag-and-drop/element/adapter";
import { Header } from "./components/Header.tsx";

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
        // const target = location.current.dropTargets[0];
        // if (!target) {
        //   return;
        // }
        //
        // const sourceData = source.data;
        // const targetData = target.data;
        //
        //
        // const indexOfSource = tasks.findIndex((task) => task.id === sourceData.taskId);
        // const indexOfTarget = tasks.findIndex((task) => task.id === targetData.taskId);
        //
        //
        // console.log(source, target);
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
    return <div className={`text-lg`}>Something went wrong</div>;
  }

  return (
    <div className={`${isUpdating ? "opacity-50" : ""}`}>
      <Header title={data.board.name} />
      <div className={`flex flex-row gap-4`}>
        {data.board.columns.slice().map((column) => (
          <Column key={column.id} fragmentRef={column} />
        ))}
      </div>
    </div>
  );
};
