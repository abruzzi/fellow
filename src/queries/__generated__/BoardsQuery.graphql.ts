/**
 * @generated SignedSource<<e09439fcb0f870f4ea30236717abba35>>
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
    "concreteType": "Board",
    "kind": "LinkedField",
    "name": "boards",
    "plural": true,
    "selections": [
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
    "storageKey": null
  }
];
return {
  "fragment": {
    "argumentDefinitions": [],
    "kind": "Fragment",
    "metadata": null,
    "name": "BoardsQuery",
    "selections": (v0/*: any*/),
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [],
    "kind": "Operation",
    "name": "BoardsQuery",
    "selections": (v0/*: any*/)
  },
  "params": {
    "cacheID": "6c11a0f1a86c66f628a73375c815320c",
    "id": null,
    "metadata": {},
    "name": "BoardsQuery",
    "operationKind": "query",
    "text": "query BoardsQuery {\n  boards {\n    id\n    name\n  }\n}\n"
  }
};
})();

(node as any).hash = "feedb9b4519c755a456c46ee9fbb5f2b";

export default node;
