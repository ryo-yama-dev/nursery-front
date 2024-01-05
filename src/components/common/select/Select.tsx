import Comp, { SelectProps as Props } from "@mui/material/Select"
import Option, { MenuItemProps as MenuProps } from "@mui/material/MenuItem"

export interface SelectProps extends Props {}

export interface MenuItemProps extends MenuProps {}

export const Select = (props: SelectProps) => <Comp {...props} />

export const MenuItem = (props: MenuItemProps) => <Option {...props} />
