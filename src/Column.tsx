import { graphql, useFragment, useMutation } from "react-relay";
import { Card } from "./Card.tsx";
import { ColumnFragment$key as ColumnFragment } from "./__generated__/ColumnFragment.graphql.ts";
import { useDrop } from "react-dnd";

export const moveCardMutation = graphql`
  mutation ColumnMutation(
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
`;

const Column = ({ fragmentRef, onMoveCard }) => {
  const [commit, isInFlight] = useMutation(moveCardMutation);
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

  const [{ isOver }, drop] = useDrop({
    accept: "card",
    drop: (item) => {
      console.log(item, data.id);
      commit({
        variables: {
          cardId: item.id,
          targetColumnId: data.id,
          targetPosition: 1,
        },
        onCompleted: (response) => {
          console.log("Mutation completed:", response);
          onMoveCard();
          // Handle successful response
        },
        onError: (error) => {
          console.error("Mutation error:", error);
          // Handle error
        },
      });
    },
    collect: (monitor) => ({
      isOver: !!monitor.isOver(),
    }),
  });

  return (
    <section
      ref={drop}
      className={`bg-slate-100 p-4 flex-1 rounded-md min-h-[80vh] h-[80vh] ${isOver ? "bg-slate-200" : ""} ${isInFlight ? "opacity-50" : ""}`}
    >
      <h1 className={`font-bold text-lg uppercase text-slate-600`}>
        {data.name}
      </h1>
      <div className={`flex flex-col gap-4`}>
        {data.cards
          .slice()
          .sort((a, b) => a.position - b.position)
          .map((card) => (
            <Card key={card.id} fragmentRef={card} position={card.position} />
          ))}
      </div>
    </section>
  );
};

export { Column };
