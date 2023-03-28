import React, { useState } from "react";
import {
  Divider,
  Input,
  Slider,
  Paper,
  TableContainer,
  TableFooter,
  Card,
  CardContent,
} from "@mui/material";

import Download from "../../assets/images/download.svg";
import EditIcon from "../../assets/images/editIcon.svg";
// import InfoIcon from "../../assets/images/infoIcon.svg";
import {
  Typography,
  Select,
  MenuItem,
  TextField,
  FormControlLabel,
  Checkbox,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  InputAdornment,
  OutlinedInput,
  SelectChangeEvent,
  Button,
} from "@mui/material";
import {
  DesktopDatePicker,
  LocalizationProvider,
} from "@mui/x-date-pickers-pro";
import { AdapterDayjs } from "@mui/x-date-pickers-pro/AdapterDayjs";
import SearchIcon from "@mui/icons-material/Search";
import InfoIcon from "../../assets/images/infoIcon.svg";

import { DataGrid, GridColumns, GridRowsProp } from "@mui/x-data-grid";

type TableProps = {
  // name?: string;
  //   age?: number;

  onSelectAllClick?:
    | ((event: React.ChangeEvent<HTMLInputElement>, checked: boolean) => void)
    | undefined;
  handleChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  handleInputChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;

  numSelected: number;
  rowCount: number;
};
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
        <TableCell>PRODUCT</TableCell>
        <TableCell>LIMIT OF INDEMNITY</TableCell>
        <TableCell>RETENTION</TableCell>
        <TableCell>BASE PREMIUM</TableCell>
      </TableRow>
    </TableHead>
  );
}

