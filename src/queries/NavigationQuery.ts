import { graphql } from "react-relay";

const NavigationQuery = graphql`
  query NavigationQuery {
    currentUser {
      ...UserMenuFragment
    }
    favoriteBoards {
      id
      name
    }
  }
`;

export { NavigationQuery };
