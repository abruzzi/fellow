import { Link, Navbar, NavbarContent, NavbarItem } from "@nextui-org/react";
import React from "react";
import { graphql, usePreloadedQuery } from "react-relay";
import { CurrentUserQuery as CurrentUserQueryType } from "./queries/__generated__/CurrentUserQuery.graphql.ts";
import { UserMenu } from "./UserMenu.tsx";

// eslint-disable-next-line react/prop-types
export function Navigation({ queryRef }) {
  const data = usePreloadedQuery<CurrentUserQueryType>(
    graphql`
        query NavigationQuery {
            currentUser {
                ...UserMenuFragment
            }
        }
    `,
    queryRef,
  );

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
        <UserMenu fragmentRef={data.currentUser} />
      </NavbarContent>
    </Navbar>
  );
}
