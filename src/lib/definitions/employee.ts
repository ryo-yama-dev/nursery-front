import { graphql } from "lib/generated"

export const employeesQuery = graphql(`
  query Employees {
    employees {
      id
      authId
      serialNumber
      firstName
      lastName
      sex
      belong
      classroomId
      createdAt
      updatedAt
      job {
        id
        name
        rank
      }
      profiles {
        id
        headline
      }
    }
  }
`)

export const employeesMonthly = graphql(`
  query EmployeeMonthly($input: RecordsQueryInput!) {
    employeesMonthly(input: $input) {
      employee {
        id
        firstName
        lastName
      }
      records {
        id
        date
        attendTime
        leaveTime
        note
        edited
        employeeId
      }
    }
  }
`)

export const employeeCreate = graphql(`
  mutation EmployeeCreate($input: EmployeeCreateInput!) {
    employeeCreate(input: $input) {
      id
    }
  }
`)
