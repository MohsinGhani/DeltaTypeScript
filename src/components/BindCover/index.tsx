import React, { useState } from "react";
import {
  Button,
  Divider,
  Input,
  MenuItem,
  Slider,
  TableBody,
  TableCell,
  TableRow,
  Typography,
  TableHead,
  Table,
  Paper,
  Select,
  TableContainer,
  TableFooter,
  Checkbox,
  Card,
  CardContent,
} from "@mui/material";

import Download from "../../assets/images/download.svg";
import EditIcon from "../../assets/images/editIcon.svg";
import InfoIcon from "../../assets/images/infoIcon.svg";
import { jsx } from "@emotion/react";
type TableProps ={
  // name?: string;
  //   age?: number;
    
  onSelectAllClick?:((event: React.ChangeEvent<HTMLInputElement>,  checked: boolean
  )=>void) | undefined
  handleChange?: (event: React.ChangeEvent<HTMLInputElement>)=> void
  handleInputChange?: (event: React.ChangeEvent<HTMLInputElement>)=> void

  numSelected: number
  rowCount: number
}
function EnhancedTableHead(props: TableProps): JSX.Element {
  const { onSelectAllClick, numSelected, rowCount } = props;
 
  return (
    <TableHead>
      <TableRow>
        <TableCell padding="checkbox">
          <Checkbox
            color="primary"
            indeterminate={numSelected > 0 && numSelected < rowCount}
            checked={rowCount > 0 && numSelected === rowCount}
            onChange={onSelectAllClick}
          />
        </TableCell>
        <TableCell>DESCRIPTION</TableCell>
        <TableCell>COVER LIMIT</TableCell>
        <TableCell>RETENTION</TableCell>
        <TableCell>BASE PREMIUM</TableCell>
      </TableRow>
    </TableHead>
  );
}

