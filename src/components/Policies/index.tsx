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
import TableHead from "@mui/material/TableHead";
import { TablePaginationActionsProps } from "@mui/material/TablePagination/TablePaginationActions";
import { quotesByBrokerIdPolicy } from "../../services/quotesByBrokerIdPolicy";
import {
  Box,
  Button,
  Card,
  CardContent,
  Checkbox,
  Divider,
  Modal,
  Typography,
} from "@mui/material";
import fileDownload from "js-file-download";

import Check from "../../assets/images/check.svg";
import infoIcon from "../../assets/images/infoIcon.svg";
import Download from "../../assets/images/download.svg";

import { getInsuranceCertificateDocument } from "../../services/getInsuranceCertificateDocument";
import { getQuoteDocument } from "../../services/getQuoteDocument";
import { getQuotePolicyScheduleDocument } from "../../services/getQuotePolicyScheduleDocument";

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

const rows = [
  createData(
    "Folio.insure Limited",
    "690539404",
    "06/10/2022",
    "Professional Indemnity, Management Liability, Cyber",
    "In term"
  ),
  createData(
    "Folio.insure Limited",
    "690539404",
    "06/10/2022",
    "Professional Indemnity, Cyber",
    "In term"
  ),
  createData(
    "Folio.insure Limited",
    "690539404",
    "06/10/2022",
    "General Liability",
    "In term"
  ),
  createData(
    "Folio.insure Limited",
    "690539404",
    "06/10/2022",
    "General Liability, Professional Indemnity",
    "In term"
  ),
  createData(
    "Folio.insure Limited",
    "690539404",
    "06/10/2022",
    "Management Liability",
    "In term"
  ),
  createData(
    "Folio.insure Limited",
    "690539404",
    "06/10/2022",
    "Professional Indemnity, CLE expenses",
    "In term"
  ),
  createData(
    "Folio.insure Limited",
    "690539404",
    "06/10/2022",
    "Professional Indemnity, General Liability",
    "In term"
  ),
  createData(
    "Folio.insure Limited",
    "690539404",
    "06/10/2022",
    "Professional Indemnity, Management Liability, Cyber",
    "In term"
  ),
  createData(
    "Folio.insure Limited",
    "690539404",
    "06/10/2022",
    "Professional Indemnity",
    "In term"
  ),
  createData(
    "Folio.insure Limited",
    "690539404",
    "06/10/2022",
    "Professional Indemnity",
    "In term"
  ),
];

export default function PoliciesTable() {
  const reader = new FileReader();
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [selectedQuote, setSelectedQuote] = useState(
    createQuoteRow(
      "loading",
      "loading",
      "loading",
      "loading",
      "loading",
      "loading"
    )
  );

  const [page, setPage] = useState<number>(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);

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
  // const [quotes, setQuotes] = useState([]);

  useEffect(() => {
    getQuotes();
  }, []);

  const getQuotes = async () => {
    let tempQuotes = await quotesByBrokerIdPolicy();
    // setQuotes(tempQuotes);
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

  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    bgcolor: "background.paper",
    border: "2px solid #000",
    boxShadow: 24,
    p: 4,
  };

  return (
    <div className="table_container">
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        {/* <Box sx={style}> */}
        <div className="policy_container">
          {/* <Divider light /> */}
          <Card>
            <CardContent>
              <div className="policy_documentHeading">
                <Typography
                  variant="subtitle1"
                  style={{ whiteSpace: "pre-line" }}
                >
                  Policy - {selectedQuote.insuredName + "\n"}
                </Typography>
                <img src={infoIcon} alt="Info Icon" />
              </div>
              <div className="policy_documentSubHeading">
                <Typography
                  variant="subtitle1"
                  style={{ whiteSpace: "pre-line" }}
                >
                  Products - {selectedQuote.product}
                </Typography>
              </div>
              <div className="policy_table">
                <Paper>
                  <TableContainer>
                    <Table>
                      <TableHead>
                        <TableRow>
                          <TableCell padding="checkbox">
                            <Checkbox color="primary" />
                          </TableCell>
                          <TableCell>PRODUCT</TableCell>
                          <TableCell>
                            <div className="bindCover_quoteTableHeaderButton">
                              <Button variant="contained" color="primary">
                                Send email
                              </Button>
                              <Button variant="contained" color="primary">
                                Download all
                              </Button>
                            </div>
                          </TableCell>
                        </TableRow>
                      </TableHead>
                      <TableBody>
                        <TableRow
                          hover
                          // onClick={(event) => handleClick(event)}
                          role="checkbox"
                          tabIndex={-1}
                        >
                          <TableCell padding="checkbox">
                            <Checkbox color="primary" />
                          </TableCell>
                          <TableCell component="th" scope="row" padding="none">
                            Quote Document (PDF)
                          </TableCell>
                          <TableCell align="right">
                            <div
                              className="download_icon"
                              onClick={async () => {
                                getQuoteDocument(308);
                              }}
                            >
                              <img src={Download} alt="Download Icon" />
                            </div>
                          </TableCell>
                        </TableRow>
                        <TableRow
                          hover
                          // onClick={(event) => handleClick(event)}
                          role="checkbox"
                        >
                          <TableCell padding="checkbox">
                            <Checkbox color="primary" />
                          </TableCell>
                          <TableCell component="th" scope="row" padding="none">
                            Quote Schedule (PDF)
                          </TableCell>
                          <TableCell align="right">
                            <div
                              className="download_icon"
                              onClick={() => {
                                // getQuoteScheduleDocument(selectedQuote.quoteId);308
                                getQuotePolicyScheduleDocument(308);
                              }}
                            >
                              <img src={Download} alt="Download Icon" />
                            </div>
                          </TableCell>
                        </TableRow>
                        <TableRow
                          hover
                          // onClick={(event) => handleClick(event)}
                          role="checkbox"
                        >
                          <TableCell padding="checkbox">
                            <Checkbox color="primary" />
                          </TableCell>
                          <TableCell component="th" scope="row" padding="none">
                            Insurance Certificate (PDF)
                          </TableCell>

                          <TableCell align="right">
                            <div
                              className="download_icon"
                              onClick={() => {
                                getInsuranceCertificateDocument(308);
                              }}
                            >
                              <img src={Download} alt="Download Icon" />
                            </div>
                          </TableCell>
                        </TableRow>
                      </TableBody>
                    </Table>
                  </TableContainer>
                </Paper>
              </div>
            </CardContent>
          </Card>
        </div>
        {/* </Box> */}
      </Modal>
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
            ).map((row) => (
              <TableRow
                key={row.insuredName}
                onClick={() => {
                  setSelectedQuote(row);
                  handleOpen();
                }}
                sx={{
                  "&:hover": {
                    backgroundColor: "#C6EBB9",
                    cursor: "pointer",
                    // opacity: 0.8,
                  },
                }}
              >
                <TableCell component="th" scope="row">
                  {row.insuredName}
                </TableCell>
                <TableCell style={{ width: 160 }} align="left">
                  {row.inceptionDate}
                </TableCell>
                <TableCell style={{ width: 160 }} align="left">
                  {row.lastModified}
                </TableCell>
                <TableCell style={{ width: 350 }} align="left">
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
