/**
 * @generated SignedSource<<adf65a287f16748ea18ff09173fc7ab6>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type SimpleCardCreationFragment$data = {
  readonly id: string;
  readonly " $fragmentType": "SimpleCardCreationFragment";
};
export type SimpleCardCreationFragment$key = {
  readonly " $data"?: SimpleCardCreationFragment$data;
  readonly " $fragmentSpreads": FragmentRefs<"SimpleCardCreationFragment">;
};

const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "SimpleCardCreationFragment",
  "selections": [
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "id",
      "storageKey": null
    }
  ],
  "type": "Column",
  "abstractKey": null
};

(node as any).hash = "def920f74017d152647e534cc96fe84c";

export default node;
