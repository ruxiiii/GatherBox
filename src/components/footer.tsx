import React from "react";
import {
  Box,
  Grid,
  Card,
  CardMedia,
  CardContent,
  Typography,
  StyledEngineProvider,
  IconButton,
  createTheme,
  Button,
  CardActionArea,
  CardActions,
  Paper,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Container,
  Stack,
  List,
  ListItem,
  ListItemText,
  ListItemButton,
} from "@mui/material";
import { Link, Router } from "react-router-dom";
import { makeStyles } from "@mui/styles";
import { ClassNames } from "@emotion/react";
import logo from "/src/assets/gbicon.ico";
import { NavLink as NavLinkBase } from "react-router-dom";
// import List, {
//   ListItem,
//   ListItemText,

// } from "@material/react-list";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "../pages/homepage/homepage";

const items = [
  { text: "Home", link: "/" },
  { text: "About Us", link: "/about" },
  { text: "FAQ", link: "/faq" },
];
export const Footer = () => {
  return (
    <Box
      sx={{
        "@media (min-width:0px)": {
          paddingTop: "24px",
          paddingLeft: "8px",
          paddingRight: "8px",
        },
        "@media (min-width:600px)": {
          paddingTop: "40px",
          paddingLeft: "40px",
          paddingRight: "40px",
        },
        "@media (min-width:960px)": {
          paddingTop: "72px",
          paddingLeft: "72px",
          paddingRight: "72px",
        },
      }}
    >
      <Container
        sx={{
          "@media (min-width:1280px)": {
            maxWidth: "1280px",
          },
          "@media (min-width:600px)": {
            paddingLeft: "24px",
            paddingRight: "24px",
          },
          width: "100%",
          display: "block",
          boxSizing: "border-box",
          marginLeft: "auto",
          marginRight: "auto",
          paddingLeft: "16px",
          paddingRight: "16px",
        }}
      >
        <Grid
          sx={{
            "& .MuiGrid-spacing-xs-3 > .MuiGrid-item": {
              width: "calc(100%+24px)",
            },
            margin: "-12px",
            width: "100%",
            display: "flex",
            flexWrap: "wrap",
            boxSizing: "border-box",
          }}
        >
          <Grid
            sx={{
              padding: "12px",

              "@media (min-width:600px)": {
                flexGrow: 0,
                maxWidth: "33.3333%",
                flexBasis: "33.33333%",
              },
              flexGrow: 0,
              maxWidth: "100%",
              flexBasis: "100%",
              margin: "0px",
              boxSizing: "border-box",
            }}
          >
            <Box
              sx={{
                paddingBottom: "24px",
                display: "block",
              }}
            >
              <Stack
                direction="row"
                flexGrow={1}
                sx={{ display: "flex", height: "48px", width: "140px" }}
              >
                <Link to="/" style={{ display: "flex", alignItems: "center" }}>
                  <img src={logo} alt="logo" height={48} />
                </Link>
                <Box
                  sx={{
                    justifyContent: "flex-start",
                  }}
                >
                  <Typography
                    variant="h6"
                    lineHeight={2.38}
                    pl={2}
                    color={"black"}
                  >
                    {" "}
                    GATHER{" "}
                  </Typography>
                </Box>
              </Stack>
            </Box>
          </Grid>
          <Grid
            sx={{
              padding: "12px",

              "@media (min-width:600px)": {
                flexGrow: 0,
                maxWidth: "16.666667%",
                flexBasis: "16.666667%",
              },
              flexGrow: 0,
              maxWidth: "100%",
              flexBasis: "100%",
              margin: "0px",
              boxSizing: "border-box",
            }}
          >
            <Box
              sx={{
                paddingBottom: "16px",
              }}
            >
              <Box
                sx={{
                  justifyContent: "flex-start",
                  width: "100%",
                  display: "flex",
                  position: "relative",
                  alignItems: "flex-end",
                }}
              >
                <Typography
                  sx={{
                    color: "#01302",
                    fontWeight: "bold",
                    fontSize: "16px",
                    fontFamily: "Lato",
                    lineHeight: "28px",
                  }}
                >
                  Gather
                </Typography>
              </Box>
              <Stack
                direction="column"
                paddingTop="8px"
                paddingBottom="8px"
                // spacing={}
              >
                <Box
                  sx={{
                    width: "100%",
                    display: "flex",
                    position: "relative",
                    paddingTop: "8px",
                    paddingBottom: "8px",
                    justifyContent: "flex-start",
                  }}
                >
                  <Link to="/">
                    <Typography
                      sx={{
                        fontSize: "16px",
                        fontStyle: "normal",
                        lineHeight: "1.5",
                        letterSpacing: "0.02em",
                        fontFamily: "Lato",
                        fontWeight: "normal",
                      }}
                    >
                      Home
                    </Typography>
                  </Link>
                </Box>
                <Box
                  sx={{
                    width: "100%",
                    display: "flex",
                    position: "relative",
                    paddingBottom: "8px",
                    justifyContent: "flex-start",
                  }}
                >
                  <Link to="/">
                    <Typography
                      sx={{
                        fontSize: "16px",
                        fontStyle: "normal",
                        lineHeight: "1.5",
                        letterSpacing: "0.02em",
                        fontFamily: "Lato",
                        fontWeight: "normal",
                      }}
                    >
                      About
                    </Typography>
                  </Link>
                </Box>
                <Box
                  sx={{
                    width: "100%",
                    display: "flex",
                    position: "relative",
                    paddingBottom: "8px",
                    justifyContent: "flex-start",
                  }}
                >
                  <Link to="/">
                    <Typography
                      sx={{
                        fontSize: "16px",
                        fontStyle: "normal",
                        lineHeight: "1.5",
                        letterSpacing: "0.02em",
                        fontFamily: "Lato",
                        fontWeight: "normal",
                      }}
                    >
                      FAQ
                    </Typography>
                  </Link>
                </Box>
              </Stack>
            </Box>
          </Grid>

          <Grid
            sx={{
              padding: "12px",

              "@media (min-width:600px)": {
                flexGrow: 0,
                maxWidth: "16.666667%",
                flexBasis: "16.666667%",
              },
              flexGrow: 0,
              maxWidth: "100%",
              flexBasis: "100%",
              margin: "0px",
              boxSizing: "border-box",
            }}
          >
            <Box
              sx={{
                paddingBottom: "16px",
              }}
            >
              <Box
                sx={{
                  justifyContent: "flex-start",
                  width: "100%",
                  display: "flex",
                  position: "relative",
                  alignItems: "flex-end",
                }}
              >
                <Typography
                  sx={{
                    color: "#01302",
                    fontWeight: "bold",
                    fontSize: "16px",
                    fontFamily: "Lato",
                    lineHeight: "28px",
                  }}
                >
                  Services
                </Typography>
              </Box>
              <Stack
                direction="column"
                paddingTop="8px"
                paddingBottom="8px"
                // spacing={}
              >
                <Box
                  sx={{
                    width: "100%",
                    display: "flex",
                    position: "relative",
                    paddingTop: "8px",
                    paddingBottom: "8px",
                    justifyContent: "flex-start",
                  }}
                >
                  <Link to="/">
                    <Typography
                      sx={{
                        fontSize: "16px",
                        fontStyle: "normal",
                        lineHeight: "1.5",
                        letterSpacing: "0.02em",
                        fontFamily: "Lato",
                        fontWeight: "normal",
                        textAlign: "left",
                      }}
                    >
                      For Companies
                    </Typography>
                  </Link>
                </Box>
                <Box
                  sx={{
                    width: "100%",
                    display: "flex",
                    position: "relative",
                    paddingBottom: "8px",
                    justifyContent: "flex-start",
                  }}
                >
                  <Link to="/">
                    <Typography
                      sx={{
                        fontSize: "16px",
                        fontStyle: "normal",
                        lineHeight: "1.5",
                        letterSpacing: "0.02em",
                        fontFamily: "Lato",
                        fontWeight: "normal",
                        textAlign: "left",
                      }}
                    >
                      View in Danish
                    </Typography>
                  </Link>
                </Box>
                <Box
                  sx={{
                    width: "100%",
                    display: "flex",
                    position: "relative",
                    paddingBottom: "8px",
                    justifyContent: "flex-start",
                    textAlign: "left",
                  }}
                >
                  <Link to="/">
                    <Typography
                      sx={{
                        fontSize: "16px",
                        fontStyle: "normal",
                        lineHeight: "1.5",
                        letterSpacing: "0.02em",
                        fontFamily: "Lato",
                        fontWeight: "normal",
                      }}
                    >
                      Login / Sign up
                    </Typography>
                  </Link>
                </Box>
              </Stack>
            </Box>
          </Grid>

          <Grid
            sx={{
              padding: "12px",

              "@media (min-width:600px)": {
                flexGrow: 0,
                maxWidth: "16.666667%",
                flexBasis: "16.666667%",
              },
              flexGrow: 0,
              maxWidth: "100%",
              flexBasis: "100%",
              margin: "0px",
              boxSizing: "border-box",
            }}
          >
            <Box
              sx={{
                paddingBottom: "16px",
              }}
            >
              <Box
                sx={{
                  justifyContent: "flex-start",
                  width: "100%",
                  display: "flex",
                  position: "relative",
                  alignItems: "flex-end",
                }}
              >
                <Typography
                  sx={{
                    color: "#01302",
                    fontWeight: "bold",
                    fontSize: "16px",
                    fontFamily: "Lato",
                    lineHeight: "28px",
                  }}
                >
                  Help
                </Typography>
              </Box>
              <Stack
                direction="column"
                paddingTop="8px"
                paddingBottom="8px"
                // spacing={}
              >
                <Box
                  sx={{
                    width: "100%",
                    display: "flex",
                    position: "relative",
                    paddingTop: "8px",
                    paddingBottom: "8px",
                    justifyContent: "flex-start",
                  }}
                >
                  <Link to="/">
                    <Typography
                      sx={{
                        fontSize: "16px",
                        fontStyle: "normal",
                        lineHeight: "1.5",
                        letterSpacing: "0.02em",
                        fontFamily: "Lato",
                        fontWeight: "normal",
                        textAlign: "left",
                      }}
                    >
                      Terms of Use
                    </Typography>
                  </Link>
                </Box>
                <Box
                  sx={{
                    width: "100%",
                    display: "flex",
                    position: "relative",
                    paddingBottom: "8px",
                    justifyContent: "flex-start",
                  }}
                >
                  <Link to="/">
                    <Typography
                      sx={{
                        fontSize: "16px",
                        fontStyle: "normal",
                        lineHeight: "1.5",
                        letterSpacing: "0.02em",
                        fontFamily: "Lato",
                        fontWeight: "normal",
                        textAlign: "left",
                      }}
                    >
                      Privacy Policy
                    </Typography>
                  </Link>
                </Box>
                <Box
                  sx={{
                    width: "100%",
                    display: "flex",
                    position: "relative",
                    paddingBottom: "8px",
                    justifyContent: "flex-start",
                  }}
                >
                  <Link to="/">
                    <Typography
                      sx={{
                        fontSize: "16px",
                        fontStyle: "normal",
                        lineHeight: "1.5",
                        letterSpacing: "0.02em",
                        fontFamily: "Lato",
                        fontWeight: "normal",
                        textAlign: "left",
                      }}
                    >
                      Contact us
                    </Typography>
                  </Link>
                </Box>
              </Stack>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Footer;
