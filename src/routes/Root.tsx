import React, { Suspense, useEffect } from "react";

import { Outlet } from "react-router-dom";
import { Navigation } from "../Navigation.tsx";
import { useQueryLoader } from "react-relay";
import {
  Link,
  Navbar,
  NavbarContent,
  NavbarItem,
  Skeleton,
} from "@nextui-org/react";
import { NavigationQuery } from "../queries/NavigationQuery.ts";
import { NavigationQuery as NavigationQueryType } from "../queries/__generated__/NavigationQuery.graphql.ts";
import { ErrorBoundary } from "react-error-boundary";

const NavigationSkeleton = () => {
  return (
    <Navbar isBordered>
      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        <NavbarItem>
          <Link color="foreground">Boards</Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground">Recent</Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground">Favourite</Link>
        </NavbarItem>
      </NavbarContent>

      <NavbarContent as="div" justify="end">
        <Skeleton className="flex rounded-full w-8 h-8" />
      </NavbarContent>
    </Navbar>
  );
};

const Root = () => {
  const [queryRef, loadQuery] =
    useQueryLoader<NavigationQueryType>(NavigationQuery);

  useEffect(() => {
    loadQuery({});
  }, [loadQuery]);

  return (
    <div className="h-screen flex flex-col max-h-screen">
      <ErrorBoundary
        fallback={<div>Something went wrong on the navigation</div>}
      >
        <Suspense fallback={<NavigationSkeleton />}>
          {queryRef ? <Navigation queryRef={queryRef} /> : null}
        </Suspense>
      </ErrorBoundary>
      <Outlet />
    </div>
  );
};

export { Root };
