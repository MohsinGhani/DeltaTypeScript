import React, { useState } from "react";
import { useTheme } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableFooter from "@mui/material/TableFooter";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import IconButton from "@mui/material/IconButton";
import FirstPageIcon from "@mui/icons-material/FirstPage";
import KeyboardArrowLeft from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRight from "@mui/icons-material/KeyboardArrowRight";
import LastPageIcon from "@mui/icons-material/LastPage";
import { SelectChangeEvent, TableHead } from "@mui/material";
import { TablePaginationActionsProps } from "@mui/material/TablePagination/TablePaginationActions";




function TablePaginationActions(props: TablePaginationActionsProps) {
  const theme = useTheme();
  const { count, page, rowsPerPage, onPageChange } = props;

  const handleFirstPageButtonClick = (
    event: React.MouseEvent<HTMLButtonElement>,
  ) => {
    onPageChange(event, 0);
  };

  const handleBackButtonClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    onPageChange(event, page - 1);
  };

  const handleNextButtonClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    onPageChange(event, page + 1);
  };

  const handleLastPageButtonClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    onPageChange(event, Math.max(0, Math.ceil(count / rowsPerPage) - 1));
  };

  return (
    <div className="tableButtons">
      <IconButton
        onClick={handleFirstPageButtonClick}
        disabled={page === 0}
        aria-label="first page"
      >
        {theme.direction === 'rtl' ? <LastPageIcon /> : <FirstPageIcon />}
      </IconButton>
      <IconButton
        onClick={handleBackButtonClick}
        disabled={page === 0}
        aria-label="previous page"
      >
        {theme.direction === 'rtl' ? <KeyboardArrowRight /> : <KeyboardArrowLeft />}
      </IconButton>
      <IconButton
        onClick={handleNextButtonClick}
        disabled={page >= Math.ceil(count / rowsPerPage) - 1}
        aria-label="next page"
      >
        {theme.direction === 'rtl' ? <KeyboardArrowLeft /> : <KeyboardArrowRight />}
      </IconButton>
      <IconButton
        onClick={handleLastPageButtonClick}
        disabled={page >= Math.ceil(count / rowsPerPage) - 1}
        aria-label="last page"
      >
        {theme.direction === 'rtl' ? <FirstPageIcon /> : <LastPageIcon />}
      </IconButton>
      </div>
  );
}


function createData(insuredName : string, inceptionDate : string, lastModified : string, product : string, status : string) {
  return { insuredName, inceptionDate, lastModified, product, status };
}

const columns = [
  { id: "name", label: "INSURED NAME", minWidth: 170 },
  { id: "code", label: "INCEPTION DATE", minWidth: 100 },
  {
    id: "population",
    label: "LAST MODIFIED",
    minWidth: 170,
    align: "left",
    format: (value : string) => value.toLocaleString(),
  },
  {
    id: "size",
    label: "PRODUCT(S)",
    minWidth: 170,
    align: "left",
    format: (value : string) => value.toLocaleString(),
  },
  {
    id: "density",
    label: "STATUS",
    minWidth: 170,
    align: "left",
    format: (value : number) => value.toFixed(),
  },
];

const rows = [
  createData(
    "Folio.insure Limited",
    "690539404",
    "06/10/2022",
    "Professional Indemnity",
    "Referred"
  ),
  createData(
    "Folio.insure Limited",
    "690539404",
    "06/10/2022",
    "Professional Indemnity",
    "Referred"
  ),
  createData(
    "Folio.insure Limited",
    "690539404",
    "06/10/2022",
    "Professional Indemnity",
    "Incomplete"
  ),
  createData(
    "Folio.insure Limited",
    "690539404",
    "06/10/2022",
    "Professional Indemnity",
    "Incomplete"
  ),
  createData(
    "Folio.insure Limited",
    "690539404",
    "06/10/2022",
    "Professional Indemnity",
    "Incomplete"
  ),
  createData(
    "Folio.insure Limited",
    "690539404",
    "06/10/2022",
    "Professional Indemnity",
    "Incomplete"
  ),
  createData(
    "Folio.insure Limited",
    "690539404",
    "06/10/2022",
    "Professional Indemnity",
    "Incomplete"
  ),
  createData(
    "Folio.insure Limited",
    "690539404",
    "06/10/2022",
    "Professional Indemnity",
    "Incomplete"
  ),
  createData(
    "Folio.insure Limited",
    "690539404",
    "06/10/2022",
    "Professional Indemnity",
    "Incomplete"
  ),
  createData(
    "Folio.insure Limited",
    "690539404",
    "06/10/2022",
    "Professional Indemnity",
    "Incomplete"
  ),
  createData(
    "Folio.insure Limited",
    "690539404",
    "06/10/2022",
    "Professional Indemnity",
    "Incomplete"
  ),
  createData(
    "Folio.insure Limited",
    "690539404",
    "06/10/2022",
    "Professional Indemnity",
    "Incomplete"
  ),
  createData(
    "Folio.insure Limited",
    "690539404",
    "06/10/2022",
    "Professional Indemnity",
    "Incomplete"
  ),
  createData(
    "Folio.insure Limited",
    "690539404",
    "06/10/2022",
    "Professional Indemnity",
    "Incomplete"
  ),
  createData(
    "Folio.insure Limited",
    "690539404",
    "06/10/2022",
    "Professional Indemnity",
    "Incomplete"
  ),
]

export default function CustomPaginationActionsTable() {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);

  const handleChangePage = (event : React.MouseEvent<HTMLButtonElement> | null, page: number) => {
    setPage(page);
  };

  const handleChangeRowsPerPage = (event : React.ChangeEvent<HTMLInputElement>) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  return (
    <div className="table_container">
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              {columns.map((column) => (
                <TableCell key={column.id} >
                  {column.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {(rowsPerPage > 0
              ? rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              : rows
            ).map((row) => (
              <TableRow key={row.insuredName}>
                <TableCell component="th" scope="row">
                  {row.insuredName}
                </TableCell>
                <TableCell style={{ width: 160 }} align="left">
                  {row.inceptionDate}
                </TableCell>
                <TableCell style={{ width: 160 }} align="left">
                  {row.lastModified}
                </TableCell>
                <TableCell style={{ width: 160 }} align="left">
                  {row.product}
                </TableCell>
                <TableCell style={{ width: 160 }} align="left">
                  {row.status}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
          <TableFooter>
            <TableRow>
            <TablePagination
                rowsPerPageOptions={[5, 10, 25, { label: "All", value: -1 }]}
                count={rows.length}
                rowsPerPage={rowsPerPage}
                page={page}
                SelectProps={{
                  inputProps: {
                    "aria-label": "Rows per page",
                  },
                  native: true,
                }}
                onPageChange={handleChangePage}
                onRowsPerPageChange={handleChangeRowsPerPage}
                ActionsComponent={TablePaginationActions}
              />
            </TableRow>
          </TableFooter>
        </Table>
      </TableContainer>
    </div>
  );
}
