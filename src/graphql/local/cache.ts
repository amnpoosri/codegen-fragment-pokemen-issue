import { InMemoryCache } from "@apollo/client";

export const cache: InMemoryCache = new InMemoryCache({
  typePolicies: {
    Pokemon: {
      fields: {
        isFavorite: {
          read(isFavorite = false) {
            return isFavorite;
          },
        },
      },
    },
  },
});
