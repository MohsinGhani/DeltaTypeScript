import {
  Button,
  Card,
  CardContent,
  Checkbox,
  Divider,
  Paper,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import Check from "../../assets/images/check.svg";
import infoIcon from "../../assets/images/infoIcon.svg";
import Download from "../../assets/images/download.svg";
import TableContainer from "@mui/material/TableContainer";
import Table from "@mui/material/Table";

const Policybound = ({ formField }: any) => {
  return (
    <div className="policy_container">
      <div className="policy_header">
        <img src={Check} alt="Edit Icon" />
        <Typography variant="subtitle1">Policy Bound</Typography>
      </div>
      <Divider light />
      <Card>
        <CardContent>
          <Typography variant="subtitle1">
            Congratulations on confirming your cover!
          </Typography>
          <div className="policy_documentHeading">
            <Typography variant="subtitle1">Policy documents</Typography>
            <img src={infoIcon} alt="Info Icon" />
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
                        Quote Schedule (PDF)
                      </TableCell>
                      <TableCell align="right">
                        <div className="download_icon">
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
                        Quote Schedule (Word.docx)
                      </TableCell>
                      <TableCell align="right">
                        <div className="download_icon">
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
                        Proposal Form (PDF)
                      </TableCell>

                      <TableCell align="right">
                        <div className="download_icon">
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
    // <div className="policybound_container">
    //   <div className=" policybound_heading">
    //     <img src={Check} alt="Client details" />
    //     <Typography variant="h5">Policy bound</Typography>
    //   </div>
    //   <Divider />
    //   <Typography variant="subtitle">
    //     Congratulations on confirming your cover!
    //   </Typography>

    //   <div className="policy_bound">
    //     <Typography variant="h5">Policy documents</Typography>
    //     <img src={infoIcon} alt="Client details" />
    //   </div>
    //   <Paper>
    //     <TableContainer>
    //       <Table aria-labelledby="tableTitle">
    //         <TableHead>
    //           <TableRow>
    //             <TableCell padding="checkbox">
    //               <Checkbox
    //                 color="primary"
    //                 inputProps={{
    //                   "aria-label": "select all desserts",
    //                 }}
    //               />
    //             </TableCell>

    //             <TableCell>DESCRIPTION</TableCell>

    //             <TableCell>
    //               <div className="document_button">
    //                 <Button variant="contained" color="primary">
    //                   Send email
    //                 </Button>
    //                 <Button variant="contained" color="primary">
    //                   Download all
    //                 </Button>
    //               </div>
    //             </TableCell>
    //           </TableRow>
    //         </TableHead>

    //         <TableBody>
    //           <TableRow
    //             hover
    //             onClick={(event) => handleClick(event)}
    //             role="checkbox"
    //             tabIndex={-1}
    //           >
    //             <TableCell padding="checkbox">
    //               <Checkbox color="primary" />
    //             </TableCell>
    //             <TableCell component="th" scope="row" padding="none">
    //               Policy Schedule (PDF)
    //             </TableCell>
    //             <TableCell>
    //               <div className="download_icon">
    //                 <img src={Download} alt="Client details" />
    //               </div>
    //             </TableCell>
    //           </TableRow>
    //           <TableRow
    //             hover
    //             onClick={(event) => handleClick(event)}
    //             role="checkbox"
    //           >
    //             <TableCell padding="checkbox">
    //               <Checkbox color="primary" />
    //             </TableCell>
    //             <TableCell component="th" scope="row" padding="none">
    //               Certificate of Insurance (PDF)
    //             </TableCell>
    //             <TableCell>
    //               <div className="download_icon">
    //                 <img src={Download} alt="Client details" />
    //               </div>
    //             </TableCell>
    //           </TableRow>
    //           <TableRow
    //             hover
    //             onClick={(event) => handleClick(event)}
    //             role="checkbox"
    //           >
    //             <TableCell padding="checkbox">
    //               <Checkbox color="primary" />
    //             </TableCell>
    //             <TableCell component="th" scope="row" padding="none">
    //               Proposal form (PDF)
    //             </TableCell>

    //             <TableCell>
    //               <div className="download_icon">
    //                 <img src={Download} alt="Client details" />
    //               </div>
    //             </TableCell>
    //           </TableRow>
    //         </TableBody>
    //       </Table>
    //     </TableContainer>
    //   </Paper>
    // </div>
  );
};

export default Policybound;

/* <div className="bindCover_quoteTable">
                <Paper>
                  <TableContainer>
                    <Table>
                      <TableHead>
                        <TableRow>
                          <TableCell padding="checkbox">
                            <Checkbox color="primary" />
                          </TableCell>
                          <TableCell>DESCRIPTION</TableCell>
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
                          onClick={(event) => handleClick(event)}
                          role="checkbox"
                          tabIndex={-1}
                        >
                          <TableCell padding="checkbox">
                            <Checkbox color="primary" />
                          </TableCell>
                          <TableCell component="th" scope="row" padding="none">
                            Quote Schedule (PDF)
                          </TableCell>
                          <TableCell align="right">
                            <div className="download_icon">
                              <img src={Download} alt="Download Icon" />
                            </div>
                          </TableCell>
                        </TableRow>
                        <TableRow
                          hover
                          onClick={(event) => handleClick(event)}
                          role="checkbox"
                        >
                          <TableCell padding="checkbox">
                            <Checkbox color="primary" />
                          </TableCell>
                          <TableCell component="th" scope="row" padding="none">
                            Quote Schedule (Word.docx)
                          </TableCell>
                          <TableCell align="right">
                            <div className="download_icon">
                              <img src={Download} alt="Download Icon" />
                            </div>
                          </TableCell>
                        </TableRow>
                        <TableRow
                          hover
                          onClick={(event) => handleClick(event)}
                          role="checkbox"
                        >
                          <TableCell padding="checkbox">
                            <Checkbox color="primary" />
                          </TableCell>
                          <TableCell component="th" scope="row" padding="none">
                            Proposal Form (PDF)
                          </TableCell>
  
                          <TableCell align="right">
                            <div className="download_icon">
                              <img src={Download} alt="Download Icon" />
                            </div>
                          </TableCell>
                        </TableRow>
                      </TableBody>
                    </Table>
                  </TableContainer>
                </Paper>
              </div>
              */
