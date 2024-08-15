/**
 * @generated SignedSource<<384387f4477755333e824a28dddc783c>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type CommentInputFragment$data = {
  readonly id: string;
  readonly " $fragmentType": "CommentInputFragment";
};
export type CommentInputFragment$key = {
  readonly " $data"?: CommentInputFragment$data;
  readonly " $fragmentSpreads": FragmentRefs<"CommentInputFragment">;
};

const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "CommentInputFragment",
  "selections": [
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "id",
      "storageKey": null
    }
  ],
  "type": "Card",
  "abstractKey": null
};

(node as any).hash = "9606e0ddd88fd7ff0e12c37917f566a1";

export default node;
