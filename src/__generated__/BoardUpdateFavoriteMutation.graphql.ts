/**
 * @generated SignedSource<<fc6750af474b60e8c742271e5fe2cea9>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Mutation } from 'relay-runtime';
export type BoardUpdateFavoriteMutation$variables = {
  boardId: string;
};
export type BoardUpdateFavoriteMutation$data = {
  readonly favoriteBoard: {
    readonly id: string;
    readonly name: string;
  };
};
export type BoardUpdateFavoriteMutation = {
  response: BoardUpdateFavoriteMutation$data;
  variables: BoardUpdateFavoriteMutation$variables;
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
    "name": "favoriteBoard",
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
    "name": "BoardUpdateFavoriteMutation",
    "selections": (v1/*: any*/),
    "type": "Mutation",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "BoardUpdateFavoriteMutation",
    "selections": (v1/*: any*/)
  },
  "params": {
    "cacheID": "d316f59f635df5d4ffbf794df3978ea3",
    "id": null,
    "metadata": {},
    "name": "BoardUpdateFavoriteMutation",
    "operationKind": "mutation",
    "text": "mutation BoardUpdateFavoriteMutation(\n  $boardId: ID!\n) {\n  favoriteBoard(boardId: $boardId) {\n    id\n    name\n  }\n}\n"
  }
};
})();

(node as any).hash = "a3bdd332a688ac32cc8d22b81d9a30f4";

export default node;
