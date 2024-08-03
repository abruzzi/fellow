import { graphql } from "react-relay";

export const CommentsQuery = graphql`
    query CommentsQuery($cardId: ID!) {
        currentUser {
            name
            email
        }
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
