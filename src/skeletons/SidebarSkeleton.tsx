import React from "react";
import { Skeleton } from "@nextui-org/react";

export const SidebarSkeleton = () => {
  return (
    <div
      className={`bg-slate-100 border-r-1 border-gray-300 bg-opacity-50 backdrop-blur-lg`}
    >
      <div className="flex flex-row items-center mt-12 px-4">
        <h2 className="text-medium text-slate-800 font-bold font-mono py-2">
          My Boards
        </h2>
      </div>
      <ol className="flex flex-wrap justify-start flex-col w-64 gap-2">
        <li className="px-4">
          <Skeleton className="flex flex-row items-center gap-1 hover:bg-slate-100 px-4 py-1 h-6 rounded-lg" />
        </li>
        <li className="px-4">
          <Skeleton className="flex flex-row items-center gap-1 hover:bg-slate-100 px-4 py-1 h-6 rounded-lg" />
        </li>
        <li className="px-4">
          <Skeleton className="flex flex-row items-center gap-1 hover:bg-slate-100 px-4 py-1 h-6 rounded-lg" />
        </li>
      </ol>
    </div>
  );
};
