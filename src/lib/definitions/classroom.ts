import { graphql } from "lib/generated"

export const classroomsQuery = graphql(`
  query Classrooms {
    classrooms {
      id
      age
      name
      children {
        id
        firstName
        lastName
        sex
        status
      }
      employees {
        id
        firstName
        lastName
      }
    }
  }
`)
