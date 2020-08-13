import { ApolloClient, InMemoryCache } from "@apollo/client";
import { cache } from "./local/cache";

// initialize client to query graphql from ApolloClient
const client = new ApolloClient({
  cache,
  uri: "https://graphql-pokemon.now.sh/graphql",
  connectToDevTools: true,
});

export default client;
