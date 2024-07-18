import { graphql, useFragment } from "react-relay";
import { CardFragment$key as CardFragment } from "./__generated__/CardFragment.graphql.ts";
import { useEffect, useRef, useState } from "react";
import { draggable } from "@atlaskit/pragmatic-drag-and-drop/element/adapter";

const Card = ({ fragmentRef }) => {
  const ref = useRef(null);
  const [dragging, setDragging] = useState<boolean>(false);
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
    return draggable({
      element: ref.current,
      getInitialData: () => {
        const { id, position } = data;
        return { id, position };
      },
      onDragStart: () => setDragging(true),
      onDrop: () => setDragging(false),
    });
  }, [data]);

  return (
    <article
      ref={ref}
      className={`border-slate-700 bg-slate-50 rounded-md p-4 hover:cursor-grab ${dragging ? "opacity-50" : ""}`}
    >
      <h1 className={`font-bold`}>{data.title}</h1>
      <p className={`text-slate-700`}>{data.description}</p>
    </article>
  );
};

export { Card };
