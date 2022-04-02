import React, { useState } from "react";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import InputAdornment from "@mui/material/InputAdornment";
import FormControl from "@mui/material/FormControl";
import LockIcon from "@mui/icons-material/Lock";
import Button from "@mui/material/Button";
import EmailIcon from "@mui/icons-material/Email";
import { useNavigate } from "react-router-dom";
import "../style/login.scss";
import LoingImgae from "../assets/images/myEmosiLoginImage.png";
import MyEmosiLogo from "../assets/images/myEmosi_logo.png";
import { initializeApp } from "firebase/app";
import { signInWithEmailAndPassword, getAuth } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyByanGPc_ZnkVN8L2TlC03jLCyhGh_D_gY",
  authDomain: "refinedmh.firebaseapp.com",
  projectId: "refinedmh",
  storageBucket: "refinedmh.appspot.com",
  messagingSenderId: "110422148240",
  appId: "1:110422148240:web:f4c6926fbc9fd0ddc88415",
  measurementId: "G-C4TYK25M80"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  // const loginHandler = () => {
  //   navigate("/home");
  // };

  const logInWithEmailAndPassword = async () => {
    // alert(email)
    if (email && password && email==='admin@myemosi.com') {
      try {
        await signInWithEmailAndPassword(auth, email, password)
        navigate("/home");
    
      } catch (err) {
        alert(err.message);
      }
    }
    else{
      alert('Please provide valid credentials')
    }
  };

  return (
    <div className="background_image">
      <Grid container spacing={2}>
        <Grid item xs={12} md={6}>
          <div className="right_column">
            <div className="login_text">
              <img
                src={MyEmosiLogo}
                alt="My Emosi Logo"
                className="myEmosi_logo"
              />
            </div>

            <div>
              <TextField
                className="user_name"
                id="input-with-icon-textfield"
                label="Email"
                placeholder="Email Address"
                onChange={(event) => setEmail(event.target.value)}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <EmailIcon />
                    </InputAdornment>
                  ),
                }}
                variant="standard"
                fullWidth
              />
              <TextField
                className="user_name"
                id="input-with-icon-textfield"
                label="Password"
                type="password"
                placeholder="Password"
                onChange={(event) => setPassword(event.target.value)}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <LockIcon />
                    </InputAdornment>
                  ),
                }}
                variant="standard"
                fullWidth
              />
              <Button
                type="button"
                variant="contained"
                onClick={logInWithEmailAndPassword}
                style={{ background: "#7293f0", color: "white" }}
              >
                Login
              </Button>
            </div>
          </div>
        </Grid>
        <Grid item xs={0} md={6} className="display_left_column">
          <div className="left_column">
            <img
              className="node_image"
              src={LoingImgae}
              alt="Node Png Images"
            />
          </div>
        </Grid>
      </Grid>
    </div>
  );
};

export default Login;
