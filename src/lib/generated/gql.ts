/* eslint-disable */
import * as types from "./graphql"
import { TypedDocumentNode as DocumentNode } from "@graphql-typed-document-node/core"

/**
 * Map of all GraphQL operations in the project.
 *
 * This map has several performance disadvantages:
 * 1. It is not tree-shakeable, so it will include all operations in the project.
 * 2. It is not minifiable, so the string of a GraphQL query will be multiple times inside the bundle.
 * 3. It does not support dead code elimination, so it will add unused operations.
 *
 * Therefore it is highly recommended to use the babel or swc plugin for production.
 */
const documents = {
  "\n  query Children {\n    children {\n      id\n      birthday\n      firstName\n      lastName\n      sex\n      status\n      address\n      phone\n      parent\n      createdAt\n      updatedAt\n    }\n  }\n":
    types.ChildrenDocument,
  "\n  mutation ChildCreate($input: ChildCreateInput!) {\n    childCreate(input: $input) {\n      id\n    }\n  }\n":
    types.ChildCreateDocument,
  "\n  query Classrooms {\n    classrooms {\n      id\n      age\n      name\n      children {\n        id\n        firstName\n        lastName\n        sex\n        status\n      }\n      employees {\n        id\n        firstName\n        lastName\n      }\n    }\n  }\n":
    types.ClassroomsDocument,
  "\n  query Employees($input: EmployeeFilterInput) {\n    employees(input: $input) {\n      id\n      authId\n      serialNumber\n      firstName\n      lastName\n      sex\n      birthday\n      belong\n      classroomId\n      createdAt\n      updatedAt\n      job {\n        id\n        name\n        rank\n      }\n      profiles {\n        id\n        headline\n      }\n    }\n  }\n":
    types.EmployeesDocument,
  "\n  query EmployeeMonthly($input: RecordsQueryInput!) {\n    employeesMonthly(input: $input) {\n      employee {\n        id\n        firstName\n        lastName\n      }\n      records {\n        id\n        date\n        attendTime\n        leaveTime\n        note\n        edited\n        employeeId\n      }\n    }\n  }\n":
    types.EmployeeMonthlyDocument,
  "\n  mutation EmployeeCreate($input: EmployeeCreateInput!) {\n    employeeCreate(input: $input) {\n      id\n    }\n  }\n":
    types.EmployeeCreateDocument,
  "\n  query Jobs {\n    jobs {\n      id\n      name\n      rank\n    }\n  }\n":
    types.JobsDocument,
  "\n  mutation EmployeeRecordCreate($input: EmployeeRecordCreateInput!) {\n    employeeRecordCreate(input: $input) {\n      date\n      employeeId\n    }\n  }\n":
    types.EmployeeRecordCreateDocument,
  "\n  mutation EmployeeRecordUpdate($input: EmployeeRecordUpdateInput!) {\n    employeeRecordUpdate(input: $input) {\n      date\n      employeeId\n    }\n  }\n":
    types.EmployeeRecordUpdateDocument,
}

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 *
 *
 * @example
 * ```ts
 * const query = graphql(`query GetUser($id: ID!) { user(id: $id) { name } }`);
 * ```
 *
 * The query argument is unknown!
 * Please regenerate the types.
 */
export function graphql(source: string): unknown

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: "\n  query Children {\n    children {\n      id\n      birthday\n      firstName\n      lastName\n      sex\n      status\n      address\n      phone\n      parent\n      createdAt\n      updatedAt\n    }\n  }\n",
): (typeof documents)["\n  query Children {\n    children {\n      id\n      birthday\n      firstName\n      lastName\n      sex\n      status\n      address\n      phone\n      parent\n      createdAt\n      updatedAt\n    }\n  }\n"]
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: "\n  mutation ChildCreate($input: ChildCreateInput!) {\n    childCreate(input: $input) {\n      id\n    }\n  }\n",
): (typeof documents)["\n  mutation ChildCreate($input: ChildCreateInput!) {\n    childCreate(input: $input) {\n      id\n    }\n  }\n"]
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: "\n  query Classrooms {\n    classrooms {\n      id\n      age\n      name\n      children {\n        id\n        firstName\n        lastName\n        sex\n        status\n      }\n      employees {\n        id\n        firstName\n        lastName\n      }\n    }\n  }\n",
): (typeof documents)["\n  query Classrooms {\n    classrooms {\n      id\n      age\n      name\n      children {\n        id\n        firstName\n        lastName\n        sex\n        status\n      }\n      employees {\n        id\n        firstName\n        lastName\n      }\n    }\n  }\n"]
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: "\n  query Employees($input: EmployeeFilterInput) {\n    employees(input: $input) {\n      id\n      authId\n      serialNumber\n      firstName\n      lastName\n      sex\n      birthday\n      belong\n      classroomId\n      createdAt\n      updatedAt\n      job {\n        id\n        name\n        rank\n      }\n      profiles {\n        id\n        headline\n      }\n    }\n  }\n",
): (typeof documents)["\n  query Employees($input: EmployeeFilterInput) {\n    employees(input: $input) {\n      id\n      authId\n      serialNumber\n      firstName\n      lastName\n      sex\n      birthday\n      belong\n      classroomId\n      createdAt\n      updatedAt\n      job {\n        id\n        name\n        rank\n      }\n      profiles {\n        id\n        headline\n      }\n    }\n  }\n"]
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: "\n  query EmployeeMonthly($input: RecordsQueryInput!) {\n    employeesMonthly(input: $input) {\n      employee {\n        id\n        firstName\n        lastName\n      }\n      records {\n        id\n        date\n        attendTime\n        leaveTime\n        note\n        edited\n        employeeId\n      }\n    }\n  }\n",
): (typeof documents)["\n  query EmployeeMonthly($input: RecordsQueryInput!) {\n    employeesMonthly(input: $input) {\n      employee {\n        id\n        firstName\n        lastName\n      }\n      records {\n        id\n        date\n        attendTime\n        leaveTime\n        note\n        edited\n        employeeId\n      }\n    }\n  }\n"]
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: "\n  mutation EmployeeCreate($input: EmployeeCreateInput!) {\n    employeeCreate(input: $input) {\n      id\n    }\n  }\n",
): (typeof documents)["\n  mutation EmployeeCreate($input: EmployeeCreateInput!) {\n    employeeCreate(input: $input) {\n      id\n    }\n  }\n"]
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: "\n  query Jobs {\n    jobs {\n      id\n      name\n      rank\n    }\n  }\n",
): (typeof documents)["\n  query Jobs {\n    jobs {\n      id\n      name\n      rank\n    }\n  }\n"]
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: "\n  mutation EmployeeRecordCreate($input: EmployeeRecordCreateInput!) {\n    employeeRecordCreate(input: $input) {\n      date\n      employeeId\n    }\n  }\n",
): (typeof documents)["\n  mutation EmployeeRecordCreate($input: EmployeeRecordCreateInput!) {\n    employeeRecordCreate(input: $input) {\n      date\n      employeeId\n    }\n  }\n"]
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: "\n  mutation EmployeeRecordUpdate($input: EmployeeRecordUpdateInput!) {\n    employeeRecordUpdate(input: $input) {\n      date\n      employeeId\n    }\n  }\n",
): (typeof documents)["\n  mutation EmployeeRecordUpdate($input: EmployeeRecordUpdateInput!) {\n    employeeRecordUpdate(input: $input) {\n      date\n      employeeId\n    }\n  }\n"]

export function graphql(source: string) {
  return (documents as any)[source] ?? {}
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> =
  TDocumentNode extends DocumentNode<infer TType, any> ? TType : never
