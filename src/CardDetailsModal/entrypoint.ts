import parameters, {
  CardDetailsModalQuery,
} from "./__generated__/CardDetailsModalQuery.graphql.ts";
import { EntryPoint } from "react-relay";

export type CardDetailsEntryPointProps = {
  cardId: string;
};

let cachedModule: unknown | null = null;

const CardDetailsModalResource = {
  getModuleId: () => 'CardDetailsModal',

  getModuleIfRequired: () => {
    return cachedModule;
  },

  load: () =>
    import('./CardDetailsModal').then((mod) => {
      cachedModule = mod.default;
      return mod;
    }),
};

export const cardDetailsEntryPoint: EntryPoint<{
  cardId: string;
  queries: {
    cardDetailsQueryRef: CardDetailsModalQuery;
  };
}> = {
  getPreloadProps({ cardId }: CardDetailsEntryPointProps) {
    return {
      queries: {
        cardDetailsQueryRef: {
          parameters,
          variables: { cardId },
        },
      },
      entryPoints: {},
      extraProps: {},
    };
  },
  root: CardDetailsModalResource,
};

