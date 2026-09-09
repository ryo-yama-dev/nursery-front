import Comp, { SelectProps as Props } from "@mui/material/Select"
import Option, { MenuItemProps as MenuProps } from "@mui/material/MenuItem"

export type SelectProps<Value = unknown> = Props<Value>

export interface MenuItemProps extends MenuProps {}

export const Select = <Value = unknown,>(props: SelectProps<Value>) => (
  <Comp {...props} />
)

export const MenuItem = (props: MenuItemProps) => <Option {...props} />
