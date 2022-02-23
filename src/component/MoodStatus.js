import React, { useState } from "react";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import "../style/order.scss";
import {
  buildStyles,
  CircularProgressbarWithChildren,
} from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import Grid from "@mui/material/Grid";
import GreatEmoji from "../assets/images/great.png";
import ExcitedEmoji from "../assets/images/excited.png";
import GoodEmoji from "../assets/images/good.png";
import PoorEmoji from "../assets/images/poor.png";
import SadEmoji from "../assets/images/sad.png";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";

const MonthlyOrder = [
  {
    label: "Daily",
  },
  {
    label: "Weekly",
  },
  {
    label: "Monthly",
  },
  {
    label: "Yearly",
  },
];
const MoodStatus = () => {
  const [age, setAge] = useState("Daily");
  const handleChange = (event) => {
    setAge(event.target.value);
  };
  return (
    <div className="order">
      <div className="mood_head">
        <Typography variant="h6" component="div" gutterBottom>
          User's Mood Status
        </Typography>
        <Select
          sx={{ width: 130 }}
          value={age}
          onChange={handleChange}
          displayEmpty
          inputProps={{ "aria-label": "Without label" }}
          size="small"
          style={{ margin: "7px" }}
        >
          {MonthlyOrder.map((month) => {
            return (
              <MenuItem value={month.label} key={month.label}>
                {month.label}
              </MenuItem>
            );
          })}
        </Select>
      </div>
      <Divider />
      <Grid container spacing={10} style={{ padding: "20px" }}>
        <Grid item xs={12} sm={6} md={4} lg={2.4}>
          <Typography
            variant="h6"
            component="div"
            gutterBottom
            style={{ textAlign: "center" }}
          >
            {" "}
            Great
          </Typography>
          <div style={{ margin: "0px" }}>
            <CircularProgressbarWithChildren
              value={49}
              strokeWidth={5}
              background={true}
              styles={buildStyles({
                textColor: "black",
                pathColor: "#C76493",
                marginLeft: "20px",
                marginRight: "40px",
                backgroundColor: "#fee1ef",
              })}
            >
              <img
                style={{ width: 60, marginTop: -5 }}
                src={GreatEmoji}
                alt="doge"
              />
              <Typography
                variant="body1"
                component="div"
                gutterBottom
                color="#C76493"
              >
                {" "}
                <strong>59%</strong>
              </Typography>
            </CircularProgressbarWithChildren>
          </div>
        </Grid>
        <Grid item xs={12} sm={6} md={4} lg={2.4}>
          <Typography
            variant="h6"
            component="div"
            gutterBottom
            style={{ textAlign: "center" }}
          >
            {" "}
            Excited
          </Typography>
          <div style={{ margin: "0px" }}>
            <CircularProgressbarWithChildren
              value={89}
              strokeWidth={5}
              background={true}
              styles={buildStyles({
                textColor: "black",
                pathColor: "#c7a143",
                marginLeft: "20px",
                marginRight: "40px",
                backgroundColor: "#feeab9",
              })}
            >
              <img
                style={{ width: 60, marginTop: -5 }}
                src={ExcitedEmoji}
                alt="doge"
              />
              <Typography
                variant="body1"
                component="div"
                gutterBottom
                color="#c7a143"
              >
                {" "}
                <strong>89%</strong>
              </Typography>
            </CircularProgressbarWithChildren>
          </div>
        </Grid>
        <Grid item xs={12} sm={6} md={4} lg={2.4}>
          <Typography
            variant="h6"
            component="div"
            gutterBottom
            style={{ textAlign: "center" }}
          >
            {" "}
            Good
          </Typography>
          <div style={{ margin: "0px" }}>
            <CircularProgressbarWithChildren
              value={49}
              strokeWidth={5}
              background={true}
              styles={buildStyles({
                textColor: "black",
                pathColor: "#43b9ac",
                marginLeft: "20px",
                marginRight: "40px",
                backgroundColor: "#ccfbf6",
              })}
            >
              <img
                style={{ width: 60, marginTop: -5 }}
                src={GoodEmoji}
                alt="doge"
              />
              <Typography
                variant="body1"
                component="div"
                gutterBottom
                color="#43b9ac"
              >
                {" "}
                <strong>49%</strong>
              </Typography>
            </CircularProgressbarWithChildren>
          </div>
        </Grid>
        <Grid item xs={12} sm={6} md={4} lg={2.4}>
          <Typography
            variant="h6"
            component="div"
            gutterBottom
            style={{ textAlign: "center" }}
          >
            {" "}
            Poor
          </Typography>
          <div style={{ margin: "0px" }}>
            <CircularProgressbarWithChildren
              value={20}
              strokeWidth={5}
              background={true}
              styles={buildStyles({
                textColor: "black",
                pathColor: "#c46851",
                marginLeft: "20px",
                marginRight: "40px",
                backgroundColor: "#fde5df",
              })}
            >
              <img
                style={{ width: 60, marginTop: -5 }}
                src={PoorEmoji}
                alt="doge"
              />
              <Typography
                variant="body1"
                component="div"
                gutterBottom
                color="#c46851"
              >
                {" "}
                <strong>20%</strong>
              </Typography>
            </CircularProgressbarWithChildren>
          </div>
        </Grid>
        <Grid item xs={12} sm={6} md={4} lg={2.4}>
          <Typography
            variant="h6"
            component="div"
            gutterBottom
            style={{ textAlign: "center" }}
          >
            {" "}
            Sad
          </Typography>
          <div>
            <CircularProgressbarWithChildren
              value={49}
              strokeWidth={5}
              background={true}
              styles={buildStyles({
                textColor: "black",
                pathColor: "#9a8bb7",
                marginLeft: "20px",
                marginRight: "40px",
                backgroundColor: "#F2EAFF",
              })}
            >
              <img
                style={{ width: 60, marginTop: -5 }}
                src={SadEmoji}
                alt="doge"
              />
              <Typography
                variant="body1"
                component="div"
                gutterBottom
                color="#9a8bb7"
              >
                {" "}
                <strong>60%</strong>
              </Typography>
            </CircularProgressbarWithChildren>
          </div>
        </Grid>
      </Grid>
    </div>
  );
};

export default MoodStatus;
