import React,{useState} from "react";
import {
  BarChart,
  Bar,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import "../../style/userDetail.scss";
import { useParams } from "react-router-dom";
import Typography from "@mui/material/Typography";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";

const data = [
  {
    name: "Great",
    percent: 40,

  },
  {
    name: "Excited",
    percent: 98,

  },
  {
    name: "Good",
    percent: 58,

  },
  {
    name: "Poor",
    percent: 8,
 
  },
  {
    name: "Sad",
    percent: 80,
    
  },
];
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
const barColors = ["#C76493", "#C7A143", "#43B9AC", "#C46851", "#9A8BB7"];
const UserMoodChart = () => {
  const params = useParams();
  const { userName } = params;
  const [age, setAge] = useState("Daily");
  const handleChange = (event) => {
    setAge(event.target.value);
  };
  return (
    <div className="user_mood_chart">
    <div style={{display:'flex', justifyContent:"space-between", alignItems:'center'}}>
      <Typography gutterBottom variant="h6" component="div" style={{padding:'0px 0px 10px 20px'}}>
        {userName} Mood Status
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
      <ResponsiveContainer width="100%" aspect={3 / 1}>
        <BarChart
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 10,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" stroke="#000000"  />
          <YAxis dataKey={'x'}  
    name='stature'  
      
    ticks={[0,25, 50, 75, 100]}  
    domain={[0, 100]}  
    type="number"  />
          <Tooltip
            wrapperStyle={{ width: 100, backgroundColor: "#ccc" }}
            formatter={function (total) {
              return `${total}`;
            }}
          />
          <Bar dataKey="percent" fill="#8884d8">
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={barColors[index % 20]} />
            ))}
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default UserMoodChart;
