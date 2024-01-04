"use client"

import { useEffect, useState, memo, useCallback } from "react"
import dayjs from "dayjs"
import { Button, TextField } from "components/common"

/*
TODO:
- 現在時刻を表示
- 現在時刻表示を秒単位で更新
- 数字を入力するためのキーボードボタンを用意
- 勤怠登録用Mutationを定義
*/

const Keyboard = memo(
  ({ handleClick }: { handleClick: (value: string) => void }) => (
    <div className="grid grid-cols-3 gap-1">
      {["1", "2", "3", "4", "5", "6", "7", "8", "9"].map((value) => (
        <Button
          key={value}
          sx={{ width: "8rem", height: "8rem" }}
          onClick={() => handleClick(value)}
        >
          {value}
        </Button>
      ))}
    </div>
  ),
)

Keyboard.displayName = "Keyboard"

const activeColor = "#A5DEE4"
const disabledColor = "#BDC0BA"

export default function AttendPage() {
  const [time, setTime] = useState<dayjs.Dayjs>(dayjs())
  const [authId, setAuthId] = useState<string>("")

  const handleAdd = useCallback(
    (value: string) => setAuthId(authId + value),
    [authId],
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
      <div className="mt-4 flex items-start justify-between">
        <TextField value={authId} disabled />
        <Keyboard handleClick={handleAdd} />
      </div>
    </div>
  )
}
