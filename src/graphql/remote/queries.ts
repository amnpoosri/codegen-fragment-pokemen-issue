import { gql } from "@apollo/client";
import { IsFavoriteFragment } from "../fragments/favorite";

export const GET_POKEMON = gql`
  query GetPokemon($name: String) {
    pokemon(name: $name) {
      id
      name
      ...IsFavorite
    }
  }
  ${IsFavoriteFragment}
`;
