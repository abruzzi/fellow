/**
 * @generated SignedSource<<96ae55084e3f3973cbc69a6069e0f3f6>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type UserMenuFragment$data = {
  readonly avatarUrl: string | null | undefined;
  readonly email: string;
  readonly name: string | null | undefined;
  readonly " $fragmentType": "UserMenuFragment";
};
export type UserMenuFragment$key = {
  readonly " $data"?: UserMenuFragment$data;
  readonly " $fragmentSpreads": FragmentRefs<"UserMenuFragment">;
};

const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "UserMenuFragment",
  "selections": [
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
      "name": "email",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "avatarUrl",
      "storageKey": null
    }
  ],
  "type": "User",
  "abstractKey": null
};

(node as any).hash = "2f9296ff3eba7488e80675ec9d79486f";

export default node;
