import { gql } from "@apollo/client";
import { IsFavoriteFragment } from "../fragments/favorite";

export const GET_CITY_BY_NAME = gql`
  query getCityByName($name: String!) {
    getCityByName(name: $name) {
      id
      name
      country
      weather {
        temperature {
          actual
          feelsLike
          min
          max
        }
      }
      ...IsFavorite
    }
  }
  ${IsFavoriteFragment}
`;
