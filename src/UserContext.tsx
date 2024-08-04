import React, { createContext, useState, useContext, useEffect } from "react";
import { usePreloadedQuery } from "react-relay";
import {
  NavigationQuery as NavigationQueryType,
  NavigationQuery$data,
} from "./queries/__generated__/NavigationQuery.graphql.ts";
import { NavigationQuery } from "./queries/NavigationQuery.ts";

type CurrentUser = NavigationQuery$data["currentUser"];
type CurrentUserContextType = {
  currentUser: CurrentUser;
};

const CurrentUserContext = createContext<CurrentUserContextType>(null);

// eslint-disable-next-line react/prop-types
export function UserProvider({ children, queryRef }) {
  const data = usePreloadedQuery<NavigationQueryType>(
    NavigationQuery,
    queryRef,
  );

  const [currentUser, setCurrentUser] = useState<CurrentUser>(data.currentUser);

  useEffect(() => {
    setCurrentUser(data.currentUser);
  }, [data]);

  return (
    <CurrentUserContext.Provider value={{ currentUser }}>
      {children}
    </CurrentUserContext.Provider>
  );
}

export function useCurrentUser() {
  return useContext(CurrentUserContext);
}
