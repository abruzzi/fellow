import { graphql } from "react-relay";

export const CardFragment = graphql`
    fragment CardFragment on Card {
        id
        title
        description
        position
        imageUrl
        column {
            id
        }
        ...CardEditorFragment
    }
`;
