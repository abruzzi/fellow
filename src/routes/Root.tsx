import React from "react";

import { Outlet } from "react-router-dom";
import { Navigation } from "../Navigation.tsx";
import { ErrorBoundary } from "react-error-boundary";
import { FavoriteBoardProvider } from "../FavoriteBoardContext.tsx";
import { UserProvider } from "../UserContext.tsx";

// eslint-disable-next-line react/prop-types
const Root = ({ queryRef, refreshQuery }) => {
  return (
    <div className="h-screen flex flex-col max-h-screen">
      <ErrorBoundary
        fallback={<div>Something went wrong on the root level</div>}
      >
        <FavoriteBoardProvider queryRef={queryRef} refresh={refreshQuery}>
          <UserProvider queryRef={queryRef}>
            <Navigation />
          </UserProvider>

          <Outlet context={{ queryRef, refreshQuery }} />
        </FavoriteBoardProvider>
      </ErrorBoundary>
    </div>
  );
};

export { Root };
