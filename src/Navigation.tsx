import {
  Avatar,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownTrigger,
  Link,
  Navbar,
  NavbarContent,
  NavbarItem,
} from "@nextui-org/react";
import React from "react";
import { usePreloadedQuery } from "react-relay";
import { CurrentUserQuery } from "./queries/CurrentUserQuery.tsx";
import { CurrentUserQuery as CurrentUserQueryType } from "./queries/__generated__/CurrentUserQuery.graphql.ts";

// eslint-disable-next-line react/prop-types
export function Navigation({ queryRef }) {
  const data = usePreloadedQuery<CurrentUserQueryType>(
    CurrentUserQuery,
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
        <Dropdown placement="bottom-end">
          <DropdownTrigger>
            <Avatar
              isBordered
              as="button"
              className="transition-transform"
              color="default"
              name={data.currentUser.name}
              size="sm"
            />
          </DropdownTrigger>
          <DropdownMenu aria-label="Profile Actions" variant="flat">
            <DropdownItem key="profile" href="/profile" className="h-14 gap-2">
              <p className="font-semibold">Signed in as</p>
              <p className="font-semibold">{data.currentUser.email}</p>
            </DropdownItem>
            <DropdownItem key="settings" href="/settings">
              My Settings
            </DropdownItem>
            <DropdownItem key="logout" color="danger" href="/logout">
              Log Out
            </DropdownItem>
          </DropdownMenu>
        </Dropdown>
      </NavbarContent>
    </Navbar>
  );
}
