/**
 * @generated SignedSource<<5eb840dd525603af92045081476086a0>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Query } from 'relay-runtime';
export type BoardListQuery$variables = Record<PropertyKey, never>;
export type BoardListQuery$data = {
  readonly boards: ReadonlyArray<{
    readonly id: string;
    readonly name: string;
  }>;
};
export type BoardListQuery = {
  response: BoardListQuery$data;
  variables: BoardListQuery$variables;
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
    "name": "BoardListQuery",
    "selections": (v0/*: any*/),
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [],
    "kind": "Operation",
    "name": "BoardListQuery",
    "selections": (v0/*: any*/)
  },
  "params": {
    "cacheID": "00d8147ebd607605d7bc0af5a9406625",
    "id": null,
    "metadata": {},
    "name": "BoardListQuery",
    "operationKind": "query",
    "text": "query BoardListQuery {\n  boards {\n    id\n    name\n  }\n}\n"
  }
};
})();

(node as any).hash = "36e6eff9279f5a7b193795dd063bd7cb";

export default node;
