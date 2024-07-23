/**
 * @generated SignedSource<<b618a878ba876000017c28ba9eaa00e8>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Mutation } from 'relay-runtime';
export type CreateNewBoardMutation$variables = {
  name: string;
};
export type CreateNewBoardMutation$data = {
  readonly createBoard: {
    readonly id: string;
    readonly name: string;
  };
};
export type CreateNewBoardMutation = {
  response: CreateNewBoardMutation$data;
  variables: CreateNewBoardMutation$variables;
};

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "name"
  }
],
v1 = [
  {
    "alias": null,
    "args": [
      {
        "kind": "Variable",
        "name": "name",
        "variableName": "name"
      }
    ],
    "concreteType": "Board",
    "kind": "LinkedField",
    "name": "createBoard",
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
        "name": "name",
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
    "name": "CreateNewBoardMutation",
    "selections": (v1/*: any*/),
    "type": "Mutation",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "CreateNewBoardMutation",
    "selections": (v1/*: any*/)
  },
  "params": {
    "cacheID": "a6d8e00d7615c8f314b2d6fd3e5861ad",
    "id": null,
    "metadata": {},
    "name": "CreateNewBoardMutation",
    "operationKind": "mutation",
    "text": "mutation CreateNewBoardMutation(\n  $name: String!\n) {\n  createBoard(name: $name) {\n    id\n    name\n  }\n}\n"
  }
};
})();

(node as any).hash = "c8f2ece02ce4ccf7c51f9c9d6cf7b4c7";

export default node;
