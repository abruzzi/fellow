import React from "react";

import { Outlet } from "react-router-dom";

import {
  Navbar,
  NavbarContent,
  NavbarItem,
  Link,
  DropdownItem,
  DropdownTrigger,
  Dropdown,
  DropdownMenu,
  Avatar,
} from "@nextui-org/react";

function Navigation() {
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
              name="Juntao Qiu"
              size="sm"
              src="https://www.icodeit.com.au/_next/image?url=%2Fjuntao.qiu.avatar.png&w=256&q=75"
            />
          </DropdownTrigger>
          <DropdownMenu aria-label="Profile Actions" variant="flat">
            <DropdownItem key="profile" className="h-14 gap-2">
              <p className="font-semibold">Signed in as</p>
              <p className="font-semibold">juntao.qiu@gmail.com</p>
            </DropdownItem>
            <DropdownItem key="settings">My Settings</DropdownItem>
            <DropdownItem key="logout" color="danger">
              Log Out
            </DropdownItem>
          </DropdownMenu>
        </Dropdown>
      </NavbarContent>
    </Navbar>
  );
}

const Root = () => {
  return (
    <div className="h-screen flex flex-col max-h-screen">
      <Navigation />
      <Outlet />
    </div>
  );
};

export { Root };
