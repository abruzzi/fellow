/**
 * @generated SignedSource<<2039dd8796065c9e8445c27bc8d70d97>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Mutation } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type BoardSettingsBackgroundMutation$variables = {
  bgImageUrl: string;
  boardId: string;
};
export type BoardSettingsBackgroundMutation$data = {
  readonly updateBoardImageUrl: {
    readonly " $fragmentSpreads": FragmentRefs<"BoardSettingsFragment">;
  };
};
export type BoardSettingsBackgroundMutation = {
  response: BoardSettingsBackgroundMutation$data;
  variables: BoardSettingsBackgroundMutation$variables;
};

const node: ConcreteRequest = (function(){
var v0 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "bgImageUrl"
},
v1 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "boardId"
},
v2 = [
  {
    "kind": "Variable",
    "name": "boardId",
    "variableName": "boardId"
  },
  {
    "kind": "Variable",
    "name": "imageUrl",
    "variableName": "bgImageUrl"
  }
];
return {
  "fragment": {
    "argumentDefinitions": [
      (v0/*: any*/),
      (v1/*: any*/)
    ],
    "kind": "Fragment",
    "metadata": null,
    "name": "BoardSettingsBackgroundMutation",
    "selections": [
      {
        "alias": null,
        "args": (v2/*: any*/),
        "concreteType": "Board",
        "kind": "LinkedField",
        "name": "updateBoardImageUrl",
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
    "type": "Mutation",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [
      (v1/*: any*/),
      (v0/*: any*/)
    ],
    "kind": "Operation",
    "name": "BoardSettingsBackgroundMutation",
    "selections": [
      {
        "alias": null,
        "args": (v2/*: any*/),
        "concreteType": "Board",
        "kind": "LinkedField",
        "name": "updateBoardImageUrl",
        "plural": false,
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
            "name": "imageUrl",
            "storageKey": null
          }
        ],
        "storageKey": null
      }
    ]
  },
  "params": {
    "cacheID": "174fb03ee4dd69b08bd803eeabcaa6da",
    "id": null,
    "metadata": {},
    "name": "BoardSettingsBackgroundMutation",
    "operationKind": "mutation",
    "text": "mutation BoardSettingsBackgroundMutation(\n  $boardId: ID!\n  $bgImageUrl: String!\n) {\n  updateBoardImageUrl(boardId: $boardId, imageUrl: $bgImageUrl) {\n    ...BoardSettingsFragment\n    id\n  }\n}\n\nfragment BoardSettingsFragment on Board {\n  id\n  imageUrl\n}\n"
  }
};
})();

(node as any).hash = "4ac24914ecfa7bca43ad1cf06f6bdae5";

export default node;
