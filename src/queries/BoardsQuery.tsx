import { graphql } from 'react-relay';

export const BoardsQuery = graphql`
    query BoardsQuery {
        boards {
            id
            name
        }
        collaborateBoards {
            id
            name
        }
        favoriteBoards {
            id
            name
        }
    }
`;