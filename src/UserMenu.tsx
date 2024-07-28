import { graphql, useFragment } from "react-relay";
import {
  Avatar,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownTrigger,
  Skeleton,
} from "@nextui-org/react";
import React from "react";
import { UserMenuFragment$key } from "./__generated__/UserMenuFragment.graphql.ts";

// eslint-disable-next-line react/prop-types
const UserMenu = ({ fragmentRef }) => {
  const data = useFragment<UserMenuFragment$key>(
    graphql`
      fragment UserMenuFragment on User {
        name
        email
      }
    `,
    fragmentRef,
  );

  if (!data) {
    return <Skeleton className="flex rounded-full w-8 h-8" />;
  }

  return (
    <Dropdown placement="bottom-end">
      <DropdownTrigger>
        <Avatar
          isBordered
          as="button"
          className="transition-transform"
          color="default"
          name={data.name}
          size="sm"
        />
      </DropdownTrigger>
      <DropdownMenu aria-label="Profile Actions" variant="flat">
        <DropdownItem key="profile" href="/profile" className="h-14 gap-2">
          <p className="font-semibold">Signed in as</p>
          <p className="font-semibold">{data.email}</p>
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
