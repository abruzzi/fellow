/**
 * @generated SignedSource<<f6d5ae0261449967d03b7dc4ead85999>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Mutation } from 'relay-runtime';
export type BoardUpdateUnFavoriteMutation$variables = {
  boardId: string;
};
export type BoardUpdateUnFavoriteMutation$data = {
  readonly unfavoriteBoard: {
    readonly id: string;
    readonly name: string;
  };
};
export type BoardUpdateUnFavoriteMutation = {
  response: BoardUpdateUnFavoriteMutation$data;
  variables: BoardUpdateUnFavoriteMutation$variables;
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
    "name": "unfavoriteBoard",
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
    "name": "BoardUpdateUnFavoriteMutation",
    "selections": (v1/*: any*/),
    "type": "Mutation",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "BoardUpdateUnFavoriteMutation",
    "selections": (v1/*: any*/)
  },
  "params": {
    "cacheID": "119618aedada08301613b2980394ca12",
    "id": null,
    "metadata": {},
    "name": "BoardUpdateUnFavoriteMutation",
    "operationKind": "mutation",
    "text": "mutation BoardUpdateUnFavoriteMutation(\n  $boardId: ID!\n) {\n  unfavoriteBoard(boardId: $boardId) {\n    id\n    name\n  }\n}\n"
  }
};
})();

(node as any).hash = "5696dccbaedfb56e45410b64f771a2c3";

export default node;
