import React from "react";
import { Skeleton } from "@nextui-org/react";

const BoardListSkeleton = () => {
  return (
    <div className={`container flex flex-col max-w-4xl m-auto my-8`}>
      <h1 className={`text-xl text-slate-800 font-bold font-mono py-2`}>
        My Boards
      </h1>
      <ol className="flex flex-wrap justify-start gap-4">
        <Skeleton
          className="border-none h-20 w-60 p-4 bg-slate-100"
        />
        <Skeleton
          className="border-none h-20 w-60 p-4 bg-slate-100"
        />
        <Skeleton
          className="border-none h-20 w-60 p-4 bg-slate-100"
        />
      </ol>
    </div>
  );
};

export { BoardListSkeleton };
