import React, { Suspense, useEffect } from "react";

import { Outlet, useLocation } from "react-router-dom";
import { Navigation } from "../Navigation.tsx";
import { useQueryLoader } from "react-relay";
import { CurrentUserQuery } from "../queries/CurrentUserQuery.tsx";
import { CurrentUserQuery as CurrentUserQueryType } from "../queries/__generated__/CurrentUserQuery.graphql.ts";
import {
  Link,
  Navbar,
  NavbarContent,
  NavbarItem,
  Skeleton,
} from "@nextui-org/react";

const NavigationSkeleton = () => {
  return (
    <Navbar isBordered>
      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        <NavbarItem>
          <Link color="foreground" href="/boards">
            Boards
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" href="/recent">
            Recent
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" href="/starred">
            Favourite
          </Link>
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
    useQueryLoader<CurrentUserQueryType>(CurrentUserQuery);

  useEffect(() => {
    loadQuery({});
  }, [loadQuery]);

  return (
    <div className="h-screen flex flex-col max-h-screen">
      <Suspense fallback={<NavigationSkeleton />}>
        {queryRef ? <Navigation queryRef={queryRef} /> : null}
      </Suspense>
      <Outlet />
    </div>
  );
};

export { Root };
