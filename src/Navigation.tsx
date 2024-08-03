import {
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
import { usePreloadedQuery } from "react-relay";
import { NavigationQuery as NavigationQueryType } from "./queries/__generated__/NavigationQuery.graphql.ts";
import { UserMenu } from "./UserMenu.tsx";
import { useLocation } from "react-router-dom";
import { MdOutlineExpandLess, MdOutlineExpandMore } from "react-icons/md";
import { NavigationQuery } from "./queries/NavigationQuery.ts";

// eslint-disable-next-line react/prop-types
export function Navigation({ queryRef }) {
  const data = usePreloadedQuery<NavigationQueryType>(
    NavigationQuery,
    queryRef,
  );

  const location = useLocation();

  const [favouriteListOpen, setFavouriteListOpen] = useState<boolean>(false);
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
          <Dropdown placement="bottom" onOpenChange={handleFavouriteListOpen}>
            <DropdownTrigger>
              <Button
                variant="light"
                endContent={
                  favouriteListOpen ? (
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
              {(data.favoriteBoards || []).map((board) => (
                <DropdownItem key={board.id} href={`/boards/${board.id}`}>
                  {board.name}
                </DropdownItem>
              ))}
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
