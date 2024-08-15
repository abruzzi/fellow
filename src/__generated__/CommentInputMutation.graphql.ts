/**
 * @generated SignedSource<<11abdfbae223c5386a254ca3e6770f6c>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Mutation } from 'relay-runtime';
export type CommentInputMutation$variables = {
  cardId: string;
  content: string;
};
export type CommentInputMutation$data = {
  readonly addCommentToCard: {
    readonly content: string;
    readonly id: string;
  };
};
export type CommentInputMutation = {
  response: CommentInputMutation$data;
  variables: CommentInputMutation$variables;
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
    "name": "CommentInputMutation",
    "selections": (v1/*: any*/),
    "type": "Mutation",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "CommentInputMutation",
    "selections": (v1/*: any*/)
  },
  "params": {
    "cacheID": "e087da366c6fcfad617646675a87c274",
    "id": null,
    "metadata": {},
    "name": "CommentInputMutation",
    "operationKind": "mutation",
    "text": "mutation CommentInputMutation(\n  $cardId: ID!\n  $content: String!\n) {\n  addCommentToCard(cardId: $cardId, content: $content) {\n    id\n    content\n  }\n}\n"
  }
};
})();

(node as any).hash = "88133eff88098736d0d4ef1b1d406583";

export default node;
