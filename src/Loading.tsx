import React, { useEffect, useState } from "react";
import { Spinner } from "@nextui-org/react";

const colors = [
  "current",
  "default",
  "primary",
  "secondary",
  "success",
  "warning",
  "danger",
];

type Color =
  | "current"
  | "white"
  | "default"
  | "primary"
  | "secondary"
  | "success"
  | "warning"
  | "danger";

const Loading = () => {
  const [colorIndex, setColorIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setColorIndex((prev) => (prev + 1) % colors.length);
    }, 500);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex flex-col items-center justify-center h-screen w-screen">
      <div className="mb-4 text-xl text-gray-700">Loading...</div>
      <Spinner size="lg" color={colors[colorIndex] as Color} />
    </div>
  );
};

export { Loading };
