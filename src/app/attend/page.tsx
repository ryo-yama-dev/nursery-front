"use client"

import { useEffect, useState, useCallback } from "react"
import { useMutation, useLazyQuery } from "@apollo/client"
import dayjs from "dayjs"
import { Button } from "components/common"
import { SerialInputBoard } from "components/attend"
import {
  employeeRecordCreate,
  employeeRecordUpdate,
  employeesQuery,
} from "lib/definitions"
import {
  Employee,
  EmployeeRecordCreateInput,
  EmployeeFilterInput,
} from "lib/generated/graphql"

/*
TODO:
- 現在時刻を表示
- 現在時刻表示を秒単位で更新
- 数字を入力するためのキーボードボタンを用意
- 勤怠登録用Mutationを定義
*/

const activeColor = "#A5DEE4"
const disabledColor = "#BDC0BA"

export default function AttendPage() {
  const [time, setTime] = useState<dayjs.Dayjs>(dayjs())
  const [onCreate] = useMutation(employeeRecordCreate)
  const [getEmployees, { data, loading, error }] = useLazyQuery(employeesQuery)

  const handleGetEmployees = useCallback(
    async (input: EmployeeFilterInput) => {
      const { data } = await getEmployees({ variables: { input: input } })
      return data
    },
    [getEmployees],
  )

  const handleCreate = useCallback(
    async (input: EmployeeRecordCreateInput) => {
      const { data } = await onCreate({ variables: { input } })
      if (data?.employeeRecordCreate?.date) console.log("success")
    },
    [onCreate],
  )

  const [switched, setSwitched] = useState<string>("1")
  const handleSwitch = (value: string) => setSwitched(value)

  useEffect(() => {
    const interval = setInterval(() => setTime(dayjs()), 1000)
    return () => clearInterval(interval)
  }, [time])

  return (
    <div className="p-2">
      <div className="text-3xl">勤怠登録</div>
      <div className="flex items-start justify-evenly">
        <div className="flex items-center">
          <Button
            sx={{
              width: "8rem",
              height: "6rem",
              backgroundColor: switched === "1" ? activeColor : disabledColor,
            }}
            onClick={() => handleSwitch("1")}
          >
            出勤
          </Button>
          <Button
            sx={{
              width: "8rem",
              height: "6rem",
              backgroundColor: switched === "2" ? activeColor : disabledColor,
            }}
            onClick={() => handleSwitch("2")}
          >
            退勤
          </Button>
        </div>
        <div className="flex items-start space-x-2 text-5xl">
          <span className="w-14">{time.format("HH")}</span>
          <span>:</span>
          <span className="w-14">{time.format("mm")}</span>
          <span>:</span>
          <span className="w-14">{time.format("ss")}</span>
        </div>
      </div>
      <SerialInputBoard
        handleCreate={handleCreate}
        handleGetEmployees={handleGetEmployees}
      />
    </div>
  )
}
