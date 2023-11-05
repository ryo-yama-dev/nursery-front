/* eslint-disable */
import { TypedDocumentNode as DocumentNode } from "@graphql-typed-document-node/core"
export type Maybe<T> = T | null
export type InputMaybe<T> = Maybe<T>
export type Exact<T extends { [key: string]: unknown }> = {
  [K in keyof T]: T[K]
}
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]?: Maybe<T[SubKey]>
}
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]: Maybe<T[SubKey]>
}
export type MakeEmpty<
  T extends { [key: string]: unknown },
  K extends keyof T,
> = { [_ in K]?: never }
export type Incremental<T> =
  | T
  | {
      [P in keyof T]?: P extends " $fragmentName" | "__typename" ? T[P] : never
    }
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string }
  String: { input: string; output: string }
  Boolean: { input: boolean; output: boolean }
  Int: { input: number; output: number }
  Float: { input: number; output: number }
  /** Date (isoformat) */
  Date: { input: any; output: any }
  /** Date with time (isoformat) */
  DateTime: { input: any; output: any }
  /** Time (isoformat) */
  Time: { input: any; output: any }
}

/** 園児 */
export type Child = Timestamp & {
  __typename?: "Child"
  address: Scalars["String"]["output"]
  age: Scalars["Int"]["output"]
  classroomId?: Maybe<Scalars["Int"]["output"]>
  createdAt: Scalars["DateTime"]["output"]
  id: Scalars["Int"]["output"]
  name: Scalars["String"]["output"]
  parent: Scalars["String"]["output"]
  phone: Scalars["String"]["output"]
  sex: Scalars["String"]["output"]
  updatedAt: Scalars["DateTime"]["output"]
}

export type ChildCreateInput = {
  address: Scalars["String"]["input"]
  age: Scalars["Int"]["input"]
  classroomId?: InputMaybe<Scalars["Int"]["input"]>
  name: Scalars["String"]["input"]
  parent: Scalars["String"]["input"]
  phone: Scalars["String"]["input"]
  sex: Sex
}

/** 子供組 */
export type Classroom = {
  __typename?: "Classroom"
  age: Scalars["Int"]["output"]
  children: Array<Child>
  employees: Array<Employee>
  id: Scalars["Int"]["output"]
  name: Scalars["String"]["output"]
}

export type ClassroomCreateInput = {
  age: Scalars["Int"]["input"]
  childIds?: InputMaybe<Array<Scalars["Int"]["input"]>>
  employeeIds?: InputMaybe<Array<Scalars["Int"]["input"]>>
  name: Scalars["String"]["input"]
}

/** 従業員 */
export type Employee = Timestamp & {
  __typename?: "Employee"
  authId?: Maybe<Scalars["String"]["output"]>
  belong: Scalars["Boolean"]["output"]
  classroomId?: Maybe<Scalars["Int"]["output"]>
  createdAt: Scalars["DateTime"]["output"]
  id: Scalars["Int"]["output"]
  job: Job
  jobId: Scalars["Int"]["output"]
  name: Scalars["String"]["output"]
  profiles?: Maybe<Array<Profile>>
  sex: Scalars["String"]["output"]
  updatedAt: Scalars["DateTime"]["output"]
}

export type EmployeeCreateInput = {
  belong: Scalars["Boolean"]["input"]
  jobId: Scalars["Int"]["input"]
  name: Scalars["String"]["input"]
  profiles?: InputMaybe<Array<ProfileInput>>
  sex: Sex
}

/** 従業員記録 */
export type EmployeeRecord = Record & {
  __typename?: "EmployeeRecord"
  attendTime: Scalars["Time"]["output"]
  date: Scalars["Date"]["output"]
  edited: Scalars["Boolean"]["output"]
  employeeId: Scalars["Int"]["output"]
  id: Scalars["Int"]["output"]
  leaveTime: Scalars["Time"]["output"]
  note: Scalars["String"]["output"]
}

export type EmployeeRecordCreateInput = {
  attendTime: Scalars["Time"]["input"]
  date: Scalars["Date"]["input"]
  employeeId: Scalars["Int"]["input"]
  leaveTime: Scalars["Time"]["input"]
}

export type EmployeeRecordDaily = {
  __typename?: "EmployeeRecordDaily"
  employee: Employee
  records: Array<Maybe<EmployeeRecord>>
}

/** 職級 */
export type Job = Timestamp & {
  __typename?: "Job"
  createdAt: Scalars["DateTime"]["output"]
  id: Scalars["Int"]["output"]
  name: Scalars["String"]["output"]
  rank: Scalars["Int"]["output"]
  updatedAt: Scalars["DateTime"]["output"]
}

/** 職級の新規作成用 input */
export type JobCreateInput = {
  name: Scalars["String"]["input"]
  rank: Scalars["Int"]["input"]
}

export type Mutation = {
  __typename?: "Mutation"
  childCreate: Child
  classroomCreate: Classroom
  employeeCreate: Employee
  employeeRecordCreate: EmployeeRecord
  jobCreate: Job
}

export type MutationChildCreateArgs = {
  input: ChildCreateInput
}

export type MutationClassroomCreateArgs = {
  input: ClassroomCreateInput
}

export type MutationEmployeeCreateArgs = {
  input: EmployeeCreateInput
}

export type MutationEmployeeRecordCreateArgs = {
  input: EmployeeRecordCreateInput
}

export type MutationJobCreateArgs = {
  input: JobCreateInput
}

