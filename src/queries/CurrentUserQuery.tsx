import {graphql} from "react-relay";

export const CurrentUserQuery = graphql`
    query CurrentUserQuery {
        currentUser {
            name
            email
        }
    }
`