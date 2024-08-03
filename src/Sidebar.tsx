import React, { Suspense, useCallback, useEffect } from "react";
import { useQueryLoader } from "react-relay";
import { BoardsQuery } from "./queries/BoardsQuery.tsx";
import { SimpleBoardList } from "./SimpleBoardList.tsx";
import { SidebarSkeleton } from "./skeletons/SidebarSkeleton.tsx";
import { ErrorBoundary } from "react-error-boundary";

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

  if (!queryRef) {
    return <SidebarSkeleton />;
  }

  return (
    <ErrorBoundary fallback={<div>Something went wrong on the sidebar</div>}>
      <Suspense fallback={<SidebarSkeleton />}>
        {queryRef ? <SimpleBoardList queryRef={queryRef} /> : null}
      </Suspense>
    </ErrorBoundary>
  );
};

export { Sidebar };
