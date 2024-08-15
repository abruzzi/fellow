/**
 * @generated SignedSource<<31fddf6be1c867930c9ba14b9984bd2f>>
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
    readonly " $fragmentSpreads": FragmentRefs<"CardFragment">;
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
v3 = [
  {
    "kind": "Literal",
    "name": "first",
    "value": 3
  }
];
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
        "concreteType": "Card",
        "kind": "LinkedField",
        "name": "moveCard",
        "plural": false,
        "selections": [
          {
            "args": null,
            "kind": "FragmentSpread",
            "name": "CardFragment"
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
        "concreteType": "Card",
        "kind": "LinkedField",
        "name": "moveCard",
        "plural": false,
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
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "position",
            "storageKey": null
          },
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
          },
          {
            "alias": null,
            "args": (v3/*: any*/),
            "concreteType": "CommentConnection",
            "kind": "LinkedField",
            "name": "comments",
            "plural": false,
            "selections": [
              {
                "alias": null,
                "args": null,
                "concreteType": "CommentEdge",
                "kind": "LinkedField",
                "name": "edges",
                "plural": true,
                "selections": [
                  {
                    "alias": null,
                    "args": null,
                    "concreteType": "Comment",
                    "kind": "LinkedField",
                    "name": "node",
                    "plural": false,
                    "selections": [
                      (v2/*: any*/),
                      {
                        "alias": null,
                        "args": null,
                        "kind": "ScalarField",
                        "name": "content",
                        "storageKey": null
                      },
                      {
                        "alias": null,
                        "args": null,
                        "kind": "ScalarField",
                        "name": "updatedAt",
                        "storageKey": null
                      },
                      {
                        "alias": null,
                        "args": null,
                        "concreteType": "User",
                        "kind": "LinkedField",
                        "name": "user",
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
                          {
                            "alias": null,
                            "args": null,
                            "kind": "ScalarField",
                            "name": "avatarUrl",
                            "storageKey": null
                          }
                        ],
                        "storageKey": null
                      },
                      {
                        "alias": null,
                        "args": null,
                        "kind": "ScalarField",
                        "name": "__typename",
                        "storageKey": null
                      }
                    ],
                    "storageKey": null
                  },
                  {
                    "alias": null,
                    "args": null,
                    "kind": "ScalarField",
                    "name": "cursor",
                    "storageKey": null
                  }
                ],
                "storageKey": null
              },
              {
                "alias": null,
                "args": null,
                "concreteType": "PageInfo",
                "kind": "LinkedField",
                "name": "pageInfo",
                "plural": false,
                "selections": [
                  {
                    "alias": null,
                    "args": null,
                    "kind": "ScalarField",
                    "name": "hasNextPage",
                    "storageKey": null
                  },
                  {
                    "alias": null,
                    "args": null,
                    "kind": "ScalarField",
                    "name": "endCursor",
                    "storageKey": null
                  }
                ],
                "storageKey": null
              }
            ],
            "storageKey": "comments(first:3)"
          },
          {
            "alias": null,
            "args": (v3/*: any*/),
            "filters": null,
            "handle": "connection",
            "key": "CommentsFragment_comments",
            "kind": "LinkedHandle",
            "name": "comments"
          }
        ],
        "storageKey": null
      }
    ]
  },
  "params": {
    "cacheID": "1bb978ca6c25b1ab7c453155838de86a",
    "id": null,
    "metadata": {},
    "name": "ColumnMoveCardMutation",
    "operationKind": "mutation",
    "text": "mutation ColumnMoveCardMutation(\n  $cardId: ID!\n  $targetColumnId: ID!\n  $targetPosition: Int!\n) {\n  moveCard(cardId: $cardId, targetColumnId: $targetColumnId, targetPosition: $targetPosition) {\n    ...CardFragment\n    id\n  }\n}\n\nfragment CardEditorFragment on Card {\n  id\n  title\n  description\n  imageUrl\n}\n\nfragment CardFragment on Card {\n  id\n  title\n  description\n  position\n  imageUrl\n  column {\n    id\n  }\n  ...CommentsFragment\n  ...CardEditorFragment\n}\n\nfragment CommentFragment on Comment {\n  id\n  content\n  updatedAt\n  user {\n    id\n    name\n    avatarUrl\n  }\n}\n\nfragment CommentInputFragment on Card {\n  id\n}\n\nfragment CommentsFragment on Card {\n  comments(first: 3) {\n    edges {\n      node {\n        id\n        ...CommentFragment\n        __typename\n      }\n      cursor\n    }\n    pageInfo {\n      hasNextPage\n      endCursor\n    }\n  }\n  ...CommentInputFragment\n  id\n}\n"
  }
};
})();

(node as any).hash = "9d069125d915c09f9c72e0e6976387e1";

export default node;
