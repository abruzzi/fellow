import { graphql } from 'react-relay';

export const ApplicationQuery = graphql`
    query ApplicationQuery {
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
        currentUser {
            name
            email
            avatarUrl
        }
    }
`;