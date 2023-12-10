"use client"

import { useState } from "react"
import Link from "next/link"
import { useQuery } from "@apollo/client"
import dayjs from "dayjs"
import { ArrowBackIos, ArrowForwardIos } from "@mui/icons-material"
import { Button, DailyRecord, DateList } from "components/common"
import { employeesMonthly } from "lib/definitions"

/*
TODO:
- 従業員名のリンクにカーソルオーバーした時の色変更
- 従業員情報と勤怠マークの左右中央揃え
- 年月部分をクリックしての年月選択モーダル
*/

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
    <div className="m-2 h-full w-full">
      <div>
        <p className="mb-2 text-2xl">従業員管理</p>
        <div className="flex items-center space-x-2">
          <Button size="medium" onClick={() => onChange(false)}>
            <ArrowBackIos />
          </Button>
          <p className="rounded-md p-1 text-lg outline outline-1">
            {target.format("YYYY年MM月")}
          </p>
          <Button size="medium" onClick={() => onChange(true)}>
            <ArrowForwardIos />
          </Button>
        </div>
      </div>
      <div className="ml-4 flex items-start">
        <div className="mr-2">
          <p>日 \ 名</p>
          <DateList year={target.year()} month={target.month()} />
        </div>
        {data?.employeesMonthly.map(({ employee, records }, i) => (
          <div key={i} className="flex flex-col px-2">
            <Link href={`/employee/${employee.id}`}>{employee.name}</Link>
            {records?.map((record, i) => (
              <DailyRecord key={i} record={record} />
            ))}
          </div>
        ))}
      </div>
    </div>
  )
}
