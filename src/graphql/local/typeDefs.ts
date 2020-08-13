import { gql } from "@apollo/client";

export const typeDefs = gql`
  extend type Pokemon {
    isFavorite: Boolean!
  }
`;

export default typeDefs;
