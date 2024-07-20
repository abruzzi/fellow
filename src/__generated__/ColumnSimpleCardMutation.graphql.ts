/**
 * @generated SignedSource<<7bd7cdc2180fbc23cae2aee025479881>>
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
    readonly column: {
      readonly id: string;
    };
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
v1 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "id",
  "storageKey": null
},
v2 = [
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
      (v1/*: any*/),
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
        "concreteType": "Column",
        "kind": "LinkedField",
        "name": "column",
        "plural": false,
        "selections": [
          (v1/*: any*/)
        ],
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
    "selections": (v2/*: any*/),
    "type": "Mutation",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "ColumnSimpleCardMutation",
    "selections": (v2/*: any*/)
  },
  "params": {
    "cacheID": "3faa673efe1752fb3f60bb32730cda18",
    "id": null,
    "metadata": {},
    "name": "ColumnSimpleCardMutation",
    "operationKind": "mutation",
    "text": "mutation ColumnSimpleCardMutation(\n  $columnId: ID!\n  $title: String!\n) {\n  createSimpleCard(columnId: $columnId, title: $title) {\n    id\n    title\n    column {\n      id\n    }\n  }\n}\n"
  }
};
})();

(node as any).hash = "3c18d3744ba05b12cb3ebe4c31800f20";

export default node;
