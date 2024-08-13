/**
 * @generated SignedSource<<2276fb9e0200a7c098d4fcdcb6916a59>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Query } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type BoardSettingsRefetchQuery$variables = {
  id: string;
};
export type BoardSettingsRefetchQuery$data = {
  readonly node: {
    readonly " $fragmentSpreads": FragmentRefs<"BoardSettingsFragment">;
  } | null | undefined;
};
export type BoardSettingsRefetchQuery = {
  response: BoardSettingsRefetchQuery$data;
  variables: BoardSettingsRefetchQuery$variables;
};

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "id"
  }
],
v1 = [
  {
    "kind": "Variable",
    "name": "id",
    "variableName": "id"
  }
];
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "BoardSettingsRefetchQuery",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": null,
        "kind": "LinkedField",
        "name": "node",
        "plural": false,
        "selections": [
          {
            "args": null,
            "kind": "FragmentSpread",
            "name": "BoardSettingsFragment"
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
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "BoardSettingsRefetchQuery",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": null,
        "kind": "LinkedField",
        "name": "node",
        "plural": false,
        "selections": [
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "__typename",
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "id",
            "storageKey": null
          },
          {
            "kind": "InlineFragment",
            "selections": [
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "imageUrl",
                "storageKey": null
              }
            ],
            "type": "Board",
            "abstractKey": null
          }
        ],
        "storageKey": null
      }
    ]
  },
  "params": {
    "cacheID": "cc222beecc9166d37ff20f6919473c85",
    "id": null,
    "metadata": {},
    "name": "BoardSettingsRefetchQuery",
    "operationKind": "query",
    "text": "query BoardSettingsRefetchQuery(\n  $id: ID!\n) {\n  node(id: $id) {\n    __typename\n    ...BoardSettingsFragment\n    id\n  }\n}\n\nfragment BoardSettingsFragment on Board {\n  id\n  imageUrl\n}\n"
  }
};
})();

(node as any).hash = "9716a628be3739adf02b41b63dfcbf2b";

export default node;
