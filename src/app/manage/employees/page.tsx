"use client"

import { useQuery } from "@apollo/client"
import {
  Paper,
  Table,
  TableBody,
  TableHead,
  TableRow,
  TableCell,
  TableContainer,
} from "components/common"
import { employeesQuery } from "lib/definitions"

export default function EmployeesPage() {
  const { data, loading, error, refetch } = useQuery(employeesQuery)

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
                <TableCell>{employee.job.rank}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  )
}
