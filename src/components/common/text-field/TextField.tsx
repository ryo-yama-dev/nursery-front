import Comp, {
  OutlinedTextFieldProps as Props,
  TextFieldVariants,
} from "@mui/material/TextField"

export interface TextFieldProps extends Omit<Props, "variant"> {
  variant?: TextFieldVariants
}

export const TextField = ({
  variant = "outlined",
  ...props
}: TextFieldProps) => <Comp variant={variant} {...props} />
