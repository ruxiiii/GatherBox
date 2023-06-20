import React, { useState } from "react";
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
import SearchBar from "./searchBar";

const useStyles = makeStyles(() => ({
  appBar: {
    padding: 0,
    minHeight: "88px",
    position: "fixed",
    //paddingTop: "34px",
    background: "transparent",
    boxShadow: "0px 0px 12px rgba(0, 0, 0, 0.07) !important",
    width: "100%",
    backgroundColor: "#ffffff !important",
    justifyContent: "center",
    left: "auto",
  },

  iconButton: {
    size: "small",
    color: "inherit",
    edge: "start",
  },
}));
export const GeneralHeader = () => {
  const classes = useStyles();
  return (
    <>
      <AppBar className={classes.appBar}>
        <Toolbar>
          <Stack
            direction="row"
            flexGrow={1}
            sx={{
              display: "flex",
              width: "140px",
              height: "48px",
              paddingLeft: "16px",
              paddingRight: "16px",
              position: "relative",
              alignItems: "center",
              "@media (min-width:600px)": {
                paddingLeft: "32px",
                paddingRight: "32px",
              },
              // "@media (min-width:0px)": {
              //   minHeight: "72px",
              // },
              "@media (min-width:960px)": {
                paddingLeft: "48px",
                paddingRight: "48px",
              },
            }}
          >
            <Box
              sx={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                flexGrow: "1",
              }}
            >
              {/* <Link
              to="/"
              style={{
                display: "flex",
                alignItems: "center",
                transformOrigin: "0px 0px",
                color: "reg(255,255,255)",
              }}
            >
              <img src={logo} alt="logo" height={48} />

              <Box>
                <Typography
                  variant="h6"
                  lineHeight={2.38}
                  pl={2}
                  color={"#ffffff"}
                >
                  {" "}
                  GATHER{" "}
                </Typography>
              </Box>
            </Link> */}

              <Link
                to="/"
                style={{
                  width: "28px",
                  //overflow: "hidden",
                  margin: "0px",
                  flexDirection: "row",
                  marginTop: "13px",
                }}
              >
                <SvgIcon
                  sx={{
                    height: 27,
                    width: 140,
                    color: "rgb(47, 104, 89)",
                    fontSize: "1.5rem",
                    transition: "fill 200ms cubic-bezier(0.4, 0, 0.2, 1) 0ms",
                    flexShrink: "0",
                    userSelect: "none",
                  }}
                  viewBox="0 0 147 30"
                  aria-hidden="true"
                  focusable="false"
                >
                  <g clipPath="url(#clip0)">
                    <path
                      d="M22.648 13.0675C19.2893 13.0675 16.009 13.0195 12.6974 13.0195C12.6974 12.0972 12.6974 11.2342 12.6974 10.3278C16.8879 10.3278 21.065 10.3278 25.2824 10.3278C25.2824 15.1565 25.2824 22.7933 25.2824 27.6814C24.4349 27.6814 23.5695 27.6814 22.6412 27.6814C22.6412 26.0558 22.6412 24.4166 22.6412 22.7385C22.0941 23.4874 21.6435 24.2294 21.0762 24.8618C19.3812 26.7522 17.2063 27.6311 14.7377 27.8435C11.4687 28.1243 8.47101 27.3435 5.80513 25.4029C2.35675 22.8915 0.450945 19.4578 0.080995 15.1542C-0.300166 10.7159 1.16394 6.96482 4.27825 3.89866C6.54055 1.67496 9.28939 0.471782 12.4328 0.170417C16.0606 -0.176609 19.2937 0.80511 22.1726 3.04936C22.3049 3.1521 22.4349 3.26397 22.5583 3.38041C22.6681 3.48315 22.7668 3.59502 22.8318 3.66123C22.1883 4.3119 21.5448 4.96029 20.8543 5.65662C20.6143 5.47398 20.2803 5.20686 19.935 4.95572C13.7983 0.540274 4.40605 3.68862 3.03611 12.2273C2.20877 17.387 4.89259 22.2454 9.52257 24.1951C11.6033 25.0718 13.7602 25.1426 15.9552 24.7476C18.0449 24.3709 19.8027 23.428 21.0269 21.6244C22.1883 19.9121 22.5762 15.209 22.648 13.0675Z"
                      fill="evenodd"
                    ></path>
                    <path
                      d="M25.193 14.3893C25.2042 18.2499 25.1997 22.1106 25.1975 25.969C25.1975 26.1151 25.184 26.2635 25.1751 26.4393C24.3118 26.4393 23.4823 26.4393 22.5966 26.4393C22.5966 25.3868 22.5966 24.3549 22.5966 23.3229C21.8612 24.3069 21.0675 25.179 20.0137 25.743C17.1415 27.2818 14.1797 27.5375 11.2089 26.1083C9.41295 25.2453 8.61251 23.6266 8.4735 21.6494C8.20893 17.8824 10.7268 16.0148 13.442 15.3893C15.9689 14.8071 18.4801 15.008 20.9957 15.4509C21.507 15.5399 22.0137 15.6473 22.572 15.7568L25.193 14.3893ZM16.9398 17.4417C15.4532 17.4303 13.9981 17.5673 12.6775 18.355C11.5654 19.0171 11.0923 20.0216 11.173 21.3093C11.2492 22.5284 11.8255 23.4257 12.9084 23.9622C14.5026 24.7498 16.164 24.6539 17.8276 24.2887C20.3612 23.7316 22.4217 21.2796 22.5182 18.7842C22.5338 18.4029 22.4173 18.2454 22.0697 18.1609C20.3814 17.7568 18.6864 17.4121 16.9398 17.4417Z"
                      fill="evenodd"
                    ></path>
                  </g>
                </SvgIcon>
              </Link>
              <SearchBar />
            </Box>

            {/* <Button color="inherit">Restaurants</Button>
          <Button color="inherit">Meal Kits</Button>
          <Button color="inherit">My Calendar</Button>
          <Button color="inherit">My Meals</Button> */}
            <Link to="/restaurants">
              <Box
                sx={{
                  paddingLeft: "16px",
                  paddingRight: "16px",
                  minHeight: "auto",
                  overflow: "hidden",
                  paddingTop: "6px",
                  paddingBottom: "6px",
                  whiteSpace: "nowrap",
                  transition:
                    "background-color 150ms cubic-bezier(0.4, 0, 0.2, 1) 0ms",
                  border: "0",
                  backgroundColor: "transparent",
                  display: "flex",
                  alignItems: "center",
                }}
              >
                <Typography
                  sx={{
                    alignItems: "center",

                    //height: "40px",
                    fontFamily: "Lato",
                    letterSpacing: "0.02em",
                    lineHeight: "1.5em",
                    color: "#2A2A2A",
                  }}
                >
                  Restaurants
                </Typography>
              </Box>
            </Link>
            <Link to="/mealkits">
              <Box
                sx={{
                  paddingLeft: "16px",
                  paddingRight: "16px",
                  minHeight: "auto",
                  overflow: "hidden",
                  paddingTop: "6px",
                  paddingBottom: "6px",
                  whiteSpace: "nowrap",
                  transition:
                    "background-color 150ms cubic-bezier(0.4, 0, 0.2, 1) 0ms",
                  border: "0",
                  backgroundColor: "transparent",
                  display: "flex",
                  alignItems: "center",
                }}
              >
                <Typography
                  sx={{
                    alignItems: "center",

                    //height: "40px",
                    fontFamily: "Lato",
                    letterSpacing: "0.02em",
                    lineHeight: "1.5em",
                    color: "#2A2A2A",
                  }}
                >
                  Meal Kits
                </Typography>
              </Box>
            </Link>
            <Link to="/mycalendar">
              <Box
                sx={{
                  paddingLeft: "16px",
                  paddingRight: "16px",
                  minHeight: "auto",
                  overflow: "hidden",
                  paddingTop: "6px",
                  paddingBottom: "6px",
                  whiteSpace: "nowrap",
                  transition:
                    "background-color 150ms cubic-bezier(0.4, 0, 0.2, 1) 0ms",
                  border: "0",
                  backgroundColor: "transparent",
                  display: "flex",
                  alignItems: "center",
                }}
              >
                <Typography
                  sx={{
                    alignItems: "center",

                    //height: "40px",
                    fontFamily: "Lato",
                    letterSpacing: "0.02em",
                    lineHeight: "1.5em",
                    color: "#2A2A2A",
                  }}
                >
                  My Calendar
                </Typography>
              </Box>
            </Link>
            <Link to="/mymeals">
              <Box
                sx={{
                  paddingLeft: "16px",
                  paddingRight: "16px",
                  minHeight: "auto",
                  overflow: "hidden",
                  paddingTop: "6px",
                  paddingBottom: "6px",
                  whiteSpace: "nowrap",
                  transition:
                    "background-color 150ms cubic-bezier(0.4, 0, 0.2, 1) 0ms",
                  border: "0",
                  backgroundColor: "transparent",
                  display: "flex",
                  alignItems: "center",
                }}
              >
                <Typography
                  sx={{
                    alignItems: "center",

                    //height: "40px",
                    fontFamily: "Lato",
                    letterSpacing: "0.02em",
                    lineHeight: "1.5em",
                    color: "#2A2A2A",
                  }}
                >
                  My Meals
                </Typography>
              </Box>
            </Link>
            <Link
              to="/"
              style={{
                padding: "9px 16px",
                minHeight: "auto",
                alignItems: "center",
              }}
            >
              <SvgIcon
                sx={{
                  fontSize: "23px",
                  fill: "#676767",
                  marginBottom: "-8.5px",
                }}
                viewBox="0 0 24 24"
                focusable="false"
                aria-hidden="true"
              >
                <g clipPath="url(#clip0)">
                  <path
                    d="M5.6875 10H11.6875C14.4489 10 16.6875 12.2386 16.6875 15C16.6875 15.5523 16.2398 16 15.6875 16C15.1747 16 14.752 15.614 14.6942 15.1166L14.6824 14.8237C14.5945 13.3072 13.3803 12.093 11.8638 12.0051L11.6875 12H5.6875C4.03065 12 2.6875 13.3431 2.6875 15C2.6875 15.5523 2.23978 16 1.6875 16C1.13522 16 0.6875 15.5523 0.6875 15C0.6875 12.3112 2.80981 10.1182 5.47061 10.0046L5.6875 10H11.6875H5.6875ZM8.6875 0C11.4489 0 13.6875 2.23858 13.6875 5C13.6875 7.76142 11.4489 10 8.6875 10C5.92608 10 3.6875 7.76142 3.6875 5C3.6875 2.23858 5.92608 0 8.6875 0ZM8.6875 2C7.03065 2 5.6875 3.34315 5.6875 5C5.6875 6.65685 7.03065 8 8.6875 8C10.3444 8 11.6875 6.65685 11.6875 5C11.6875 3.34315 10.3444 2 8.6875 2Z"
                    fillRule="evenodd"
                    clipRule="evenodd"
                  ></path>
                </g>
              </SvgIcon>
            </Link>
          </Stack>
        </Toolbar>
      </AppBar>
    </>
  );
};
