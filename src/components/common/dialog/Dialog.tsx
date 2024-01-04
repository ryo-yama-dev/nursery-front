import Comp, { DialogProps as Props } from "@mui/material/Dialog"
import Actions, {
  DialogActionsProps as ActionsProps,
} from "@mui/material/DialogActions"
import Content, {
  DialogContentProps as ContentProps,
} from "@mui/material/DialogContent"
import ContentText, {
  DialogContentTextProps as ContentTextProps,
} from "@mui/material/DialogContentText"
import Title, {
  DialogTitleProps as TitleProps,
} from "@mui/material/DialogTitle"

export interface DialogProps extends Props {}
export interface DialogActionsProps extends ActionsProps {}
export interface DialogContentProps extends ContentProps {}
export interface DialogContentTextProps extends ContentTextProps {}
export interface DialogTitleProps extends TitleProps {}

export const Dialog = (props: DialogProps) => <Comp {...props} />
export const DialogActions = (props: DialogActionsProps) => (
  <Actions {...props} />
)
export const DialogContent = (props: DialogContentProps) => (
  <Content {...props} />
)
export const DialogContentText = (props: DialogContentTextProps) => (
  <ContentText {...props} />
)
export const DialogTitle = (props: DialogTitleProps) => <Title {...props} />
