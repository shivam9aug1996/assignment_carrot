import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";

export const client = new ApolloClient({
  uri: "https://swapi-graphql.netlify.app/.netlify/functions/index",
  cache: new InMemoryCache()
});
