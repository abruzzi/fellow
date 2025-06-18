/**
 * @generated SignedSource<<d72dcb605bd6bc512b5c7580b05927a6>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Mutation } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type ColumnMoveCardMutation$variables = {
  cardId: string;
  targetColumnId: string;
  targetPosition: number;
};
export type ColumnMoveCardMutation$data = {
  readonly moveCard: {
    readonly " $fragmentSpreads": FragmentRefs<"BoardFragment">;
  };
};
export type ColumnMoveCardMutation = {
  response: ColumnMoveCardMutation$data;
  variables: ColumnMoveCardMutation$variables;
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
    "name": "targetColumnId"
  },
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "targetPosition"
  }
],
v1 = [
  {
    "kind": "Variable",
    "name": "cardId",
    "variableName": "cardId"
  },
  {
    "kind": "Variable",
    "name": "targetColumnId",
    "variableName": "targetColumnId"
  },
  {
    "kind": "Variable",
    "name": "targetPosition",
    "variableName": "targetPosition"
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
  "name": "name",
  "storageKey": null
},
v4 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "imageUrl",
  "storageKey": null
},
v5 = {
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
    "name": "ColumnMoveCardMutation",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": "Board",
        "kind": "LinkedField",
        "name": "moveCard",
        "plural": false,
        "selections": [
          {
            "args": null,
            "kind": "FragmentSpread",
            "name": "BoardFragment"
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
    "name": "ColumnMoveCardMutation",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": "Board",
        "kind": "LinkedField",
        "name": "moveCard",
        "plural": false,
        "selections": [
          (v2/*: any*/),
          (v3/*: any*/),
          (v4/*: any*/),
          {
            "alias": null,
            "args": null,
            "concreteType": "Column",
            "kind": "LinkedField",
            "name": "columns",
            "plural": true,
            "selections": [
              (v2/*: any*/),
              (v3/*: any*/),
              (v5/*: any*/),
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
                  (v5/*: any*/),
                  (v4/*: any*/),
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
        ],
        "storageKey": null
      }
    ]
  },
  "params": {
    "cacheID": "e083cc3b9c5ebf36a66b019876b31c58",
    "id": null,
    "metadata": {},
    "name": "ColumnMoveCardMutation",
    "operationKind": "mutation",
    "text": "mutation ColumnMoveCardMutation(\n  $cardId: ID!\n  $targetColumnId: ID!\n  $targetPosition: Int!\n) {\n  moveCard(cardId: $cardId, targetColumnId: $targetColumnId, targetPosition: $targetPosition) {\n    ...BoardFragment\n    id\n  }\n}\n\nfragment BoardFragment on Board {\n  id\n  name\n  imageUrl\n  columns {\n    id\n    ...ColumnFragment\n  }\n  ...BoardSettingsFragment\n}\n\nfragment BoardSettingsFragment on Board {\n  id\n  name\n  imageUrl\n}\n\nfragment CardEditorFragment on Card {\n  id\n  title\n  description\n  imageUrl\n}\n\nfragment CardFragment on Card {\n  id\n  title\n  description\n  position\n  imageUrl\n  column {\n    id\n  }\n  ...CardEditorFragment\n}\n\nfragment ColumnFragment on Column {\n  id\n  name\n  position\n  cards {\n    id\n    ...CardFragment\n  }\n  ...SimpleCardCreationFragment\n}\n\nfragment SimpleCardCreationFragment on Column {\n  id\n}\n"
  }
};
})();

(node as any).hash = "480700471dcd613d96b4f9c19ca0e3c3";

export default node;
