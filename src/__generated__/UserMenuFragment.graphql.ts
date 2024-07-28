/**
 * @generated SignedSource<<739e254bb603e96125d88ed2bf3c1290>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type UserMenuFragment$data = {
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
    }
  ],
  "type": "User",
  "abstractKey": null
};

(node as any).hash = "41e3edf6c3317cf3af2c4ea3f81cd3d2";

export default node;
