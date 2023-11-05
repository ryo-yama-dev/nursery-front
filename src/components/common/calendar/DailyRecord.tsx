import { EmployeeRecord } from "lib/graphql/graphql"

const MARK = {
  NOT_RECORDED: "x",
  ATTEND: "*",
  LEAVE: "○",
  FUTURE: "-",
} as const

export const DailyRecord = ({ record }: { record: EmployeeRecord | null }) => {
  if (!record) {
    return <p>{MARK.NOT_RECORDED}</p>
  }
  if (record.attendTime && !record.leaveTime) {
    return <p>{MARK.ATTEND}</p>
  }
  if (record.attendTime && record.leaveTime) {
    return <p>{MARK.LEAVE}</p>
  }
  return <p>{MARK.FUTURE}</p>
}
