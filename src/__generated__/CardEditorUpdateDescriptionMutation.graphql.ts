/**
 * @generated SignedSource<<c77d89da9399572d59c7a6129c4d2ab3>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Mutation } from 'relay-runtime';
export type CardEditorUpdateDescriptionMutation$variables = {
  cardId: string;
  description: string;
};
export type CardEditorUpdateDescriptionMutation$data = {
  readonly updateCardDescription: {
    readonly description: string;
    readonly id: string;
  };
};
export type CardEditorUpdateDescriptionMutation = {
  response: CardEditorUpdateDescriptionMutation$data;
  variables: CardEditorUpdateDescriptionMutation$variables;
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
    "name": "description"
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
        "name": "description",
        "variableName": "description"
      }
    ],
    "concreteType": "Card",
    "kind": "LinkedField",
    "name": "updateCardDescription",
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
        "name": "description",
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
    "name": "CardEditorUpdateDescriptionMutation",
    "selections": (v1/*: any*/),
    "type": "Mutation",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "CardEditorUpdateDescriptionMutation",
    "selections": (v1/*: any*/)
  },
  "params": {
    "cacheID": "d981baab5e2568d39194255c2f1b27d6",
    "id": null,
    "metadata": {},
    "name": "CardEditorUpdateDescriptionMutation",
    "operationKind": "mutation",
    "text": "mutation CardEditorUpdateDescriptionMutation(\n  $cardId: ID!\n  $description: String!\n) {\n  updateCardDescription(cardId: $cardId, description: $description) {\n    id\n    description\n  }\n}\n"
  }
};
})();

(node as any).hash = "a42ed61f83bd764fc89580e64f26b289";

export default node;
