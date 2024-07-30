/**
 * @generated SignedSource<<1b0867535b087775725e564b6b9e8c1b>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Mutation } from 'relay-runtime';
export type CardEditorUpdateTitleMutation$variables = {
  cardId: string;
  title: string;
};
export type CardEditorUpdateTitleMutation$data = {
  readonly updateCardTitle: {
    readonly id: string;
    readonly title: string;
  };
};
export type CardEditorUpdateTitleMutation = {
  response: CardEditorUpdateTitleMutation$data;
  variables: CardEditorUpdateTitleMutation$variables;
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
    "name": "title"
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
        "name": "title",
        "variableName": "title"
      }
    ],
    "concreteType": "Card",
    "kind": "LinkedField",
    "name": "updateCardTitle",
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
    "name": "CardEditorUpdateTitleMutation",
    "selections": (v1/*: any*/),
    "type": "Mutation",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "CardEditorUpdateTitleMutation",
    "selections": (v1/*: any*/)
  },
  "params": {
    "cacheID": "0369ab125d90011fbaab893ad258ed42",
    "id": null,
    "metadata": {},
    "name": "CardEditorUpdateTitleMutation",
    "operationKind": "mutation",
    "text": "mutation CardEditorUpdateTitleMutation(\n  $cardId: ID!\n  $title: String!\n) {\n  updateCardTitle(cardId: $cardId, title: $title) {\n    id\n    title\n  }\n}\n"
  }
};
})();

(node as any).hash = "ee2ad2a8c7ebc9bf12021ad9094196d2";

export default node;
