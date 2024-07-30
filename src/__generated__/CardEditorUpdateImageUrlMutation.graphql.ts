/**
 * @generated SignedSource<<6f347f295ff8e181d17e31f2aa6b46e4>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Mutation } from 'relay-runtime';
export type CardEditorUpdateImageUrlMutation$variables = {
  cardId: string;
  imageUrl: string;
};
export type CardEditorUpdateImageUrlMutation$data = {
  readonly updateCardImageUrl: {
    readonly id: string;
    readonly imageUrl: string | null | undefined;
  };
};
export type CardEditorUpdateImageUrlMutation = {
  response: CardEditorUpdateImageUrlMutation$data;
  variables: CardEditorUpdateImageUrlMutation$variables;
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
    "name": "imageUrl"
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
        "name": "imageUrl",
        "variableName": "imageUrl"
      }
    ],
    "concreteType": "Card",
    "kind": "LinkedField",
    "name": "updateCardImageUrl",
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
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "CardEditorUpdateImageUrlMutation",
    "selections": (v1/*: any*/),
    "type": "Mutation",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "CardEditorUpdateImageUrlMutation",
    "selections": (v1/*: any*/)
  },
  "params": {
    "cacheID": "ca4c4fce535a17cda6ea02f004287a53",
    "id": null,
    "metadata": {},
    "name": "CardEditorUpdateImageUrlMutation",
    "operationKind": "mutation",
    "text": "mutation CardEditorUpdateImageUrlMutation(\n  $cardId: ID!\n  $imageUrl: String!\n) {\n  updateCardImageUrl(cardId: $cardId, imageUrl: $imageUrl) {\n    id\n    imageUrl\n  }\n}\n"
  }
};
})();

(node as any).hash = "5fcc19e7b71a7df271972512367c79d4";

export default node;
