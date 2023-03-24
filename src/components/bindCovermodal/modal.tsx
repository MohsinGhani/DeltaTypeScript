import React, { useState } from "react";
import { Box, Button, Typography, Modal, Paper } from "@mui/material";

import InfoIcon from "../../assets/images/infoIcon.svg";
import BindCover from "../BindCover";
const steps = ["Bind Cover"];

function _renderStepContent(step: number) {
  switch (step) {
    case 3:
      return <BindCover />;
    default:
      return <BindModal />;
  }
}
const BindModal = ({ open, handleOpen, handleClose, onBind }: any) => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeStep, setActiveStep] = useState(0);
  const isLastStep = activeStep === steps.length - 1;

  // const handleChange = (event: SelectChangeEvent<string>) => {
  //   setSelect(event.target.value);
  // };

  return (
    <div>
      <div>
        <Modal open={open} onClose={handleClose}>
          <Box sx={{ width: 711, height: 508 }}>
            {_renderStepContent(activeStep)}
            <Paper>
              <>
                <div className="bind_modal">
                  <Typography variant="h6">Binding confirmation</Typography>

                  <img src={InfoIcon} alt="Client details" />
                </div>
                <div className="bindmodal_selectHeader">
                  <Typography variant="h5">
                    By selecting ‘Bind’ cover will incept on the terms and
                    conditions outlined in the quotation. You also agree that
                    after making appropriate enquiries:
                  </Typography>
                </div>
                <div className="bindmodal_select">
                  <Typography variant="subtitle1">
                    • You are authorised by all Applicants to make this
                    submission and to accept this quotation. <br></br> • You
                    have read and understood the Important Notices to the
                    Applicant. <br></br> • Where you have provided information
                    about another person, you declare that the person <br></br>
                    has been made aware of that fact and of the Delta Insurance
                    Australia’s Privacy Statement.<br></br> • You confirm that
                    the statements and information provided to Delta Insurance
                    Australia are true and accurate. <br></br> •You understand
                    that should information provided be misleading or
                    fraudulent, the contract may be voided in its entirety as
                    per the Insurance Contracts Act 1984.<br></br> • You
                    understand that, up until a contract of insurance is entered
                    into, you are under an ongoing obligation to immediately
                    inform Delta Insurance Australia of any change in the facts
                    or statements contained in this submission or in the
                    accompanying documentation. <br></br> •You acknowledge that
                    this information and any accompanying documents will form
                    the basis of the contract.
                  </Typography>
                </div>

                <div className="bindmodal_button">
                  <Button variant="text" onClick={handleClose}></Button>
                  <Button
                    variant="contained"
                    onClick={() => {
                      handleClose();
                      onBind();
                    }}
                  >
                    Agree and Bind
                  </Button>
                </div>
              </>
            </Paper>
          </Box>
        </Modal>
      </div>
    </div>
  );
};

export default BindModal;
