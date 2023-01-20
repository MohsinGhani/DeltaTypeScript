import React from "react";
import { Button, Checkbox, FormControlLabel, Typography } from "@mui/material";

import InfoIcon from "../../assets/images/infoIcon.svg";

const CrimeFact = () => {
  return (
    <div className="crimequestions_container">
      <div className="crimequestions_heading">
        <Typography variant="subtitle1">
          Crime Liability Statement Of Fact
        </Typography>
        <img src={InfoIcon} alt="Info icon" />
      </div>
      <div className="crimequestions_statement">
        <Typography variant="subtitle1">
          Please read the following statements and confirm their accuracy as
          indicated below:
        </Typography>
      </div>
      <br />
      <Typography variant="subtitle1">
        • Are the duties of each employee arranged so that no one employee is
        permitted to control any transaction from commencement to completion?
        <br></br> • Does the Applicant maintain an approved supplier/service
        providers master list? <br></br> • Is an independent physical count of
        stock, raw materials, work-in-progress, & finished goods undertaken at
        least half-yearly, and is this count reconciled against stock records?
        <br></br>• Is there an IT cyber security plan in place that is regularly
        reviewed, updated & tested?
      </Typography>
      <div className="crimequestions_statement">
        <Typography variant="subtitle1">
          Would you like Social engineering cover?
        </Typography>
      </div>
      <div className="crimequestions_checkbox">
        <FormControlLabel control={<Checkbox />} label="Yes" />
        <FormControlLabel control={<Checkbox />} label="No" />
      </div>
      <div className="crimequestions_social">
        <Typography variant="subtitle1">
          If no to any of the above, please elaborate as to why these controls
          are not in place:
        </Typography>
      </div>
      <div className="crimequestions_checkbox">
        <FormControlLabel control={<Checkbox />} label="Yes" />
        <FormControlLabel control={<Checkbox />} label="No" />
      </div>
   
    </div>
  );
};

export default CrimeFact;
