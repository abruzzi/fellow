import { graphql, useFragment } from "react-relay";
import { Card } from "./Card.tsx";
import { ColumnFragment$key as ColumnFragment } from "./__generated__/ColumnFragment.graphql.ts";

import { dropTargetForElements } from "@atlaskit/pragmatic-drag-and-drop/element/adapter";
import { useEffect, useRef, useState } from "react";

const Column = ({ fragmentRef }) => {
  const ref = useRef(null);
  const [isDraggedOver, setIsDraggedOver] = useState(false);

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
    const element = ref.current;

    return dropTargetForElements({
      element: element,
      onDragEnter: () => setIsDraggedOver(true),
      onDragLeave: () => setIsDraggedOver(false),
      onDrop: () => setIsDraggedOver(false),
      getData: () => {
        const { id, position } = data;
        return { id, position };
      },
    });
  }, [data]);

  return (
    <section
      ref={ref}
      className={`bg-slate-100 p-4 flex-1 rounded-md min-h-[70vh] h-[70vh] ${isDraggedOver ? "bg-slate-200" : ""} `}
    >
      <h1 className={`text-lg uppercase text-slate-500 py-2`}>
        {data.name}
      </h1>
      <div className={`flex flex-col gap-4`}>
        {data.cards.slice().map((card) => (
          <Card key={card.id} fragmentRef={card} position={card.position} />
        ))}
      </div>
    </section>
  );
};

export { Column };
