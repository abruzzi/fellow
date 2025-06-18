/**
 * @generated SignedSource<<3c87e18b393d4b456cb950ef63ae1263>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Mutation } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type CardDeleteMutation$variables = {
  id: string;
};
export type CardDeleteMutation$data = {
  readonly deleteCard: {
    readonly " $fragmentSpreads": FragmentRefs<"ColumnFragment">;
  };
};
export type CardDeleteMutation = {
  response: CardDeleteMutation$data;
  variables: CardDeleteMutation$variables;
};

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "id"
  }
],
v1 = [
  {
    "kind": "Variable",
    "name": "cardId",
    "variableName": "id"
  }
],
v2 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "id",
  "storageKey": null
},
v3 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "position",
  "storageKey": null
};
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "CardDeleteMutation",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": "Column",
        "kind": "LinkedField",
        "name": "deleteCard",
        "plural": false,
        "selections": [
          {
            "args": null,
            "kind": "FragmentSpread",
            "name": "ColumnFragment"
          }
        ],
        "storageKey": null
      }
    ],
    "type": "Mutation",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "CardDeleteMutation",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": "Column",
        "kind": "LinkedField",
        "name": "deleteCard",
        "plural": false,
        "selections": [
          (v2/*: any*/),
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "name",
            "storageKey": null
          },
          (v3/*: any*/),
          {
            "alias": null,
            "args": null,
            "concreteType": "Card",
            "kind": "LinkedField",
            "name": "cards",
            "plural": true,
            "selections": [
              (v2/*: any*/),
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
                "kind": "ScalarField",
                "name": "description",
                "storageKey": null
              },
              (v3/*: any*/),
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "imageUrl",
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
                  (v2/*: any*/)
                ],
                "storageKey": null
              }
            ],
            "storageKey": null
          }
        ],
        "storageKey": null
      }
    ]
  },
  "params": {
    "cacheID": "ca45517d6c0672c5345ad45e6d3a7fbc",
    "id": null,
    "metadata": {},
    "name": "CardDeleteMutation",
    "operationKind": "mutation",
    "text": "mutation CardDeleteMutation(\n  $id: ID!\n) {\n  deleteCard(cardId: $id) {\n    ...ColumnFragment\n    id\n  }\n}\n\nfragment CardEditorFragment on Card {\n  id\n  title\n  description\n  imageUrl\n}\n\nfragment CardFragment on Card {\n  id\n  title\n  description\n  position\n  imageUrl\n  column {\n    id\n  }\n  ...CardEditorFragment\n}\n\nfragment ColumnFragment on Column {\n  id\n  name\n  position\n  cards {\n    id\n    ...CardFragment\n  }\n  ...SimpleCardCreationFragment\n}\n\nfragment SimpleCardCreationFragment on Column {\n  id\n}\n"
  }
};
})();

(node as any).hash = "ce0c3fd3ec94fdac81ddbb87bf0c0578";

export default node;
