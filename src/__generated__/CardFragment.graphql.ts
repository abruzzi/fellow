/**
 * @generated SignedSource<<4f386a0f0442ecd1d8a4f4aa10515cc8>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type CardFragment$data = {
  readonly column: {
    readonly id: string;
  };
  readonly description: string;
  readonly id: string;
  readonly position: number;
  readonly title: string;
  readonly " $fragmentType": "CardFragment";
};
export type CardFragment$key = {
  readonly " $data"?: CardFragment$data;
  readonly " $fragmentSpreads": FragmentRefs<"CardFragment">;
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
  "name": "CardFragment",
  "selections": [
    (v0/*: any*/),
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "title",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "description",
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
      "concreteType": "Column",
      "kind": "LinkedField",
      "name": "column",
      "plural": false,
      "selections": [
        (v0/*: any*/)
      ],
      "storageKey": null
    }
  ],
  "type": "Card",
  "abstractKey": null
};
})();

(node as any).hash = "4e403e896c1faf57237a2e45b99e017c";

export default node;
