/**
 * @generated SignedSource<<6dff6e46f39b9badef68311f14532eaf>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Mutation } from 'relay-runtime';
export type CommentsMutation$variables = {
  cardId: string;
  content: string;
};
export type CommentsMutation$data = {
  readonly addCommentToCard: {
    readonly content: string;
    readonly id: string;
  };
};
export type CommentsMutation = {
  response: CommentsMutation$data;
  variables: CommentsMutation$variables;
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
    "name": "CommentsMutation",
    "selections": (v1/*: any*/),
    "type": "Mutation",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "CommentsMutation",
    "selections": (v1/*: any*/)
  },
  "params": {
    "cacheID": "82112597fe756ea02c01bbf03f2d0cb3",
    "id": null,
    "metadata": {},
    "name": "CommentsMutation",
    "operationKind": "mutation",
    "text": "mutation CommentsMutation(\n  $cardId: ID!\n  $content: String!\n) {\n  addCommentToCard(cardId: $cardId, content: $content) {\n    id\n    content\n  }\n}\n"
  }
};
})();

(node as any).hash = "16fbac0923f1e47b525b2aadbc6a2ff7";

export default node;
