"use client"

import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider as Provider,
} from "@apollo/client"

const client = new ApolloClient({
  uri: `http://localhost:8080/graphql`,
  cache: new InMemoryCache(),
})

export const ApolloProvider = ({ children }: { children: React.ReactNode }) => {
  return <Provider client={client}>{children}</Provider>
}
