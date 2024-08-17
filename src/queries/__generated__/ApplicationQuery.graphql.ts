/**
 * @generated SignedSource<<9153e881aed9bdbc449f284382b6df91>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Query } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type ApplicationQuery$variables = Record<PropertyKey, never>;
export type ApplicationQuery$data = {
  readonly viewer: {
    readonly user: {
      readonly " $fragmentSpreads": FragmentRefs<"UserContextFragment">;
    } | null | undefined;
    readonly " $fragmentSpreads": FragmentRefs<"BoardListScreenFragment" | "FavoriteBoardContextFragment" | "NavigationFragment" | "SimpleBoardListFragment">;
  } | null | undefined;
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
v2 = [
  (v0/*: any*/),
  (v1/*: any*/),
  {
    "alias": null,
    "args": null,
    "kind": "ScalarField",
    "name": "imageUrl",
    "storageKey": null
  }
];
return {
  "fragment": {
    "argumentDefinitions": [],
    "kind": "Fragment",
    "metadata": null,
    "name": "ApplicationQuery",
    "selections": [
      {
        "alias": null,
        "args": null,
        "concreteType": "Viewer",
        "kind": "LinkedField",
        "name": "viewer",
        "plural": false,
        "selections": [
          {
            "args": null,
            "kind": "FragmentSpread",
            "name": "BoardListScreenFragment"
          },
          {
            "args": null,
            "kind": "FragmentSpread",
            "name": "SimpleBoardListFragment"
          },
          {
            "args": null,
            "kind": "FragmentSpread",
            "name": "FavoriteBoardContextFragment"
          },
          {
            "args": null,
            "kind": "FragmentSpread",
            "name": "NavigationFragment"
          },
          {
            "alias": null,
            "args": null,
            "concreteType": "User",
            "kind": "LinkedField",
            "name": "user",
            "plural": false,
            "selections": [
              {
                "args": null,
                "kind": "FragmentSpread",
                "name": "UserContextFragment"
              }
            ],
            "storageKey": null
          }
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
      {
        "alias": null,
        "args": null,
        "concreteType": "Viewer",
        "kind": "LinkedField",
        "name": "viewer",
        "plural": false,
        "selections": [
          {
            "alias": null,
            "args": null,
            "concreteType": "Board",
            "kind": "LinkedField",
            "name": "boards",
            "plural": true,
            "selections": (v2/*: any*/),
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "concreteType": "Board",
            "kind": "LinkedField",
            "name": "collaborateBoards",
            "plural": true,
            "selections": (v2/*: any*/),
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "concreteType": "Board",
            "kind": "LinkedField",
            "name": "favoriteBoards",
            "plural": true,
            "selections": (v2/*: any*/),
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
              (v0/*: any*/),
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
              }
            ],
            "storageKey": null
          }
        ],
        "storageKey": null
      }
    ]
  },
  "params": {
    "cacheID": "df915994895fad7ec92e9e2792390a1b",
    "id": null,
    "metadata": {},
    "name": "ApplicationQuery",
    "operationKind": "query",
    "text": "query ApplicationQuery {\n  viewer {\n    ...BoardListScreenFragment\n    ...SimpleBoardListFragment\n    ...FavoriteBoardContextFragment\n    ...NavigationFragment\n    user {\n      ...UserContextFragment\n      id\n    }\n  }\n}\n\nfragment BoardListScreenFragment on Viewer {\n  boards {\n    id\n    ...BoardSettingsFragment\n  }\n}\n\nfragment BoardSettingsFragment on Board {\n  id\n  name\n  imageUrl\n}\n\nfragment FavoriteBoardContextFragment on Viewer {\n  favoriteBoards {\n    id\n    ...BoardSettingsFragment\n  }\n}\n\nfragment NavigationFragment on Viewer {\n  favoriteBoards {\n    id\n    name\n  }\n}\n\nfragment SimpleBoardListFragment on Viewer {\n  collaborateBoards {\n    id\n    ...BoardSettingsFragment\n  }\n  boards {\n    id\n    ...BoardSettingsFragment\n  }\n}\n\nfragment UserContextFragment on User {\n  id\n  name\n  email\n  avatarUrl\n}\n"
  }
};
})();

(node as any).hash = "01b7af6e10c032faefaaa576b2d74d6d";

export default node;
