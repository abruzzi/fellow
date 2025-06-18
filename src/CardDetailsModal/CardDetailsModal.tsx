import React from "react";
import { graphql, PreloadedQuery, usePreloadedQuery } from "react-relay";
import type { CardDetailsModalQuery } from "./__generated__/CardDetailsModalQuery.graphql.ts";
import { CardEditor } from "../CardEditor.tsx";
import { Comments } from "../Comments.tsx";

type Props = {
  queries: {
    cardDetailsQueryRef: PreloadedQuery<CardDetailsModalQuery>;
  };
  props: {
    // cardId: string;
  };
};

const CardDetailsModal = ({ queries }: Props) => {
  const data = usePreloadedQuery<CardDetailsModalQuery>(
    graphql`
      query CardDetailsModalQuery($cardId: ID!) {
        viewer {
          card(id: $cardId) {
            id
            ...CardEditorFragment
            ...CommentsFragment
          }
        }
      }
    `,
    queries.cardDetailsQueryRef,
  );

  if (data.viewer?.card == null) {
    return null;
  }

  return <div>
    <CardEditor card={data.viewer.card} />
    <Comments card={data.viewer.card} />
  </div>;
};

export default CardDetailsModal;