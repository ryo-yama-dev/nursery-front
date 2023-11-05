import dayjs from "dayjs"

export interface DateList {
  year: number
  month: number
}

const WEEKLY_JP = ["日", "月", "火", "水", "木", "金", "土"] as const

const WeekDay = ({ date }: { date: dayjs.Dayjs }) => {
  const week = WEEKLY_JP[date.day()]
  const color =
    week === "日" ? "text-red-500" : week === "土" ? "text-blue-500" : "black"
  return (
    <div className="flex items-center">
      <p className="w-6">{date.date()}</p>
      <p className={color + " px-1"}>{`(${week})`}</p>
    </div>
  )
}

// 横一列に日付を並ばせ、その下に従業員の勤怠を表示する
export const DateList = ({ year, month }: DateList) => {
  const days = Array(dayjs(`${year}-${month}-01`).daysInMonth())
    .fill(null)
    .map((_, i) => {
      return dayjs(`${year}-${month}-${i + 1}`)
    })

  return (
    <div className="flex flex-col px-2">
      {days.map((date, i) => (
        <WeekDay key={i} date={date} />
      ))}
    </div>
  )
}
