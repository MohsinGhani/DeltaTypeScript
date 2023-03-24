import React from "react";
import { Button, Checkbox, FormControlLabel, Typography } from "@mui/material";

import InfoIcon from "../../assets/images/infoIcon.svg";

const MedicalMalpractice = () => {
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
          Does the Insured hold Australian accredited
training certificates for the specified treatments
you will perform (proof will be required in the
event of a claim)?
          </Typography>
          <img src={InfoIcon} alt="Info Icon" />
        </div>
        <FormControlLabel control={<Checkbox />} label="Yes" />
        <FormControlLabel control={<Checkbox />} label="No" />
      </div>
      <div className="indemnityquestions_checkbox">
        <div className="indemnityquestions_checkboxHeading">
          <Typography variant="subtitle1">
          Is cover required for more than 5 of the same type
of healthcare professionals as selected in the
occupation?
          </Typography>
          <img src={InfoIcon} alt="Info Icon" />
        </div>
        <FormControlLabel control={<Checkbox />} label="Yes" />
        <FormControlLabel control={<Checkbox />} label="No" />
      </div>
      <div className="indemnityquestions_checkbox">
        <div className="indemnityquestions_checkboxHeading">
          <Typography variant="subtitle1">
          Does the Insured require all sub-contractors and, if
relevant, all medical practitioners to hold their own
medical malpractice insurance?
          </Typography>
          <img src={InfoIcon} alt="Info Icon" />
        </div>
        <FormControlLabel control={<Checkbox />} label="Yes" />
        <FormControlLabel control={<Checkbox />} label="No" />
      </div>
      <div className="indemnityquestions_checkbox">
        <div className="indemnityquestions_checkboxHeading">
          <Typography variant="subtitle1">
          Does the Insured enter any contracts that are greater than $500k in size?
          </Typography>
          <img src={InfoIcon} alt="Info Icon" />
        </div>
        <FormControlLabel control={<Checkbox />} label="Yes" />
        <FormControlLabel control={<Checkbox />} label="No" />
      </div>
      <div className="indemnityquestions_checkbox">
        <div className="indemnityquestions_checkboxHeading">
          <Typography variant="subtitle1">
          Does the Insured perform an injectables
treatment?
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
        The Insured does not perform any of the following
activities:
          <br />
          <br /> o Aesthetic or cosmetic procedures
          <br />
          <br /> o Any teeth whitening
          <br />
          <br /> o Medical services to professional sports
individuals or elite athletes
          <br />
          <br /> o Birthing, obstetrics, or fetal scanning
activities
          <br />
          <br /> o Any e consultations or provide any advice
given over the internet including the online
prescribing of drugs
          <br />
          <br /> o Any spinal joint manipulations
          <br />
          <br /> o Treatments relating to clinical trials
        </Typography>
        <div className="indemnityquestions_checkbox">
          <FormControlLabel control={<Checkbox />} label="Yes" />
          <FormControlLabel control={<Checkbox />} label="No" />
        </div>
      </div>
    </div>
  );
};

export default MedicalMalpractice;
