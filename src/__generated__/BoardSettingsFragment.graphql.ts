/**
 * @generated SignedSource<<50e1a37b9165089a7f3223a4dc980131>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type BoardSettingsFragment$data = {
  readonly id: string;
  readonly imageUrl: string | null | undefined;
  readonly " $fragmentType": "BoardSettingsFragment";
};
export type BoardSettingsFragment$key = {
  readonly " $data"?: BoardSettingsFragment$data;
  readonly " $fragmentSpreads": FragmentRefs<"BoardSettingsFragment">;
};

const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "BoardSettingsFragment",
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
      "name": "imageUrl",
      "storageKey": null
    }
  ],
  "type": "Board",
  "abstractKey": null
};

(node as any).hash = "eb302836b4f4954f2a0dd196a56d85ff";

export default node;
