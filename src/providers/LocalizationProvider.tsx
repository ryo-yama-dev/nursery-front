"use client"

import { LocalizationProvider as Provider } from "@mui/x-date-pickers"
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs"

export const LocalizationProvider = ({
  children,
}: {
  children: React.ReactNode
}) => {
  return <Provider dateAdapter={AdapterDayjs}>{children}</Provider>
}
