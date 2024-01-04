import { graphql } from "lib/graphql"

export const jobsQuery = graphql(`
  query Jobs {
    jobs {
      id
      name
      rank
    }
  }
`)
