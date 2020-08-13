import { gql } from "@apollo/client";

export const IsFavoriteFragment = gql`
  fragment IsFavorite on Pokemon {
    isFavorite @client
  }
`;
