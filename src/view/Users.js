import React, { useState, useEffect } from "react";
import Sidebars from "../component/Sidebars";
import "../style/users.scss";
import { userContent } from "../component/UserData";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Divider from "@mui/material/Divider";
import Avatar from "@mui/material/Avatar";
import Grid from "@mui/material/Grid";
import { Link } from "react-router-dom";
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

const Users = () => {

  const [users, setUsers] = useState([])
  useEffect(() => {
    const getUsers = async () => {
      onSnapshot(collection(db, "userData"), (snapshot) => {
        let arr = []
        snapshot.docs.forEach((doc) => {
          arr.push(doc.data())
          setUsers([...arr])
        })
      })

    };

    getUsers();
  }, []);
  return (
    <div className="users_div">
      <Sidebars />
      <div className="users_data">
        <div className="order_head">
          <Typography variant="h6" component="div" gutterBottom>
            {" "}
            ALL USERS
          </Typography>
        </div>
        <Divider />

        <div style={{ padding: "25px" }}>
          <Grid container spacing={2}>
            {/* <Grid item xs={2}>
              <Typography variant="h6" component="div" gutterBottom>
                User ID
              </Typography>
            </Grid> */}
            <Grid item xs={3}>
              <Typography variant="h6" component="div" gutterBottom>
                User Image
              </Typography>
            </Grid>
            <Grid item xs={2}>
              <Typography variant="h6" component="div" gutterBottom>
                User Name
              </Typography>
            </Grid>
            <Grid item xs={3}>
              <Typography
                variant="h6"
                component="div"
                gutterBottom
                style={{ textAlign: "center" }}
              >
                User Email
              </Typography>
            </Grid>
            <Grid item xs={2}>
              <Typography
                variant="h6"
                component="div"
                gutterBottom
                style={{ textAlign: "center" }}
              >
                View
              </Typography>
            </Grid>
          </Grid>
          {users?.map((item) => {
            return (
              <div>
                <Divider className="food_detail" />
                <Grid container spacing={2} key={item?.userID}>
                  {/* <Grid item xs={2}>
                    <Typography variant="body1" component="div" gutterBottom>
                      {item.userId}
                    </Typography>
                  </Grid> */}
                  <Grid item xs={3}>
                    <span style={{ display: "flex", alignItems: "center" }}>
                      <Avatar
                        alt="Remy Sharp"
                        src={item?.image?item.image:'https://randomuser.me/api/portraits/lego/1.jpg'}
                        variant="rounded"
                        sx={{ width: 50, height: 50 }}
                      />
                    </span>
                  </Grid>
                  <Grid item xs={2}>
                    <Typography variant="body1" component="div" gutterBottom>
                      {item.FirstName}
                    </Typography>
                  </Grid>
                  <Grid item xs={3}>
                    <Typography variant="body1" component="div" gutterBottom style={{ textAlign: "center" }}>
                      {item.Email}
                    </Typography>
                  </Grid>
                  <Grid item xs={2}>
                  <Link to={`/home/${item.userID}/${item.FirstName}`} style={{ textDecoration: "none", color: "black" }}>
                  <Typography align='center'>
                    <Button
                      variant="outlined"
                      size="small">
                      View Detail
                    </Button>
                    </Typography>
                    </Link>
                  </Grid>
                </Grid>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Users;
