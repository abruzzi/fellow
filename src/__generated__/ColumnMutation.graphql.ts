/**
 * @generated SignedSource<<6b7390e43cd18e2bc61c447804db03e2>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Mutation } from 'relay-runtime';
export type ColumnMutation$variables = {
  cardId: string;
  targetColumnId: string;
  targetPosition: number;
};
export type ColumnMutation$data = {
  readonly moveCard: {
    readonly description: string;
    readonly id: string;
    readonly position: number;
    readonly title: string;
  };
};
export type ColumnMutation = {
  response: ColumnMutation$data;
  variables: ColumnMutation$variables;
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
    "name": "ColumnMutation",
    "selections": (v1/*: any*/),
    "type": "Mutation",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "ColumnMutation",
    "selections": (v1/*: any*/)
  },
  "params": {
    "cacheID": "96a6c19c706270402445c4d063e84d2d",
    "id": null,
    "metadata": {},
    "name": "ColumnMutation",
    "operationKind": "mutation",
    "text": "mutation ColumnMutation(\n  $cardId: ID!\n  $targetColumnId: ID!\n  $targetPosition: Int!\n) {\n  moveCard(cardId: $cardId, targetColumnId: $targetColumnId, targetPosition: $targetPosition) {\n    id\n    title\n    description\n    position\n  }\n}\n"
  }
};
})();

(node as any).hash = "babf6fa373618d17a8dd0b8f5267f0db";

export default node;
