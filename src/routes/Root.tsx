import React, { useCallback, useEffect } from "react";

import { Outlet } from "react-router-dom";
import { Navigation } from "../Navigation.tsx";
import { ErrorBoundary } from "react-error-boundary";
import { FavoriteBoardProvider } from "../FavoriteBoardContext.tsx";
import { UserProvider } from "../UserContext.tsx";
import { useQueryLoader } from "react-relay";
import { ApplicationQuery as ApplicationQueryType } from "../queries/__generated__/ApplicationQuery.graphql.ts";
import { ApplicationQuery } from "../queries/ApplicationQuery.ts";
import { Loading } from "../Loading.tsx";

// eslint-disable-next-line react/prop-types
const Root = () => {
  const [applicationQueryRef, loadApplicationQuery] =
    useQueryLoader<ApplicationQueryType>(ApplicationQuery);

  const refreshApplicationQuery = useCallback(() => {
    loadApplicationQuery({}, { fetchPolicy: "store-and-network" });
  }, [loadApplicationQuery]);

  useEffect(() => {
    if (!applicationQueryRef) {
      refreshApplicationQuery();
    }
  }, [refreshApplicationQuery, applicationQueryRef]);

  if (!applicationQueryRef) {
    return <Loading />;
  }

  return (
    <div className="h-screen flex flex-col max-h-screen">
      <ErrorBoundary
        fallback={<div>Something went wrong on the root level</div>}
      >
        <FavoriteBoardProvider
          queryRef={applicationQueryRef}
          refresh={refreshApplicationQuery}
        >
          <UserProvider queryRef={applicationQueryRef}>
            <Navigation />
          </UserProvider>

          <Outlet
            context={{
              queryRef: applicationQueryRef,
              refreshQuery: refreshApplicationQuery,
            }}
          />
        </FavoriteBoardProvider>
      </ErrorBoundary>
    </div>
  );
};

export { Root };
