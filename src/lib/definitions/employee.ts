import { graphql } from "lib/graphql"

export const employeesQuery = graphql(`
  query Employees {
    employees {
      name
      belong
      sex
      profiles {
        id
        headline
      }
    }
  }
`)
