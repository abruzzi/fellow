/**
 * @generated SignedSource<<273564a0682978d9777e86e7ac20a2a5>>
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
  "name": "title"
},
v3 = [
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
      (v2/*: any*/)
    ],
    "kind": "Fragment",
    "metadata": null,
    "name": "CardEditorUpdateMutation",
    "selections": (v3/*: any*/),
    "type": "Mutation",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [
      (v1/*: any*/),
      (v2/*: any*/),
      (v0/*: any*/)
    ],
    "kind": "Operation",
    "name": "CardEditorUpdateMutation",
    "selections": (v3/*: any*/)
  },
  "params": {
    "cacheID": "84f963b71920dd0248a2fbc405ae9a68",
    "id": null,
    "metadata": {},
    "name": "CardEditorUpdateMutation",
    "operationKind": "mutation",
    "text": "mutation CardEditorUpdateMutation(\n  $id: ID!\n  $title: String!\n  $description: String!\n) {\n  updateCard(cardId: $id, title: $title, description: $description) {\n    id\n    position\n  }\n}\n"
  }
};
})();

(node as any).hash = "b8539aaa520f362fb58f5e0690d9aefc";

export default node;
