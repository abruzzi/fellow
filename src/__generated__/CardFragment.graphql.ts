/**
 * @generated SignedSource<<d726c28dad6e707aef27bba4e1f0662d>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type CardFragment$data = {
  readonly description: string;
  readonly id: string;
  readonly position: number;
  readonly title: string;
  readonly " $fragmentType": "CardFragment";
};
export type CardFragment$key = {
  readonly " $data"?: CardFragment$data;
  readonly " $fragmentSpreads": FragmentRefs<"CardFragment">;
};

const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "CardFragment",
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
      "name": "position",
      "storageKey": null
    }
  ],
  "type": "Card",
  "abstractKey": null
};

(node as any).hash = "d971304235daccce7cbd125be91a4062";

export default node;
