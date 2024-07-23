import { useQueryLoader } from "react-relay";

import React, { Suspense, useEffect } from "react";
import { BoardList } from "./BoardList.tsx";
import { BoardsQuery } from "./BoardsQuery.tsx";

const Boards = () => {
  const [queryRef, loadQuery] = useQueryLoader(BoardsQuery);

  useEffect(() => {
    loadQuery({});
  }, [loadQuery]);

  const refreshBoards = () => {
    loadQuery({}, { fetchPolicy: "network-only" });
  };

  console.log(queryRef);

  return (
    <Suspense fallback={<div>Loading...</div>}>
      {queryRef ? (
        <BoardList queryRef={queryRef} refreshBoards={refreshBoards} />
      ) : null}
    </Suspense>
  );
};

export { Boards };
