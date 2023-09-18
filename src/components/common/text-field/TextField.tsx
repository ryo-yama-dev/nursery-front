import Comp, { OutlinedTextFieldProps as Props } from "@mui/material/TextField"

export interface TextFieldProps extends Props {}

export const TextField = ({
  variant = "outlined",
  ...props
}: TextFieldProps) => <Comp variant={variant} {...props} />
