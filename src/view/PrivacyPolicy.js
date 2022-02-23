import React, { useState } from "react";
import Sidebars from "../component/Sidebars";
import "../style/privacyPolicy.scss";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import _PrivacyPolicy from "../assets/images/privacy_policy.png";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import AddPolicy from "../component/AddPolicy";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 500,
  bgcolor: "background.paper",
  border: "2px solid #bafffc",
  boxShadow: 24,
  p: 4,
  borderRadius: 2,
};

const PrivacyPolicy = () => {
  const [_open, setOpen] = useState(false);
  const _handleClose = () => setOpen(false);
  const handleOpen = () => setOpen(true);

  return (
    <div className="privacy_div">
      <Sidebars />
      <div className="privacy_policy">
        <img
          src={_PrivacyPolicy}
          alt="privacy policy"
          className="privacy_image"
        />
        {/* <Divider /> */}
        <Typography
          variant="body2"
          component="div"
          gutterBottom
          style={{ padding: "20px 40px 20px 40px" }}
        >
          Built the Mental Health app as an Open Source app. This SERVICE is
          provided by at no cost and is intended for use as is. This page is
          used to inform visitors regarding our policies with the collection,
          use, and disclosure of Personal Information if anyone decided to use
          our Service. If you choose to use our Service, then you agree to the
          collection and use of information in relation to this policy. The
          Personal Information that we collect is used for providing and
          improving the Service. We will not use or share your information with
          anyone except as described in this Privacy Policy. The terms used in
          this Privacy Policy have the same meanings as in our Terms and
          Conditions, which is accessible at Money Ventures unless otherwise
          defined in this Privacy Policy. Information Collection and Use For a
          better experience, while using our Service, we may require you to
          provide us with certain personally identifiable information. The
          information that we request will be retained by us and used as
          described in this privacy policy. The app do d used as described in
          this privacy policy.
        </Typography>
        <Button
          variant="contained"
          onClick={handleOpen}
          style={{
            margin: "10px 0px 10px 40px",
            color: "black",
            backgroundColor: "#bafffc",
          }}
        >
          Add New Policy
        </Button>
        <Modal
          open={_open}
          onClose={_handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <AddPolicy />
          </Box>
        </Modal>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
