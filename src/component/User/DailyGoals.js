import React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Typography from "@mui/material/Typography";
import { useParams } from "react-router-dom";
import "../../style/userDetail.scss";
import LocalHotelRoundedIcon from "@mui/icons-material/LocalHotelRounded";
import TodayRoundedIcon from "@mui/icons-material/TodayRounded";
import Divider from "@mui/material/Divider";
import RunCircleOutlinedIcon from "@mui/icons-material/RunCircleOutlined";
import TimerOutlinedIcon from "@mui/icons-material/TimerOutlined";
import RunCircleRoundedIcon from "@mui/icons-material/RunCircleRounded";
import BedtimeOffOutlinedIcon from "@mui/icons-material/BedtimeOffOutlined";
import BedtimeOutlinedIcon from "@mui/icons-material/BedtimeOutlined";
import SelfImprovementRoundedIcon from "@mui/icons-material/SelfImprovementRounded";
import LocalDiningIcon from "@mui/icons-material/LocalDining";

const DailyGoals = () => {
  const params = useParams();
  const { userName } = params;
  return (
    <div className="dailygoals">
      <Typography
        variant="body1"
        gutterBottom
        component="div"
        sx={{ marginLeft: "15px" }}
      >
        <strong> {userName}'s Daily Goals</strong>
      </Typography>
      <Accordion style={{ background: "#C0608E" }}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography color="#ffff">Exercise</Typography>
          <RunCircleRoundedIcon
            style={{ marginLeft: "10px", color: "#ffff" }}
          />
        </AccordionSummary>
        <AccordionDetails>
          <div
            style={{ display: "flex", alignItems: "center", color: "#ffff" }}
          >
            <TodayRoundedIcon style={{ marginRight: "20px" }} />
            <Typography>
              <strong>Date & Time</strong> <br />
              Oct 26, 2021 11:30 PM
            </Typography>
          </div>
          <Divider sx={{ paddingBottom: "5px" }} />
          <div
            style={{ display: "flex", alignItems: "center", color: "#ffff" }}
          >
            <RunCircleOutlinedIcon style={{ marginRight: "20px" }} />
            <Typography>
              <strong>Exercise Type</strong> <br />
              Cricket
            </Typography>
          </div>
          <Divider sx={{ paddingBottom: "5px" }} />
          <div
            style={{ display: "flex", alignItems: "center", color: "#ffff" }}
          >
            <TimerOutlinedIcon style={{ marginRight: "20px" }} />
            <Typography>
              <strong>Duration</strong> <br />
              05 hr 55 min
            </Typography>
          </div>
        </AccordionDetails>
      </Accordion>
      <Accordion style={{ backgroundColor: "#9586B1" }}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography color="#ffff">Sleep</Typography>
          <LocalHotelRoundedIcon
            style={{ marginLeft: "10px", color: "#ffff" }}
          />
        </AccordionSummary>
        <AccordionDetails>
          <div
            style={{ display: "flex", alignItems: "center", color: "#ffff" }}
          >
            <BedtimeOffOutlinedIcon style={{ marginRight: "20px" }} />
            <Typography>
              <strong>Bed In Time</strong> <br /> Oct 26, 2021 11:30PM
            </Typography>
          </div>
          <Divider sx={{ paddingBottom: "5px" }} />
          <div
            style={{ display: "flex", alignItems: "center", color: "#ffff" }}
          >
            <BedtimeOutlinedIcon style={{ marginRight: "20px" }} />
            <Typography>
              <strong>Bed Out Time</strong> <br />
              Oct 27, 2021 07:30AM
            </Typography>
          </div>
          <Divider sx={{ paddingBottom: "5px" }} />
          <div
            style={{ display: "flex", alignItems: "center", color: "#ffff" }}
          >
            <TimerOutlinedIcon style={{ marginRight: "20px" }} />
            <Typography>
              <strong>Duration</strong> <br />
              05 hr 55 min
            </Typography>
          </div>
        </AccordionDetails>
      </Accordion>
      <Accordion style={{ background: "#EEA4A4" }}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography color="#ffff">Nutrition</Typography>
          <LocalDiningIcon style={{ marginLeft: "10px", color: "#ffff" }} />
        </AccordionSummary>
        <AccordionDetails>
          <div
            style={{ display: "flex", alignItems: "center", color: "#ffff" }}
          >
            <Typography>
              <strong>Nutrition Type</strong> <br />
              Fast Food
            </Typography>
          </div>
          <Divider sx={{ paddingBottom: "5px" }} />
          <div
            style={{ display: "flex", alignItems: "center", color: "#ffff" }}
          >
            <Typography>
              <strong>Duration</strong> <br />
              05 hr 55 min
            </Typography>
          </div>
        </AccordionDetails>
      </Accordion>
      <Accordion style={{ background: "#F18C6C" }}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography color="#ffff">Breathness</Typography>
          <SelfImprovementRoundedIcon
            style={{ marginLeft: "10px", color: "#ffff" }}
          />
        </AccordionSummary>
        <AccordionDetails>
          <div
            style={{ display: "flex", alignItems: "center", color: "#ffff" }}
          >
            <Typography>
              <strong>Date & Time</strong> <br />
              Oct 26, 2021 11:30 PM
            </Typography>
          </div>
          <Divider sx={{ paddingBottom: "5px" }} />
          <div
            style={{ display: "flex", alignItems: "center", color: "#ffff" }}
          >
            <Typography>
              <strong>Breathness Type</strong> <br />
              Long Exale
            </Typography>
          </div>
          <Divider sx={{ paddingBottom: "5px" }} />
          <div
            style={{ display: "flex", alignItems: "center", color: "#ffff" }}
          >
            <Typography>
              <strong>Duration</strong> <br />
              05 hr 55 min
            </Typography>
          </div>
        </AccordionDetails>
      </Accordion>
    </div>
  );
};

export default DailyGoals;
