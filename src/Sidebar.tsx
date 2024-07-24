import React, { Suspense, useCallback, useEffect } from "react";
import { useQueryLoader } from "react-relay";
import { BoardsQuery } from "./BoardsQuery.tsx";
import { SimpleBoardList } from "./SimpleBoardList.tsx";

const Sidebar = () => {
  const [queryRef, loadQuery] = useQueryLoader(BoardsQuery);

  const refreshBoardList = useCallback(() => {
    loadQuery({}, { fetchPolicy: "store-and-network" });
  }, [loadQuery]);

  useEffect(() => {
    if (!queryRef) {
      refreshBoardList();
    }
  }, [queryRef, refreshBoardList]);

  return (
    <Suspense fallback={<div>Loading...</div>}>
      {queryRef ? <SimpleBoardList queryRef={queryRef} /> : null}
    </Suspense>
  );
};

export { Sidebar };
