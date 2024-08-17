/**
 * @generated SignedSource<<c69518bda1fb1441018cd22b63649f8e>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type NavigationFragment$data = {
  readonly favoriteBoards: ReadonlyArray<{
    readonly id: string;
    readonly name: string;
  } | null | undefined>;
  readonly " $fragmentType": "NavigationFragment";
};
export type NavigationFragment$key = {
  readonly " $data"?: NavigationFragment$data;
  readonly " $fragmentSpreads": FragmentRefs<"NavigationFragment">;
};

const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "NavigationFragment",
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
          "alias": null,
          "args": null,
          "kind": "ScalarField",
          "name": "name",
          "storageKey": null
        }
      ],
      "storageKey": null
    }
  ],
  "type": "Viewer",
  "abstractKey": null
};

(node as any).hash = "36b4efa929d7c8db97fe9345d5a1d635";

export default node;
