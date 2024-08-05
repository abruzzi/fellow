import { CardBody, Image } from "@nextui-org/react";
import { HiOutlineMenuAlt2 } from "react-icons/hi";
import React from "react";

const ImageCardContent = ({
  title,
  description,
  imageUrl,
}: {
  title: string;
  description: string;
  imageUrl: string;
}) => {
  return (
    <>
      <CardBody className="p-0">
        <Image radius="none" src={imageUrl} />
      </CardBody>
      <div className="py-2 px-3">
        <p>{title}</p>
        {description && (
          <HiOutlineMenuAlt2 title="This card has a description." />
        )}
      </div>
    </>
  );
};

export { ImageCardContent };
