import React from "react";
import { Checkbox, FormControlLabel, Typography } from "@mui/material";

const GeneralStatement = () => {
  return (
    <div className="generalstatement_container">
      <div className="generalstatement_heading">
        <Typography variant="subtitle1">
          Please read the following statements and confirm their accuracy as
          indicated below.
        </Typography>
      </div>
      <div className="generalstatement_text">
        <Typography variant="subtitle1">
          • The applicant is not current insured by Delta Insurance Australia
          for management liability insurance;<br></br>• The applicant has not
          ever had any insurance declined or cancelled, renewal refused, special
          conditions imposed, or a claim rejected;<br></br>• No claim,
          proceeding or demand has been made or brought against the Applicant or
          any of its directors, officer, or employees in the last five years
          (whether insured or not);
          <br></br>• The Applicant or any of its directors, officers or
          employees have not been the subject to any regulatory, administrative
          or governmental investigation in the last five years (whether insured
          or not);<br></br>• No crime losses have been sustained by the
          Applicant in the last five years; <br></br>• The Applicant, after
          enquiry, is not aware of any act, error, omission, event,
          circumstance, or incident which may give rise to a claim, proceeding
          or demand, or any regulatory, administrative or governmental
          investigation or crime loss. <br />
          <br /> I/We as the Applicant confirm all the statements above to be
          true and accurate
        </Typography>
      </div>
      <div className="generalstatement_checkbox">
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

export default GeneralStatement;
