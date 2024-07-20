/**
 * @generated SignedSource<<10b69c8b0565125eb825ea2174655390>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Mutation } from 'relay-runtime';
export type SimpleCardCreationMutation$variables = {
  columnId: string;
  title: string;
};
export type SimpleCardCreationMutation$data = {
  readonly createSimpleCard: {
    readonly id: string;
    readonly title: string;
  };
};
export type SimpleCardCreationMutation = {
  response: SimpleCardCreationMutation$data;
  variables: SimpleCardCreationMutation$variables;
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
    "name": "SimpleCardCreationMutation",
    "selections": (v1/*: any*/),
    "type": "Mutation",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "SimpleCardCreationMutation",
    "selections": (v1/*: any*/)
  },
  "params": {
    "cacheID": "f3d30c3ed1264f0be4d3ea0faf63a0f1",
    "id": null,
    "metadata": {},
    "name": "SimpleCardCreationMutation",
    "operationKind": "mutation",
    "text": "mutation SimpleCardCreationMutation(\n  $columnId: ID!\n  $title: String!\n) {\n  createSimpleCard(columnId: $columnId, title: $title) {\n    id\n    title\n  }\n}\n"
  }
};
})();

(node as any).hash = "e12a48013e64373bb570c3624237ef6a";

export default node;
