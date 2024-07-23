import { graphql } from 'react-relay';

export const BoardsQuery = graphql`
    query BoardsQuery {
        boards {
            id
            name
        }
    }
`;