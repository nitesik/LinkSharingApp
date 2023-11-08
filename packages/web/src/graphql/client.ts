import { ApolloClient, InMemoryCache } from "@apollo/client";

const client = new ApolloClient({
  uri: "http://localhost:3333/graphql",
  // uri: "https://link-sharing-app-qiix.onrender.com/graphql",
  cache: new InMemoryCache({
    addTypename: false,
  }),
  credentials: "include",
});

export default client;
