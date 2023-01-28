import React, { useState } from "react";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Typography,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

import editIcon from "../../assets/images/editIcon.svg";
import BusinessInformantion from "./businessInformation";
import IndemnityQuestions from "./indemnityQuestions";
import DirectorQuestion from "./directorQuestions";
import Employers from "./elq";
import StatutoryFact from "./statutoryFact";
import CrimeFact from "./crimeFact";
import GeneralStatement from "./generalStatement";
import Button from "@mui/material/Button";
import CyberQuestions from "./cyberQuestions";
import MedicalMalpractice from "./medicalMalpractice";
import GenralLiability from "./genralLiability";

const CustomizedAccordions = () => {
  const [expanded, setExpanded] = useState<string | false>("panel1");

  console.log(
    "🚀 ~ file: index.tsx:22 ~ CustomizedAccordions ~ expanded",
    expanded
  );

  const handleChange =
    (panel: string) => (event: React.SyntheticEvent, isExpanded: boolean) => {
      console.log(
        "🚀 ~ file: index.tsx:183 ~ CustomizedAccordions ~ panel",
        panel
      );

      setExpanded(panel);
    };

  return (
    <div className="customizedaccordions_container">
      <Accordion
        disableGutters
        expanded={expanded === "panel1"}
        // onChange={handleChange("panel1")}
      >
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <img src={editIcon} alt="Edit Icon" />
          <Typography variant="subtitle1">
            General Business Information
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <BusinessInformantion />
          <div className="createQuoteStepper_buttonContainer">
            <Button>Back</Button>
            <Button
              variant="contained"
              color="primary"
              onClick={() => setExpanded("panel2")}
            >
              Next
            </Button>
          </div>
        </AccordionDetails>
      </Accordion>

      <Accordion
        disableGutters
        expanded={expanded === "panel2"}
        // onChange={handleChange("panel2")}
      >
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <img src={editIcon} alt="Edit Icon" />
          <Typography variant="subtitle1">
            Professional Indemnity questions
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <IndemnityQuestions />
          <div className="createQuoteStepper_buttonContainer">
            <Button onClick={() => setExpanded("panel1")}>Back</Button>

            <Button
              variant="contained"
              color="primary"
              onClick={() => setExpanded("panel3")}
            >
              Next
            </Button>
          </div>
        </AccordionDetails>
      </Accordion>

      <Accordion
        disableGutters
        expanded={expanded === "panel3"}
        // onChange={handleChange("panel3")}
      >
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <img src={editIcon} alt="Edit Icon" />
          <Typography variant="subtitle1">
            Directors and Officers Liability Questions
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <DirectorQuestion />
          <div className="createQuoteStepper_buttonContainer">
            <Button onClick={() => setExpanded("panel2")}>Back</Button>
            <Button
              variant="contained"
              color="primary"
              onClick={() => setExpanded("panel4")}
            >
              Next
            </Button>
          </div>
        </AccordionDetails>
      </Accordion>

      <Accordion
        disableGutters
        expanded={expanded === "panel4"}
        // onChange={() => handleChange("panel4")}
      >
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <img src={editIcon} alt="Edit Icon" />
          <Typography variant="subtitle1">
            Employer’s Liability Questions
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Employers />
          <div className="createQuoteStepper_buttonContainer">
            <Button onClick={() => setExpanded("panel3")}>Back</Button>
            <Button
              variant="contained"
              color="primary"
              onClick={() => setExpanded("panel5")}
            >
              Next
            </Button>
          </div>
        </AccordionDetails>
      </Accordion>
      <Accordion
        disableGutters
        expanded={expanded === "panel5"}
        // onChange={() => handleChange("panel5")}
      >
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <img src={editIcon} alt="Edit Icon" />
          <Typography variant="subtitle1">
            Statutory Liability Questions
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <StatutoryFact />
          <div className="createQuoteStepper_buttonContainer">
            <Button onClick={() => setExpanded("panel4")}>Back</Button>
            <Button
              variant="contained"
              color="primary"
              onClick={() => setExpanded("panel6")}
            >
              Next
            </Button>
          </div>
        </AccordionDetails>
      </Accordion>
      <Accordion
        disableGutters
        expanded={expanded === "panel6"}
        // onChange={() => handleChange("panel6")}
      >
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <img src={editIcon} alt="Edit Icon" />
          <Typography variant="subtitle1">Crime Liability Questions</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <CrimeFact />
          <div className="createQuoteStepper_buttonContainer">
            <Button onClick={() => setExpanded("panel5")}>Back</Button>
            <Button
              variant="contained"
              color="primary"
              onClick={() => setExpanded("panel7")}
            >
              Next
            </Button>
          </div>
        </AccordionDetails>
      </Accordion>

      <Accordion
        disableGutters
        expanded={expanded === "panel7"}
        // onChange={handleChange("panel7")}
      >
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <img src={editIcon} alt="Edit Icon" />
          <Typography variant="subtitle1">Cyber Questions</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <CyberQuestions />
          <div className="createQuoteStepper_buttonContainer">
            <Button onClick={() => setExpanded("panel6")}>Back</Button>
            <Button
              variant="contained"
              color="primary"
              onClick={() => setExpanded("panel8")}
            >
              Next
            </Button>
          </div>
        </AccordionDetails>
      </Accordion>

      <Accordion
        disableGutters
        expanded={expanded === "panel8"}
        // onChange={handleChange("panel7")}
      >
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <img src={editIcon} alt="Edit Icon" />
          <Typography variant="subtitle1">Medical Malpractice</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <MedicalMalpractice />
          <div className="createQuoteStepper_buttonContainer">
            <Button onClick={() => setExpanded("panel7")}>Back</Button>
            <Button
              variant="contained"
              color="primary"
              onClick={() => setExpanded("panel9")}
            >
              Next
            </Button>
          </div>
        </AccordionDetails>
      </Accordion>

      <Accordion
        disableGutters
        expanded={expanded === "panel9"}
        // onChange={handleChange("panel7")}
      >
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <img src={editIcon} alt="Edit Icon" />
          <Typography variant="subtitle1">Genral Liability</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <GenralLiability />
          <div className="createQuoteStepper_buttonContainer">
            <Button onClick={() => setExpanded("panel8")}>Back</Button>
            <Button
              variant="contained"
              color="primary"
              onClick={() => setExpanded("panel10")}
            >
              Next
            </Button>
          </div>
        </AccordionDetails>
      </Accordion>

      <Accordion
        disableGutters
        expanded={expanded === "panel10"}
        // onChange={() => handleChange("panel7")}
      >
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <img src={editIcon} alt="Edit Icon" />
          <Typography variant="subtitle1">General Statement Of Fact</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <GeneralStatement />
          <div className="createQuoteStepper_buttonContainer">
            <Button onClick={() => setExpanded("panel9")}>Back</Button>
            <Button variant="contained" color="primary">
              Next
            </Button>
          </div>
        </AccordionDetails>
      </Accordion>
    </div>
  );
};

export default CustomizedAccordions;
