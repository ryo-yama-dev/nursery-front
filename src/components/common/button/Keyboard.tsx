import { memo } from "react"
import { Button } from "./Button"

export const Keyboard = memo(
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
