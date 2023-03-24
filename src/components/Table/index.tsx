import React, { useEffect, useState } from "react";
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
import { quotesByBrokerId } from "../../services/quotesByBrokerId";
import { getQuotes } from "../Quotes/quotesTabSlice";

function TablePaginationActions(props: TablePaginationActionsProps) {
  const theme = useTheme();
  const { count, page, rowsPerPage, onPageChange } = props;

  const handleFirstPageButtonClick = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    onPageChange(event, 0);
  };

  const handleBackButtonClick = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    onPageChange(event, page - 1);
  };

  const handleNextButtonClick = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    onPageChange(event, page + 1);
  };

  const handleLastPageButtonClick = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    onPageChange(event, Math.max(0, Math.ceil(count / rowsPerPage) - 1));
  };

  return (
    <div className="tableButtons">
      <IconButton
        onClick={handleFirstPageButtonClick}
        disabled={page === 0}
        aria-label="first page"
      >
        {theme.direction === "rtl" ? <LastPageIcon /> : <FirstPageIcon />}
      </IconButton>
      <IconButton
        onClick={handleBackButtonClick}
        disabled={page === 0}
        aria-label="previous page"
      >
        {theme.direction === "rtl" ? (
          <KeyboardArrowRight />
        ) : (
          <KeyboardArrowLeft />
        )}
      </IconButton>
      <IconButton
        onClick={handleNextButtonClick}
        disabled={page >= Math.ceil(count / rowsPerPage) - 1}
        aria-label="next page"
      >
        {theme.direction === "rtl" ? (
          <KeyboardArrowLeft />
        ) : (
          <KeyboardArrowRight />
        )}
      </IconButton>
      <IconButton
        onClick={handleLastPageButtonClick}
        disabled={page >= Math.ceil(count / rowsPerPage) - 1}
        aria-label="last page"
      >
        {theme.direction === "rtl" ? <FirstPageIcon /> : <LastPageIcon />}
      </IconButton>
    </div>
  );
}

function createData(
  insuredName: string,
  inceptionDate: string,
  lastModified: string,
  product: string,
  status: string
) {
  return { insuredName, inceptionDate, lastModified, product, status };
}

const columns = [
  { id: "name", label: "Insured name", minWidth: 170 },
  { id: "code", label: "Inception date", minWidth: 100 },
  {
    id: "population",
    label: "Last modified",
    minWidth: 170,
    align: "left",
    format: (value: string) => value.toLocaleString(),
  },
  {
    id: "size",
    label: "Product(s)",
    minWidth: 170,
    align: "left",
    format: (value: string) => value.toLocaleString(),
  },
  {
    id: "density",
    label: "Status",
    minWidth: 170,
    align: "left",
    format: (value: number) => value.toFixed(),
  },
];

export default function CustomPaginationActionsTable() {
  const [quoteRows, setQuoteRows] = useState([
    createQuoteRow(
      "loading",
      "loading",
      "loading",
      "loading",
      "loading",
      "loading"
    ),
  ]);
  const [quotes, setQuotes] = useState([]);

  useEffect(() => {
    getQuotes();
  }, []);

  const getQuotes = async () => {
    let tempQuotes = await quotesByBrokerId();
    setQuotes(tempQuotes);
    let tempRows = [];
    for (let q of tempQuotes) {
      tempRows.push(
        createQuoteRow(
          q.id.toString(),
          q.quoteClient.organizationName,
          q.inceptionDate,
          q.lastModifiedDate,
          q.quoteProducts.toString(),
          q.status
        )
      );
    }
    setQuoteRows(tempRows);
  };

  function createQuoteRow(
    quoteId: string,
    insuredName: string,
    inceptionDate: string,
    lastModified: string,
    product: string,
    status: string
  ) {
    return {
      quoteId: quoteId ? quoteId : "Null",
      insuredName: insuredName ? insuredName : "Null",
      inceptionDate: inceptionDate ? inceptionDate : "Null",
      lastModified: lastModified ? lastModified : "Null",
      product: product ? product : "Null",
      status: status ? status : "Null",
    };
  }

  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);

  const handleChangePage = (
    event: React.MouseEvent<HTMLButtonElement> | null,
    page: number
  ) => {
    setPage(page);
  };

  const handleChangeRowsPerPage = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
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
                <TableCell key={column.id}>{column.label}</TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {(rowsPerPage > 0
              ? quoteRows.slice(
                  page * rowsPerPage,
                  page * rowsPerPage + rowsPerPage
                )
              : quoteRows
            ).map((quoteRow) => (
              <TableRow key={quoteRow.insuredName}>
                <TableCell component="th" scope="row">
                  {quoteRow.insuredName}
                </TableCell>
                <TableCell style={{ width: 160 }} align="left">
                  {quoteRow.inceptionDate}
                </TableCell>
                <TableCell style={{ width: 160 }} align="left">
                  {quoteRow.lastModified}
                </TableCell>
                <TableCell style={{ width: 160 }} align="left">
                  {quoteRow.product}
                </TableCell>
                <TableCell style={{ width: 160 }} align="left">
                  {quoteRow.status}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
          <TableFooter>
            <TableRow>
              <TablePagination
                rowsPerPageOptions={[25, 10, 5, { label: "All", value: -1 }]}
                count={quoteRows.length}
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
