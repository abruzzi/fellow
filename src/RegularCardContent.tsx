import { CardBody, CardHeader } from "@nextui-org/react";
import { HiOutlineMenuAlt2 } from "react-icons/hi";
import React from "react";

const RegularCardContent = ({
  title,
  description,
}: {
  title: string;
  description: string;
}) => {
  return (
    <>
      <CardHeader className="py-2 px-4 flex-col items-start">
        <h4 className="text-large text-slate-800">{title}</h4>
      </CardHeader>
      {description && (
        <CardBody className="pt-0">
          <div>
            <HiOutlineMenuAlt2 title="This card has a description." />
          </div>
        </CardBody>
      )}
    </>
  );
};

export { RegularCardContent };
