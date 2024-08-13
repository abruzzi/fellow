import { graphql } from "react-relay";

const BoardQuery = graphql`
    query BoardQuery($boardId: ID!) {
        board(id: $boardId) {
            id
            name
            imageUrl
            columns {
                id
                position
                ...ColumnFragment
            }
            ...BoardSettingsFragment
        }
    }
`;

export { BoardQuery };
