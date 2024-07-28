import { Skeleton } from "@nextui-org/react";
import React from "react";

export const SidebarSkeleton = () => {
  return (
    <Skeleton className="bg-slate-100 border-r-1 border-gray-300 bg-opacity-50 backdrop-blur-lg w-64" />
  );
};
