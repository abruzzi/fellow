import React, { ChangeEvent, KeyboardEvent, useState } from "react";

import { Button, Image, Input } from "@nextui-org/react";
import { FaArrowLeftLong, FaArrowRightLong } from "react-icons/fa6";
import { graphql, useFragment, useMutation } from "react-relay";
import { BoardSettingsFragment$key } from "./__generated__/BoardSettingsFragment.graphql.ts";

export const BoardSettingsFragment = graphql`
    fragment BoardSettingsFragment on Board {
        id
        name
        imageUrl
    }
`;

type BoardSettingsProps = {
  board: BoardSettingsFragment$key;
};

export const BoardSettings = ({ board }: BoardSettingsProps) => {
  const data = useFragment(BoardSettingsFragment, board);

  const [backgroundImageUrl, setBackgroundImageUrl] = useState<string>("");
  const [minimise, setMinimise] = useState<boolean>(true);

  const [updateBackgroundImage] = useMutation(graphql`
    mutation BoardSettingsBackgroundMutation(
      $boardId: ID!
      $bgImageUrl: String!
    ) {
      updateBoardImageUrl(boardId: $boardId, imageUrl: $bgImageUrl) {
        ...BoardSettingsFragment
      }
    }
  `);

  const handleMinimiseClick = () => {
    setMinimise((min) => !min);
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setBackgroundImageUrl(e.target.value);
  };

  const handleBackgroundImageEditKeyDown = (
    e: KeyboardEvent<HTMLInputElement>,
  ) => {
    if (e.key === "Enter") {
      handleUpdateBackgroundImageUrl();
    }
  };

  const handleUpdateBackgroundImageUrl = () => {
    if (!backgroundImageUrl) {
      return;
    }

    updateBackgroundImage({
      variables: {
        boardId: data.id,
        bgImageUrl: backgroundImageUrl,
      },
    });
  };

  return (
    <div
      className={`bg-slate-100 border-l-1 border-gray-300 bg-opacity-50 backdrop-blur-lg relative`}
    >
      <div className={`absolute top-4 ${minimise ? "left-2" : "left-2"}`}>
        <Button
          isIconOnly
          size="sm"
          variant="light"
          onPress={handleMinimiseClick}
          className="text-slate-600"
        >
          {minimise ? <FaArrowLeftLong /> : <FaArrowRightLong />}
        </Button>
      </div>

      {minimise ? (
        <div className="w-12 mt-16 transition-width duration-500 ease-in-out" />
      ) : (
        <div className="transition-width duration-500 ease-in-out">
          <div className="flex flex-row items-center justify-center mt-12 px-4">
            <h2 className="text-medium text-slate-800 font-bold font-mono py-2">
              Board settings
            </h2>
          </div>
          <ol className="flex flex-wrap justify-start flex-col w-64">
            <li>
              <div className="flex flex-row items-center gap-2 px-4 py-1">
                <Input
                  type="url"
                  label="Board background image"
                  defaultValue={data.imageUrl}
                  value={backgroundImageUrl}
                  onChange={handleChange}
                  onKeyDown={handleBackgroundImageEditKeyDown}
                  placeholder="Paste image url here"
                />
              </div>
              {data.imageUrl && (
                <div className="flex flex-row items-center gap-2 px-4 py-2">
                  <Image src={data.imageUrl} alt="Background image" />
                </div>
              )}
            </li>
          </ol>
        </div>
      )}
    </div>
  );
};
