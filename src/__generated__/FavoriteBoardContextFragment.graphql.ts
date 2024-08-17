/**
 * @generated SignedSource<<48316287c061651388040c599c47cce5>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type FavoriteBoardContextFragment$data = {
  readonly favoriteBoards: ReadonlyArray<{
    readonly id: string;
    readonly " $fragmentSpreads": FragmentRefs<"BoardSettingsFragment">;
  } | null | undefined>;
  readonly " $fragmentType": "FavoriteBoardContextFragment";
};
export type FavoriteBoardContextFragment$key = {
  readonly " $data"?: FavoriteBoardContextFragment$data;
  readonly " $fragmentSpreads": FragmentRefs<"FavoriteBoardContextFragment">;
};

const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "FavoriteBoardContextFragment",
  "selections": [
    {
      "alias": null,
      "args": null,
      "concreteType": "Board",
      "kind": "LinkedField",
      "name": "favoriteBoards",
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

(node as any).hash = "ee23e5432c5bc29d7a86bde361a098aa";

export default node;