/** プロフィール */
export type Profile = {
  __typename?: "Profile"
  headline: Scalars["String"]["output"]
  id: Scalars["Int"]["output"]
  letter: Scalars["String"]["output"]
}

export type ProfileInput = {
  headline: Scalars["String"]["input"]
  id?: InputMaybe<Scalars["Int"]["input"]>
  letter?: InputMaybe<Scalars["String"]["input"]>
}

export type Query = {
  __typename?: "Query"
  /** 園児1件取得 */
  child?: Maybe<Child>
  /** 園児一覧取得 */
  children: Array<Child>
  /** 子供部屋1件取得 */
  classroom?: Maybe<Classroom>
  /** 子供部屋一覧取得 */
  classrooms: Array<Classroom>
  /** 従業員1件取得 */
  employee?: Maybe<Employee>
  /** 従業員一覧取得 */
  employees: Array<Employee>
  /** 月毎の従業員日次記録取得 */
  employeesMonthly: Array<EmployeeRecordDaily>
  /** 職級一覧取得 */
  jobs: Array<Job>
}

export type QueryChildArgs = {
  id: Scalars["Int"]["input"]
}

export type QueryClassroomArgs = {
  id: Scalars["Int"]["input"]
}

export type QueryEmployeeArgs = {
  id: Scalars["Int"]["input"]
}

export type QueryEmployeesMonthlyArgs = {
  input: RecordsQueryInput
}

/** 日次記録 */
export type Record = {
  attendTime: Scalars["Time"]["output"]
  date: Scalars["Date"]["output"]
  edited: Scalars["Boolean"]["output"]
  id: Scalars["Int"]["output"]
  leaveTime: Scalars["Time"]["output"]
  note: Scalars["String"]["output"]
}

export type RecordsQueryInput = {
  month: Scalars["Int"]["input"]
  week?: InputMaybe<Scalars["Int"]["input"]>
  year: Scalars["Int"]["input"]
}

/** 性別 */
export enum Sex {
  Female = "FEMALE",
  Male = "MALE",
}

/** タイムスタンプ */
export type Timestamp = {
  createdAt: Scalars["DateTime"]["output"]
  updatedAt: Scalars["DateTime"]["output"]
}

export type ClassroomsQueryVariables = Exact<{ [key: string]: never }>

export type ClassroomsQuery = {
  __typename?: "Query"
  classrooms: Array<{ __typename?: "Classroom"; age: number; name: string }>
}

export type EmployeesQueryVariables = Exact<{ [key: string]: never }>

export type EmployeesQuery = {
  __typename?: "Query"
  employees: Array<{
    __typename?: "Employee"
    id: number
    name: string
    belong: boolean
    sex: string
    profiles?: Array<{
      __typename?: "Profile"
      id: number
      headline: string
    }> | null
  }>
}

export type EmployeeMonthlyQueryVariables = Exact<{
  input: RecordsQueryInput
}>

export type EmployeeMonthlyQuery = {
  __typename?: "Query"
  employeesMonthly: Array<{
    __typename?: "EmployeeRecordDaily"
    employee: { __typename?: "Employee"; id: number; name: string }
    records: Array<{
      __typename?: "EmployeeRecord"
      id: number
      date: any
      attendTime: any
      leaveTime: any
      note: string
      edited: boolean
      employeeId: number
    } | null>
  }>
}

export const ClassroomsDocument = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "query",
      name: { kind: "Name", value: "Classrooms" },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "classrooms" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                { kind: "Field", name: { kind: "Name", value: "age" } },
                { kind: "Field", name: { kind: "Name", value: "name" } },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<ClassroomsQuery, ClassroomsQueryVariables>
export const EmployeesDocument = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "query",
      name: { kind: "Name", value: "Employees" },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "employees" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                { kind: "Field", name: { kind: "Name", value: "id" } },
                { kind: "Field", name: { kind: "Name", value: "name" } },
                { kind: "Field", name: { kind: "Name", value: "belong" } },
                { kind: "Field", name: { kind: "Name", value: "sex" } },
                {
                  kind: "Field",
                  name: { kind: "Name", value: "profiles" },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      { kind: "Field", name: { kind: "Name", value: "id" } },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "headline" },
                      },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<EmployeesQuery, EmployeesQueryVariables>
export const EmployeeMonthlyDocument = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "query",
      name: { kind: "Name", value: "EmployeeMonthly" },
      variableDefinitions: [
        {
          kind: "VariableDefinition",
          variable: {
            kind: "Variable",
            name: { kind: "Name", value: "input" },
          },
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: { kind: "Name", value: "RecordsQueryInput" },
            },
          },
        },
      ],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "employeesMonthly" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "input" },
                value: {
                  kind: "Variable",
                  name: { kind: "Name", value: "input" },
                },
              },
            ],
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                {
                  kind: "Field",
                  name: { kind: "Name", value: "employee" },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      { kind: "Field", name: { kind: "Name", value: "id" } },
                      { kind: "Field", name: { kind: "Name", value: "name" } },
                    ],
                  },
                },
                {
                  kind: "Field",
                  name: { kind: "Name", value: "records" },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      { kind: "Field", name: { kind: "Name", value: "id" } },
                      { kind: "Field", name: { kind: "Name", value: "date" } },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "attendTime" },
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "leaveTime" },
                      },
                      { kind: "Field", name: { kind: "Name", value: "note" } },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "edited" },
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "employeeId" },
                      },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<
  EmployeeMonthlyQuery,
  EmployeeMonthlyQueryVariables
>
