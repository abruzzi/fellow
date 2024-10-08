/**
 * @generated SignedSource<<20cb6687c4a9e2186c741e40b0c7224d>>
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
  readonly name: string;
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
      "name": "name",
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

(node as any).hash = "94d022657cf0d08307496fb908fc77b9";

export default node;
