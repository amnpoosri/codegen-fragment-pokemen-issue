import { gql } from "@apollo/client";

export const typeDefs = gql`
  extend type City {
    isFavorite: Boolean!
  }
`;

export default typeDefs;
