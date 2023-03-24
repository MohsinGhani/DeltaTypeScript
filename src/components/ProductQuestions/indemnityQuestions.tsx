import React from "react";
import { Button, Checkbox, FormControlLabel, Typography } from "@mui/material";

import InfoIcon from "../../assets/images/infoIcon.svg";

const IndemnityQuestions = () => {
  return (
    <div className="indemnityquestions_container">
      <div className="indemnityquestions_heading">
        <Typography variant="subtitle1">
          Confirm the following about your client
        </Typography>
      </div>

      <div className="indemnityquestions_checkbox">
        <div className="indemnityquestions_checkboxHeading">
          <Typography variant="subtitle1">
            {/* Any there any other PI activities other than selected occupation? */}
            Is the Insured qualified and/or certified to perform
the declared activities?
          </Typography>
          <img src={InfoIcon} alt="Info Icon" />
        </div>
        <FormControlLabel control={<Checkbox />} label="Yes" />
        <FormControlLabel control={<Checkbox />} label="No" />
      </div>
      <div className="indemnityquestions_checkbox">
        <div className="indemnityquestions_checkboxHeading">
          <Typography variant="subtitle1">
            {/* Is the client qualified and or certified to perform the declared
            activities? */}
           
Does the Insured enter any contracts that are
greater than $500k in size?
          </Typography>
          <img src={InfoIcon} alt="Info Icon" />
        </div>
        <FormControlLabel control={<Checkbox />} label="Yes" />
        <FormControlLabel control={<Checkbox />} label="No" />
      </div>
      <div className="indemnityquestions_checkbox">
        <div className="indemnityquestions_checkboxHeading">
          <Typography variant="subtitle1">
            Has the Insured previously held continuous claims
made cover for all the Insured’s business activities
to be insured by this policy (proof may be required
in the event of a claim)?
          </Typography>
          <img src={InfoIcon} alt="Info Icon" />
        </div>
        <FormControlLabel control={<Checkbox />} label="Yes" />
        <FormControlLabel control={<Checkbox />} label="No" />
      </div>
      <div className="indemnityquestions_statement">
        <Typography variant="subtitle1">
          <b>
          Please read the following statements and confirm
their accuracy as indicated below:
          </b>
        </Typography>
        <Typography variant="subtitle1">
          {/* <br /> */}
          <br /> The Insured uses standard contracts for the
engagement of independent consultants or
contractors
          {/* <br /> */}
          <br /> Nonstandard contracts are reviewed by legal
counsel
          {/* <br /> */}
          <br /> Consultants are required to cover their own
professional indemnity insurance
          {/* <br /> */}
          <br /> I/We as the Insured confirm all the statements
above to be true and accurate
          <br/>The Insured uses a standard contractual agreement
for the supply of professional services.

        </Typography>
        <div className="indemnityquestions_checkbox">
          <FormControlLabel control={<Checkbox />} label="Yes" />
          <FormControlLabel control={<Checkbox />} label="No" />
        </div>

      </div>
 
    </div>
  );
};

export default IndemnityQuestions;
