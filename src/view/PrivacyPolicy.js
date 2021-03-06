import React, { useState,useEffect } from "react";
import Sidebars from "../component/Sidebars";
import "../style/privacyPolicy.scss";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import _PrivacyPolicy from "../assets/images/privacy_policy.png";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import AddPolicy from "../component/AddPolicy";
import { getFirestore } from '@firebase/firestore'
import Firebase from '../firebase'
import {
  collection,
  getDocs,
  addDoc,
  updateDoc,
  deleteDoc,
  doc,
  onSnapshot
} from "firebase/firestore";
const db = getFirestore(Firebase)

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
  const [policy, setPolicy] = useState();

  useEffect(() => {
    const getPolicy = async () => {
      onSnapshot(collection(db, "Policy"), (snapshot) => {
        snapshot.docs.forEach((doc) => {
          setPolicy(doc.data().item)            // console.log("onsnapshot", doc.data());
        })
    })
      
    };

    getPolicy();
  }, []);

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
          {policy}
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
