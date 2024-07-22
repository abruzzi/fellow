/**
 * @generated SignedSource<<26b011e9114cb59353e22d77edd27773>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Mutation } from 'relay-runtime';
export type CardEditorUpdateMutation$variables = {
  description: string;
  id: string;
  imageUrl?: string | null | undefined;
  title: string;
};
export type CardEditorUpdateMutation$data = {
  readonly updateCard: {
    readonly id: string;
    readonly position: number;
  };
};
export type CardEditorUpdateMutation = {
  response: CardEditorUpdateMutation$data;
  variables: CardEditorUpdateMutation$variables;
};

const node: ConcreteRequest = (function(){
var v0 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "description"
},
v1 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "id"
},
v2 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "imageUrl"
},
v3 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "title"
},
v4 = [
  {
    "alias": null,
    "args": [
      {
        "kind": "Variable",
        "name": "cardId",
        "variableName": "id"
      },
      {
        "kind": "Variable",
        "name": "description",
        "variableName": "description"
      },
      {
        "kind": "Variable",
        "name": "imageUrl",
        "variableName": "imageUrl"
      },
      {
        "kind": "Variable",
        "name": "title",
        "variableName": "title"
      }
    ],
    "concreteType": "Card",
    "kind": "LinkedField",
    "name": "updateCard",
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
    "argumentDefinitions": [
      (v0/*: any*/),
      (v1/*: any*/),
      (v2/*: any*/),
      (v3/*: any*/)
    ],
    "kind": "Fragment",
    "metadata": null,
    "name": "CardEditorUpdateMutation",
    "selections": (v4/*: any*/),
    "type": "Mutation",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [
      (v1/*: any*/),
      (v3/*: any*/),
      (v0/*: any*/),
      (v2/*: any*/)
    ],
    "kind": "Operation",
    "name": "CardEditorUpdateMutation",
    "selections": (v4/*: any*/)
  },
  "params": {
    "cacheID": "c831aa3c9e04026a57f9f09a1c7ee6af",
    "id": null,
    "metadata": {},
    "name": "CardEditorUpdateMutation",
    "operationKind": "mutation",
    "text": "mutation CardEditorUpdateMutation(\n  $id: ID!\n  $title: String!\n  $description: String!\n  $imageUrl: String\n) {\n  updateCard(cardId: $id, title: $title, description: $description, imageUrl: $imageUrl) {\n    id\n    position\n  }\n}\n"
  }
};
})();

(node as any).hash = "1477d45dcbc60d4c167f22083c8f682c";

export default node;
