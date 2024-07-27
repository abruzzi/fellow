import React, { Suspense, useEffect } from "react";

import { Outlet } from "react-router-dom";
import { Navigation } from "../Navigation.tsx";
import { useQueryLoader } from "react-relay";
import { CurrentUserQuery } from "../queries/CurrentUserQuery.tsx";
import { CurrentUserQuery as CurrentUserQueryType } from "../queries/__generated__/CurrentUserQuery.graphql.ts";

const Root = () => {
  const [queryRef, loadQuery] =
    useQueryLoader<CurrentUserQueryType>(CurrentUserQuery);

  useEffect(() => {
    loadQuery({});
  }, [loadQuery]);

  return (
    <div className="h-screen flex flex-col max-h-screen">
      <Suspense fallback={<div>Loading...</div>}>
        {queryRef ? <Navigation queryRef={queryRef} /> : null}
      </Suspense>
      <Outlet />
    </div>
  );
};

export { Root };
