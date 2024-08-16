import { graphql } from "react-relay";

export const BoardFragment = graphql`
    fragment BoardFragment on Board {
        id
        name
        imageUrl
        columns {
            id
            ...ColumnFragment
        }
        ...BoardSettingsFragment
    }
`

export const BoardQuery = graphql`
    query BoardQuery($boardId: ID!) {
        board(id: $boardId) {
            ...BoardFragment
        }
    }
`;
