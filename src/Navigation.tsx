import {
  Button,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownTrigger,
  Link,
  Navbar, NavbarBrand,
  NavbarContent,
  NavbarItem,
  Skeleton,
} from "@nextui-org/react";
import React, { useState } from "react";
import { Link as RouterLink } from "react-router-dom";
import { UserMenu } from "./UserMenu.tsx";
import { useLocation } from "react-router-dom";
import { MdOutlineExpandLess, MdOutlineExpandMore } from "react-icons/md";
import { useFavoriteBoards } from "./FavoriteBoardContext.tsx";
import { useCurrentUser } from "./UserContext.tsx";
import FellowLogo from "./assets/brand.png";

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

// eslint-disable-next-line react/prop-types
export function Navigation() {
  const { currentUser } = useCurrentUser();
  const { favoriteBoards } = useFavoriteBoards();

  const location = useLocation();

  const [favouriteListOpen, setFavouriteListOpen] = useState<boolean>(false);
  const handleFavouriteListOpen = (isOpen: boolean) => {
    setFavouriteListOpen(isOpen);
  };

  if (!currentUser || !favoriteBoards) {
    return <NavigationSkeleton />;
  }

  return (
    <Navbar isBordered maxWidth="full">
      <NavbarBrand className="flex-grow-0" >
        <RouterLink to="/">
          <img src={FellowLogo} alt="Fellow Logo" className="max-w-36" />
        </RouterLink>
      </NavbarBrand>
      <NavbarContent className="hidden sm:flex gap-4" justify="start">
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
              {(favoriteBoards || []).map((board) => (
                <DropdownItem key={board.id} href={`/boards/${board.id}`}>
                  {board.name}
                </DropdownItem>
              ))}
            </DropdownMenu>
          </Dropdown>
        </NavbarItem>
      </NavbarContent>

      <NavbarContent as="div" justify="end">
        <UserMenu currentUser={currentUser} />
      </NavbarContent>
    </Navbar>
  );
}
