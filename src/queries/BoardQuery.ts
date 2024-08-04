import { graphql } from "react-relay";

const BoardQuery = graphql`
  query BoardQuery($boardId: ID!) {
    board(id: $boardId) {
      id
      name
      columns {
        id
        position
        ...ColumnFragment
      }
    }
  }
`;

export { BoardQuery };
