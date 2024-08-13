/**
 * @generated SignedSource<<5247c71e6f221c62ed85df18989d2261>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Query } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type BoardQuery$variables = {
  boardId: string;
};
export type BoardQuery$data = {
  readonly board: {
    readonly columns: ReadonlyArray<{
      readonly id: string;
      readonly position: number;
      readonly " $fragmentSpreads": FragmentRefs<"ColumnFragment">;
    }>;
    readonly id: string;
    readonly imageUrl: string | null | undefined;
    readonly name: string;
    readonly " $fragmentSpreads": FragmentRefs<"BoardSettingsFragment">;
  };
};
export type BoardQuery = {
  response: BoardQuery$data;
  variables: BoardQuery$variables;
};

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "boardId"
  }
],
v1 = [
  {
    "kind": "Variable",
    "name": "id",
    "variableName": "boardId"
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
    "name": "BoardQuery",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": "Board",
        "kind": "LinkedField",
        "name": "board",
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
              (v5/*: any*/),
              {
                "args": null,
                "kind": "FragmentSpread",
                "name": "ColumnFragment"
              }
            ],
            "storageKey": null
          },
          {
            "args": null,
            "kind": "FragmentSpread",
            "name": "BoardSettingsFragment"
          }
        ],
        "storageKey": null
      }
    ],
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "BoardQuery",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": "Board",
        "kind": "LinkedField",
        "name": "board",
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
              (v5/*: any*/),
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
                  (v5/*: any*/),
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
    "cacheID": "bf508ea6011f026c196f29b358761b4c",
    "id": null,
    "metadata": {},
    "name": "BoardQuery",
    "operationKind": "query",
    "text": "query BoardQuery(\n  $boardId: ID!\n) {\n  board(id: $boardId) {\n    id\n    name\n    imageUrl\n    columns {\n      id\n      position\n      ...ColumnFragment\n    }\n    ...BoardSettingsFragment\n  }\n}\n\nfragment BoardSettingsFragment on Board {\n  id\n  imageUrl\n}\n\nfragment CardFragment on Card {\n  id\n  title\n  description\n  position\n  imageUrl\n  column {\n    id\n  }\n}\n\nfragment ColumnFragment on Column {\n  id\n  name\n  position\n  cards {\n    id\n    position\n    ...CardFragment\n  }\n}\n"
  }
};
})();

(node as any).hash = "23b55c994fc0782b60d6769328f5539f";

export default node;
