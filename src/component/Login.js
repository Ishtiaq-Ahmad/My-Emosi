import React from "react";
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

const Login = () => {
  const navigate = useNavigate();
  const loginHandler = () => {
    navigate("/home");
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

            <FormControl sx={{ m: 3 }} fullWidth variant="standard">
              <TextField
                className="user_name"
                id="input-with-icon-textfield"
                label="Email"
                placeholder="Email Address"
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
                type="submit"
                variant="contained"
                onClick={loginHandler}
                style={{ background: "#7293f0", color: "white" }}
              >
                Login
              </Button>
            </FormControl>
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
