import { Card as NextCard } from "@nextui-org/card";
import { CardBody, CardHeader, Skeleton } from "@nextui-org/react";
import React from "react";

const CardSkeleton = () => {
  return (
    <NextCard shadow="sm" className='py-2 bg-gray-50 shadow-sm'>
      <CardHeader className="py-0 px-4 flex-col items-start">
        <Skeleton className="text-large bg-gray-50 h-4 rounded-lg w-full" />
      </CardHeader>
      <CardBody>
        <Skeleton className="h-20 rounded-md bg-gray-100" />
      </CardBody>
    </NextCard>
  );
};

export { CardSkeleton };
