/**
 * @generated SignedSource<<3b653b2bcc2a15e43be8033a337ec883>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type CardEditorFragment$data = {
  readonly comments: ReadonlyArray<{
    readonly content: string;
    readonly id: string;
  }>;
  readonly " $fragmentSpreads": FragmentRefs<"CardFragment">;
  readonly " $fragmentType": "CardEditorFragment";
};
export type CardEditorFragment$key = {
  readonly " $data"?: CardEditorFragment$data;
  readonly " $fragmentSpreads": FragmentRefs<"CardEditorFragment">;
};

const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "CardEditorFragment",
  "selections": [
    {
      "args": null,
      "kind": "FragmentSpread",
      "name": "CardFragment"
    },
    {
      "alias": null,
      "args": null,
      "concreteType": "Comment",
      "kind": "LinkedField",
      "name": "comments",
      "plural": true,
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
          "name": "content",
          "storageKey": null
        }
      ],
      "storageKey": null
    }
  ],
  "type": "Card",
  "abstractKey": null
};

(node as any).hash = "80ea0be9494d9790c70d8eee410714f8";

export default node;
