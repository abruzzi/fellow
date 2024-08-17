import React, { createContext, ReactNode, useContext } from "react";
import { graphql, useFragment, useMutation } from "react-relay";
import {
  FavoriteBoardContextFragment$data,
  FavoriteBoardContextFragment$key,
} from "./__generated__/FavoriteBoardContextFragment.graphql.ts";

export type FavoriteBoards =
  FavoriteBoardContextFragment$data["favoriteBoards"];

type FavoriteBoardContextType = {
  favoriteBoards: FavoriteBoards;
  toggleFavorite: (boardId: string) => void;
};

const FavoriteBoardContext = createContext<FavoriteBoardContextType>(null);

export const FavoriteBoardContextFragment = graphql`
  fragment FavoriteBoardContextFragment on Viewer {
    favoriteBoards {
      id
      ...BoardSettingsFragment
    }
  }
`;

type FavoriteBoardProviderProps = {
  children: ReactNode;
  favoriteBoards: FavoriteBoardContextFragment$key;
};

export function FavoriteBoardProvider({
  children,
  favoriteBoards,
}: FavoriteBoardProviderProps) {
  const data = useFragment<FavoriteBoardContextFragment$key>(
    FavoriteBoardContextFragment,
    favoriteBoards,
  );

  const [toggleFavoriteBoard] = useMutation(graphql`
    mutation FavoriteBoardContextToggleMutation($boardId: ID!) {
      toggleFavoriteBoard(boardId: $boardId) {
        id
        name
      }
    }
  `);

  const toggleFavorite = (boardId: string) => {
    toggleFavoriteBoard({
      variables: {
        boardId: boardId,
      },
      onCompleted: () => {
        // refresh();
      },
    });
  };

  return (
    <FavoriteBoardContext.Provider
      value={{ favoriteBoards: data.favoriteBoards, toggleFavorite }}
    >
      {children}
    </FavoriteBoardContext.Provider>
  );
}

// eslint-disable-next-line react-refresh/only-export-components
export function useFavoriteBoards() {
  return useContext(FavoriteBoardContext);
}
