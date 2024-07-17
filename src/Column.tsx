import { graphql, useFragment } from "react-relay";
import { Card } from "./Card.tsx";
import { ColumnFragment$key as ColumnFragment } from "./__generated__/ColumnFragment.graphql.ts";

const Column = ({ fragmentRef }) => {
  const data = useFragment<ColumnFragment>(
    graphql`
      fragment ColumnFragment on Column {
        id
        name
        position
        cards {
          ...CardFragment
        }
      }
    `,
    fragmentRef
  );

  return (
    <section className={`bg-slate-100 p-4 flex-1 rounded-sm min-h-52`}>
      <h1 className={`font-bold text-lg uppercase text-slate-600`}>{data.name}</h1>
      <div className={`flex flex-col gap-4`}>
        {data.cards.map((card) => (
          <Card fragmentRef={card} />
        ))}
      </div>
    </section>
  );
};

export { Column };
