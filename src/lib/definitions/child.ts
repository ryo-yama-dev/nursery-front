import { graphql } from "lib/generated"

export const childrenQuery = graphql(`
  query Children {
    children {
      id
      birthday
      firstName
      lastName
      sex
      status
      address
      phone
      parent
      createdAt
      updatedAt
    }
  }
`)

export const childCreate = graphql(`
  mutation ChildCreate($input: ChildCreateInput!) {
    childCreate(input: $input) {
      id
    }
  }
`)
