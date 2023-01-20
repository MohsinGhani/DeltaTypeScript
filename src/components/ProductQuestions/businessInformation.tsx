import React, { useState } from "react";
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

const BusinessInformantion = () => {
  const [date, setDate] = useState<Date>(new Date());
  const [turnOver, setTurnOver] = useState("");
  const [Over, setOver] = useState("");

  const handleClick = (event : SelectChangeEvent<string>) => {
    setOver(event.target.value);
  };

  const handleChange = (event  : SelectChangeEvent<string>) => {
    setTurnOver(event.target.value);
  };

  const handleDateChange = (newValue: any) => {
    setDate(newValue);
  };

  return (
    <div className="businessInfo_container">
      <div className="businessInfo_header">
        <Typography variant="subtitle1">
          What is your clients insured address
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
        <div className="businessInfo_locationNumberContainer">
          <div className="businessInfo_locationNumber">
            <Typography variant="subtitle1">Number of locations</Typography>
            <img src={InfoIcon} alt="Edit icon" />
          </div>
          <div className="businessInfo_locationSelect">
            <Select value={turnOver} onChange={handleChange}>
              <MenuItem value="">
                <em>None</em>
              </MenuItem>
              <MenuItem value={10}>Ten</MenuItem>
              <MenuItem value={20}>Twenty</MenuItem>
              <MenuItem value={30}>Thirty</MenuItem>
            </Select>
          </div>
        </div>
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
      <div className="businessInfo_checkbox">
        <Typography variant="subtitle1">
          Is the client exempt from stamp duty?
        </Typography>
        <FormControlLabel control={<Checkbox />} label="Yes" />
        <FormControlLabel control={<Checkbox />} label="No" />
      </div>
      <div className="businessInfo_checkbox">
        <Typography variant="subtitle1">
          Does the client earn revenue from overseas?
        </Typography>
        <FormControlLabel control={<Checkbox />} label="Yes" />
        <FormControlLabel control={<Checkbox />} label="No" />
      </div>
      <div className="businessInfo_detailHeader">
        <Typography variant="subtitle1">
          Please provide details on the insured's revenue distribution in
          Australia and/or abroad
        </Typography>
        <img src={InfoIcon} alt="Info Icon" />
      </div>
      <div className="businessInfo_stampMeasure">
        <Typography variant="subtitle1">Stamp duty measure</Typography>
        <img src={InfoIcon} alt="Edit icon" />
      </div>
      <div className="businessInfo_stampMeasureSelect">
        <Select value={Over} onChange={handleClick}>
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value={10}>Ten</MenuItem>
          <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem>
        </Select>
      </div>
      <div className="businessInfo_table">
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>NSW</TableCell>
              <TableCell>QLD</TableCell>
              <TableCell>NT</TableCell>
              <TableCell>WA</TableCell>
              <TableCell>SA</TableCell>
              <TableCell>VIC</TableCell>
              <TableCell>ACT</TableCell>
              <TableCell>TAS</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow>
              <TableCell>$ 100,000</TableCell>
              <TableCell>$ 0</TableCell>
              <TableCell>$ 0</TableCell>
              <TableCell>$ 0</TableCell>
              <TableCell>$ 0</TableCell>
              <TableCell>$ 0</TableCell>
              <TableCell>$50,000</TableCell>
              <TableCell>$70,000</TableCell>
            </TableRow>
          </TableBody>
        </Table>
        <div className="businessInfo_tablePrice">
          <Typography variant="subtitle1">$200,000</Typography>
          <Typography variant="subtitle1">Total : </Typography>
        </div>
      </div>
      {/* <div className="createQuoteStepper_buttonContainer">
          <Button>Back</Button>
          <Button variant="contained" color="primary">
            Next
          </Button>
        </div> */}
    </div>
  );
};

export default BusinessInformantion;
