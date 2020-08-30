import { gql } from "@apollo/client";

export const IsFavoriteFragment = gql`
  fragment IsFavorite on City {
    isFavorite @client
  }
`;
