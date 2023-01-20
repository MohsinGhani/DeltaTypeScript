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
            Any there any other PI activities other than selected occupation?
          </Typography>
          <img src={InfoIcon} alt="Info Icon" />
        </div>
        <FormControlLabel control={<Checkbox />} label="Yes" />
        <FormControlLabel control={<Checkbox />} label="No" />
      </div>
      <div className="indemnityquestions_checkbox">
        <div className="indemnityquestions_checkboxHeading">
          <Typography variant="subtitle1">
            Is the client qualified and or certified to perform the declared
            activities?
          </Typography>
          <img src={InfoIcon} alt="Info Icon" />
        </div>
        <FormControlLabel control={<Checkbox />} label="Yes" />
        <FormControlLabel control={<Checkbox />} label="No" />
      </div>
      <div className="indemnityquestions_statement">
        <Typography variant="subtitle1">
          <b>
            Please read the following statements and confirm their accuracy as
            indicated below:
          </b>
        </Typography>
        <Typography variant="subtitle1">
          The applicant uses a standard contractual agreement for the supply of
          professional services
          <br />
          <br /> The applicant uses standard contracts for the engagement of
          independent consultants or contractors
          <br />
          <br /> Nonstandard contracts are reviewed by legal counsel
          <br />
          <br /> Consultants are required to cover their own professional
          indemnity insurance
          <br />
          <br /> I/We as the Applicant confirm all the statements above to be
          true and accurate: Yes No
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
