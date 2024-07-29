/**
 * @generated SignedSource<<9d9b951effb0316465a815d8107cec86>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Query } from 'relay-runtime';
export type CommentsQuery$variables = {
  cardId: string;
};
export type CommentsQuery$data = {
  readonly comments: ReadonlyArray<{
    readonly content: string;
    readonly id: string;
    readonly updatedAt: string;
    readonly user: {
      readonly id: string;
      readonly name: string | null | undefined;
    };
  }>;
};
export type CommentsQuery = {
  response: CommentsQuery$data;
  variables: CommentsQuery$variables;
};

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "cardId"
  }
],
v1 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "id",
  "storageKey": null
},
v2 = [
  {
    "alias": null,
    "args": [
      {
        "kind": "Variable",
        "name": "cardId",
        "variableName": "cardId"
      }
    ],
    "concreteType": "Comment",
    "kind": "LinkedField",
    "name": "comments",
    "plural": true,
    "selections": [
      (v1/*: any*/),
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "content",
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "updatedAt",
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "concreteType": "User",
        "kind": "LinkedField",
        "name": "user",
        "plural": false,
        "selections": [
          (v1/*: any*/),
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
    ],
    "storageKey": null
  }
];
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "CommentsQuery",
    "selections": (v2/*: any*/),
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "CommentsQuery",
    "selections": (v2/*: any*/)
  },
  "params": {
    "cacheID": "84533f707b9a2154abc7fa3902b5345b",
    "id": null,
    "metadata": {},
    "name": "CommentsQuery",
    "operationKind": "query",
    "text": "query CommentsQuery(\n  $cardId: ID!\n) {\n  comments(cardId: $cardId) {\n    id\n    content\n    updatedAt\n    user {\n      id\n      name\n    }\n  }\n}\n"
  }
};
})();

(node as any).hash = "0388dd1f861c941c167cb82fcd6ecb6b";

export default node;
