/**
 * @generated SignedSource<<280452a5d5af7275fbab90594bc47d5f>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Mutation } from 'relay-runtime';
export type FavoriteBoardContextToggleMutation$variables = {
  boardId: string;
};
export type FavoriteBoardContextToggleMutation$data = {
  readonly toggleFavoriteBoard: {
    readonly id: string;
    readonly name: string;
  };
};
export type FavoriteBoardContextToggleMutation = {
  response: FavoriteBoardContextToggleMutation$data;
  variables: FavoriteBoardContextToggleMutation$variables;
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
    "alias": null,
    "args": [
      {
        "kind": "Variable",
        "name": "boardId",
        "variableName": "boardId"
      }
    ],
    "concreteType": "Board",
    "kind": "LinkedField",
    "name": "toggleFavoriteBoard",
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
        "name": "name",
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
    "name": "FavoriteBoardContextToggleMutation",
    "selections": (v1/*: any*/),
    "type": "Mutation",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "FavoriteBoardContextToggleMutation",
    "selections": (v1/*: any*/)
  },
  "params": {
    "cacheID": "d2df22745f49b010e64c95e401fbed30",
    "id": null,
    "metadata": {},
    "name": "FavoriteBoardContextToggleMutation",
    "operationKind": "mutation",
    "text": "mutation FavoriteBoardContextToggleMutation(\n  $boardId: ID!\n) {\n  toggleFavoriteBoard(boardId: $boardId) {\n    id\n    name\n  }\n}\n"
  }
};
})();

(node as any).hash = "477701a76250c4f46f6f01a555779899";

export default node;
