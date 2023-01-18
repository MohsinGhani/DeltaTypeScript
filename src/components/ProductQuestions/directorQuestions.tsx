import {
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
        <Typography variant="subtitle1">
          Would you like Social engineering cover?
        </Typography>
      </div>
      <div className="directors_checkbox">
        <FormControlLabel control={<Checkbox />} label="Yes" />
        <FormControlLabel control={<Checkbox />} label="No" />
      </div>
      <div className="directors_checkboxQuestion">
        <Typography variant="subtitle1">
          Are there any additional entities to be covered on this policy?
        </Typography>
      </div>
      <div className="directors_checkbox">
        <FormControlLabel control={<Checkbox />} label="Yes" />
        <FormControlLabel control={<Checkbox />} label="No" />
      </div>
      <div className="directors_checkboxQuestion">
        <Typography variant="subtitle1">
          Does the applicant operate under a AFSL or under the direction of a
          third party's AFSL
        </Typography>
      </div>
      <div className="directors_checkbox">
        <FormControlLabel control={<Checkbox />} label="Yes" />
        <FormControlLabel control={<Checkbox />} label="No" />
      </div>
      <div className="directors_heading directors_padding">
        <Typography variant="subtitle1">
          Please provide your financials for last year and current year estimate
        </Typography>
        <img src={InfoIcon} alt="Info Icon" />
      </div>
      <div className="directors_financialFormContainer">
        <div className="directors_financialHeadingContainer">
          <div className="directors_financialHeading" />
          <div className="directors_financialHeading">
            <Typography variant="subtitle1">Last financial year</Typography>
          </div>
          <div className="directors_financialHeading">
            <Typography variant="subtitle1">Current year estimate</Typography>
          </div>
        </div>
        <div className="directors_financialFieldContainer">
          <div className="directors_financialHeadingAndIcon">
            <Typography variant="subtitle1">Turnover</Typography>
            <img src={InfoIcon} alt="Info Icon" />
          </div>
          <div className="directors_financialFieldInput">
            <OutlinedInput
              startAdornment={
                <InputAdornment position="start">$</InputAdornment>
              }
            />
          </div>
          <div className="directors_financialFieldInput">
            <OutlinedInput
              startAdornment={
                <InputAdornment position="start">$</InputAdornment>
              }
            />
          </div>
        </div>
        <div className="directors_financialFieldContainer">
          <div className="directors_financialHeadingAndIcon">
            <Typography variant="subtitle1">After Tax Profit</Typography>
            <img src={InfoIcon} alt="Info Icon" />
          </div>
          <div className="directors_financialFieldInput">
            <OutlinedInput
              startAdornment={
                <InputAdornment position="start">$</InputAdornment>
              }
            />
          </div>
          <div className="directors_financialFieldInput">
            <OutlinedInput
              startAdornment={
                <InputAdornment position="start">$</InputAdornment>
              }
            />
          </div>
        </div>
        <div className="directors_financialFieldContainer">
          <div className="directors_financialHeadingAndIcon">
            <Typography variant="subtitle1">Total Assets</Typography>
            <img src={InfoIcon} alt="Info Icon" />
          </div>
          <div className="directors_financialFieldInput">
            <OutlinedInput
              startAdornment={
                <InputAdornment position="start">$</InputAdornment>
              }
            />
          </div>
          <div className="directors_financialFieldInput">
            <OutlinedInput
              startAdornment={
                <InputAdornment position="start">$</InputAdornment>
              }
            />
          </div>
        </div>
        <div className="directors_financialFieldContainer">
          <div className="directors_financialHeadingAndIcon">
            <Typography variant="subtitle1">Net Assets</Typography>
            <img src={InfoIcon} alt="Info Icon" />
          </div>
          <div className="directors_financialFieldInput">
            <OutlinedInput
              startAdornment={
                <InputAdornment position="start">$</InputAdornment>
              }
            />
          </div>
          <div className="directors_financialFieldInput">
            <OutlinedInput
              startAdornment={
                <InputAdornment position="start">$</InputAdornment>
              }
            />
          </div>
        </div>
      </div>
      <div className="directors_checkboxQuestion">
        <Typography variant="subtitle1">
          Is the Applicant currently able to meet its debts as they fall due?
          <img src={InfoIcon} alt="Info Icon" />
        </Typography>
      </div>
      <div className="directors_checkbox">
        <FormControlLabel control={<Checkbox />} label="Yes" />
        <FormControlLabel control={<Checkbox />} label="No" />
      </div>
      <div className="directors_checkboxQuestion">
        <Typography variant="subtitle1">
          Does the Applicant want Delta to consider removing the insolvency
          coverage restriction?
          <img src={InfoIcon} alt="Info Icon" />
        </Typography>
      </div>
      <div className="directors_checkbox">
        <FormControlLabel control={<Checkbox />} label="Yes" />
        <FormControlLabel control={<Checkbox />} label="No" />
      </div>
      <div className="directors_checkboxQuestion">
        <Typography variant="subtitle1">
          Has the Applicant made or are there any pending acquisitions, mergers,
          divestments or change in ownership of greater than 50% of the issues
          share capital of the Applicant in either the past or following 12
          months?
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
