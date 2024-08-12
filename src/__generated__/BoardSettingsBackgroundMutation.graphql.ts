/**
 * @generated SignedSource<<0049ece24727609ae88a7569c1c9d0ca>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Mutation } from 'relay-runtime';
export type BoardSettingsBackgroundMutation$variables = {
  bgImageUrl: string;
  boardId: string;
};
export type BoardSettingsBackgroundMutation$data = {
  readonly updateBoardImageUrl: {
    readonly id: string;
    readonly imageUrl: string | null | undefined;
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
    "alias": null,
    "args": [
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
    ],
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
    "selections": (v2/*: any*/),
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
    "selections": (v2/*: any*/)
  },
  "params": {
    "cacheID": "0490c4d99b6a2ae3b5d97d086d2934c3",
    "id": null,
    "metadata": {},
    "name": "BoardSettingsBackgroundMutation",
    "operationKind": "mutation",
    "text": "mutation BoardSettingsBackgroundMutation(\n  $boardId: ID!\n  $bgImageUrl: String!\n) {\n  updateBoardImageUrl(boardId: $boardId, imageUrl: $bgImageUrl) {\n    id\n    imageUrl\n  }\n}\n"
  }
};
})();

(node as any).hash = "8bcd82f1eaf94cf6d8a72805fea64ffe";

export default node;
