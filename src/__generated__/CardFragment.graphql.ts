/**
 * @generated SignedSource<<8eaa3f843742a2710af05c536a33ea13>>
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
  readonly imageUrl: string | null | undefined;
  readonly position: number;
  readonly title: string;
  readonly " $fragmentSpreads": FragmentRefs<"CardEditorFragment" | "CommentsFragment">;
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
      "kind": "ScalarField",
      "name": "imageUrl",
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
    },
    {
      "args": null,
      "kind": "FragmentSpread",
      "name": "CommentsFragment"
    },
    {
      "args": null,
      "kind": "FragmentSpread",
      "name": "CardEditorFragment"
    }
  ],
  "type": "Card",
  "abstractKey": null
};
})();

(node as any).hash = "67ebbe4ffcf01a0091e02aad59c8d246";

export default node;
