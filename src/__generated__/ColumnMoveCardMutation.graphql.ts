/**
 * @generated SignedSource<<596ef51310ef97e8e631df7f5f4f1026>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Mutation } from 'relay-runtime';
export type ColumnMoveCardMutation$variables = {
  cardId: string;
  targetColumnId: string;
  targetPosition: number;
};
export type ColumnMoveCardMutation$data = {
  readonly moveCard: {
    readonly description: string;
    readonly id: string;
    readonly position: number;
    readonly title: string;
  };
};
export type ColumnMoveCardMutation = {
  response: ColumnMoveCardMutation$data;
  variables: ColumnMoveCardMutation$variables;
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
    "name": "ColumnMoveCardMutation",
    "selections": (v1/*: any*/),
    "type": "Mutation",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "ColumnMoveCardMutation",
    "selections": (v1/*: any*/)
  },
  "params": {
    "cacheID": "ef9176735e22931922b57cbe5632b18b",
    "id": null,
    "metadata": {},
    "name": "ColumnMoveCardMutation",
    "operationKind": "mutation",
    "text": "mutation ColumnMoveCardMutation(\n  $cardId: ID!\n  $targetColumnId: ID!\n  $targetPosition: Int!\n) {\n  moveCard(cardId: $cardId, targetColumnId: $targetColumnId, targetPosition: $targetPosition) {\n    id\n    title\n    description\n    position\n  }\n}\n"
  }
};
})();

(node as any).hash = "0d8c214a44cf488778cddfef24458fe3";

export default node;
