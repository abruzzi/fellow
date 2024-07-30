import { Card as NextCard } from "@nextui-org/card";
import { CardBody, CardHeader, Skeleton } from "@nextui-org/react";
import React from "react";

const CardSkeleton = () => {
  return (
    <NextCard shadow="sm" className={`py-2`}>
      <CardHeader className="py-0 px-4 flex-col items-start">
        <Skeleton className="text-large text-slate-800 h-6 rounded-lg" />
      </CardHeader>
      <CardBody>
        <Skeleton className="h-20 rounded-lg" />
      </CardBody>
    </NextCard>
  );
};

export { CardSkeleton };
