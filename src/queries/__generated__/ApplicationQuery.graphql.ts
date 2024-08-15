/**
 * @generated SignedSource<<447eb1f12ae668a95232b7b03b16dd8f>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Query } from 'relay-runtime';
export type ApplicationQuery$variables = Record<PropertyKey, never>;
export type ApplicationQuery$data = {
  readonly boards: ReadonlyArray<{
    readonly id: string;
    readonly imageUrl: string | null | undefined;
    readonly name: string;
  }>;
  readonly collaborateBoards: ReadonlyArray<{
    readonly id: string;
    readonly name: string;
  } | null | undefined>;
  readonly currentUser: {
    readonly avatarUrl: string | null | undefined;
    readonly email: string;
    readonly name: string | null | undefined;
  } | null | undefined;
  readonly favoriteBoards: ReadonlyArray<{
    readonly id: string;
    readonly name: string;
  } | null | undefined>;
};
export type ApplicationQuery = {
  response: ApplicationQuery$data;
  variables: ApplicationQuery$variables;
};

const node: ConcreteRequest = (function(){
var v0 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "id",
  "storageKey": null
},
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
  "concreteType": "Board",
  "kind": "LinkedField",
  "name": "boards",
  "plural": true,
  "selections": [
    (v0/*: any*/),
    (v1/*: any*/),
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "imageUrl",
      "storageKey": null
    }
  ],
  "storageKey": null
},
v3 = [
  (v0/*: any*/),
  (v1/*: any*/)
],
v4 = {
  "alias": null,
  "args": null,
  "concreteType": "Board",
  "kind": "LinkedField",
  "name": "collaborateBoards",
  "plural": true,
  "selections": (v3/*: any*/),
  "storageKey": null
},
v5 = {
  "alias": null,
  "args": null,
  "concreteType": "Board",
  "kind": "LinkedField",
  "name": "favoriteBoards",
  "plural": true,
  "selections": (v3/*: any*/),
  "storageKey": null
},
v6 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "email",
  "storageKey": null
},
v7 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "avatarUrl",
  "storageKey": null
};
return {
  "fragment": {
    "argumentDefinitions": [],
    "kind": "Fragment",
    "metadata": null,
    "name": "ApplicationQuery",
    "selections": [
      (v2/*: any*/),
      (v4/*: any*/),
      (v5/*: any*/),
      {
        "alias": null,
        "args": null,
        "concreteType": "User",
        "kind": "LinkedField",
        "name": "currentUser",
        "plural": false,
        "selections": [
          (v1/*: any*/),
          (v6/*: any*/),
          (v7/*: any*/)
        ],
        "storageKey": null
      }
    ],
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [],
    "kind": "Operation",
    "name": "ApplicationQuery",
    "selections": [
      (v2/*: any*/),
      (v4/*: any*/),
      (v5/*: any*/),
      {
        "alias": null,
        "args": null,
        "concreteType": "User",
        "kind": "LinkedField",
        "name": "currentUser",
        "plural": false,
        "selections": [
          (v1/*: any*/),
          (v6/*: any*/),
          (v7/*: any*/),
          (v0/*: any*/)
        ],
        "storageKey": null
      }
    ]
  },
  "params": {
    "cacheID": "e70711159fcf34249ee8a0601a18464d",
    "id": null,
    "metadata": {},
    "name": "ApplicationQuery",
    "operationKind": "query",
    "text": "query ApplicationQuery {\n  boards {\n    id\n    name\n    imageUrl\n  }\n  collaborateBoards {\n    id\n    name\n  }\n  favoriteBoards {\n    id\n    name\n  }\n  currentUser {\n    name\n    email\n    avatarUrl\n    id\n  }\n}\n"
  }
};
})();

(node as any).hash = "026791b4fa85f907ee7bdd4b27746a9d";

export default node;
