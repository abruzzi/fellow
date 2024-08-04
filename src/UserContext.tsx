import React, { createContext, useState, useContext, useEffect } from "react";
import { usePreloadedQuery } from "react-relay";
import {
  ApplicationQuery as ApplicationQueryType,
  ApplicationQuery$data,
} from "./queries/__generated__/ApplicationQuery.graphql.ts";
import { ApplicationQuery } from "./queries/ApplicationQuery.ts";

type CurrentUser = ApplicationQuery$data["currentUser"];
type CurrentUserContextType = {
  currentUser: CurrentUser;
};

const CurrentUserContext = createContext<CurrentUserContextType>(null);

// eslint-disable-next-line react/prop-types
export function UserProvider({ children, queryRef }) {
  const data = usePreloadedQuery<ApplicationQueryType>(
    ApplicationQuery,
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
