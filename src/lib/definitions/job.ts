import { graphql } from "lib/generated"

export const jobsQuery = graphql(`
  query Jobs {
    jobs {
      id
      name
      rank
    }
  }
`)
