import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

export default function BasicModal() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div className="getSupportModal">
      <Button onClick={handleOpen}>Get Support</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography
            className="h1"
            id="modal-modal-title"
            variant="h4"
            component="h2"
          >
            Help Centre
          </Typography>

          <Typography variant="h5">
            {" "}
            How do I access the Delta Broker Portal?
          </Typography>
          <Typography>
            To use this site, you will need to be a registered user. To request
            registration, or for assistance with a forgotten user name or
            password, please contact Delta by email at
            <u> contactus@deltainsurance.com.au </u>
            or by phone on
            <u> (07) 3017 4720. </u>
          </Typography>
          <Typography variant="h5">
            What can I do in the Portal? The Portal{" "}
          </Typography>
          <Typography variant="body2">
            will provide an indicative price indication for our clients{" "}
            <br></br>based on their size and business. You can then receive this
            by email, along with a proposal formor completion if you would like
            to proceed to obtain a full quote. The Portal is designed to be used
            both on laptops and mobile devices, and can be accessed through the
            link on our website,
            <u> deltainsurance.com.au </u>
          </Typography>
          <Typography variant="h5">What products are available?</Typography>
          <Typography>
            Atthe moment, the only product available through the Portal is
            Professional indemnity. other products including Cyber and
            Management Liability will be added soon
          </Typography>
          <Typography variant="h5">
            {" "}
            Can I bind a policy throughthe Portal?
          </Typography>
          <Typography>
            At the moment, we can only provide an indicative price, but we will
            be offering full quote functionality soon
            <Typography variant="h5">I have forgotten my password</Typography>
          </Typography>
          <Typography>
            Please ask us for a password reset at{" "}
            <u> contactus.deltainsurance.com. au </u> or by phone on{" "}
            <u> (07) 3017 4720. </u>
          </Typography>
        </Box>
      </Modal>
    </div>
  );
}
