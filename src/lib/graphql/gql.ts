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
  "\n  query Classrooms {\n    classrooms {\n      age\n      name\n    }\n  }\n":
    types.ClassroomsDocument,
  "\n  query Employees {\n    employees {\n      id\n      authId\n      name\n      sex\n      belong\n      classroomId\n      createdAt\n      updatedAt\n      job {\n        id\n        name\n        rank\n      }\n      profiles {\n        id\n        headline\n      }\n    }\n  }\n":
    types.EmployeesDocument,
  "\n  query EmployeeMonthly($input: RecordsQueryInput!) {\n    employeesMonthly(input: $input) {\n      employee {\n        id\n        name\n      }\n      records {\n        id\n        date\n        attendTime\n        leaveTime\n        note\n        edited\n        employeeId\n      }\n    }\n  }\n":
    types.EmployeeMonthlyDocument,
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
  source: "\n  query Classrooms {\n    classrooms {\n      age\n      name\n    }\n  }\n",
): (typeof documents)["\n  query Classrooms {\n    classrooms {\n      age\n      name\n    }\n  }\n"]
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: "\n  query Employees {\n    employees {\n      id\n      authId\n      name\n      sex\n      belong\n      classroomId\n      createdAt\n      updatedAt\n      job {\n        id\n        name\n        rank\n      }\n      profiles {\n        id\n        headline\n      }\n    }\n  }\n",
): (typeof documents)["\n  query Employees {\n    employees {\n      id\n      authId\n      name\n      sex\n      belong\n      classroomId\n      createdAt\n      updatedAt\n      job {\n        id\n        name\n        rank\n      }\n      profiles {\n        id\n        headline\n      }\n    }\n  }\n"]
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: "\n  query EmployeeMonthly($input: RecordsQueryInput!) {\n    employeesMonthly(input: $input) {\n      employee {\n        id\n        name\n      }\n      records {\n        id\n        date\n        attendTime\n        leaveTime\n        note\n        edited\n        employeeId\n      }\n    }\n  }\n",
): (typeof documents)["\n  query EmployeeMonthly($input: RecordsQueryInput!) {\n    employeesMonthly(input: $input) {\n      employee {\n        id\n        name\n      }\n      records {\n        id\n        date\n        attendTime\n        leaveTime\n        note\n        edited\n        employeeId\n      }\n    }\n  }\n"]

export function graphql(source: string) {
  return (documents as any)[source] ?? {}
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> =
  TDocumentNode extends DocumentNode<infer TType, any> ? TType : never