const BindCover = () => {
  const [age, setAge] = useState<number>();
  const [value, setValue] = useState<number>(30);
  const [selected, setSelected] = useState<string[]>([]);

  const handleChange = ( event: React.ChangeEvent<HTMLInputElement>) => {
    setAge(+event.target.value);
  };

  const handleSliderChange = (event: Event , newValue:number ) => {
    setValue(newValue);
  };

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    // setValue(event.target.value === "" ? "" : +event.target.value);
  };

  const handleBlur = () => {
    if (value < 0) {
      setValue(0);
    } else if (value > 100) {
      setValue(100);
    }
  };

  const handleSelectAllClick = (event: React.ChangeEvent<HTMLInputElement> ) => {
    if (event.target.checked) {
      return;
    }
    setSelected([]);
  };



  return (
    <div className="bindCover_container">
      <div className="bindCover_header">
        <img src={EditIcon} alt="Edit Icon" />
        <Typography variant="subtitle1">Coverage Summary</Typography>
      </div>
      <Divider light />
      <Card>
        <CardContent>
          <div className="bindCover_quote">
            <Typography variant="subtitle1">Customise your Quote</Typography>
            <img src={InfoIcon} alt="Info Icon" />
          </div>
          <div className="bindCover_sliderContainer">
            <Typography variant="subtitle1">
              Brokerage Commission Percentage
            </Typography>
            <div className="bindCover_slider">
              <Slider
                value={typeof value === "number" ? value : 0}
                // onChange={handleSliderChange}
              />
              <Input
                value={value}
                size="medium"
                onChange={handleInputChange}
                onBlur={handleBlur}
                inputProps={{
                  min: 0,
                  max: 100,
                  type: "number",
                }}
              />
            </div>
          </div>
          <div className="bindCover_table">
            <Paper>
              <TableContainer>
                <Table>
                  <EnhancedTableHead
                    numSelected={9}
                    rowCount={1}
                    key={1}
                    handleChange={(() => {})}
                    onSelectAllClick={handleSelectAllClick}
                  />
                  <TableBody>
                    <TableRow
                      hover
                      role="checkbox"
                    >
                      <TableCell padding="checkbox">
                        <Checkbox color="primary" />
                      </TableCell>
                      <TableCell component="th" scope="row" padding="none">
                        Professional Indemnity
                      </TableCell>
                      <TableCell>
                        {" "}
                        <Select value={age}>
                          <MenuItem value="">
                            <em>None</em>
                          </MenuItem>
                          <MenuItem value={10}>$20,00</MenuItem>
                          <MenuItem value={10}>$20,000,</MenuItem>
                          <MenuItem value={10}>$20,000,0</MenuItem>
                          <MenuItem value={10}>$20,000,00</MenuItem>
                          <MenuItem value={10}>$20,000,00</MenuItem>
                        </Select>
                      </TableCell>
                      <TableCell>
                        <Select value={age} label="Age" >
                          <MenuItem value="">
                            <em>None</em>
                          </MenuItem>
                          <MenuItem value={10}>$20,000,000</MenuItem>
                          <MenuItem value={10}>$20,000,000</MenuItem>
                          <MenuItem value={10}>$20,000,000</MenuItem>
                          <MenuItem value={20}>$20,000,000</MenuItem>
                          <MenuItem value={30}>$20,000,000</MenuItem>
                        </Select>
                      </TableCell>
                      <TableCell style={{ textAlign: "center" }}>
                        $84.33
                      </TableCell>
                    </TableRow>
                    <TableRow
                      hover
                    >

                      <TableCell padding="checkbox">
                        <Checkbox color="primary" />
                      </TableCell>
                      <TableCell component="th" scope="row" padding="none">
                        Directors & Officers Liability
                      </TableCell>
                      <TableCell>
                        {" "}
                        <Select value={age} label="Age" >
                          <MenuItem value="">
                            <em>None</em>
                          </MenuItem>
                          <MenuItem value={10}>$20,000,000</MenuItem>
                          <MenuItem value={10}>$20,000,000</MenuItem>
                          <MenuItem value={10}>$550,000,000</MenuItem>
                          <MenuItem value={20}>$20,000,000</MenuItem>
                          <MenuItem value={30}>$20,000,000</MenuItem>
                        </Select>
                      </TableCell>
                      <TableCell>
                        {" "}
                        <Select value={age} label="Age" >
                          <MenuItem value="">
                            <em>None</em>
                          </MenuItem>
                          <MenuItem value={10}>$20,000,000</MenuItem>
                          <MenuItem value={10}>$20,000,000</MenuItem>
                          <MenuItem value={10}>$20,000,000</MenuItem>
                          <MenuItem value={20}>$20,000,000</MenuItem>
                          <MenuItem value={30}>$20,000,000</MenuItem>
                        </Select>
                      </TableCell>
                      <TableCell style={{ textAlign: "center" }}>
                        $84.33
                      </TableCell>
                    </TableRow>
                    <TableRow
                      hover
                
                    >
                      <TableCell padding="checkbox">
                        <Checkbox color="primary" />
                      </TableCell>
                      <TableCell component="th" scope="row" padding="none">
                        Employer’s Liability
                      </TableCell>
                      <TableCell>
                        {" "}
                        <Select value={age} label="Age" >
                          <MenuItem value="">
                            <em>None</em>
                          </MenuItem>
                          <MenuItem value={10}>$20,000,000</MenuItem>
                          <MenuItem value={20}>$20,000,000</MenuItem>
                          <MenuItem value={20}>$20,000,000</MenuItem>
                          <MenuItem value={20}>$20,000,000</MenuItem>
                          <MenuItem value={30}>$20,000,000</MenuItem>
                        </Select>
                      </TableCell>
                      <TableCell>
                        {" "}
                        <Select value={age} label="Age" >
                          <MenuItem value="">
                            <em>None</em>
                          </MenuItem>
                          <MenuItem value={10}>$20,000,000</MenuItem>
                          <MenuItem value={10}>$20,000,000</MenuItem>
                          <MenuItem value={10}>$20,000,000</MenuItem>
                          <MenuItem value={20}>$20,000,000</MenuItem>
                          <MenuItem value={30}>$20,000,000</MenuItem>
                        </Select>
                      </TableCell>
                      <TableCell style={{ textAlign: "center" }}>
                        $84.33
                      </TableCell>
                    </TableRow>
                    <TableRow
                      hover
                
                    >
                      <TableCell padding="checkbox">
                        <Checkbox color="primary" inputProps={{}} />
                      </TableCell>
                      <TableCell component="th" scope="row" padding="none">
                        Statutory Liability
                      </TableCell>
                      <TableCell>
                        {" "}
                        <Select value={age} label="Age" >
                          <MenuItem value="">
                            <em>None</em>
                          </MenuItem>
                          <MenuItem value={10}>$20,000,000</MenuItem>
                          <MenuItem value={10}>$20,000,000</MenuItem>
                          <MenuItem value={10}>$20,000,000</MenuItem>
                          <MenuItem value={20}>$20,000,000</MenuItem>
                          <MenuItem value={30}>$20,000,000</MenuItem>
                        </Select>
                      </TableCell>
                      <TableCell>
                        {" "}
                        <Select value={age} label="Age" >
                          <MenuItem value="">
                            <em>None</em>
                          </MenuItem>
                          <MenuItem value={10}>$20,000,000</MenuItem>
                          <MenuItem value={10}>$20,000,000</MenuItem>
                          <MenuItem value={10}>$20,000,000</MenuItem>
                          <MenuItem value={20}>$20,000,000</MenuItem>
                          <MenuItem value={30}>$20,000,000</MenuItem>
                        </Select>
                      </TableCell>
                      <TableCell style={{ textAlign: "center" }}>
                        $84.33
                      </TableCell>
                    </TableRow>
                    <TableRow
                      hover
                
                    >
                      <TableCell padding="checkbox">
                        <Checkbox color="primary" inputProps={{}} />
                      </TableCell>
                      <TableCell component="th" scope="row" padding="none">
                        Crime Liability
                      </TableCell>
                      <TableCell>
                        <Select value={age} label="Age" >
                          <MenuItem value="">
                            <em>None</em>
                          </MenuItem>
                          <MenuItem value={10}>$20,000,000</MenuItem>
                          <MenuItem value={10}>$20,000,000</MenuItem>
                          <MenuItem value={10}>$20,000,000</MenuItem>
                          <MenuItem value={20}>$20,000,000</MenuItem>
                          <MenuItem value={30}>$20,000,000</MenuItem>
                        </Select>
                      </TableCell>
                      <TableCell>
                        <Select value={age} label="Age" >
                          <MenuItem value="">
                            <em>None</em>
                          </MenuItem>
                          <MenuItem value={10}>$20,000,000</MenuItem>
                          <MenuItem value={10}>$20,000,000</MenuItem>
                          <MenuItem value={10}>$20,000,000</MenuItem>
                          <MenuItem value={20}>$50,000,000</MenuItem>
                          <MenuItem value={30}>$20,000,000</MenuItem>
                        </Select>
                      </TableCell>
                      <TableCell style={{ textAlign: "center" }}>
                        $84.33
                      </TableCell>
                    </TableRow>
                    <TableRow></TableRow>
                  </TableBody>
                </Table>
              </TableContainer>
            </Paper>
          </div>
          <div className="bindCover_feeBreakdownTable">
            <div
              className="bindCover_quote"
              style={{ padding: "45px 0 20px 0" }}
            >
              <Typography variant="subtitle1">Fee Breakdown</Typography>
              <img src={InfoIcon} alt="Info Icon" />
            </div>
            <TableContainer component={Paper}>
              <TableHead>
                <TableRow>
                  <TableCell component="th" scope="row">
                    DESCRIPTION
                  </TableCell>
                  <TableCell style={{ width: "100%" }} align="right">
                    BASE PREMIUM
                  </TableCell>
                </TableRow>
              </TableHead>
              <Table aria-label="custom pagination table">
                <TableBody>
                  <TableRow>
                    <TableCell component="th" scope="row">
                      Base premium
                    </TableCell>

                    <TableCell style={{ width: 160 }} align="right">
                      $257.60
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell component="th" scope="row">
                      Stamp duty
                    </TableCell>

                    <TableCell style={{ width: 160 }} align="right">
                      $56.89
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell component="th" scope="row">
                      Admin fee
                    </TableCell>

                    <TableCell style={{ width: 160 }} align="right">
                      $89.55
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell component="th" scope="row">
                      GST
                    </TableCell>

                    <TableCell style={{ width: 160 }} align="right">
                      $100.44
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell component="th" scope="row">
                      Commission
                    </TableCell>

                    <TableCell style={{ width: 160 }} align="right">
                      $15.15
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell component="th" scope="row">
                      GST on commission
                    </TableCell>

                    <TableCell style={{ width: 160 }} align="right">
                      $15.15
                    </TableCell>
                  </TableRow>
                </TableBody>
                <TableFooter>
                  <TableRow></TableRow>
                </TableFooter>
              </Table>
            </TableContainer>
          </div>
          <div className="bindCover_quoteTableContainer">
            <div
              className="bindCover_quote"
              style={{ padding: "45px 0 20px 0" }}
            >
              <Typography variant="subtitle1">Quote documents</Typography>
              <img src={InfoIcon} alt="Info Icon" />
            </div>
            <div className="bindCover_quoteTable">
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
                        // role="checkbox"
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
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default BindCover;
