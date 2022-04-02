import React, { useState, useEffect } from "react";
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



const AddQuestion = () => {
  const [input, setInput] = useState("");



  const addQuestions = async () => {
    if (input === '') {
      alert('Empty Text Cannot be added')
    }
    else {
      const userDoc = await getDocs(collection(db, "Assessments"));
      let obj = {
        id: userDoc.docs[0].data().AssessmentsData.length + 1,
        options: [
          {
            Title: 'Not at all',
            flag: false
          },
          {
            Title: 'Several days',
            flag: false
          },
          {
            Title: 'More than half days',
            flag: false
          },
          {
            Title: 'Nearly every day',
            flag: false
          }
        ],
        question:input,
        title:'How Often have You been botheredby the following over the past 2weeks ?'
      }
      let arr = userDoc.docs[0].data().AssessmentsData
      // console.log(userDoc.docs[0].data().AssessmentsData)
      arr.push(obj)
      const userDoc1 = doc(db, "Assessments", 'Assessment');
      await updateDoc(userDoc1, { AssessmentsData:arr });
      // await addDoc(collection(db, "Assessments"), { AssessmentsData:arr });
      setInput('')
      alert('Question Added')
    }
  };
  return (
    <div>
      <Typography variant="h6" component="div" gutterBottom>
        Add Question
      </Typography>
      <Divider />
      <div style={{ padding: "8px" }}>
        {/* <Typography variant="body1" component="div" gutterBottom>
          Question Description
        </Typography> */}
        <TextField
          id="outlined-basic"
          label="Question"
          variant="outlined"
          fullWidth
          size="small"
          onChange={(e) => setInput(e.target.value)}

        />
      </div>
      <Button
        variant="contained"
        startIcon={<SaveIcon />}
        style={{
          float: "right",
          margin: "7px",
          color: "black",
          backgroundColor: "#bafffc",
          
        }}
        value={input}
        onClick={addQuestions}
      >
        Save
      </Button>
    </div>
  );
};

export default AddQuestion;
