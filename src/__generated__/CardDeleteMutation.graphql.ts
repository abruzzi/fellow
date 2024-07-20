/**
 * @generated SignedSource<<d2ef41cb120d09e5597600015de78c16>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Mutation } from 'relay-runtime';
export type CardDeleteMutation$variables = {
  id: string;
};
export type CardDeleteMutation$data = {
  readonly deleteCard: {
    readonly id: string;
    readonly position: number;
  };
};
export type CardDeleteMutation = {
  response: CardDeleteMutation$data;
  variables: CardDeleteMutation$variables;
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
    "alias": null,
    "args": [
      {
        "kind": "Variable",
        "name": "cardId",
        "variableName": "id"
      }
    ],
    "concreteType": "Card",
    "kind": "LinkedField",
    "name": "deleteCard",
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
    "name": "CardDeleteMutation",
    "selections": (v1/*: any*/),
    "type": "Mutation",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "CardDeleteMutation",
    "selections": (v1/*: any*/)
  },
  "params": {
    "cacheID": "2e24f7b00adf1a2ef76d49f11b648e97",
    "id": null,
    "metadata": {},
    "name": "CardDeleteMutation",
    "operationKind": "mutation",
    "text": "mutation CardDeleteMutation(\n  $id: ID!\n) {\n  deleteCard(cardId: $id) {\n    id\n    position\n  }\n}\n"
  }
};
})();

(node as any).hash = "03b1bf962b9e5f4ca995fa57386d3d5c";

export default node;
