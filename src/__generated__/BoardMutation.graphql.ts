/**
 * @generated SignedSource<<faf13b9341dc5f8f55d2c9e905b017d1>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Mutation } from 'relay-runtime';
export type BoardMutation$variables = {
  cardId: string;
  targetColumnId: string;
  targetPosition: number;
};
export type BoardMutation$data = {
  readonly moveCard: {
    readonly description: string;
    readonly id: string;
    readonly position: number;
    readonly title: string;
  };
};
export type BoardMutation = {
  response: BoardMutation$data;
  variables: BoardMutation$variables;
};

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "cardId"
  },
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "targetColumnId"
  },
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "targetPosition"
  }
],
v1 = [
  {
    "alias": null,
    "args": [
      {
        "kind": "Variable",
        "name": "cardId",
        "variableName": "cardId"
      },
      {
        "kind": "Variable",
        "name": "targetColumnId",
        "variableName": "targetColumnId"
      },
      {
        "kind": "Variable",
        "name": "targetPosition",
        "variableName": "targetPosition"
      }
    ],
    "concreteType": "Card",
    "kind": "LinkedField",
    "name": "moveCard",
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
        "name": "title",
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "description",
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "position",
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
    "name": "BoardMutation",
    "selections": (v1/*: any*/),
    "type": "Mutation",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "BoardMutation",
    "selections": (v1/*: any*/)
  },
  "params": {
    "cacheID": "abb3ee23f15e0814d081a43b857b8dae",
    "id": null,
    "metadata": {},
    "name": "BoardMutation",
    "operationKind": "mutation",
    "text": "mutation BoardMutation(\n  $cardId: ID!\n  $targetColumnId: ID!\n  $targetPosition: Int!\n) {\n  moveCard(cardId: $cardId, targetColumnId: $targetColumnId, targetPosition: $targetPosition) {\n    id\n    title\n    description\n    position\n  }\n}\n"
  }
};
})();

(node as any).hash = "6b069204624bb4a9db841a9a2780da52";

export default node;
