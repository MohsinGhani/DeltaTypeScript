import React, { useState } from "react";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Typography,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

import editIconGrey from "../../assets/images/editIconGrey.svg";
import BusinessInformantion from "./businessInformation";
import IndemnityQuestions from "./indemnityQuestions";
import DirectorQuestion from "./directorQuestions";
import Employers from "./elq";
import StatutoryFact from "./statutoryFact";
import CrimeFact from "./crimeFact";
import GeneralStatement from "./generalStatement";

const CustomizedAccordions = () => {
  const [expanded, setExpanded] = useState<string>("panel1");

  const handleChange = (panel: string) =>  {
    setExpanded(panel);
  };

  return (
    <div className="customizedaccordions_container">
      <Accordion
        disableGutters
        onChange={()=>handleChange("dgwsafg")}
        expanded={expanded === "panel1"}
      >
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <img src={editIconGrey} alt="Edit Icon" />
          <Typography variant="subtitle1">
            General Business Information
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <BusinessInformantion />
        </AccordionDetails>
      </Accordion>
      <Accordion
        disableGutters
        expanded={expanded === "panel2"}
        onChange={()=>handleChange("panel2")}
      >
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <img src={editIconGrey} alt="Edit Icon" />
          <Typography variant="subtitle1">
            Professional Indemnity questions
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <IndemnityQuestions />
        </AccordionDetails>
      </Accordion>
      <Accordion
        disableGutters
        expanded={expanded === "panel3"}
        onChange={()=>handleChange("panel3")}
      >
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <img src={editIconGrey} alt="Edit Icon" />
          <Typography variant="subtitle1">
            Directors and Officers Liability Questions
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <DirectorQuestion />
        </AccordionDetails>
      </Accordion>
      <Accordion
        disableGutters
        expanded={expanded === "panel4"}
        onChange={()=>handleChange("panel4")}
      >
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <img src={editIconGrey} alt="Edit Icon" />
          <Typography variant="subtitle1">
            Employer’s Liability Questions
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Employers />
        </AccordionDetails>
      </Accordion>
      <Accordion
        disableGutters
        expanded={expanded === "panel5"}
        onChange={()=>handleChange("panel5")}
      >
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <img src={editIconGrey} alt="Edit Icon" />
          <Typography variant="subtitle1">
            Statutory Liability Questions
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <StatutoryFact />
        </AccordionDetails>
      </Accordion>
      <Accordion
        disableGutters
        expanded={expanded === "panel6"}
        onChange={()=>handleChange("panel6")}
      >
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <img src={editIconGrey} alt="Edit Icon" />
          <Typography variant="subtitle1">Crime Liability Questions</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <CrimeFact />
        </AccordionDetails>
      </Accordion>
      <Accordion
        disableGutters
        expanded={expanded === "panel7"}
        onChange={()=>handleChange("panel7")}
      >
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <img src={editIconGrey} alt="Edit Icon" />
          <Typography variant="subtitle1">General Statement Of Fact</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <GeneralStatement />
        </AccordionDetails>
      </Accordion>
    </div>
  );
};

export default CustomizedAccordions;
