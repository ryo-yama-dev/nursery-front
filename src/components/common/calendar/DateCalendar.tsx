"use client"

import {
  DateCalendar as Comp,
  DateCalendarProps as Props,
} from "@mui/x-date-pickers/DateCalendar"

export interface DateCalendarProps extends Props {}

export const DateCalendar = (props: DateCalendarProps) => <Comp {...props} />
