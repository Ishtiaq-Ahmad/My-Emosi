import React from "react";
import "../../style/users.scss";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { userQuestion } from "../UserData";

const Accoridan = ({ data }) => {
  const accodianQuestion = data.map((ele) => (
    <Accordion>
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls="panel1a-content"
        id="panel1a-header"
      >
        <Typography>{ele.question}</Typography>
      </AccordionSummary>
      <AccordionDetails>
        <Typography>
          <strong>{ele.selectedOption.Title}</strong>
        </Typography>
      </AccordionDetails>
    </Accordion>
  ));
  return (
    <div className="accordian">
      {
        data ? 
      <Typography
        variant="h6"
        gutterBottom
        component="div"
        sx={{ marginLeft: "15px" }}
      >
        User's Questions Answers
      </Typography>
      :
      <Typography
      variant="h6"
      gutterBottom
      component="div"
      sx={{ marginLeft: "15px" }}
    >
      Questions Not Answered
    </Typography>
      }
      {data ?
        <div style={{ height: "35vh", overflow: "auto" }}>{accodianQuestion}</div>
        :
        null
      }
    </div>
  );
};

export default Accoridan;
