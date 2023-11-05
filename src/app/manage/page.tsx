"use client"

import { useState } from "react"
import { useQuery } from "@apollo/client"
import dayjs from "dayjs"
import { Button, DailyRecord, DateList } from "components/common"
import { employeesMonthly } from "lib/definitions"

export default function ManagePage() {
  const [target, setTarget] = useState<dayjs.Dayjs>(dayjs())
  const onChange = (count: boolean) => {
    if (count) {
      setTarget(target.add(1, "month"))
    } else {
      setTarget(target.subtract(1, "month"))
    }
  }

  const { data, loading, error, refetch } = useQuery(employeesMonthly, {
    variables: { input: { year: target.year(), month: target.month() } },
  })

  if (loading) return <div>loading</div>
  if (error) return <div>error</div>
  return (
    <div>
      <div className="flex items-center">
        <p className="mb-4 text-2xl">従業員管理</p>
        <div className="flex items-center">
          <Button onClick={() => onChange(false)}>＜</Button>
          <p>{target.format("YYYY年MM月")}</p>
          <Button onClick={() => onChange(true)}>＞</Button>
        </div>
      </div>
      <div className="ml-4 flex items-start">
        <div className="mr-2">
          <p>日 \ 名</p>
          <DateList year={target.year()} month={target.month()} />
        </div>
        {data?.employeesMonthly.map(({ employee, records }, i) => (
          <div key={i} className="flex flex-col px-2">
            <p>{employee.name}</p>
            {records?.map((record, i) => (
              <DailyRecord key={i} record={record} />
            ))}
          </div>
        ))}
      </div>
    </div>
  )
}
