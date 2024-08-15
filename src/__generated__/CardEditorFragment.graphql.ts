/**
 * @generated SignedSource<<04c394b65fc4336755f3e78d2b00295f>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type CardEditorFragment$data = {
  readonly description: string;
  readonly id: string;
  readonly imageUrl: string | null | undefined;
  readonly title: string;
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
      "name": "imageUrl",
      "storageKey": null
    }
  ],
  "type": "Card",
  "abstractKey": null
};

(node as any).hash = "c8a701639a17e4a928adf2c0b09c3c83";

export default node;
