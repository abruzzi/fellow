import { Avatar, Skeleton } from "@nextui-org/react";
import React from "react";

const CommentSkeleton = () => {
  return (
    <div className="flex flex-row items-start gap-2">
      <Avatar
        className="w-8 h-8 flex-shrink-0"
        color="default"
        name=""
        size="sm"
      />
      <div className="flex-1 flex-grow flex-shrink-0 gap-2">
        <div className="flex flex-row gap-2 items-center">
          <Skeleton className="font-bold h-8" />
          <Skeleton className="text-xs text-slate-600 h-8" />
        </div>
        <Skeleton className="rounded-lg bg-white px-4 py-2 shadow-sm h-20" />
      </div>
    </div>
  );
};

export { CommentSkeleton };
