/**
 * @generated SignedSource<<f324f5f4e63faff0e0de17ac7dad9fa7>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Query } from 'relay-runtime';
export type AppBoardQuery$variables = {
  boardId: string;
};
export type AppBoardQuery$data = {
  readonly board: {
    readonly columns: ReadonlyArray<{
      readonly cards: ReadonlyArray<{
        readonly description: string;
        readonly id: string;
        readonly title: string;
      }>;
      readonly id: string;
      readonly name: string;
      readonly position: number;
    }>;
    readonly name: string;
  };
};
export type AppBoardQuery = {
  response: AppBoardQuery$data;
  variables: AppBoardQuery$variables;
};

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "boardId"
  }
],
v1 = [
  {
    "kind": "Variable",
    "name": "id",
    "variableName": "boardId"
  }
],
v2 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "name",
  "storageKey": null
},
v3 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "id",
  "storageKey": null
},
v4 = {
  "alias": null,
  "args": null,
  "concreteType": "Column",
  "kind": "LinkedField",
  "name": "columns",
  "plural": true,
  "selections": [
    (v3/*: any*/),
    (v2/*: any*/),
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "position",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "concreteType": "Card",
      "kind": "LinkedField",
      "name": "cards",
      "plural": true,
      "selections": [
        (v3/*: any*/),
        {
          "alias": null,
          "args": null,
          "kind": "ScalarField",
          "name": "title",
          "storageKey": null
        },
        {
          "alias": null,
          "args": null,
          "kind": "ScalarField",
          "name": "description",
          "storageKey": null
        }
      ],
      "storageKey": null
    }
  ],
  "storageKey": null
};
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "AppBoardQuery",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": "Board",
        "kind": "LinkedField",
        "name": "board",
        "plural": false,
        "selections": [
          (v2/*: any*/),
          (v4/*: any*/)
        ],
        "storageKey": null
      }
    ],
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "AppBoardQuery",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": "Board",
        "kind": "LinkedField",
        "name": "board",
        "plural": false,
        "selections": [
          (v2/*: any*/),
          (v4/*: any*/),
          (v3/*: any*/)
        ],
        "storageKey": null
      }
    ]
  },
  "params": {
    "cacheID": "95405c3ee80bf9e0ef70a9cfb2135d63",
    "id": null,
    "metadata": {},
    "name": "AppBoardQuery",
    "operationKind": "query",
    "text": "query AppBoardQuery(\n  $boardId: ID!\n) {\n  board(id: $boardId) {\n    name\n    columns {\n      id\n      name\n      position\n      cards {\n        id\n        title\n        description\n      }\n    }\n    id\n  }\n}\n"
  }
};
})();

(node as any).hash = "2e74d40bab5ab317c79c603eaf34db17";

export default node;
