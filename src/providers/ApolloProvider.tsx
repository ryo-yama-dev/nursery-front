"use client"

import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider as Provider,
} from "@apollo/client"

const client = new ApolloClient({
  uri: "https://flyby-router-demo.herokuapp.com/",
  cache: new InMemoryCache(),
})

const ApolloProvider = ({ children }: { children: React.ReactNode }) => {
  return <Provider client={client}>{children}</Provider>
}

export default ApolloProvider
