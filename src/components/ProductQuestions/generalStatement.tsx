import React from "react";
import { Button, Checkbox, FormControlLabel, Typography } from "@mui/material";

const GeneralStatement = () => {
  return (
    <div className="generalstatement_container">
      <div className="generalstatement_heading">
        <Typography variant="subtitle1">
        Please read the following statements and confirm
their accuracy as indicated below for the proposed
insurances the Insured is seeking cover for:
        </Typography>
      </div>
      <div className="generalstatement_text">
        <Typography variant="subtitle1">
        • The Insured is not currently insured by Delta
Insurance Australia;<br></br>• The Insured has not ever had any insurance
declined or cancelled, renewal refused, special
conditions imposed, or a claim rejected;<br></br>• No claim, proceeding or demand has been made
or brought against the Insured or any of its
directors, officer, or employees (whether insured or
not);
          <br></br>• The Insured, after enquiry, is not aware of any
act, error, omission, event, circumstance, or
incident which may give rise to a claim, proceeding
or demand, or any regulatory, administrative or
governmental investigation or crime loss (whether
insured or not).<br></br>The Insured has not received any claims or
complaints in respect of privacy, breach of
information or network security, unauthorised
disclosure of information or defamation content or
infringement. <br></br>The Insured has not been subject to a criminal
conviction (excluding motor offences) or have any
pending criminal matters awaiting a court hearing.
I/We as the Insured confirm all the statements
above to be true and accurate: <br />
          
        </Typography>
      </div>
      <div className="generalstatement_checkbox">
        <FormControlLabel control={<Checkbox />} label="Yes" />
        <FormControlLabel control={<Checkbox />} label="No" />
      </div>
  
    </div>
  );
};

export default GeneralStatement;
