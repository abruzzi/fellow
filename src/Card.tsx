import { graphql, useFragment } from "react-relay";
import { CardFragment$key as CardFragment } from "./__generated__/CardFragment.graphql.ts";

const Card = ({ fragmentRef }) => {
  const data = useFragment<CardFragment>(
    graphql`
        fragment CardFragment on Card {
            id
            title
            description
            position
        }
    `,
    fragmentRef
  );

  return (
    <article className={`border-slate-700 bg-slate-50 rounded-sm p-4 hover:cursor-grab`} data-order={data.position}>
      <h1 className={`font-bold`}>{data.title}</h1>
      <p className={`text-slate-700`}>{data.description}</p>
    </article>
  );
};

export { Card };
