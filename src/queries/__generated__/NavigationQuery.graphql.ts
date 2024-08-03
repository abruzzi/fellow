/**
 * @generated SignedSource<<c69f743487ef8cd9c9cfedfd5973b1f2>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Query } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type NavigationQuery$variables = Record<PropertyKey, never>;
export type NavigationQuery$data = {
  readonly currentUser: {
    readonly " $fragmentSpreads": FragmentRefs<"UserMenuFragment">;
  } | null | undefined;
  readonly favoriteBoards: ReadonlyArray<{
    readonly id: string;
    readonly name: string;
  } | null | undefined>;
};
export type NavigationQuery = {
  response: NavigationQuery$data;
  variables: NavigationQuery$variables;
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
  "name": "favoriteBoards",
  "plural": true,
  "selections": [
    (v0/*: any*/),
    (v1/*: any*/)
  ],
  "storageKey": null
};
return {
  "fragment": {
    "argumentDefinitions": [],
    "kind": "Fragment",
    "metadata": null,
    "name": "NavigationQuery",
    "selections": [
      {
        "alias": null,
        "args": null,
        "concreteType": "User",
        "kind": "LinkedField",
        "name": "currentUser",
        "plural": false,
        "selections": [
          {
            "args": null,
            "kind": "FragmentSpread",
            "name": "UserMenuFragment"
          }
        ],
        "storageKey": null
      },
      (v2/*: any*/)
    ],
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [],
    "kind": "Operation",
    "name": "NavigationQuery",
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
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "email",
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "avatarUrl",
            "storageKey": null
          },
          (v0/*: any*/)
        ],
        "storageKey": null
      },
      (v2/*: any*/)
    ]
  },
  "params": {
    "cacheID": "23fad7caf84d299a38162bda756a1d6f",
    "id": null,
    "metadata": {},
    "name": "NavigationQuery",
    "operationKind": "query",
    "text": "query NavigationQuery {\n  currentUser {\n    ...UserMenuFragment\n    id\n  }\n  favoriteBoards {\n    id\n    name\n  }\n}\n\nfragment UserMenuFragment on User {\n  name\n  email\n  avatarUrl\n}\n"
  }
};
})();

(node as any).hash = "14378470bbbd503e4ce67d63cc61b3e6";

export default node;
