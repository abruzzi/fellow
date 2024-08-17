/**
 * @generated SignedSource<<09a02677bd26aa4ed987e97feb4e7622>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type SimpleBoardListFragment$data = {
  readonly boards: ReadonlyArray<{
    readonly id: string;
    readonly " $fragmentSpreads": FragmentRefs<"BoardSettingsFragment">;
  }>;
  readonly collaborateBoards: ReadonlyArray<{
    readonly id: string;
    readonly " $fragmentSpreads": FragmentRefs<"BoardSettingsFragment">;
  } | null | undefined>;
  readonly " $fragmentType": "SimpleBoardListFragment";
};
export type SimpleBoardListFragment$key = {
  readonly " $data"?: SimpleBoardListFragment$data;
  readonly " $fragmentSpreads": FragmentRefs<"SimpleBoardListFragment">;
};

const node: ReaderFragment = (function(){
var v0 = [
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
];
return {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "SimpleBoardListFragment",
  "selections": [
    {
      "alias": null,
      "args": null,
      "concreteType": "Board",
      "kind": "LinkedField",
      "name": "collaborateBoards",
      "plural": true,
      "selections": (v0/*: any*/),
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "concreteType": "Board",
      "kind": "LinkedField",
      "name": "boards",
      "plural": true,
      "selections": (v0/*: any*/),
      "storageKey": null
    }
  ],
  "type": "Viewer",
  "abstractKey": null
};
})();

(node as any).hash = "77df1df5f46ef47906fb902ddfa6e9b1";

export default node;
