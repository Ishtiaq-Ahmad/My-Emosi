import React, { useState } from "react";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import SaveIcon from "@mui/icons-material/Save";
import { getFirestore } from '@firebase/firestore'
import Firebase from '../firebase'
import {
  collection,
  getDocs,
  addDoc,
  updateDoc,
  deleteDoc,
  doc,
} from "firebase/firestore";
const db = getFirestore(Firebase)



const AddPolicy = () => {
  const [input, setInput] = useState("");

  const createPolicy = async () => {
    if (input === '') {
      alert('Empty Text Cannot be added')
    }
    else {
      const userDoc = doc(db, "Policy", '8FmspAYxbRj7q44D2UKp');
      await updateDoc(userDoc, { item: input });
      alert('Policy Updated')
    }
  };

  return (
    <div>
      <Typography variant="h6" component="div" gutterBottom>
        Add Policy
      </Typography>
      <Divider />
      <div style={{ padding: "8px" }}>
        <Typography variant="body1" component="div" gutterBottom>
          Policy Description
        </Typography>
        <TextField
          id="standard-multiline-static"
          placeholder="Message"
          variant="outlined"
          fullWidth
          multiline
          rows={3}
          onChange={(e) => setInput(e.target.value)}
        />
      </div>
      <Button
        variant="contained"
        onClick={createPolicy}
        startIcon={<SaveIcon />}
        style={{
          float: "right",
          margin: "7px",
          color: "black",
          backgroundColor: "#bafffc",
        }}
      >
        Save
      </Button>
    </div>
  );
};

export default AddPolicy;
