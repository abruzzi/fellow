/**
 * @generated SignedSource<<ac6e80be06bd22abd6301d6a6671d23b>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Mutation } from 'relay-runtime';
export type ColumnSimpleCardMutation$variables = {
  columnId: string;
  title: string;
};
export type ColumnSimpleCardMutation$data = {
  readonly createSimpleCard: {
    readonly id: string;
    readonly title: string;
  };
};
export type ColumnSimpleCardMutation = {
  response: ColumnSimpleCardMutation$data;
  variables: ColumnSimpleCardMutation$variables;
};

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "columnId"
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
        "name": "columnId",
        "variableName": "columnId"
      },
      {
        "kind": "Variable",
        "name": "title",
        "variableName": "title"
      }
    ],
    "concreteType": "Card",
    "kind": "LinkedField",
    "name": "createSimpleCard",
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
    "name": "ColumnSimpleCardMutation",
    "selections": (v1/*: any*/),
    "type": "Mutation",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "ColumnSimpleCardMutation",
    "selections": (v1/*: any*/)
  },
  "params": {
    "cacheID": "2b08888f88df7663c849db5cd27bfb85",
    "id": null,
    "metadata": {},
    "name": "ColumnSimpleCardMutation",
    "operationKind": "mutation",
    "text": "mutation ColumnSimpleCardMutation(\n  $columnId: ID!\n  $title: String!\n) {\n  createSimpleCard(columnId: $columnId, title: $title) {\n    id\n    title\n  }\n}\n"
  }
};
})();

(node as any).hash = "92ca6e241d72f384bda6e8792230a5f8";

export default node;
