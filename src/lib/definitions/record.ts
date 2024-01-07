import { graphql } from "lib/generated"

export const employeeRecordCreate = graphql(`
  mutation EmployeeRecordCreate($input: EmployeeRecordCreateInput!) {
    employeeRecordCreate(input: $input) {
      date
      attendTime
      leaveTime
      employeeId
      note
      edited
    }
  }
`)

export const employeeRecordUpdate = graphql(`
  mutation EmployeeRecordUpdate($input: EmployeeRecordUpdateInput!) {
    employeeRecordUpdate(input: $input) {
      date
      attendTime
      leaveTime
      employeeId
      note
      edited
    }
  }
`)
