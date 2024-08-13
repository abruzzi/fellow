import { graphql } from "react-relay";


export const CommentsQuery = graphql`
    query CommentsQuery($cardId: ID!, $first: Int, $after: String) {
        currentUser {
            name
            email
            avatarUrl
        }
        comments(cardId: $cardId, first: $first, after: $after) {
            edges {
                cursor
                node {
                    id
                    content
                    updatedAt
                    user {
                        id
                        name
                        avatarUrl
                    }
                }
            }
            pageInfo {
                endCursor
                hasNextPage
            }
        }
    }
`;
