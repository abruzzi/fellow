/**
 * @generated SignedSource<<159691e46966a2332b586a3183509632>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Mutation } from 'relay-runtime';
export type CardEditorAddCommentMutation$variables = {
  cardId: string;
  content: string;
};
export type CardEditorAddCommentMutation$data = {
  readonly addCommentToCard: {
    readonly content: string;
    readonly id: string;
  };
};
export type CardEditorAddCommentMutation = {
  response: CardEditorAddCommentMutation$data;
  variables: CardEditorAddCommentMutation$variables;
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
    "name": "content"
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
        "name": "content",
        "variableName": "content"
      }
    ],
    "concreteType": "Comment",
    "kind": "LinkedField",
    "name": "addCommentToCard",
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
        "name": "content",
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
    "name": "CardEditorAddCommentMutation",
    "selections": (v1/*: any*/),
    "type": "Mutation",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "CardEditorAddCommentMutation",
    "selections": (v1/*: any*/)
  },
  "params": {
    "cacheID": "78127411c5eb4d0312e89cd2f453edde",
    "id": null,
    "metadata": {},
    "name": "CardEditorAddCommentMutation",
    "operationKind": "mutation",
    "text": "mutation CardEditorAddCommentMutation(\n  $cardId: ID!\n  $content: String!\n) {\n  addCommentToCard(cardId: $cardId, content: $content) {\n    id\n    content\n  }\n}\n"
  }
};
})();

(node as any).hash = "3429f1b4d39acb4b673c386740dbf71f";

export default node;
