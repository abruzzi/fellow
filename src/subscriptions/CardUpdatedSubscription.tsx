import {graphql} from "relay-runtime";

export const CardUpdatedSubscription = graphql`
    subscription CardUpdatedSubscription($boardId: ID!) {
        cardUpdated(boardId: $boardId) {
            id
            columns {
                ...ColumnFragment
            }
        }
    }
`;