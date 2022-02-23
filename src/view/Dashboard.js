import React from "react";
import "../style/dashboard.scss";
import MoodStatus from "../component/MoodStatus";
import UsersAssesment from "../component/UsersAssesment";
import UserSlider from "../component/UserSlider";

const Dashboard = () => {
  return (
    <div className="dashboard_div">
      <MoodStatus />
      <UsersAssesment />
      <UserSlider />
    </div>
  );
};

export default Dashboard;
