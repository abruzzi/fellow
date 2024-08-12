import React, { useState } from "react";

import { Button } from "@nextui-org/react";
import { FaArrowLeftLong, FaArrowRightLong } from "react-icons/fa6";

// eslint-disable-next-line react/prop-types
export const BoardSettings = ({ boardId }: { boardId: string }) => {
  const [minimise, setMinimise] = useState<boolean>(false);

  const handleMinimiseClick = () => {
    setMinimise((min) => !min);
  };

  return (
    <div
      className={`bg-slate-100 border-r-1 border-gray-300 bg-opacity-50 backdrop-blur-lg relative`}
    >
      <div className={`absolute top-2 ${minimise ? "-left-2" : "left-2"}`}>
        <Button
          isIconOnly
          size="sm"
          variant="light"
          onPress={handleMinimiseClick}
        >
          {minimise ? <FaArrowLeftLong /> : <FaArrowRightLong />}
        </Button>
      </div>

      {minimise ? (
        <div className="w-4" />
      ) : (
        <div>
          <div className="flex flex-row items-center justify-center mt-12 px-4">
            <h2 className="text-medium text-slate-800 font-bold font-mono py-2">
              Board settings
            </h2>
          </div>
          <ol className="flex flex-wrap justify-start flex-col w-64">
            <li>Hello world</li>
          </ol>
        </div>
      )}
    </div>
  );
};
