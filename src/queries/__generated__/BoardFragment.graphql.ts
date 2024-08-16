/**
 * @generated SignedSource<<03dd2874e597894c6fff5058ed2f19e1>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type BoardFragment$data = {
  readonly columns: ReadonlyArray<{
    readonly id: string;
    readonly " $fragmentSpreads": FragmentRefs<"ColumnFragment">;
  }>;
  readonly id: string;
  readonly imageUrl: string | null | undefined;
  readonly name: string;
  readonly " $fragmentSpreads": FragmentRefs<"BoardSettingsFragment">;
  readonly " $fragmentType": "BoardFragment";
};
export type BoardFragment$key = {
  readonly " $data"?: BoardFragment$data;
  readonly " $fragmentSpreads": FragmentRefs<"BoardFragment">;
};

const node: ReaderFragment = (function(){
var v0 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "id",
  "storageKey": null
};
return {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "BoardFragment",
  "selections": [
    (v0/*: any*/),
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
    },
    {
      "alias": null,
      "args": null,
      "concreteType": "Column",
      "kind": "LinkedField",
      "name": "columns",
      "plural": true,
      "selections": [
        (v0/*: any*/),
        {
          "args": null,
          "kind": "FragmentSpread",
          "name": "ColumnFragment"
        }
      ],
      "storageKey": null
    },
    {
      "args": null,
      "kind": "FragmentSpread",
      "name": "BoardSettingsFragment"
    }
  ],
  "type": "Board",
  "abstractKey": null
};
})();

(node as any).hash = "b039fec764a58e3665ce2879c19a160d";

export default node;
