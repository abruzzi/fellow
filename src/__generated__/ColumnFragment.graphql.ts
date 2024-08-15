/**
 * @generated SignedSource<<0015c47a178f12338c54353771375eec>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type ColumnFragment$data = {
  readonly cards: ReadonlyArray<{
    readonly id: string;
    readonly " $fragmentSpreads": FragmentRefs<"CardFragment">;
  }>;
  readonly id: string;
  readonly name: string;
  readonly position: number;
  readonly " $fragmentSpreads": FragmentRefs<"SimpleCardCreationFragment">;
  readonly " $fragmentType": "ColumnFragment";
};
export type ColumnFragment$key = {
  readonly " $data"?: ColumnFragment$data;
  readonly " $fragmentSpreads": FragmentRefs<"ColumnFragment">;
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
  "name": "ColumnFragment",
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
      "name": "position",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "concreteType": "Card",
      "kind": "LinkedField",
      "name": "cards",
      "plural": true,
      "selections": [
        (v0/*: any*/),
        {
          "args": null,
          "kind": "FragmentSpread",
          "name": "CardFragment"
        }
      ],
      "storageKey": null
    },
    {
      "args": null,
      "kind": "FragmentSpread",
      "name": "SimpleCardCreationFragment"
    }
  ],
  "type": "Column",
  "abstractKey": null
};
})();

(node as any).hash = "2b98c25686522cb3cb6c2fe46b5412a2";

export default node;
