import { graphql } from "react-relay";

export const CardEditorFragment = graphql`
    fragment CardEditorFragment on Card {
        id
        title
        description
        imageUrl
        comments {
            id
            content
        }
    }
`;
