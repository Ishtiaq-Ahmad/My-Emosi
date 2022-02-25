import React from 'react';
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Typography from "@mui/material/Typography";
import { useParams } from "react-router-dom";
import '../../style/userDetail.scss';
import LocalHotelRoundedIcon from '@mui/icons-material/LocalHotelRounded';
import TodayRoundedIcon from '@mui/icons-material/TodayRounded';
import Divider from "@mui/material/Divider";
import RunCircleOutlinedIcon from '@mui/icons-material/RunCircleOutlined';
import TimerOutlinedIcon from '@mui/icons-material/TimerOutlined';
import RunCircleRoundedIcon from '@mui/icons-material/RunCircleRounded';
import BedtimeOffOutlinedIcon from '@mui/icons-material/BedtimeOffOutlined';
import BedtimeOutlinedIcon from '@mui/icons-material/BedtimeOutlined';
import SelfImprovementRoundedIcon from '@mui/icons-material/SelfImprovementRounded';
import LocalDiningIcon from '@mui/icons-material/LocalDining';

const DailyGoals = () => {
     const params = useParams()
    const {userId, userName} = params
  return (
    <div className="dailygoals">
      <Typography variant="body1" gutterBottom component="div" sx={{marginLeft:"15px"}}>
       <strong> {userName}'s DailyGoals</strong>
      </Typography>
         <Accordion>
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls="panel1a-content"
        id="panel1a-header"
      >
        <Typography>Exercise</Typography>
        <RunCircleRoundedIcon style={{marginLeft:'10px'}}/>
      </AccordionSummary>
      <AccordionDetails>
      <div style={{display:'flex', alignItems:'center'}}>
      <TodayRoundedIcon style={{marginRight:"20px"}}/>
        <Typography>
        <strong>Date & Time</strong>  <br/>Oct 26, 2021 11:30 PM
        </Typography>
       </div>
       <Divider sx={{paddingBottom:"5px"}} />
       <div style={{display:'flex', alignItems:'center'}}>
      <RunCircleOutlinedIcon style={{marginRight:"20px"}}/>
        <Typography>
        <strong>Exercise Type</strong>  <br/>Cricket
        </Typography>
       </div>
        <Divider sx={{paddingBottom:"5px"}} />
        <div style={{display:'flex', alignItems:'center'}}>
      <TimerOutlinedIcon style={{marginRight:"20px"}}/>
        <Typography>
        <strong>Duration</strong>  <br/>05 hr 55 min
        </Typography>
       </div>
      </AccordionDetails>
    </Accordion>
    <Accordion>
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls="panel1a-content"
        id="panel1a-header"
      >
        <Typography>Sleep</Typography>
          <LocalHotelRoundedIcon style={{marginLeft:'10px'}}/>
      </AccordionSummary>
      <AccordionDetails>
      <div style={{display:'flex', alignItems:'center'}}>
      <BedtimeOffOutlinedIcon style={{marginRight:"20px"}}/>
        <Typography>
        <strong>Bed In Time</strong>  <br/> Oct 26, 2021 11:30PM
        </Typography>
       </div>
       <Divider sx={{paddingBottom:"5px"}} />
       <div style={{display:'flex', alignItems:'center'}}>
      <BedtimeOutlinedIcon style={{marginRight:"20px"}}/>
        <Typography>
        <strong>Bed Out Time</strong>  <br/>Oct 27, 2021 07:30AM
        </Typography>
       </div>
        <Divider sx={{paddingBottom:"5px"}} />
        <div style={{display:'flex', alignItems:'center'}}>
      <TimerOutlinedIcon style={{marginRight:"20px"}}/>
        <Typography>
        <strong>Duration</strong>  <br/>05 hr 55 min
        </Typography>
       </div>
      
      </AccordionDetails>
    </Accordion>
    <Accordion>
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls="panel1a-content"
        id="panel1a-header"
      >
        <Typography>Nutrition</Typography>
        <LocalDiningIcon style={{marginLeft:'10px'}}/>
      </AccordionSummary>
      <AccordionDetails>
       <div style={{display:'flex', alignItems:'center'}}>

        <Typography>
        <strong>Nutrition Type</strong>  <br/>Fast Food
        </Typography>
       </div>
        <Divider sx={{paddingBottom:"5px"}} />
        <div style={{display:'flex', alignItems:'center'}}>
      {/* <TimerOutlinedIcon style={{marginRight:"20px"}}/> */}
        <Typography>
        <strong>Duration</strong>  <br/>05 hr 55 min
        </Typography>
       </div>
      </AccordionDetails>
    </Accordion>
      <Accordion>
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls="panel1a-content"
        id="panel1a-header"
      >
        <Typography>Breathness</Typography>
        <SelfImprovementRoundedIcon style={{marginLeft:'10px'}}/>
      </AccordionSummary>
      <AccordionDetails>
        <div style={{display:'flex', alignItems:'center'}}>
      {/* <TodayRoundedIcon style={{marginRight:"20px"}}/> */}
        <Typography>
        <strong>Date & Time</strong>  <br/>Oct 26, 2021 11:30 PM
        </Typography>
       </div>
       <Divider sx={{paddingBottom:"5px"}} />
       <div style={{display:'flex', alignItems:'center'}}>
      {/* <RunCircleOutlinedIcon style={{marginRight:"20px"}}/> */}
        <Typography>
        <strong>Breathness Type</strong>  <br/>Long Exale
        </Typography>
       </div>
        <Divider sx={{paddingBottom:"5px"}} />
        <div style={{display:'flex', alignItems:'center'}}>
      {/* <TimerOutlinedIcon style={{marginRight:"20px"}}/> */}
        <Typography>
        <strong>Duration</strong>  <br/>05 hr 55 min
        </Typography>
       </div>
      </AccordionDetails>
    </Accordion>
    </div>
  )
}

export default DailyGoals