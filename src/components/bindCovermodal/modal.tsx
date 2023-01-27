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
  //   const [select, setSelect] = useState<string>();
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
          <Box>
            {_renderStepContent(activeStep)}
            <Paper>
              <>
                <div className="bind_modal">
                  <Typography variant="h6">Binding confirmation</Typography>

                  <img src={InfoIcon} alt="Client details" />
                </div>
                <div className="bindmodal_selectHeader">
                  <Typography variant="h5">
                    Please confirm the following before binding cover
                  </Typography>
                </div>
                <div className="bindmodal_select">
                  <Typography variant="subtitle1">
                    The client has formally agreed to the cover quoted in the
                    Delta insurance Australia Broker Portal and the service
                    provided was compliant and satisfactory for the client.
                  </Typography>
                </div>

                <div className="bindmodal_button">
                  <Button variant="text" onClick={handleClose}>
                    Cancel
                  </Button>
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
