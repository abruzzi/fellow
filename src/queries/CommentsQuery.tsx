import { graphql } from "react-relay";

export const CommentsQuery = graphql`
  query CommentsQuery($cardId: ID!) {
    comments(cardId: $cardId) {
      id
      content
      updatedAt
      user {
        id
        name
      }
    }
  }
`;
