import Comp, { PaperProps as Props } from "@mui/material/Paper"

export interface PaperProps extends Props {}

export const Paper = (props: PaperProps) => <Comp {...props} />
