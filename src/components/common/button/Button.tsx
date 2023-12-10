import Comp, { ButtonProps as Props } from "@mui/material/Button"

export interface ButtonProps extends Props {}

export const Button = ({
  variant = "outlined",
  size = "small",
  ...props
}: ButtonProps) => <Comp variant={variant} size={size} {...props} />
