import React from "react-relay";
import { CardSkeleton } from "./CardSkeleton.tsx";
import { Skeleton } from "@nextui-org/react";

export const ColumnSkeleton = () => {
  return (
    <div className="w-72 shrink-0 rounded-lg bg-gray-100 p-4 flex flex-col max-h-screen">
      <Skeleton className="text-lg font-semibold mb-2 px-2 text-slate-600 h-6 rounded-lg" />
      <div className="flex-1 p-2 mb-2 overflow-auto bg-gray-100">
        <ol className="flex flex-col gap-4 shrink-0">
          <CardSkeleton />
          <CardSkeleton />
          <CardSkeleton />
        </ol>
      </div>
    </div>
  );
};
