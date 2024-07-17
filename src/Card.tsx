import { graphql, useFragment } from "react-relay";
import { CardFragment$key as CardFragment } from "./__generated__/CardFragment.graphql.ts";
import { useDrag } from "react-dnd";

const Card = ({ fragmentRef, position }) => {
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

  const [{ isDragging }, drag] = useDrag({
    type: "card",
    item: { id: data.id, position },
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging(),
    }),
  });

  return (
    <article
      ref={drag}
      className={`border-slate-700 bg-slate-50 rounded-sm p-4 hover:cursor-grab ${isDragging ? "opacity-50" : ""}`}
    >
      <h1 className={`font-bold`}>{data.title}</h1>
      <p className={`text-slate-700`}>{data.description}</p>
    </article>
  );
};

export { Card };
