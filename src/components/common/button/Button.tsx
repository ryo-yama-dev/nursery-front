import Comp, { ButtonProps as Props } from "@mui/material/Button"

export interface ButtonProps extends Props {}

export const Button = ({ variant = "outlined", ...props }: ButtonProps) => (
  <Comp variant={variant} {...props} />
)
