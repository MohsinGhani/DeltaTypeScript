import React, { useState } from "react";
import {
  Box,
  Button,
  Typography,
  Modal,
  MenuItem,
  TextField,
  Select,
  Paper,
  InputLabel,
  FormControl,
  Dialog,
  Divider,
  DialogContent,
  SelectChangeEvent,
} from "@mui/material";

import mailIcon from "../../assets/images/mailIcon.svg";
import checkIcon from "../../assets/images/checkImage.svg";
import InfoIcon from "../../assets/images/infoIcon.svg";

const QuotesModal = ({
  open,
  handleClose,
  title,
  subtitle,
  isFilePick,
  actionTitle,
}: any) => {
  const [select, setSelect] = useState<string>();
  const [isOpen, setIsOpen] = useState(false);

  const handleChange = (event: SelectChangeEvent<string>) => {
    setSelect(event.target.value);
  };
  // const getOccupationNames = async (businessNumber: string): Promise<any> => {
  //   try {
  //     const token = Cookies.get("token");

  //     const data = await axios({
  //       method: "post",
  //       url: "https://u090h4woii.execute-api.ap-southeast-2.amazonaws.com/delta-microservices/email-send-email ",
  //       data: JSON.stringify(businessNumber),
  //       // data: JSON.stringify(`95904322581`),

  //       headers: {
  //         Authorization: `Bearer ${token}`,
  //         "Content-Type": "application/json",
  //       },
  //     });

  //     setOccupationNames(data.data);

  //     console.log("MAI OCCUPATIONS HUN", data.data);
  //   } catch (error: any) {
  //     console.log("MAIN VILLAN HOUN", error, "hwerh", businessNumber);
  //   }
  // };

  return (
    <div>
      <div>
        <Modal open={open} onClose={handleClose}>
          {!isOpen ? (
            <Box>
              <Paper>
                <>
                  <div className="modal_head">
                    <Typography variant="h6">{title}</Typography>

                    <img src={InfoIcon} alt="Client details" />
                  </div>
                  <div className="modal_selectHeader">
                    <Typography variant="h5">{subtitle}</Typography>
                  </div>
                  <div className="modal_select">
                    <Typography variant="subtitle1">
                      {actionTitle}
                      <FormControl fullWidth>
                        <InputLabel>Select action</InputLabel>
                        <Select
                          value={select}
                          label="Select action"
                          onChange={(e) => handleChange(e)}
                        >
                          <MenuItem value={10}>
                            Make mid-term adjustment
                          </MenuItem>
                          <MenuItem value={20}>Cancel Policy</MenuItem>
                          <MenuItem value={30}>Notify of loss</MenuItem>
                        </Select>
                        {isFilePick ? (
                          <>
                            <br></br>
                            <Typography variant="subtitle1">
                              Attach relevant files
                              <TextField type="file" />
                            </Typography>
                          </>
                        ) : null}
                      </FormControl>
                    </Typography>
                  </div>
                  <div className="modal_textarea">
                    <Typography variant="subtitle1">
                      Provide any comments or reasons
                    </Typography>
                    <TextField
                      placeholder="Type comments here"
                      multiline
                      rows={4}
                      variant="outlined"
                    />
                  </div>
                  <div className="modal_button">
                    <Button variant="text" onClick={handleClose}>
                      Cancel
                    </Button>
                    <Button
                      variant="contained"
                      onClick={() => setIsOpen(!isOpen)}
                    >
                      Send
                    </Button>
                  </div>
                </>
              </Paper>
            </Box>
          ) : (
            <Box>
              <Paper>
                <div className="modalConfirmation_container">
                  <Dialog onClose={handleClose} open={open}>
                    <DialogContent>
                      <div className="modalConfirmation_header">
                        <Typography variant="h6">Referral submitted</Typography>
                      </div>
                      <Divider />
                      <img src={checkIcon} alt="Check Icon" />
                      <Typography variant="h6">
                        Your referral has been submitted!
                      </Typography>
                      <br />
                      <Typography variant="subtitle1">
                        You have been sent an email receipt of the referral
                        information. Delta will amend this referral and get back
                        to you as soon as possible. You will be notified by
                        email when this has been completed and what the next
                        steps are to get your quote. If you have any questions
                        on this you can email the underwriting team below
                      </Typography>
                      <br />
                      <Typography variant="subtitle1">
                        If you have any questions on this you can email the
                        underwriting team below
                      </Typography>
                      <div className="modalConfirmation_emailContainer">
                        <img src={mailIcon} alt="Mail Icon" />
                        <div className="modalConfirmation_emailText">
                          <Typography variant="subtitle1">Email</Typography>
                          <Typography variant="subtitle1" className="email">
                            <u>contactus@deltainsurance.com.au</u>
                          </Typography>
                        </div>
                      </div>
                      <div className="modalConfirmation_backButton">
                        <Button autoFocus onClick={handleClose}>
                          Go Back
                        </Button>
                      </div>
                    </DialogContent>
                  </Dialog>
                </div>
              </Paper>
            </Box>
          )}
        </Modal>
      </div>
    </div>
  );
};

export default QuotesModal;
