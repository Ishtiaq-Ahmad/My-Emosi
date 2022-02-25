import React from "react";
import Sidebars from "../component/Sidebars";
import "../style/userDetail.scss";
import { useParams } from "react-router-dom";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import _User from "../assets/images/user2.jpg";
import Grid from "@mui/material/Grid";
import UserMoodChart from "../component/User/UserMoodChart";
import Accoridan from "../component/User/Accoridan";
import DailyGoals from "../component/User/DailyGoals";

const UserDetails = () => {
  const params = useParams();
  const { userName } = params;
  return (
    <div className="userDetails_div">
      <Sidebars />
      <Grid container spacing={{sm: 1,md: 4, lg: 10}} >
        <Grid item sm={12} md={4} sx={{marginBottom:'20px', marginTop:'10px'}}>
          <Card
            sx={{
              borderRadius: "16px !important",
              border: "1px solid #bafffc",
            }}
          >
            <CardActionArea>
              <CardMedia
                component="img"
                height="280"
                image={_User}
                alt="green iguana"
              />
              <CardContent>
                <Typography gutterBottom variant="h6" component="div">
                  {userName}
                </Typography>
                <Typography gutterBottom variant="body1" component="div">
                  username@gmail.com
                </Typography>
              </CardContent>
            </CardActionArea>
            <DailyGoals />
          </Card>
        </Grid>
        <Grid item sm={12} md={8}>
          <UserMoodChart />
          <Accoridan />
        </Grid>
      </Grid>
    </div>
  );
};

export default UserDetails;
