import clsx from "clsx"

export const TileButton = <T extends string>({
  value,
  onClick,
  disabled,
  color,
  bgColor,
  borderColor,
  hoverColor,
  hoverBgColor,
  hoverBorderColor,
  width,
  height,
  className,
  children,
}: {
  value: T
  onClick: (value: T) => void
  disabled?: boolean | undefined
  color?: string
  bgColor?: string
  borderColor?: string
  hoverColor?: string
  hoverBgColor?: string
  hoverBorderColor?: string
  width?: string
  height?: string
  className?: string
  children: React.ReactNode
}) => {
  return (
    <button
      value={value}
      onClick={() => onClick(value)}
      className={clsx(
        `h-[${height}] w-[${width}]`,
        "rounded-md border",
        `text-[${color ? color : "black"}] hover:text-[${
          hoverColor ? hoverColor : "gray"
        }] `,
        `bg-[${bgColor ? bgColor : "white"}] hover:bg-[${
          hoverBgColor ? hoverBgColor : "gray"
        }]`,
        `border-[${borderColor ? borderColor : "black"}] hover:border-[${
          hoverBorderColor ? hoverBorderColor : "gray"
        }]`,
        className,
      )}
      style={{ cursor: disabled ? "not-allowed" : "pointer" }}
      disabled={disabled}
    >
      {children}
    </button>
  )
}
