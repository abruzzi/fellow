/**
 * @generated SignedSource<<59539dbf38105a312d826d19f936b7a1>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type CardEditorFragment$data = {
  readonly comments: ReadonlyArray<{
    readonly content: string;
    readonly id: string;
  }>;
  readonly description: string;
  readonly id: string;
  readonly imageUrl: string | null | undefined;
  readonly title: string;
  readonly " $fragmentType": "CardEditorFragment";
};
export type CardEditorFragment$key = {
  readonly " $data"?: CardEditorFragment$data;
  readonly " $fragmentSpreads": FragmentRefs<"CardEditorFragment">;
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
  "name": "CardEditorFragment",
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
      "name": "imageUrl",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "concreteType": "Comment",
      "kind": "LinkedField",
      "name": "comments",
      "plural": true,
      "selections": [
        (v0/*: any*/),
        {
          "alias": null,
          "args": null,
          "kind": "ScalarField",
          "name": "content",
          "storageKey": null
        }
      ],
      "storageKey": null
    }
  ],
  "type": "Card",
  "abstractKey": null
};
})();

(node as any).hash = "d893a72ec922925faff8dd036e1ea0e3";

export default node;
