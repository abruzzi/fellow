/**
 * @generated SignedSource<<c06291c059ae50b9cc75f90ca27b68a2>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type BoardListScreenFragment$data = {
  readonly boards: ReadonlyArray<{
    readonly id: string;
    readonly " $fragmentSpreads": FragmentRefs<"BoardSettingsFragment">;
  }>;
  readonly " $fragmentType": "BoardListScreenFragment";
};
export type BoardListScreenFragment$key = {
  readonly " $data"?: BoardListScreenFragment$data;
  readonly " $fragmentSpreads": FragmentRefs<"BoardListScreenFragment">;
};

const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "BoardListScreenFragment",
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
          "alias": null,
          "args": null,
          "kind": "ScalarField",
          "name": "id",
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
  "type": "Viewer",
  "abstractKey": null
};

(node as any).hash = "08d48a5e3cda7adee02d038f0a5285f4";

export default node;
