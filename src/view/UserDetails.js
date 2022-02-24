import React from 'react';
import Sidebars from '../component/Sidebars'
import '../style/userDetail.scss';
import { useParams } from "react-router-dom";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import _User from '../assets/images/user2.jpg'
import Grid from '@mui/material/Grid';
import UserMood from '../component/User/UserMood'


const UserDetails = () => {
    const params = useParams()
    const {userId, userName} = params
  return (
    <div className="userDetails_div">
    <Sidebars/>
     <Grid container spacing={10}>
        <Grid item xs={4}>
       <Card sx={{ borderRadius: "16px !important" }}>
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
            </Card>
        </Grid>
        <Grid item xs={8}>
         <UserMood/>
        </Grid>
        
      </Grid>
       
        </div>
  )
}

export default UserDetails