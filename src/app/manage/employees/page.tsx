"use client"

import { useCallback, useState } from "react"
import { useQuery, useMutation } from "@apollo/client"
import {
  Button,
  Paper,
  Table,
  TableBody,
  TableHead,
  TableRow,
  TableCell,
  TableContainer,
} from "components/common"
import { EmployeeCreateDialog } from "components/manage"
import { employeesQuery, employeeCreate, jobsQuery } from "lib/definitions"
import { EmployeeCreateInput, Job } from "lib/graphql"

export default function EmployeesPage() {
  const [isOpen, setIsOpen] = useState<boolean>(false)
  const { data, loading, error, refetch } = useQuery(employeesQuery)
  const { data: jobData } = useQuery(jobsQuery)
  const [onCreate] = useMutation(employeeCreate)

  const handleCreate = useCallback(
    async (input: EmployeeCreateInput) => {
      const { data } = await onCreate({ variables: { input } })
      if (data?.employeeCreate?.id) refetch()
    },
    [onCreate, refetch],
  )

  if (loading) return <div>loading...</div>
  if (error)
    return (
      <div>
        {error.name}:{error.message}
      </div>
    )

  return (
    <div>
      <p className="mb-2 text-2xl">従業員一覧</p>
      <Button onClick={() => setIsOpen(true)}>従業員を追加</Button>
      <EmployeeCreateDialog
        isOpen={isOpen}
        jobs={jobData ? (jobData.jobs as Job[]) : []}
        onClose={() => setIsOpen(false)}
        handleCreate={handleCreate}
      />
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>名前</TableCell>
              <TableCell>ID</TableCell>
              <TableCell>性別</TableCell>
              <TableCell>職級</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data?.employees.map((employee) => (
              <TableRow key={employee.id}>
                <TableCell>{employee.name}</TableCell>
                <TableCell>{employee.authId}</TableCell>
                <TableCell>{employee.sex === "MALE" ? "男" : "女"}</TableCell>
                <TableCell>{employee.job.name}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  )
}
