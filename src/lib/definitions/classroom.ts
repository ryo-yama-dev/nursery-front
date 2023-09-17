import { graphql } from "lib/graphql"

export const classroomsQuery = graphql(`
  query Classrooms {
    classrooms {
      age
      name
    }
  }
`)
