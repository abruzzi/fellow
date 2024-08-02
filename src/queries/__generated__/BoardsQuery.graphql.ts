/**
 * @generated SignedSource<<e2951597848adbb286c43bc356f2ae45>>
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
    "cacheID": "6d9565caa243a5d7dc2c56d9b3a9210d",
    "id": null,
    "metadata": {},
    "name": "BoardsQuery",
    "operationKind": "query",
    "text": "query BoardsQuery {\n  boards {\n    id\n    name\n  }\n  collaborateBoards {\n    id\n    name\n  }\n}\n"
  }
};
})();

(node as any).hash = "df3d5b42f0bad634fb2f38063300e637";

export default node;
