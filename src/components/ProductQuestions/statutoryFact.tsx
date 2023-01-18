import React from "react";
import { Checkbox, FormControlLabel, Typography } from "@mui/material";

import InfoIcon from "../../assets/images/infoIcon.svg";

const StatutoryFact = () => {
  return (
    <div className="statutory_container">
      <div className="statutory_heading">
        <Typography variant="subtitle1">
          Statutory Liability Statement Of Fact
        </Typography>
        <img src={InfoIcon} alt="Client details" />
      </div>
      <div className="statutory_details">
        <Typography variant="subtitle1">
          Please read the following statements and confirm their accuracy as
          indicated below: <br />
          <br />
          The Applicant has written policies/procedures in place to ensure
          compliance with the following: <br />
          Occupational Health & Safety <br /> Environmental Protection <br />
          and All other legislation specific to their industry/business <br />
          <br />
          The Applicant’s employees are provided with the appropriate training
          in accordance with all the policies/procedures at the start of their
          employment, and when policies/procedures are updated by the Applicant
          <br />
          <br />
          If no to any of the above, please provide details on how compliance is
          maintained:
        </Typography>
      </div>
      <div className="statutory_checkbox">
        <FormControlLabel control={<Checkbox />} label="Yes" />
        <FormControlLabel control={<Checkbox />} label="No" />
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

export default StatutoryFact;
