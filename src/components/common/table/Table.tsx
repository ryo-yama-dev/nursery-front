import Comp, { TableProps as Props } from "@mui/material/Table"
import Body, { TableBodyProps as BodyProps } from "@mui/material/TableBody"
import Cell, { TableCellProps as CellProps } from "@mui/material/TableCell"
import Container, {
  TableContainerProps as ContainerProps,
} from "@mui/material/TableContainer"
import Head, { TableHeadProps as HeadProps } from "@mui/material/TableHead"
import Row, { TableRowProps as RowProps } from "@mui/material/TableRow"

export interface TableProps extends Props {}
export interface TableBodyProps extends BodyProps {}
export interface TableCellProps extends CellProps {}
export interface TableContainerProps extends ContainerProps {}
export interface TableHeadProps extends HeadProps {}
export interface TableRowProps extends RowProps {}

export const Table = (props: TableProps) => <Comp {...props} />

export const TableBody = (props: TableBodyProps) => <Body {...props} />

export const TableCell = (props: TableCellProps) => <Cell {...props} />

export const TableContainer = (props: TableContainerProps) => (
  <Container {...props} />
)

export const TableHead = (props: TableHeadProps) => <Head {...props} />

export const TableRow = (props: TableRowProps) => <Row {...props} />
