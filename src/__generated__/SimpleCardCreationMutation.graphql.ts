/**
 * @generated SignedSource<<f01c3d061d5a61f7a1d688a5fc591fd6>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Mutation } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type SimpleCardCreationMutation$variables = {
  columnId: string;
  title: string;
};
export type SimpleCardCreationMutation$data = {
  readonly createSimpleCard: {
    readonly " $fragmentSpreads": FragmentRefs<"ColumnFragment">;
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
  "name": "position",
  "storageKey": null
},
v5 = [
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
    "name": "SimpleCardCreationMutation",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": "Column",
        "kind": "LinkedField",
        "name": "createSimpleCard",
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
    "name": "SimpleCardCreationMutation",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": "Column",
        "kind": "LinkedField",
        "name": "createSimpleCard",
        "plural": false,
        "selections": [
          (v2/*: any*/),
          (v3/*: any*/),
          (v4/*: any*/),
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
              (v4/*: any*/),
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
                "args": (v5/*: any*/),
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
                              (v3/*: any*/),
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
                "args": (v5/*: any*/),
                "filters": null,
                "handle": "connection",
                "key": "CommentsFragment_comments",
                "kind": "LinkedHandle",
                "name": "comments"
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
    "cacheID": "d8752051f0eac00231a4663058df62ca",
    "id": null,
    "metadata": {},
    "name": "SimpleCardCreationMutation",
    "operationKind": "mutation",
    "text": "mutation SimpleCardCreationMutation(\n  $columnId: ID!\n  $title: String!\n) {\n  createSimpleCard(columnId: $columnId, title: $title) {\n    ...ColumnFragment\n    id\n  }\n}\n\nfragment CardEditorFragment on Card {\n  id\n  title\n  description\n  imageUrl\n}\n\nfragment CardFragment on Card {\n  id\n  title\n  description\n  position\n  imageUrl\n  column {\n    id\n  }\n  ...CommentsFragment\n  ...CardEditorFragment\n}\n\nfragment ColumnFragment on Column {\n  id\n  name\n  position\n  cards {\n    id\n    ...CardFragment\n  }\n  ...SimpleCardCreationFragment\n}\n\nfragment CommentFragment on Comment {\n  id\n  content\n  updatedAt\n  user {\n    id\n    name\n    avatarUrl\n  }\n}\n\nfragment CommentInputFragment on Card {\n  id\n}\n\nfragment CommentsFragment on Card {\n  comments(first: 3) {\n    edges {\n      node {\n        id\n        ...CommentFragment\n        __typename\n      }\n      cursor\n    }\n    pageInfo {\n      hasNextPage\n      endCursor\n    }\n  }\n  ...CommentInputFragment\n  id\n}\n\nfragment SimpleCardCreationFragment on Column {\n  id\n}\n"
  }
};
})();

(node as any).hash = "621dd7c00df2ecf4c612641bff0a7906";

export default node;
