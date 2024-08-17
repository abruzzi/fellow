/**
 * @generated SignedSource<<8a0cc73723a39707e71770918c787dc9>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type UserContextFragment$data = {
  readonly avatarUrl: string | null | undefined;
  readonly email: string;
  readonly id: string;
  readonly name: string | null | undefined;
  readonly " $fragmentType": "UserContextFragment";
};
export type UserContextFragment$key = {
  readonly " $data"?: UserContextFragment$data;
  readonly " $fragmentSpreads": FragmentRefs<"UserContextFragment">;
};

const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "UserContextFragment",
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

(node as any).hash = "641f5ddf205d3e55e0b951eba59441ab";

export default node;
