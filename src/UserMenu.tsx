import {
  Avatar,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownTrigger,
  Skeleton,
} from "@nextui-org/react";
import React from "react";

import { ApplicationQuery$data } from "./queries/__generated__/ApplicationQuery.graphql.ts";

type CurrentUser = ApplicationQuery$data["currentUser"];

// eslint-disable-next-line react/prop-types
const UserMenu = ({ currentUser }: { currentUser: CurrentUser }) => {
  if (!currentUser) {
    return <Skeleton className="flex rounded-full w-8 h-8" />;
  }

  return (
    <Dropdown placement="bottom-end">
      <DropdownTrigger>
        <Avatar
          isBordered
          showFallback
          as="button"
          className="transition-transform"
          color="default"
          name={currentUser.name}
          src={currentUser.avatarUrl}
          size="sm"
        />
      </DropdownTrigger>
      <DropdownMenu aria-label="Profile Actions" variant="flat">
        <DropdownItem key="profile" href="/profile" className="h-14 gap-2">
          <p className="font-semibold">Signed in as</p>
          <p className="font-semibold">{currentUser.email}</p>
        </DropdownItem>
        <DropdownItem key="settings" href="/settings">
          My Settings
        </DropdownItem>
        <DropdownItem key="logout" color="danger" href="/logout">
          Log Out
        </DropdownItem>
      </DropdownMenu>
    </Dropdown>
  );
};

export { UserMenu };
