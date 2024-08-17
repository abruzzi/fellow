import React, { createContext, useContext, ReactNode } from "react";
import { graphql, useFragment } from "react-relay";
import {
  UserContextFragment$data,
  UserContextFragment$key,
} from "./__generated__/UserContextFragment.graphql.ts";

type User = UserContextFragment$data;
type CurrentUserContextType = {
  currentUser: User;
};

const CurrentUserContext = createContext<CurrentUserContextType>(null);

const UserContextFragment = graphql`
    fragment UserContextFragment on User {
        id
        name
        email
        avatarUrl
    }
`;

type UserProviderProps = {
  children: ReactNode;
  user: UserContextFragment$key;
};

export function UserProvider({ children, user }: UserProviderProps) {
  const data = useFragment(UserContextFragment, user);

  return (
    <CurrentUserContext.Provider value={{ currentUser: data }}>
      {children}
    </CurrentUserContext.Provider>
  );
}

// eslint-disable-next-line react-refresh/only-export-components
export function useCurrentUser() {
  return useContext(CurrentUserContext);
}
