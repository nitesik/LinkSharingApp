import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { client } from "@/graphql";
import { ApolloProvider } from "@apollo/client";

//@ts-ignore
global.performance = global.performance || {
  now: () => new Date().getTime(),
};

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ApolloProvider client={client}>
      <Component {...pageProps} />
    </ApolloProvider>
  );
}
