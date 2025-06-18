import parameters, {
  CardDetailsModalQuery,
} from "./__generated__/CardDetailsModalQuery.graphql.ts";
import { EntryPoint } from "react-relay";

type EntryPointProps = {
  cardId: string;
};

let cachedModule: any | null = null;

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
  getPreloadProps({ cardId }: EntryPointProps) {
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

