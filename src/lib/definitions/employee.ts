import { graphql } from "lib/graphql"

export const employeesQuery = graphql(`
  query Employees {
    employees {
      id
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

export const employeesMonthly = graphql(`
  query EmployeeMonthly($input: RecordsQueryInput!) {
    employeesMonthly(input: $input) {
      employee {
        id
        name
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
