/**
 * @generated SignedSource<<e4ea780dd728a50803b20a2c7b7a20d9>>
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
    readonly " $fragmentSpreads": FragmentRefs<"CardFragment">;
  }>;
  readonly id: string;
  readonly name: string;
  readonly position: number;
  readonly " $fragmentType": "ColumnFragment";
};
export type ColumnFragment$key = {
  readonly " $data"?: ColumnFragment$data;
  readonly " $fragmentSpreads": FragmentRefs<"ColumnFragment">;
};

const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "ColumnFragment",
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
        {
          "args": null,
          "kind": "FragmentSpread",
          "name": "CardFragment"
        }
      ],
      "storageKey": null
    }
  ],
  "type": "Column",
  "abstractKey": null
};

(node as any).hash = "f6fa29b5a9c0b5b42968d5f3c639e73d";

export default node;
