import { ErrorBoundary } from "react-error-boundary";
import { FavoriteBoardProvider } from "./FavoriteBoardContext.tsx";
import { UserProvider } from "./UserContext.tsx";
import { Navigation } from "./Navigation.tsx";
import { Outlet } from "react-router-dom";
import React from "react";
import { usePreloadedQuery } from "react-relay";
import { ApplicationQuery as ApplicationQueryType } from "./queries/__generated__/ApplicationQuery.graphql.ts";
import { ApplicationQuery } from "./queries/ApplicationQuery.ts";

// eslint-disable-next-line react/prop-types
export const Foundation = ({ queryRef }) => {
  const data = usePreloadedQuery<ApplicationQueryType>(
    ApplicationQuery,
    queryRef,
  );

  return (
    <ErrorBoundary fallback={<div>Something went wrong on the root level</div>}>
      <FavoriteBoardProvider favoriteBoards={data.viewer}>
        <UserProvider user={data.viewer.user}>
          <Navigation favoriteBoards={data.viewer} />

          <Outlet
            context={{
              applicationData: data,
            }}
          />
        </UserProvider>
      </FavoriteBoardProvider>
    </ErrorBoundary>
  );
};