const BindCover = ({ formField }: any) => {
  const [date, setDate] = useState<Date>(new Date());
  const [turnOver, setTurnOver] = useState("");
  const [Over, setOver] = useState("");
  const [age, setAge] = useState<number>();
  const [value, setValue] = useState<number>(30);
  const [selected, setSelected] = useState<string[]>([]);

  // const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
  //   setAge(+event.target.value);
  // };

  const handleSliderChange = (event: Event, newValue: number) => {
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

  const handleSelectAllClick = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.checked) {
      return;
    }
    setSelected([]);
  };
  const handleClick = (event: SelectChangeEvent<string>) => {
    setOver(event.target.value);
  };

  const handleChange = (event: SelectChangeEvent<string>) => {
    setTurnOver(event.target.value);
  };

  const handleDateChange = (newValue: any) => {
    setDate(newValue);
  };

  const columns: GridColumns = [
    {
      field: "NSW",
      headerName: "NSW",
      width: 90,
      editable: true,
      sortable: false,
    },
    {
      field: "VIC",
      headerName: "VIC",
      type: "number",
      width: 90,
      editable: true,
      sortable: false,
    },
    {
      field: "QLD",
      headerName: "QLD",
      type: "number",
      width: 90,
      editable: true,
      sortable: false,
    },
    {
      field: "SA",
      headerName: "SA",
      type: "number",
      width: 90,
      editable: true,
      sortable: false,
    },
    {
      field: "NT",
      headerName: "NT",
      type: "number",
      width: 90,
      editable: true,
      sortable: false,
    },
    {
      field: "WA",
      headerName: "WA",
      type: "number",
      width: 90,
      editable: true,
      sortable: false,
    },

    {
      field: "ACT",
      headerName: "ACT",
      type: "number",
      width: 90,
      editable: true,
      sortable: false,
    },
    {
      field: "TAS",
      headerName: "TAS",
      type: "number",
      width: 90,
      editable: true,
      sortable: false,
    },
  ];

  const rows: GridRowsProp = [
    {
      id: 1,

      NSW: "$ 100,000",
      VIC: "$   0",
      QLD: "$   0",
      SA: "$   0",
      NT: "$   0",
      WA: "$   0",
      ACT: "$ 50,000",
      TAS: "$ 70,000",
      Overseas: "$ 70,000",
    },
  ];

  return (
    <div className="bindCover_container">
      <div className="bindCover_child">
        <div className="bindCover_header">
          <img src={EditIcon} alt="Edit Icon" />
          <Typography variant="subtitle1">Coverage summary</Typography>
        </div>
        <Divider light />
        <div className="businessInfo_header">
          <Typography variant="subtitle1">
            What is the insured's address
          </Typography>
          <img src={InfoIcon} alt="Info Icon" />
        </div>
        <div className="businessInfo_addressSearch">
          <Typography variant="subtitle1">Address</Typography>
          <OutlinedInput
            type="text"
            placeholder="Type address here"
            startAdornment={
              <InputAdornment position="start">
                <SearchIcon />
              </InputAdornment>
            }
          />
        </div>
        <Typography variant="body2">
          You can also choose to type free text
        </Typography>
        <div className="businessInfo_locationsAndDate">
          <div className="businessInfo_policyPeriodContainer">
            <div className="businessInfo_policyPeriod">
              <Typography variant="subtitle1">Policy Period</Typography>
              <img src={InfoIcon} alt="Edit icon" />
            </div>
            <div className="businessInfo_policyDateContainer">
              <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DesktopDatePicker
                  minDate={new Date()}
                  label="Start Date"
                  inputFormat="MM/DD/YYYY"
                  value={date}
                  onChange={handleDateChange}
                  renderInput={(params) => <TextField {...params} />}
                />
                <Typography variant="subtitle1">to</Typography>
                <DesktopDatePicker
                  label="End Date"
                  inputFormat="MM/DD/YYYY"
                  value={date}
                  onChange={handleDateChange}
                  renderInput={(params) => <TextField {...params} />}
                />
              </LocalizationProvider>
            </div>
          </div>
        </div>
        <div className="businessInfo_checkbox">
          <Typography variant="subtitle1">
            Do you have any overseas locations?
          </Typography>
          <FormControlLabel control={<Checkbox />} label="Yes" />
          <FormControlLabel control={<Checkbox />} label="No" />
        </div>

        <div className="businessInfo_header">
          <Typography variant="subtitle1">
            Please provide details on the insured's revenue distribution in
            Australia and/or abroad
          </Typography>
        </div>
        <div className="businessInfo_stampMeasureSelect">
          <Select value={Over} onChange={handleClick}>
            {/* <MenuItem value="">
            <em>None</em>
          </MenuItem> */}
            <MenuItem value={10}>in $ NSW</MenuItem>
            <MenuItem value={10}>in $ QLD</MenuItem>
            <MenuItem value={10}>in $ NT</MenuItem>
            <MenuItem value={10}>in $ WA</MenuItem>
            <MenuItem value={10}>in $ SA</MenuItem>
            <MenuItem value={10}>in $ VIC</MenuItem>
            <MenuItem value={10}>in $ AUACT</MenuItem>
            <MenuItem value={10}>in $ TAS</MenuItem>

            {/* <MenuItem value={10}>$ of Revenue</MenuItem>
            <MenuItem value={20}>% of Revenue</MenuItem> */}
          </Select>
        </div>

        <div className="businessInfo_table">
          <div className="grid" style={{ height: 104 }}>
            <DataGrid
              rows={rows}
              columns={columns}
              experimentalFeatures={{ newEditingApi: true }}
              hideFooterPagination
              disableColumnMenu
              hideFooterSelectedRowCount
              showCellRightBorder
            />
          </div>
          <div className="businessInfo_tablePrice">
            <Typography variant="subtitle1">$200,000</Typography>
            <Typography variant="subtitle1">Total : </Typography>
          </div>
        </div>
      </div>
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
                    handleChange={() => {}}
                    onSelectAllClick={handleSelectAllClick}
                  />
                  <TableBody>
                    <TableRow hover role="checkbox">
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
                        <Select value={age} label="Age">
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
                    <TableRow hover>
                      <TableCell padding="checkbox">
                        <Checkbox color="primary" />
                      </TableCell>
                      <TableCell component="th" scope="row" padding="none">
                        Directors & Officers Liability
                      </TableCell>
                      <TableCell>
                        {" "}
                        <Select value={age} label="Age">
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
                        <Select value={age} label="Age">
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
                    <TableRow hover>
                      <TableCell padding="checkbox">
                        <Checkbox color="primary" />
                      </TableCell>
                      <TableCell component="th" scope="row" padding="none">
                        Employer’s Liability
                      </TableCell>
                      <TableCell>
                        {" "}
                        <Select value={age} label="Age">
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
                        <Select value={age} label="Age">
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
                    <TableRow hover>
                      <TableCell padding="checkbox">
                        <Checkbox color="primary" inputProps={{}} />
                      </TableCell>
                      <TableCell component="th" scope="row" padding="none">
                        Statutory Liability
                      </TableCell>
                      <TableCell>
                        {" "}
                        <Select value={age} label="Age">
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
                        <Select value={age} label="Age">
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
                    <TableRow hover>
                      <TableCell padding="checkbox">
                        <Checkbox color="primary" inputProps={{}} />
                      </TableCell>
                      <TableCell component="th" scope="row" padding="none">
                        Crime Liability
                      </TableCell>
                      <TableCell>
                        <Select value={age} label="Age">
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
                        <Select value={age} label="Age">
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
                    PRODUCT
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
                      fees per Package
                    </TableCell>

                    <TableCell style={{ width: 160 }} align="right">
                      $100.44
                    </TableCell>
                  </TableRow>
                  {/* <TableRow>
                    <TableCell component="th" scope="row">
                      Commission
                    </TableCell>

                    <TableCell style={{ width: 160 }} align="right">
                      $15.15
                    </TableCell>
                  </TableRow> */}
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
                      <TableRow hover>
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
                      <TableRow hover>
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
