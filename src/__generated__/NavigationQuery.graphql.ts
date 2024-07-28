/**
 * @generated SignedSource<<17ca7429516251d2cd6a8f9333ffdb2a>>
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
};
export type NavigationQuery = {
  response: NavigationQuery$data;
  variables: NavigationQuery$variables;
};

const node: ConcreteRequest = {
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
      }
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
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "name",
            "storageKey": null
          },
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
            "name": "id",
            "storageKey": null
          }
        ],
        "storageKey": null
      }
    ]
  },
  "params": {
    "cacheID": "23378b7bd717eb086be2519439ef34a1",
    "id": null,
    "metadata": {},
    "name": "NavigationQuery",
    "operationKind": "query",
    "text": "query NavigationQuery {\n  currentUser {\n    ...UserMenuFragment\n    id\n  }\n}\n\nfragment UserMenuFragment on User {\n  name\n  email\n}\n"
  }
};

(node as any).hash = "d5b5beea9052bf918abd0f463d0bbef2";

export default node;
