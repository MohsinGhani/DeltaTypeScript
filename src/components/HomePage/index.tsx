import React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { useNavigate } from "react-router-dom";
import hidefdashboard from "../../assets/images/hidefdashboard.png";
import buildingIcon from "../../assets/images/buildingIcon.svg";
import phoneCallIcon from "../../assets/images/phoneCallIcon.svg";
import mailIcon from "../../assets/images/mailIcon.svg";
import { Button, Divider, Grid } from "@mui/material";
import RecentQuotes from "../RecentQuotesTable";

const HomePage = () => {
  let navigate = useNavigate();
  const routeChange = () => {
    // let path = `newPath`;
    navigate("/create-quote");
  };

  return (
    <div className="homePage_container">
      <Grid container spacing={3} className="homePage_cards">
        <Grid item sm={7} lg={8} className="homePage_getStarted">
          <Card sx={{ display: "flex" }}>
            <CardMedia
              component="img"
              sx={{ width: 250 }}
              image={hidefdashboard}
              alt="Profile Image"
            />
            <Box>
              <CardContent>
                <Typography variant="h3">Start a new quote</Typography>

                <Button onClick={routeChange} variant="contained">
                  Create quote
                </Button>
              </CardContent>
            </Box>
          </Card>
        </Grid>
        <Grid item sm={5} lg={4} className="homePage_contactUs">
          <Card>
            <CardContent>
              <div className="homePage_card_details">
                <img src={buildingIcon} alt="Building Icon" />
                <Typography variant="h6">
                  Contact Delta Insurance Australia
                </Typography>
              </div>
              <Divider sx={{ marginTop: "20px" }} />
              <div className="homePage_after_divider">
                <div className="homePage_card_details">
                  <img src={phoneCallIcon} alt="Phone call Icon" />
                  <div>
                    <Typography variant="h6">Phone number</Typography>
                    <Typography variant="h6" className="phoneNumber">
                      <u>+61 (07) 3017 4720</u>
                    </Typography>
                  </div>
                </div>
                <div className="homePage_card_details email">
                  <img src={mailIcon} alt="Mail Icon" />
                  <div className="homePage_phoneNumber">
                    <Typography variant="h6">Email</Typography>
                    <Typography variant="h6" className="emailText">
                      <u>contactus@deltainsurance.com.au</u>
                    </Typography>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
      <div>
        <RecentQuotes />
      </div>
    </div>
  );
};

export default HomePage;
