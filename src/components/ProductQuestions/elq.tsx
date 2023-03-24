import React from "react";
import { Button, Checkbox, FormControlLabel, Typography } from "@mui/material";

import InfoIcon from "../../assets/images/infoIcon.svg";

const Employers = () => {
  return (
    <>
      <div className="employerquestions_container">
        <div className="employerquestions_heading">
          <Typography variant="subtitle1">
          Employment Practices Liability Questions
          </Typography>
          <img src={InfoIcon} alt="client details" />
        </div>
        <div className="employerquestions_applicant">
          <div className="employerquestions_applicantText">
            <Typography variant="subtitle1">
            Does the Insured have a written employee
handbook which is distributed to all employees?
              <img src={InfoIcon} alt="client details" />
            </Typography>
          </div>
          <FormControlLabel control={<Checkbox />} label="Yes" />
          <FormControlLabel control={<Checkbox />} label="No" />
        </div>
        <div className="employerquestions_applicant">
          <div className="employerquestions_applicantText">
            <Typography variant="subtitle1">
            Have any of the Insured’s Directors, Officers or
Employees involuntarily resigned, had their
employment terminated, were made redundant or
took early retirement in the last 12 months?
              <img src={InfoIcon} alt="client details" />
            </Typography>
          </div>
          <FormControlLabel control={<Checkbox />} label="Yes" />
          <FormControlLabel control={<Checkbox />} label="No" />
        </div>
        <div className="employerquestions_applicant">
          <div className="employerquestions_applicantText">
            <Typography variant="subtitle1">
            Is the Insured considering any employee reductions
or redundancies in the next twelve months,
including anything resulting from a branch, office,
or subsidiary closing or consolidation?
              <img src={InfoIcon} alt="client details" />
            </Typography>
          </div>
          <FormControlLabel control={<Checkbox />} label="Yes" />
          <FormControlLabel control={<Checkbox />} label="No" />
        </div>
      
      </div>
    </>
  );
};

export default Employers;
