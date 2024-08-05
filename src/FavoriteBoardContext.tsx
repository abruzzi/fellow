import React, { createContext, useState, useContext, useEffect } from "react";
import { graphql, useMutation, usePreloadedQuery } from "react-relay";
import {
  ApplicationQuery as ApplicationQueryType,
  ApplicationQuery$data,
} from "./queries/__generated__/ApplicationQuery.graphql.ts";
import { ApplicationQuery } from "./queries/ApplicationQuery.ts";

type FavoriteBoards = ApplicationQuery$data["favoriteBoards"];
type FavoriteBoardContextType = {
  favoriteBoards: FavoriteBoards;
  toggleFavorite: (boardId: string) => void;
};

const FavoriteBoardContext = createContext<FavoriteBoardContextType>(null);

// eslint-disable-next-line react/prop-types
export function FavoriteBoardProvider({ children, queryRef, refresh }) {
  const data = usePreloadedQuery<ApplicationQueryType>(
    ApplicationQuery,
    queryRef,
  );

  const [favoriteBoards, setFavoriteBoards] = useState<FavoriteBoards>(
    data.favoriteBoards || [],
  );

  useEffect(() => {
    setFavoriteBoards(data.favoriteBoards);
  }, [data]);

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
        refresh();
      },
    });
  };

  return (
    <FavoriteBoardContext.Provider value={{ favoriteBoards, toggleFavorite }}>
      {children}
    </FavoriteBoardContext.Provider>
  );
}

export function useFavoriteBoards() {
  return useContext(FavoriteBoardContext);
}
