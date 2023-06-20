import React, { useEffect, useState } from "react";
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
  Popover,
  Divider,
  Slider,
  Checkbox,
  FormControlLabel,
  FormGroup,
  TextField,
} from "@mui/material";
import { DatePicker } from "@mui/lab";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
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
import { ButtonBox } from "../../components/buttonBox";
import { Numbers } from "../../components/numbers";
import { RoundPhotos } from "../../components/roundPhotos";

export const MyCalendar = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());

  const handleDateChange = (date: Date) => {
    setSelectedDate(date);
  };

  return (
    <>
      <GeneralHeader />
      <Box
        sx={{
          marginTop: "128px",
          boxSizing: "inherit",
        }}
      >
        <Container
          sx={{
            "@media (min-width: 1280px)": {
              maxWidth: "1280px",
            },
            "@media (min-width: 600px)": {
              paddingLeft: "24px",
              paddingRight: "24px",
            },
            marginLeft: "auto",
            marginRight: "auto",
          }}
        >
          <Grid
            container
            spacing={10}
            sx={{
              width: "calc(100% + 80px)",
              margin: "-40px",
              display: "flex",
              flexWrap: "wrap",
            }}
          >
            <Grid
              container
              spacing={2}
              sx={{
                padding: "40px",
                "@media (min-width:960px)": {
                  "& .MuiGrid-grid-md-8": {
                    flexGrow: 0,
                    maxWidth: "66.666667%",
                    flexBasis: "66.666667%",
                  },
                },
                "& .MuiGrid-grid-xs-12": {
                  flexGrow: 0,
                  maxWidth: "100%",
                  flexBasis: "100%",
                },
                "& .MuiGrid-item": {
                  margin: "0",
                  boxSizing: "border-box",
                },
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                }}
              >
                <Typography
                  sx={{
                    fontSize: "18px",
                    lineHeight: "26px",
                    letterSpacing: "0.02em",
                  }}
                >
                  My meals
                </Typography>
                <Box
                  sx={{
                    display: "grid",
                    placeItems: "center",
                  }}
                >
                  <LocalizationProvider dateAdapter={AdapterDateFns}>
                    <DatePicker
                      value={selectedDate}
                      onChange={handleDateChange}
                      variant="static"
                    />
                  </LocalizationProvider>
                </Box>
              </Box>
              <Box></Box>
            </Grid>

            {/* this is for the cart thing */}

            <Grid></Grid>
          </Grid>
        </Container>
      </Box>
    </>
  );
};

export default MyCalendar;
