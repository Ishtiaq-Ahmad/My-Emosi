import React from "react";
import { Link } from "react-router-dom";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import GridViewRoundedIcon from "@mui/icons-material/GridViewRounded";
import PrivacyTipRoundedIcon from "@mui/icons-material/PrivacyTipRounded";
import "../style/home.scss";

const Menues = () => {
  return (
    <div>
      <List
        sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}
        component="nav"
        aria-labelledby="nested-list-subheader"
      >
        <Link to="/home" style={{ textDecoration: "none", color: "black" }}>
          <ListItemButton color="red" className="menu_background">
            <ListItemIcon>
              <GridViewRoundedIcon className="dashboard_rounded" />
            </ListItemIcon>
            <ListItemText primary="Dashboard" style={{ color: "black" }} />
          </ListItemButton>
        </Link>

        <Link
          to="/privacy-policy"
          style={{ textDecoration: "none", color: "black" }}
        >
          <ListItemButton className="menu_background">
            <ListItemIcon>
              <PrivacyTipRoundedIcon />
            </ListItemIcon>
            <ListItemText primary="Privacy Policy" style={{ color: "black" }} />
          </ListItemButton>
        </Link>
      </List>
    </div>
  );
};

export default Menues;
