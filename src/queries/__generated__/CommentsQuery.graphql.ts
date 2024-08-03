/**
 * @generated SignedSource<<57ef6fa9143171098d57945bf2bc1fc8>>
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
      readonly avatarUrl: string | null | undefined;
      readonly id: string;
      readonly name: string | null | undefined;
    };
  }>;
  readonly currentUser: {
    readonly avatarUrl: string | null | undefined;
    readonly email: string;
    readonly name: string | null | undefined;
  } | null | undefined;
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
  "name": "name",
  "storageKey": null
},
v2 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "email",
  "storageKey": null
},
v3 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "avatarUrl",
  "storageKey": null
},
v4 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "id",
  "storageKey": null
},
v5 = {
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
    (v4/*: any*/),
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
        (v4/*: any*/),
        (v1/*: any*/),
        (v3/*: any*/)
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
    "name": "CommentsQuery",
    "selections": [
      {
        "alias": null,
        "args": null,
        "concreteType": "User",
        "kind": "LinkedField",
        "name": "currentUser",
        "plural": false,
        "selections": [
          (v1/*: any*/),
          (v2/*: any*/),
          (v3/*: any*/)
        ],
        "storageKey": null
      },
      (v5/*: any*/)
    ],
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "CommentsQuery",
    "selections": [
      {
        "alias": null,
        "args": null,
        "concreteType": "User",
        "kind": "LinkedField",
        "name": "currentUser",
        "plural": false,
        "selections": [
          (v1/*: any*/),
          (v2/*: any*/),
          (v3/*: any*/),
          (v4/*: any*/)
        ],
        "storageKey": null
      },
      (v5/*: any*/)
    ]
  },
  "params": {
    "cacheID": "b678493126bdd8aa8d16d2e1343cdc5b",
    "id": null,
    "metadata": {},
    "name": "CommentsQuery",
    "operationKind": "query",
    "text": "query CommentsQuery(\n  $cardId: ID!\n) {\n  currentUser {\n    name\n    email\n    avatarUrl\n    id\n  }\n  comments(cardId: $cardId) {\n    id\n    content\n    updatedAt\n    user {\n      id\n      name\n      avatarUrl\n    }\n  }\n}\n"
  }
};
})();

(node as any).hash = "12ecf237152eb303b677adce8df69a02";

export default node;
