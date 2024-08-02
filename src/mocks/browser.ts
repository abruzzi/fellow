import { setupWorker } from "msw/browser";

import { graphqlHandlers } from "./graphqlHandlers.ts";
import { restHandlers } from "./restHandlers.ts";

export const worker = setupWorker(...restHandlers, ...graphqlHandlers);
