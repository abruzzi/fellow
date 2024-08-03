/**
 * @generated SignedSource<<c75ff5bb8a44a1e3af1925daaf2beb71>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Query } from 'relay-runtime';
export type BoardsQuery$variables = Record<PropertyKey, never>;
export type BoardsQuery$data = {
  readonly boards: ReadonlyArray<{
    readonly id: string;
    readonly name: string;
  }>;
  readonly collaborateBoards: ReadonlyArray<{
    readonly id: string;
    readonly name: string;
  } | null | undefined>;
  readonly favoriteBoards: ReadonlyArray<{
    readonly id: string;
    readonly name: string;
  } | null | undefined>;
};
export type BoardsQuery = {
  response: BoardsQuery$data;
  variables: BoardsQuery$variables;
};

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "alias": null,
    "args": null,
    "kind": "ScalarField",
    "name": "id",
    "storageKey": null
  },
  {
    "alias": null,
    "args": null,
    "kind": "ScalarField",
    "name": "name",
    "storageKey": null
  }
],
v1 = [
  {
    "alias": null,
    "args": null,
    "concreteType": "Board",
    "kind": "LinkedField",
    "name": "boards",
    "plural": true,
    "selections": (v0/*: any*/),
    "storageKey": null
  },
  {
    "alias": null,
    "args": null,
    "concreteType": "Board",
    "kind": "LinkedField",
    "name": "collaborateBoards",
    "plural": true,
    "selections": (v0/*: any*/),
    "storageKey": null
  },
  {
    "alias": null,
    "args": null,
    "concreteType": "Board",
    "kind": "LinkedField",
    "name": "favoriteBoards",
    "plural": true,
    "selections": (v0/*: any*/),
    "storageKey": null
  }
];
return {
  "fragment": {
    "argumentDefinitions": [],
    "kind": "Fragment",
    "metadata": null,
    "name": "BoardsQuery",
    "selections": (v1/*: any*/),
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [],
    "kind": "Operation",
    "name": "BoardsQuery",
    "selections": (v1/*: any*/)
  },
  "params": {
    "cacheID": "556c6de15700731d904416a66f54a7ce",
    "id": null,
    "metadata": {},
    "name": "BoardsQuery",
    "operationKind": "query",
    "text": "query BoardsQuery {\n  boards {\n    id\n    name\n  }\n  collaborateBoards {\n    id\n    name\n  }\n  favoriteBoards {\n    id\n    name\n  }\n}\n"
  }
};
})();

(node as any).hash = "0571aa67761995ddd517ea21b3ade2c2";

export default node;
