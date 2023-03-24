import React, { useState } from "react";
import {
  Typography,
  FormControlLabel,
  Checkbox,
  FormGroup,
} from "@mui/material";

const BusinessInformantion = ({ values, handleChange, error }: any) => {
  return (
    <form className="businessInfo_container">
      <div className="businessInfo_header">
        <Typography variant="subtitle1">
          Complete the following question to proceed with your quote
        </Typography>
      </div>

      <div className="businessInfo_checkbox">
        <Typography variant="subtitle1">
          {/* Do you have any overseas locations? */}
          Is the Insured domiciled in Australia?
        </Typography>
        {/* <FormControlLabel control={<Checkbox />} label="Yes" />
        <FormControlLabel control={<Checkbox />} label="No" /> */}
        <FormGroup>
          <FormControlLabel
            control={
              <Checkbox
                onChange={handleChange}
                name="yes"
                value={values?.overseas}
                // error={errors.overseas}
              />
            }
            label="Yes"
          />
          <FormControlLabel
            control={
              <Checkbox
                onChange={handleChange}
                name="no"
                value={values?.overseas}
              />
            }
            label="No"
          />
        </FormGroup>
      </div>
      <div className="businessInfo_checkbox">
        <Typography variant="subtitle1">
          {/* Does the earn revenue from averseas? */}
          Does the Insured undertake all of their business activities in
          Australia?
        </Typography>
        <FormControlLabel control={<Checkbox />} label="Yes" />
        <FormControlLabel control={<Checkbox />} label="No" />
      </div>
      <div className="businessInfo_checkbox">
        <Typography variant="subtitle1">
          {/* Does the earn revenue from averseas? */}
          Does the Insured undertake any other activities/services other than
          the selected occupation
        </Typography>
        <FormControlLabel control={<Checkbox />} label="Yes" />
        <FormControlLabel control={<Checkbox />} label="No" />
      </div>
    </form>
  );
};

export default BusinessInformantion;
