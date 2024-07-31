import React from "react";

import { ColumnSkeleton } from "./ColumnSkeleton.tsx";

export const BoardSkeleton = () => {
  return (
    <div className="h-full flex flex-col">
      <div className="flex flex-row items-center gap-2 bg-slate-100 px-4 py-8 bg-opacity-50 backdrop-blur-md" />
      <div className="relative mt-4 flex-grow">
        <ol
          className={`flex flex-row gap-4 absolute top-0 left-0 bottom-0 right-0 select-none px-4`}
        >
          <ColumnSkeleton numberOfCards={3} />
          <ColumnSkeleton numberOfCards={1} />
          <ColumnSkeleton numberOfCards={2} />
        </ol>
      </div>
    </div>
  );
};
