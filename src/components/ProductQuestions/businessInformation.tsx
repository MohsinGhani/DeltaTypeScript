import React, { useState } from "react";
import {
  Typography,
  Select,
  MenuItem,
  TextField,
  FormControlLabel,
  Checkbox,
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

import {
  DataGrid,
  GridColumns,
  GridEditRowsModel,
  GridRowsProp,
} from "@mui/x-data-grid";

const BusinessInformantion = () => {
  return (
    <div className="businessInfo_container">
      <div className="businessInfo_header">
        <Typography variant="subtitle1">
          Complete the following question to proceed with your quote
        </Typography>
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
          Does the earn revenue from averseas?
        </Typography>
        <FormControlLabel control={<Checkbox />} label="Yes" />
        <FormControlLabel control={<Checkbox />} label="No" />
      </div>
    </div>
  );
};

export default BusinessInformantion;
