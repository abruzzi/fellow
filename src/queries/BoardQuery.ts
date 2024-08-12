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
        }
    }
`;

export { BoardQuery };
