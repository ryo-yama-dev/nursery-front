"use client"

import { useCallback, useState } from "react"
import dayjs from "dayjs"
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Keyboard,
  TextField,
} from "components/common"
import {
  Employee,
  EmployeeFilterInput,
  EmployeeRecordCreateInput,
  EmployeesQuery,
} from "lib/generated/graphql"

export interface SerialInputBoardProps {
  handleGetEmployees: (
    input: EmployeeFilterInput,
  ) => Promise<EmployeesQuery | undefined>
  handleCreate: (input: EmployeeRecordCreateInput) => Promise<void>
}

export const SerialInputBoard = ({
  handleCreate,
  handleGetEmployees,
}: SerialInputBoardProps) => {
  const [serialNumber, setSerialNumber] = useState<string>("")
  const [employee, setEmployee] = useState<Pick<
    Employee,
    "firstName" | "lastName" | "id"
  > | null>(null)
  const [isOpen, setIsOpen] = useState<boolean>(false)
  const handleAdd = useCallback(
    (value: string) => setSerialNumber(serialNumber + value),
    [serialNumber],
  )

  const handleOpen = useCallback(async () => {
    if (serialNumber === "") return
    const result = await handleGetEmployees({ serialNumber: serialNumber })
    if (result?.employees.length) {
      setEmployee(result.employees[0])
      setIsOpen(true)
    }
  }, [handleGetEmployees, serialNumber])

  const handleCreateRecord = useCallback(async () => {
    if (employee) {
      const time = dayjs()
      handleCreate({
        employeeId: employee.id,
        date: time.format("YYYY-MM-DD"),
        attendTime: time.format("HH:mm:ss"),
      }).then(() => setIsOpen(false))
    }
  }, [employee, handleCreate])

  return (
    <>
      <Dialog open={isOpen} onClose={() => setIsOpen(false)}>
        <DialogTitle>勤怠登録</DialogTitle>
        <DialogContent dividers>
          <DialogContentText>
            「{employee?.lastName} {employee?.firstName}」
            <br />
            登録いたしますか？
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCreateRecord}>登録</Button>
        </DialogActions>
      </Dialog>
      <div className="mt-4 flex items-start justify-evenly">
        <div className="flex items-center space-x-2">
          <TextField value={serialNumber} disabled />
          <Button
            sx={{ width: "4rem", height: "3rem", fontSize: "1rem" }}
            onClick={handleOpen}
          >
            確認
          </Button>
        </div>
        <Keyboard
          handleClick={handleAdd}
          handleRemove={() => setSerialNumber(serialNumber.slice(0, -1))}
        />
      </div>
    </>
  )
}
