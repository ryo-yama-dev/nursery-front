"use client"

import { Dayjs } from "dayjs"
import {
  DateCalendar as Comp,
  DateCalendarProps as Props,
} from "@mui/x-date-pickers/DateCalendar"

export interface DateCalendarProps extends Props<Dayjs> {}

export const DateCalendar = (props: DateCalendarProps) => <Comp {...props} />
