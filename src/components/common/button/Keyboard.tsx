import { memo } from "react"
import { Button } from "./Button"

export const Keyboard = memo(
  ({
    handleClick,
    handleRemove,
  }: {
    handleClick: (value: string) => void
    handleRemove: () => void
  }) => (
    <div className="grid grid-cols-3 gap-1">
      {["1", "2", "3", "4", "5", "6", "7", "8", "9"].map((value) => (
        <Button
          key={value}
          sx={{ width: "8rem", height: "8rem", fontSize: "2rem" }}
          onClick={() => handleClick(value)}
        >
          {value}
        </Button>
      ))}
      <Button
        sx={{ width: "8rem", height: "8rem", fontSize: "2rem" }}
        onClick={handleRemove}
      >
        ×
      </Button>
      <Button
        sx={{ width: "8rem", height: "8rem", fontSize: "2rem" }}
        onClick={() => handleClick("0")}
      >
        0
      </Button>
      <Button
        sx={{ width: "8rem", height: "8rem", fontSize: "2rem" }}
        onClick={() => handleClick("#")}
      >
        #
      </Button>
    </div>
  ),
)

Keyboard.displayName = "Keyboard"
