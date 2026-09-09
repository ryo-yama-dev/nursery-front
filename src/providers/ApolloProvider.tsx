"use client"

import { ApolloClient, InMemoryCache } from "@apollo/client"
import { ApolloProvider as Provider } from "@apollo/client/react"
import { HttpLink } from "@apollo/client/link/http"

const client = new ApolloClient({
  link: new HttpLink({ uri: `http://localhost:8080/graphql` }),
  cache: new InMemoryCache(),
})

export const ApolloProvider = ({ children }: { children: React.ReactNode }) => {
  return <Provider client={client}>{children}</Provider>
}
