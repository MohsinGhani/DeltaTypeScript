import {
  Button,
  Checkbox,
  FormControlLabel,
  InputAdornment,
  OutlinedInput,
  Typography,
} from "@mui/material";
import InfoIcon from "../../assets/images/infoIcon.svg";
import React from "react";

const DirectorQuestion = () => {
  return (
    <div className="directors_container">
      <div className="directors_heading">
        <Typography variant="subtitle1">
          Please answer the following D&O questions
        </Typography>
        <img src={InfoIcon} alt="Info Icon" />
      </div>
      <div className="directors_checkboxQuestion">
        <Typography variant="subtitle1">Is the company listed?</Typography>
      </div>
      <div className="directors_checkbox">
        <FormControlLabel control={<Checkbox />} label="Yes" />
        <FormControlLabel control={<Checkbox />} label="No" />
      </div>
      <div className="directors_checkboxQuestion">
        <Typography variant="subtitle1">
          {/* Are there any additional entities to be covered on this policy? */}
          Are there any additional Companies (other than
Subsidiaries) to be covered under this policy?
        </Typography>
      </div>
      <div className="directors_checkbox">
        <FormControlLabel control={<Checkbox />} label="Yes" />
        <FormControlLabel control={<Checkbox />} label="No" />
      </div>
      <div className="directors_checkboxQuestion">
        <Typography variant="subtitle1">
          {/* Does the applicant operate under a AFSL or under the direction of a
          third party's AFSL */}
          Does the Insured have any securities listed in any
stock exchange such as the ASX?
        </Typography>
      </div>
      <div className="directors_checkbox">
        <FormControlLabel control={<Checkbox />} label="Yes" />
        <FormControlLabel control={<Checkbox />} label="No" />
      </div>

      <div className="directors_checkboxQuestion">
        <Typography variant="subtitle1">
        Does the Insured operate under a AFSL or under
the direction of a third party's AFSL?
          <img src={InfoIcon} alt="Info Icon" />
        </Typography>
      </div>
      <div className="directors_checkbox">
        <FormControlLabel control={<Checkbox />} label="Yes" />
        <FormControlLabel control={<Checkbox />} label="No" />
      </div>
      <div className="directors_checkboxQuestion">
        <Typography variant="subtitle1">
        Has the Insured been trading for less than 2 years?
          <img src={InfoIcon} alt="Info Icon" />
        </Typography>
      </div>
      <div className="directors_checkbox">
        <FormControlLabel control={<Checkbox />} label="Yes" />
        <FormControlLabel control={<Checkbox />} label="No" />
      </div>
      <div className="directors_checkboxQuestion">
        <Typography variant="subtitle1">
        Has the Insured made or are there any pending acquisitions, mergers, divestments or change in ownership of greater than 50% of the issued share capital of the Insured in either the past or following 12 months?
          <img src={InfoIcon} alt="Info Icon" />
        </Typography>
      </div>
      <div className="directors_checkbox">
        <FormControlLabel control={<Checkbox />} label="Yes" />
        <FormControlLabel control={<Checkbox />} label="No" />
      </div>
      <div className="directors_checkboxQuestion">
        <Typography variant="subtitle1">
        Has the Insured had two consecutive periods of after-tax losses?
          <img src={InfoIcon} alt="Info Icon" />
        </Typography>
      </div>
      <div className="directors_checkbox">
        <FormControlLabel control={<Checkbox />} label="Yes" />
        <FormControlLabel control={<Checkbox />} label="No" />
      </div>
      <div className="directors_checkboxQuestion">
        <Typography variant="subtitle1">
        Are the Insured’s gross consolidated net assets for the last actual financial year less than zero?
          <img src={InfoIcon} alt="Info Icon" />
        </Typography>
      </div>
      <div className="directors_checkbox">
        <FormControlLabel control={<Checkbox />} label="Yes" />
        <FormControlLabel control={<Checkbox />} label="No" />
      </div>
      <div className="directors_checkboxQuestion">
        <Typography variant="subtitle1">
        Is the Insured currently able to meet its debts asthey fall due?
          <img src={InfoIcon} alt="Info Icon" />
        </Typography>
      </div>
      <div className="directors_checkbox">
        <FormControlLabel control={<Checkbox />} label="Yes" />
        <FormControlLabel control={<Checkbox />} label="No" />
      </div>
      <div className="directors_checkboxQuestion">
        <Typography variant="subtitle1">
        Does the Insured want to have the insolvency coverage restriction removed from the Directors’ & Officers’ & Corporate Legal Liability coverage?
          <img src={InfoIcon} alt="Info Icon" />
        </Typography>
      </div>
      <div className="directors_checkbox">
        <FormControlLabel control={<Checkbox />} label="Yes" />
        <FormControlLabel control={<Checkbox />} label="No" />
      </div>
    </div>
  );
};

export default DirectorQuestion;
