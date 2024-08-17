/**
 * @generated SignedSource<<21baf2c954a228974398d2a965f393b0>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type BoardsFragment$data = {
  readonly boards: ReadonlyArray<{
    readonly " $fragmentSpreads": FragmentRefs<"BoardSettingsFragment">;
  }>;
  readonly " $fragmentType": "BoardsFragment";
};
export type BoardsFragment$key = {
  readonly " $data"?: BoardsFragment$data;
  readonly " $fragmentSpreads": FragmentRefs<"BoardsFragment">;
};

const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "BoardsFragment",
  "selections": [
    {
      "alias": null,
      "args": null,
      "concreteType": "Board",
      "kind": "LinkedField",
      "name": "boards",
      "plural": true,
      "selections": [
        {
          "args": null,
          "kind": "FragmentSpread",
          "name": "BoardSettingsFragment"
        }
      ],
      "storageKey": null
    }
  ],
  "type": "Viewer",
  "abstractKey": null
};

(node as any).hash = "24a061aca196678573b44d7028d01665";

export default node;
