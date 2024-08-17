import { graphql } from 'react-relay';

export const ApplicationQuery = graphql`
    query ApplicationQuery {
        viewer {
            ...BoardListScreenFragment
            ...SimpleBoardListFragment
            ...FavoriteBoardContextFragment
            ...NavigationFragment
            user {
                ...UserContextFragment
            }
        }

    }
`;