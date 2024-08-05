import {PreloadedQuery} from "react-relay";
import {ApplicationQuery as ApplicationQueryType} from "./queries/__generated__/ApplicationQuery.graphql.ts";

export type RootContextType = {
  queryRef: PreloadedQuery<ApplicationQueryType>;
  refreshQuery: () => void;
};