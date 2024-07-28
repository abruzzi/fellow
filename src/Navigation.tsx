import {
  Avatar,
  Button,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownTrigger,
  Link,
  Navbar,
  NavbarContent,
  NavbarItem,
} from "@nextui-org/react";
import React, { useState } from "react";
import { graphql, usePreloadedQuery } from "react-relay";
import { CurrentUserQuery as CurrentUserQueryType } from "./queries/__generated__/CurrentUserQuery.graphql.ts";
import { UserMenu } from "./UserMenu.tsx";
import { useLocation } from "react-router-dom";
import { MdOutlineExpandLess, MdOutlineExpandMore } from "react-icons/md";

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

  const location = useLocation();

  const [recentListOpen, setRecentListOpen] = useState<boolean>(false);
  const [favouriteListOpen, setFavouriteListOpen] = useState<boolean>(false);
  const handleRecentListOpen = (isOpen: boolean) => {
    setRecentListOpen(isOpen);
  };
  const handleFavouriteListOpen = (isOpen: boolean) => {
    setFavouriteListOpen(isOpen);
  };

  return (
    <Navbar isBordered>
      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        <NavbarItem>
          <Link color="foreground" href="/boards">
            <Button
              variant="light"
              className={`${location.pathname.includes("/boards") ? "font-bold" : ""} text-lg`}
            >
              Boards
            </Button>
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Dropdown placement="bottom" onOpenChange={handleRecentListOpen}>
            <DropdownTrigger>
              <Button
                variant="light"
                endContent={
                  recentListOpen ? (
                    <MdOutlineExpandLess />
                  ) : (
                    <MdOutlineExpandMore />
                  )
                }
                className="text-lg"
              >
                Recent
              </Button>
            </DropdownTrigger>
            <DropdownMenu aria-label="Profile Actions" variant="flat">
              <DropdownItem key="profile" href="/profile">
                Board 1
              </DropdownItem>
              <DropdownItem key="settings" href="/settings">
                Board 2
              </DropdownItem>
              <DropdownItem key="logout" href="/logout">
                Board 3
              </DropdownItem>
            </DropdownMenu>
          </Dropdown>
        </NavbarItem>
        <NavbarItem>
          <Dropdown placement="bottom" onOpenChange={handleFavouriteListOpen}>
            <DropdownTrigger>
              <Button
                variant="light"
                endContent={
                  recentListOpen ? (
                    <MdOutlineExpandLess />
                  ) : (
                    <MdOutlineExpandMore />
                  )
                }
                className="text-lg"
              >
                Favourite
              </Button>
            </DropdownTrigger>
            <DropdownMenu aria-label="Profile Actions" variant="flat">
              <DropdownItem key="profile" href="/profile">
                Board 1
              </DropdownItem>
              <DropdownItem key="settings" href="/settings">
                Board 2
              </DropdownItem>
              <DropdownItem key="logout" href="/logout">
                Board 3
              </DropdownItem>
            </DropdownMenu>
          </Dropdown>
        </NavbarItem>
      </NavbarContent>

      <NavbarContent as="div" justify="end">
        <UserMenu fragmentRef={data.currentUser} />
      </NavbarContent>
    </Navbar>
  );
}
