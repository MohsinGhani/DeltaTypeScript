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
          Is the number of records held by the Insured {"<"} 100,000?
          </Typography>
          <img src={InfoIcon} alt="Info Icon" />
        </div>
        <FormControlLabel control={<Checkbox />} label="Yes" />
        <FormControlLabel control={<Checkbox />} label="No" />
      </div>
      <div className="indemnityquestions_checkbox">
        <div className="indemnityquestions_checkboxHeading">
          <Typography variant="subtitle1">
          Does the Insured have a data privacy policy in
place?
          </Typography>
          <img src={InfoIcon} alt="Info Icon" />
        </div>
        <FormControlLabel control={<Checkbox />} label="Yes" />
        <FormControlLabel control={<Checkbox />} label="No" />
      </div>
      <div className="indemnityquestions_checkbox">
        <div className="indemnityquestions_checkboxHeading">
          <Typography variant="subtitle1">
          When credit card information is stored, is the
Insured required to comply with payment card
industry standards?
          </Typography>
          <img src={InfoIcon} alt="Info Icon" />
        </div>
        <FormControlLabel control={<Checkbox />} label="Yes" />
        <FormControlLabel control={<Checkbox />} label="No" />
      </div>
      <div className="indemnityquestions_checkbox">
        <div className="indemnityquestions_checkboxHeading">
          <Typography variant="subtitle1">
          Is the Insured’s network (including subsidiaries)
connected to any parent company or any main
franchisors network?
          </Typography>
          <img src={InfoIcon} alt="Info Icon" />
        </div>
        <FormControlLabel control={<Checkbox />} label="Yes" />
        <FormControlLabel control={<Checkbox />} label="No" />
      </div>
      <div className="indemnityquestions_checkbox">
        <div className="indemnityquestions_checkboxHeading">
          <Typography variant="subtitle1">
            Security Controls: The Insured (including subsidiaries) has controls in
place for:<br></br> (a) system security controls such as anti-virus,
firewall or equivalent protection and
performs timely installation of software
patches;<br></br> (b) access security such as passwords for all employees and other users with privileged access.<br>
</br> (c)performing regular Backup and Recovery of
critical and important data to an offline
location disconnected from the live
environment.<br></br> (d) using a VPN to allow remote access into
their network<br></br> (e) using multifactor authentication for cloud-
based services such as cloud-based email
accounts, internet banking and accounting
software and for all remote access to the
network<br></br> (f) providing cybersecurity awareness training
to all individuals who have access to the
Insured’s network<br></br>
            {/* <br></br> B Network Link: <br></br>Your business network (including
            your subsidiaries) is not connected to your parents’ or any main
            franchises’ network. */}
          </Typography>
        </div>
        <FormControlLabel control={<Checkbox />} label="Yes" />
        <FormControlLabel control={<Checkbox />} label="No" />
      </div>
      <div className="indemnityquestions_checkbox">
        <div className="indemnityquestions_checkboxHeading">
          <Typography variant="subtitle1">
          Does the Insured outsource any network or
storage services?
          </Typography>
          {/* <img src={InfoIcon} alt="Info Icon" /> */}
        </div>
        <FormControlLabel control={<Checkbox />} label="Yes" />
        <FormControlLabel control={<Checkbox />} label="No" />
      </div>
      <div className="indemnityquestions_checkbox">
        <div className="indemnityquestions_checkboxHeading">
          <Typography variant="subtitle1">
          Does the Insured have a process in place to review
all content prior to positing on the internet?
          </Typography>
          {/* <img src={InfoIcon} alt="Info Icon" /> */}
        </div>
        <FormControlLabel control={<Checkbox />} label="Yes" />
        <FormControlLabel control={<Checkbox />} label="No" />
      </div>
      <div className="indemnityquestions_checkbox">
        <div className="indemnityquestions_checkboxHeading">
          <Typography variant="subtitle1">
          Does the Insured have a social engineering fraud
risk management strategy in place? 
          </Typography>
          {/* <img src={InfoIcon} alt="Info Icon" /> */}
        </div>
        <FormControlLabel control={<Checkbox />} label="Yes" />
        <FormControlLabel control={<Checkbox />} label="No" />
      </div>
      <div className="indemnityquestions_checkbox">
        <div className="indemnityquestions_checkboxHeading">
          <Typography variant="subtitle1">
          Does the Insured have a call-back procedure to pre-agreed contact phone numbers, with customers or
suppliers to authenticate any fund transfer
instructions greater than $5,000 prior to transfer? 
          </Typography>
          {/* <img src={InfoIcon} alt="Info Icon" /> */}
        </div>
        <FormControlLabel control={<Checkbox />} label="Yes" />
        <FormControlLabel control={<Checkbox />} label="No" />
      </div>
      <div className="indemnityquestions_checkbox">
        <div className="indemnityquestions_checkboxHeading">
          <Typography variant="subtitle1">
          Does the Insured have a call-back procedure to pre-agreed contact phone numbers, with customers or
suppliers to verify email change requests to the
supplier or customer bank account details
(including account number, email address, contact
information, bank routing number)?
          </Typography>
          {/* <img src={InfoIcon} alt="Info Icon" /> */}
        </div>
        <FormControlLabel control={<Checkbox />} label="Yes" />
        <FormControlLabel control={<Checkbox />} label="No" />
      </div>
      <div className="indemnityquestions_checkbox">
        <div className="indemnityquestions_checkboxHeading">
          <Typography variant="subtitle1">
          Has the Insured received fraudulent emails within
the last twelve (12) months, purporting to be from
customers, vendors or employees, intending to
direct transfers of the Insured’s funds?
          </Typography>
          {/* <img src={InfoIcon} alt="Info Icon" /> */}
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
          {/* <img src={InfoIcon} alt="Info Icon" /> */}
        </div>
        <FormControlLabel control={<Checkbox />} label="Yes" />
        <FormControlLabel control={<Checkbox />} label="No" />
      </div>
      {/* <div className="indemnityquestions_statement">
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
      </div> */}
    </div>
  );
};

export default CyberQuestions;
