import React, { useState } from "react";
import { Typography, FormControlLabel, Checkbox } from "@mui/material";

import InfoIcon from "../../assets/images/infoIcon.svg";

const GenralLiability = () => {
  return (
    <div className="businessInfo_container">
      <div className="businessInfo_checkbox">
        <Typography variant="subtitle1">
          Do you undertake any manual work?
        </Typography>
        <FormControlLabel control={<Checkbox />} label="Yes" />
        <FormControlLabel control={<Checkbox />} label="No" />
      </div>
      <div className="businessInfo_checkbox">
        <Typography variant="subtitle1">
          Do you have any property of others in your physical or legal control
        </Typography>
        <FormControlLabel control={<Checkbox />} label="Yes" />
        <FormControlLabel control={<Checkbox />} label="No" />
      </div>
      <div className="businessInfo_checkbox">
        <Typography variant="subtitle1">
          Do you assume liability under contract or hold harmless (other then
          lease liability)?
        </Typography>
        <FormControlLabel control={<Checkbox />} label="Yes" />
        <FormControlLabel control={<Checkbox />} label="No" />
      </div>
    </div>
  );
};

export default GenralLiability;
