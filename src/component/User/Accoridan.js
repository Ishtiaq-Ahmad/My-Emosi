import React from "react";
import "../../style/users.scss";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { userQuestion } from "../UserData";

const Accoridan = () => {
  const accodianQuestion = userQuestion.map((ele) => (
    <Accordion>
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls="panel1a-content"
        id="panel1a-header"
      >
        <Typography>{ele.user_question}</Typography>
      </AccordionSummary>
      <AccordionDetails>
        <Typography>
          <strong> Lorem ipsum dolor sit amet</strong>
        </Typography>
      </AccordionDetails>
    </Accordion>
  ));
  return (
    <div className="accordian">
      <Typography
        variant="h6"
        gutterBottom
        component="div"
        sx={{ marginLeft: "15px" }}
      >
        User's Questions Answers
      </Typography>
      <div style={{ height: "35vh", overflow: "auto" }}>{accodianQuestion}</div>
    </div>
  );
};

export default Accoridan;
