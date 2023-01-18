import React from "react";
import { Checkbox, FormControlLabel, Typography } from "@mui/material";

import InfoIcon from "../../assets/images/infoIcon.svg";

const Employers = () => {
  return (
    <>
      <div className="employerquestions_container">
        <div className="employerquestions_heading">
          <Typography variant="subtitle1">
            Employer’s Liability Questions
          </Typography>
          <img src={InfoIcon} alt="client details" />
        </div>
        <div className="employerquestions_applicant">
          <div className="employerquestions_applicantText">
            <Typography variant="subtitle1">
              Does the Applicant have a written employee handbook which is
              distributed to all employees?
              <img src={InfoIcon} alt="client details" />
            </Typography>
          </div>
          <FormControlLabel control={<Checkbox />} label="Yes" />
          <FormControlLabel control={<Checkbox />} label="No" />
        </div>
        <div className="employerquestions_applicant">
          <div className="employerquestions_applicantText">
            <Typography variant="subtitle1">
              Have any Directors, Officers & Employees have resigned, had their
              employment terminated, were made redundant or took early
              retirement in the last 12 months?
              <img src={InfoIcon} alt="client details" />
            </Typography>
          </div>
          <FormControlLabel control={<Checkbox />} label="Yes" />
          <FormControlLabel control={<Checkbox />} label="No" />
        </div>
        <div className="employerquestions_applicant">
          <div className="employerquestions_applicantText">
            <Typography variant="subtitle1">
              Is the Applicant considering any employee reductions or
              redundancies in the next twelve months, including anything
              resulting from a branch, office, or subsidiary closing or
              consolidation?
              <img src={InfoIcon} alt="client details" />
            </Typography>
          </div>
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
    </>
  );
};

export default Employers;
