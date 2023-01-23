import React from "react";
import { Button, Checkbox, FormControlLabel, Typography } from "@mui/material";

import InfoIcon from "../../assets/images/infoIcon.svg";

const CyberQuestions = () => {
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
            Is the number of records held by the applicant {"<"} 100,000?
          </Typography>
          <img src={InfoIcon} alt="Info Icon" />
        </div>
        <FormControlLabel control={<Checkbox />} label="Yes" />
        <FormControlLabel control={<Checkbox />} label="No" />
      </div>
      <div className="indemnityquestions_checkbox">
        <div className="indemnityquestions_checkboxHeading">
          <Typography variant="subtitle1">
            Security Controls: The applicant (including subsidiaries) have
            controls in place for:<br></br> (a) system security controls such as
            anti-virus, firewall or equivalent protection and perform timely
            installation of software patches;<br></br> (b) access security such
            as passwords for all employees and other users with privileged
            access.<br></br> (c) Performs regular Backup and Recovery of
            critical and important data to an offline location disconnected from
            the live environment.<br></br> (d) The applicant uses a VPN to allow
            remote access into their network <br></br> (e) The applicant uses
            multifactor authentication for cloud based services such as cloud
            based email accounts, internet banking and accounting software and
            for all remote access to the network <br></br> (f) The applicant
            provides cybersecurity awareness training to all individuals who
            have access to the organizations network<br></br>
            <br></br> B Network Link: <br></br>Your business network (including
            your subsidiaries) is not connected to your parents’ or any main
            franchises’ network.
          </Typography>
        </div>
        <FormControlLabel control={<Checkbox />} label="Yes" />
        <FormControlLabel control={<Checkbox />} label="No" />
      </div>
      <div className="indemnityquestions_checkbox">
        <div className="indemnityquestions_checkboxHeading">
          <Typography variant="subtitle1">
            Is the applicant seeking coverage for Electronic crime?
          </Typography>
          {/* <img src={InfoIcon} alt="Info Icon" /> */}
        </div>
        <FormControlLabel control={<Checkbox />} label="Yes" />
        <FormControlLabel control={<Checkbox />} label="No" />
      </div>
      <div className="indemnityquestions_statement">
        <Typography variant="subtitle1">
          <b>Confirm that the following statements are true</b>
        </Typography>
        <Typography variant="subtitle1">
          • Is there a social engineering fraud risk management strategy in
          place?<br></br> • Does the Applicant have a call-back procedure to
          pre-agreed contact phone numbers, with customers or suppliers to:
          <br></br> o Authenticate any fund transfer instructions greater than
          $5,000 prior to transfer? Yes No<br></br> o Verify email change
          requests to the supplier or customer bank account details (including
          accountnumber, email address, contact information, bank routing
          number)? Yes No <br></br>
          <br></br>Have you received fraudulent emails within the last twelve
          (12) months, purporting to be from customers, vendors or employees,
          intending to direct transfers of your funds?<br></br> <br></br>I/We as
          the Applicant confirm all the statements above to be true and
          accurate:
        </Typography>
        <div className="indemnityquestions_checkbox">
          <FormControlLabel control={<Checkbox />} label="Yes" />
          <FormControlLabel control={<Checkbox />} label="No" />
        </div>
      </div>
    </div>
  );
};

export default CyberQuestions;
