import React, { useState } from "react";
import Header from "../../components/common/header/header";
import {
  AppBar,
  Icon,
  Toolbar,
  Box,
  Stack,
  Button,
  Hidden,
  ButtonBase,
  SvgIcon,
  Grid,
  Container,
} from "@mui/material";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import logo from "../../../assets/gbicon.ico";
import { makeStyles } from "@mui/styles";
import { ClassNames } from "@emotion/react";
import SearchIcon from "@mui/icons-material/Search";
import { Link } from "react-router-dom";
import SearchBar from "../../components/searchBar";
import MenuCard from "../../components/menuCard";
import RestaurantCard from "../../components/restaurantCard";
import { GeneralHeader } from "../../components/generalHeader";

const useStyles = makeStyles(() => ({
  menuBox: {
    maxWidth: "20%",
    flexBasis: "20%",
    //height: "290px !important",

    "@media (max-width: 1279.95px)": {
      maxWidth: "25%",
      flexBasis: "25%",
      //height: "242px",
    },

    "@media (max-width: 599.95px)": {
      maxWidth: "50%",
      flexBasis: "50%",
      //height: "242px",
    },

    padding: "12px 12px 24px",
  },
}));
export const Restaurants = () => {
  const classes = useStyles();
  return (
    <>
      <GeneralHeader />
      <Box
        sx={{
          marginTop: "108px",
          backgroundColor: "rgb(253, 252, 252)",
        }}
      >
        <Container
          sx={{
            padding: "0px",
            width: "100%",
            marginLefT: "auto",
            marginRight: "auto",
            "@media (min-width: 600px)": {
              paddingLeft: "24px",
              paddingRight: "24px",
            },
            "@media (min-width: 1620px)": {
              maxWidth: "1620px",
            },
          }}
        >
          <Box
            sx={{
              "@media (min-width: 600px)": {
                paddingLeft: "40px",
                paddingRight: "40px",
              },
              "@media (min-width: 0px)": {
                paddingLeft: "16px",
                paddingRight: "16px",
                paddingBottom: "80px",
              },
              "@media (min-width: 1620px)": {
                paddingLeft: "148px",
                paddingRight: "148px",
              },
              "@media (min-width: 1280px)": {
                paddingLeft: "72px",
                paddingRight: "72px",
              },
              "@media (min-width: 96px)": {
                paddingLeft: "56px",
                paddingRight: "56px",
              },
            }}
          >
            <Box
              sx={{
                paddingBottom: "24px",
                "@media (min-width: 600px)": {
                  paddingTop: "24px",
                },
                "@media (min-width: 0px)": {
                  paddingTop: "16px",
                },
                textAlign: "initial",
              }}
            >
              <Typography
                sx={{
                  fontStyle: "normal",
                  letterSpacing: "0.010070em",
                  fontSize: "32px",
                  fontFamily: "EB Garamind",
                  fontWeight: "normal",
                  lineHeight: "36px",
                }}
              >
                Restaurants in your area
              </Typography>
            </Box>
            <Box
              sx={{
                boxSizing: "inherit",
              }}
            >
              <Grid
                sx={{
                  width: { xs: "calc(100%+24px)" },
                  margin: { xs: "-12px" },
                  display: "flex",
                  flexWrap: "wrap",
                  boxSizing: "border-box",
                }}
              >
                <Box className={classes.menuBox}>
                  <RestaurantCard
                    imageSrc="https://gatherbox.appspot.com.storage.googleapis.com/restaurants/l-altro/thumbnail.png"
                    restaurantName="L'Altro"
                    bio="Traditional Italian recipes infused with new ideas"
                  />
                </Box>
                <Box className={classes.menuBox}>
                  <RestaurantCard
                    imageSrc="https://gatherbox.appspot.com.storage.googleapis.com/restaurants/mamemi/thumbnail.png"
                    restaurantName="MaMeMi"
                    bio="A thin, crispy crust with the perfect crunch."
                  />
                </Box>
                <Box className={classes.menuBox}>
                  <RestaurantCard
                    imageSrc="https://gatherbox.appspot.com.storage.googleapis.com/restaurants/ris8/thumbnail.png"
                    restaurantName="RIS9"
                    bio="Risotto made with passion and the best quality rice."
                  />
                </Box>
              </Grid>
            </Box>
          </Box>
        </Container>
      </Box>
    </>
  );
};

export default Restaurants;
