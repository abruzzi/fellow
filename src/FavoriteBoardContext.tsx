import React, { createContext, useState, useContext, useEffect } from "react";
import { graphql, useMutation, usePreloadedQuery } from "react-relay";
import {
  NavigationQuery as NavigationQueryType,
  NavigationQuery$data,
} from "./queries/__generated__/NavigationQuery.graphql.ts";
import { NavigationQuery } from "./queries/NavigationQuery.ts";

type FavoriteBoards = NavigationQuery$data["favoriteBoards"];
type FavoriteBoardContextType = {
  favoriteBoards: FavoriteBoards;
  toggleFavorite: (boardId: string) => void;
};

const FavoriteBoardContext = createContext<FavoriteBoardContextType>(null);

// eslint-disable-next-line react/prop-types
export function FavoriteBoardProvider({ children, queryRef, refresh }) {
  const data = usePreloadedQuery<NavigationQueryType>(
    NavigationQuery,
    queryRef,
  );

  const [favoriteBoards, setFavoriteBoards] = useState<FavoriteBoards>(
    data.favoriteBoards,
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
      onCompleted: (response) => {
        console.log(response);
        setFavoriteBoards(
          data.favoriteBoards.filter((board) => board.id !== boardId),
        );
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
