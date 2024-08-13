/**
 * @generated SignedSource<<1e005c06718677549229cb3d1aa368f9>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment, RefetchableFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type BoardSettingsFragment$data = {
  readonly id: string;
  readonly imageUrl: string | null | undefined;
  readonly " $fragmentType": "BoardSettingsFragment";
};
export type BoardSettingsFragment$key = {
  readonly " $data"?: BoardSettingsFragment$data;
  readonly " $fragmentSpreads": FragmentRefs<"BoardSettingsFragment">;
};

import BoardSettingsRefetchQuery_graphql from './BoardSettingsRefetchQuery.graphql';

const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": {
    "refetch": {
      "connection": null,
      "fragmentPathInResult": [
        "node"
      ],
      "operation": BoardSettingsRefetchQuery_graphql,
      "identifierInfo": {
        "identifierField": "id",
        "identifierQueryVariableName": "id"
      }
    }
  },
  "name": "BoardSettingsFragment",
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
      "name": "imageUrl",
      "storageKey": null
    }
  ],
  "type": "Board",
  "abstractKey": null
};

(node as any).hash = "9716a628be3739adf02b41b63dfcbf2b";

export default node;
