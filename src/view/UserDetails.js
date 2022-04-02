import React, { useState, useEffect } from "react";
import Sidebars from "../component/Sidebars";
import "../style/userDetail.scss";
import { useParams } from "react-router-dom";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import Grid from "@mui/material/Grid";
import UserMoodChart from "../component/User/UserMoodChart";
import Accoridan from "../component/User/Accoridan";
import DailyGoals from "../component/User/DailyGoals";
import { userContent } from '../component/UserData'
import Firebase from '../firebase'
import { getFirestore } from '@firebase/firestore'
import {
  collection,
  getDocs,
  addDoc,
  updateDoc,
  deleteDoc,
  doc,
  onSnapshot
} from "firebase/firestore";
const db = getFirestore(Firebase)

const UserDetails = () => {
  const params = useParams();
  const { userId } = params;


  const [user, setUser] = useState([])
  useEffect(() => {
    // console.log(params)
    const getUser = async () => {
      onSnapshot(collection(db, "userData"), (snapshot) => {
        let arr = []
        snapshot.docs.forEach((doc) => {
          if (doc.data().userID == userId) {
            arr.push(doc.data())
            setUser([...arr])
          }
        })
      })
    };

    getUser();
  }, []);
  return (
    <div className="userDetails_div">
      <Sidebars />
      <Grid container spacing={{ sm: 1, md: 4, lg: 10 }} >
        <Grid item sm={12} md={4} sx={{ marginBottom: '20px', marginTop: '10px' }}>
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
                image={user[0]?.image ? user[0]?.image : 'https://randomuser.me/api/portraits/lego/1.jpg'}
                alt="green iguana"
              />
              <CardContent>
                <Typography gutterBottom variant="h6" component="div">
                  {user[0]?.FirstName}
                </Typography>
                <Typography gutterBottom variant="body1" component="div">
                  {user[0]?.Email}
                </Typography>
              </CardContent>
            </CardActionArea>
            <DailyGoals />
          </Card>
        </Grid>
        <Grid item sm={12} md={8}>
          <UserMoodChart />
          {
            user[0]?.Ans ?
              <Accoridan data={user[0]?.Ans} />
              : null
          }
        </Grid>
      </Grid>
    </div>
  )
};

export default UserDetails;
