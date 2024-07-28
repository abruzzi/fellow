import React from "react";
import { SidebarSkeleton } from "./SidebarSkeleton.tsx";
import { BoardSkeleton } from "./BoardSkeleton.tsx";

export const BoardScreenSkeleton = () => {
  return (
    <div className="h-full flex">
      <SidebarSkeleton />
      <div className={`flex-grow`}>
        <BoardSkeleton />
      </div>
    </div>
  );
};