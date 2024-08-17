import React, { useCallback, useEffect } from "react";

import { useQueryLoader } from "react-relay";
import { ApplicationQuery as ApplicationQueryType } from "../queries/__generated__/ApplicationQuery.graphql.ts";
import { ApplicationQuery } from "../queries/ApplicationQuery.ts";
import { Loading } from "../Loading.tsx";
import { Foundation } from "../Foundation.tsx";

const Root = () => {
  const [applicationQueryRef, loadApplicationQuery] =
    useQueryLoader<ApplicationQueryType>(ApplicationQuery);

  const refreshApplicationQuery = useCallback(() => {
    loadApplicationQuery({}, { fetchPolicy: "store-and-network" });
  }, [loadApplicationQuery]);

  useEffect(() => {
    if (!applicationQueryRef) {
      refreshApplicationQuery();
    }
  }, [refreshApplicationQuery, applicationQueryRef]);

  if (!applicationQueryRef) {
    return <Loading />;
  }

  return (
    <div className="h-screen flex flex-col max-h-screen">
      <Foundation queryRef={applicationQueryRef} />
    </div>
  );
};

export { Root };
