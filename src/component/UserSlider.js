import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import Divider from "@mui/material/Divider";
import _User from "../assets/images/user.jfif";
import Ibrahim from "../assets/images/ibrahim.jpeg";
import Ishtiaq from "../assets/images/ishtiaq.jpeg";
import Haseeb from "../assets/images/haseeb.jpeg";
import Button from "@mui/material/Button";

import "../style/dashboard.scss";

const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 3000 },
    items: 8,
    slidesToSlide: 2,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1280 },
    items: 6,
    slidesToSlide: 1,
  },
  smallDesktop: {
    breakpoint: { max: 1280, min: 1024 },
    items: 4,
    slidesToSlide: 1,
  },
  tablet: {
    breakpoint: { max: 1024, min: 800 },
    items: 3,
    slidesToSlide: 1,
  },
  smallTablet: {
    breakpoint: { max: 800, min: 600 },
    items: 2,
    slidesToSlide: 1,
  },

  mobile: {
    breakpoint: { max: 600, min: 400 },
    items: 2,
    slidesToSlide: 1,
  },
  smallmobile: {
    breakpoint: { max: 400, min: 0 },
    items: 1,
    slidesToSlide: 1,
  },
};
const userData = [
  {
    userImage: _User,
    userName: "Shane worn",
    cardColor: "#78cfe1",
  },
  {
    userImage:
      "https://dwpdigital.blog.gov.uk/wp-content/uploads/sites/197/2016/07/P1090594-1.jpeg",
    userName: "Melinda",
    cardColor: "#df5b61",
  },
  {
    userImage:
      "https://htmlstream.com/preview/unify-v2.6/assets/img-temp/400x450/img5.jpg",
    userName: "USER nAME",
    cardColor: "#f8b018",
  },
  {
    userImage:
      "https://preview.keenthemes.com/metronic-v4/theme/assets/pages/media/profile/profile_user.jpg",
    userName: "User Name",
    cardColor: "#C46851",
  },
  {
    userImage:
      "https://likewise-stage.azureedge.net/uploads/3eb6cf23-895b-45e9-b92c-5fb1b457dd04/bill-gates-profile-pic.jpg",
    userName: "Bill Gates",
    cardColor: "#c76493",
  },
  {
    userImage:
      "https://pbs.twimg.com/profile_images/1265739080995934209/tWbXGpx8_400x400.jpg",
    userName: "USER nAME",
    cardColor: "#9A8BB7",
  },
  {
    userImage:
      "https://www.1000islandsplayhouse.com/assets/Buddy-Scott-Carmichael.jpg",
    userName: "USER nAME",
    cardColor: "#78cfe1",
  },
  {
    userImage:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8dXNlciUyMHByb2ZpbGV8ZW58MHx8MHx8&w=1000&q=80",
    userName: "USER nAME",
    cardColor: "#df5b61",
  },
  {
    userImage:
      "https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlciUyMHByb2ZpbGV8ZW58MHx8MHx8&w=1000&q=80",
    userName: "USER nAME",
    cardColor: "#f8b018",
  },
  {
    userImage:
      "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    userName: "USER nAME",
    cardColor: "#C46851",
  },
  {
    userImage: Ibrahim,
    userName: "Ibrahim",
    cardColor: "#c76493",
  },
  {
    userImage: Haseeb,
    userName: "Haseeb",
    cardColor: "#9A8BB7",
  },
  {
    userImage: Ishtiaq,
    userName: "Ishtiaq",
    cardColor: "#78cfe1",
  },
];
const UserSlider = () => {
  return (
    <div
      style={{
        background: "#fff",
        marginBottom: "40px",
        borderRadius: "4px",
        padding: "10px 10px 40px 10px",
      }}
    >
      <Typography variant="h6" component="div" gutterBottom>
        All Users
      </Typography>
      <Divider style={{ marginTop: "10px", marginBottom: "10px" }} />
      <Carousel responsive={responsive} showDots={true}>
        {userData.map((ele) => (
          <div className="profileCard" style={{ margin: "0px 10px 0px 10px" }}>
            <Card sx={{ borderRadius: "16px !important" }}>
              <CardActionArea>
                <CardMedia
                  component="img"
                  height="120"
                  image={ele.userImage}
                  alt="green iguana"
                />
                <CardContent
                  style={{ background: ele.cardColor, color: "#ffff" }}
                >
                  <Typography gutterBottom variant="h6" component="div">
                    {ele.userName}
                  </Typography>

                  <Button
                    variant="text"
                    size="small"
                    style={{ color: "black" }}
                  >
                    View Details{" "}
                  </Button>
                </CardContent>
              </CardActionArea>
            </Card>
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default UserSlider;
