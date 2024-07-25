import React, { Suspense, useEffect } from "react";

import { useQueryLoader } from "react-relay";
import { BoardList } from "./BoardList.tsx";
import { BoardsQuery } from "./BoardsQuery.tsx";

import { BoardsQuery as BoardsQueryType } from "./__generated__/BoardsQuery.graphql.ts";

const Boards = () => {
  const [queryRef, loadQuery] = useQueryLoader<BoardsQueryType>(BoardsQuery);

  useEffect(() => {
    loadQuery({});
  }, [loadQuery]);

  const refreshBoards = () => {
    loadQuery({}, { fetchPolicy: "network-only" });
  };

  return (
    <Suspense fallback={<div>Loading...</div>}>
      {queryRef ? (
        <BoardList queryRef={queryRef} refreshBoards={refreshBoards} />
      ) : null}
    </Suspense>
  );
};

export { Boards };
