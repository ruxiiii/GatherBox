import React, { useState, useEffect } from "react";
import Header from "../../components/common/header/header";
import Footer from "../../components/footer";
import MyCalender from "../calendar/myCalendar";
import MealKits from "../mealk/mealKits";
import MyMeals from "../meals/myMeals";
import Restaurants from "../restaurants/restaurants";
import UserAuth from "../User/userAuth";
import {
  Box,
  Card,
  CardMedia,
  CardContent,
  Grid,
  Typography,
  StyledEngineProvider,
  createTheme,
  Button,
} from "@mui/material";
import { makeStyles } from "@mui/styles";
import frontFirstImage from "../../assets/front_image.217eeaaf.webp";
import { ClassNames } from "@emotion/react";
import SearchBar from "../../components/searchBar";
import MenuCard from "../../components/menuCard";
import { Link } from "react-router-dom";
import { ButtonBox } from "../../components/buttonBox";
import Debugger from "../../components/debugger";
import Debug from "../../components/debug";
import "@fontsource/lato";
import "@fontsource/eb-garamond";

const useStyles = makeStyles(() => ({
  card1: {
    position: "relative",
    width: "100%",
    height: 0, // Set the height to zero
    paddingBottom: "66.67%", // Maintain the 3:2 aspect ratio
    "& .MuiCardMedia-root": {
      position: "absolute",
      top: 0,
      left: 0,
      width: "100%",
      height: "100%",
      backgroundSize: "cover",
      backgroundPosition: "75% 100%", // Set the desired background position
    },
  },
  searchBar: {
    visibility: "visible",
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    zIndex: 1,
  },

  brandLogoBox: {
    width: "auto",
    padding: "20,28,15,28",
    textAlign: "center",
    display: "block",
  },

  brandImage: {
    width: "95px",
    padding: "20px 28px 15px 28px !important",
    textAlign: "center",
  },

  headingTypography: {
    fontSize: "40px !important",
    fontFamily: "EB Garamond !important",
    fontWeight: "normal !important",
    lineHeight: "48px !important",
  },

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
  cardDesign: {
    "@media (min-width:600px)": {
      paddingBottom: "24px",
    },
    "@media (min-width:0px)": {
      paddingBottom: "48px",
    },
    boxSizing: "inherit",
    textAlign: "center",
    maxWidth: "100%",
    maxHeight: "617px",
    height: "100%",
  },

  cardDesignImage: {
    alignItems: "center !important",
    justifyContent: "center",
    objectPosition: "center",
    objectFit: "cover",

    height: "221px",
    // maxwidth: "221px",
    overflowClipMargin: "content-box",
    overflow: "clip",
    "& img": {
      height: "100%",
      objectFit: "cover",
      display: "inline-block !important",
    },
    maxWidth: "221px",
  },

  cardDesignTypoHeading: {
    fontStyle: "normal !important",
    fontSize: "18px !important",
    fontFamily: "Lato !important",
    fontWeight: "bold !important",
    lineHeight: "28px !important",
    letterSpacing: "0.02em !important",
  },

  cardDesignTypoSubtitle: {
    fontStyle: "normal",
    fontSize: "14px",
    fontFamilt: "Lato",
    fontWeight: "normal",
    lineHeight: "18px",
    letterSpacing: "0.02em",
  },
}));

const HomePage = () => {
  const classes = useStyles();
  const [isIntersecting, setIsIntersecting] = useState(false);
  const [opacity, setOpacity] = useState<number>(0.3);

  useEffect(() => {
    const handleScroll = () => {
      const box = document.getElementById("scroll-opacity-box");
      const boxTop = box?.getBoundingClientRect().top;
      const windowHeight = window.innerHeight;

      if (boxTop && boxTop < windowHeight && boxTop > -box.offsetHeight) {
        setOpacity(1);
      } else {
        setOpacity(0.3);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // const { ref, inView } = useInView({
  //   threshold: 0.5,
  //   triggerOnce: true,
  //   opacity: 1,
  // });

  // if (inView) {
  //   setcardIsVisible(true);
  // }

  return (
    <div>
      <div>
        <Header />
      </div>
      <div>
        {/* <Card className={classes.card1}>
        <CardMedia
          component="img"
          alt="Gather Box Background"
          image={frontFirstImage}
          title="Gather Box Background"
        />
        <Header />
        <SearchBar />
      </Card>

      <Box
        sx={{
          paddingLeft: "16px",
          paddingRight: "16px",
          width: "100%",
          backgroundColor: "rgb(255, 255, 255)",
          position: "relative",
          boxSizing: "inherit",
        }}
      >
        <Box
          sx={{
            width: "100%",
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
            boxSizing: "inherit",
            margin: "0px",
          }}
        >
          <Box className={classes.brandLogoBox}>
            <img
              src="src\assets\laltro.3adfef74.png"
              className={classes.brandImage}
            />
          </Box>
          <Box className={classes.brandLogoBox}>
            <img
              src="src\assets\ris8.3ea3b92a.png"
              className={classes.brandImage}
            />
          </Box>
          <Box className={classes.brandLogoBox}>
            <img
              src="src\assets\mamemi.7b2170a1.png"
              className={classes.brandImage}
            />
          </Box>
        </Box>
      </Box> */}

        <Box
          sx={{
            boxSizing: "inherit",
          }}
        >
          <Box
            sx={{
              width: "100%",
              backgroundSize: "cover",
              backgroundImage: `url(https://www.gatherbox.dk/static/media/front_image.217eeaaf.webp)`,
              backgroundPosition: "75% 100%",
            }}
          >
            <Box
              sx={{
                //display: "flex",
                background:
                  "linear-gradient(358.9deg, rgba(0, 0, 0, 0.75) 0.91%, rgba(196, 196, 196, 0) 99.04%)",
                //flexDirection: "row !imporant",
                justifyContent: "center",
                height: "824px",
              }}
            >
              <Box
                sx={{
                  display: "flex !important",
                  background:
                    "linear-gradient(358.9deg, rgba(0, 0, 0, 0.75) 0.91%, rgba(196, 196, 196, 0) 99.04%)",
                  flexDirection: "column",
                  justifyContent: "center",
                  height: "824px",
                }}
              >
                <Box
                  sx={{
                    color: "white",
                    display: "flex",
                    flexDirection: "column",
                    maxWidth: "100%",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <Box
                    sx={{
                      maxWidth: "882px",
                      display: "block",
                    }}
                  >
                    <Typography
                      sx={{
                        fontSize: "80px",
                        fontFamily: "EB Garamond",
                        fontWeight: "normal",
                        lineHeight: "88px",
                        color: "#",
                      }}
                    >
                      Turn your kitchen into your favourite restaurant any day.
                    </Typography>
                    <Box
                      sx={{
                        marginTop: "16px",
                      }}
                    >
                      <Typography
                        sx={{
                          fontSize: "18px",
                          fontFamily: "Lato",
                          fontWeight: "normal",
                          lineHeight: "26px",
                          letterSpacing: "0.02em",
                          color: "#ffffff",
                        }}
                      >
                        Gather gives you the opportunity to create a unique,
                      </Typography>
                      <Typography
                        sx={{
                          fontSize: "18px",
                          fontFamily: "Lato",
                          fontWeight: "normal",
                          lineHeight: "26px",
                          letterSpacing: "0.02em",
                          color: "#ffffff",
                        }}
                      >
                        at-home culinary experience by bringing the restaurant
                        to you.
                      </Typography>
                    </Box>
                  </Box>
                  <Box
                    sx={{
                      maxWidth: "465px",
                      height: "64px !important",
                      marginTop: "26px",
                      "@media (min-width: 600px)": {
                        marginTop: "32px",
                      },
                      "@media (min-width: 0px)": {
                        marginTop: "24px",
                      },
                      "@media (min-width: 960px)": {
                        marginTop: "32px",
                      },
                      width: "100%",
                    }}
                  >
                    <SearchBar />
                  </Box>
                </Box>
              </Box>
            </Box>
          </Box>
        </Box>

        <Box
          sx={{
            padding: "16px", // default padding for smallest screen size
            paddingBottom: "80px", // default padding-bottom for smallest screen size
            "@media (min-width: 600px)": {
              paddingLeft: "40px",
              paddingRight: "40px",
            },
            "@media (min-width: 960px)": {
              paddingLeft: "64px",
              paddingRight: "64px",
              paddingBottom: "96px",
            },
            display: "block",
            boxSizing: "inherit",
          }}
        >
          <Box
            sx={{
              // display: "flex",
              flexWrap: "wrap",
              // marginLeft: "-12px",
              // marginRight: "-12px",
              justifyContent: "center",
              boxSizing: "border-box",
            }}
          >
            <Box
              sx={{
                marginTop: "40px",
                textAlign: "center",
                marginBottom: "40px",
                fontSize: "40px",
                fontFamily: "EB Garamond",
                fontWeight: "normal",
                lineHeight: "48px",
              }}
            >
              <Typography className={classes.headingTypography}>
                Meal kits trending now
              </Typography>
            </Box>
            <Box
              sx={{
                display: "flex",
                flexWrap: "wrap",
                marginLeft: "-12px",
                marginRight: "-12px",
                justifyContent: "center",
                // boxSizing:'inherit',
              }}
            >
              <Box className={classes.menuBox}>
                <MenuCard
                  imageSrc="https://gatherbox.appspot.com.storage.googleapis.com/mealkits/ris8-classico--risotto-/thumbnail.png"
                  dishName="Classico (Risotto)"
                  distance="64 kr"
                  restaurantName="RIS 8"
                />
              </Box>
              <Box className={classes.menuBox}>
                <MenuCard
                  imageSrc="https://gatherbox.appspot.com.storage.googleapis.com/mealkits/l-altro-la-carbonara/thumbnail.png"
                  dishName="La Carbonara"
                  distance="110 kr"
                  restaurantName="L'Altro"
                />
              </Box>
            </Box>
            <Box>
              <ButtonBox
                buttonText="SEE ALL MEAL KITS"
                linkto="/mealKits"
                buttonColor="#f24412"
                textColor="#ffffff"
                textFontFamily="Lato"
              />
            </Box>
          </Box>
        </Box>

        {/* Add other content here */}

        <Box
          sx={{
            width: "100%",
          }}
        >
          <Box
            sx={{
              padding: "32px 40px 88px",
            }}
          >
            <Box
              sx={{
                padding: "32px 24px",
              }}
            >
              <Grid
                sx={{
                  margin: "-24px",
                  marginRight: "0px",
                  width: "calc(100%+24px) !important",
                  display: "flex",
                  flexWrap: "wrap",
                  alignItems: "inherit",
                }}
              >
                <Grid
                  sx={{
                    textAlign: "center",
                    padding: "12px",
                    flexGrow: 0,
                    maxWidth: "100%",
                    flexBasis: "100%",
                    margin: 0,
                    boxSizing: "border-box",
                    display: "block",
                  }}
                >
                  <Box>
                    <Typography
                      sx={{
                        fontFamily: "EB Garamond",
                        fontWeight: "normal",
                        lineHeight: "48px",
                        fontSize: "40px",
                      }}
                    >
                      This is how it works
                    </Typography>
                  </Box>
                </Grid>
              </Grid>
            </Box>

            <Box
              sx={{
                paddingTop: {
                  xs: "40px", // corresponds to min-width: 0px
                  sm: "68px", // corresponds to min-width: 600px
                },
                "@media (min-width: 0px)": {
                  paddingTop: "40px",
                },

                display: "flex",
                alignItems: "inherit",
                marginRight: "0px",
              }}
            >
              <Grid
                sx={{
                  width: "100%",
                  //margin: "-12px",
                  alignItems: "inherit",
                  justifyContent: "center",
                  display: "flex",
                  flexWrap: "wrap",
                  // boxSizing: "border-box",
                  "& > .MuiGrid-item": {
                    padding: "12px",
                  },
                }}
              >
                <Grid
                  sx={{
                    padding: "12px",
                    flexGrow: "0",
                    maxWidth: "33.333333%",
                    flexBasis: "33.333333%",
                    alignContent: "center",
                  }}
                >
                  <Card className={classes.cardDesign}>
                    <CardMedia
                      className={classes.cardDesignImage}
                      component="img"
                      image="/src/assets/choose-mealkit.13fb59e9.webp"
                      alt="Gather Box"
                    ></CardMedia>
                    <CardContent
                      sx={{
                        maxWidth: "100%",
                        paddingLeft: "16px",
                        paddingRight: "16px",
                        textAlign: "center",
                      }}
                    >
                      <Typography className={classes.cardDesignTypoHeading}>
                        Choose meal-kit
                      </Typography>
                      <Box
                        sx={{
                          marginTop: "8px",
                          boxSizing: "inherit",
                          textAlign: "center",
                        }}
                      >
                        <Typography className={classes.cardDesignTypoSubtitle}>
                          Use our website to search and order your meal kits.
                        </Typography>
                      </Box>
                    </CardContent>
                  </Card>
                </Grid>
                <Grid
                  sx={{
                    padding: "12px",
                    flexGrow: "0",
                    maxWidth: "33.333333%",
                    flexBasis: "33.333333%",
                  }}
                >
                  <Card className={classes.cardDesign}>
                    <CardMedia
                      className={classes.cardDesignImage}
                      component="img"
                      image="src/assets/pickup-gatherbox.6d1ed45f.webp"
                      alt="Gather Box"
                    ></CardMedia>
                    <CardContent
                      sx={{
                        paddingLeft: "16px",
                        paddingRight: "16px",
                        textAlign: "center",
                      }}
                    >
                      <Typography className={classes.cardDesignTypoHeading}>
                        Pick up Gatherbox
                      </Typography>
                      <Box
                        sx={{
                          marginTop: "8px",
                          boxSizing: "inherit",
                          textAlign: "center",
                        }}
                      >
                        <Typography className={classes.cardDesignTypoSubtitle}>
                          Once the order is made you can pick-up your meal kit
                          during the restaurant's pick-up times.
                        </Typography>
                      </Box>
                    </CardContent>
                  </Card>
                </Grid>
                <Grid
                  sx={{
                    padding: "12px",
                    flexGrow: "0",
                    maxWidth: "33.333333%",
                    flexBasis: "33.333333%",
                  }}
                >
                  <Card className={classes.cardDesign}>
                    <CardMedia
                      className={classes.cardDesignImage}
                      component="img"
                      image="src/assets/cookneat.27499359.webp"
                      alt="Gather Box"
                    ></CardMedia>
                    <CardContent
                      sx={{
                        paddingLeft: "16px",
                        paddingRight: "16px",
                        textAlign: "center",
                      }}
                    >
                      <Typography className={classes.cardDesignTypoHeading}>
                        Cook, prepare and eat
                      </Typography>
                      <Box
                        sx={{
                          marginTop: "8px",
                          boxSizing: "inherit",
                          textAlign: "center",
                        }}
                      >
                        <Typography className={classes.cardDesignTypoSubtitle}>
                          Using the apps recipe/guides, prepare and cook the
                          meal at home and enjoy!
                        </Typography>
                      </Box>
                    </CardContent>
                  </Card>
                </Grid>
              </Grid>
            </Box>
          </Box>
        </Box>

        <Box>
          <Box
            sx={{
              "@media (min-width:600px)": {
                padding: "40px 40px 32px",
              },
              padding: "32px 24px 24px",
              backgroundColor: "rgb(1, 48, 36)",
            }}
          >
            <Box
              sx={{
                textAlign: "center",
                paddingBottom: "32px",
              }}
            >
              <Typography
                sx={{
                  fontFamily: "EB Garamond",
                  fontWeight: "normal",
                  lineHeight: "48px",
                  fontSize: "40px",
                  color: "rgb(255,255,255)",
                }}
              >
                Newly added restaurants
              </Typography>
            </Box>
            <Box
              sx={{
                display: "flex",
                position: "relative",
                justifyContent: "center",
                boxSizing: "inherit",
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  overflow: "hidden",
                  justifyContent: "flex-start",
                  height: "480px",
                  "@media (max-width:959.59px)": {
                    height: "321px",
                  },
                }}
              >
                <Link to="/restaurants/ris8">
                  <Box
                    sx={{
                      height: "480px",
                      cursor: "pointer",
                      margin: "12px",
                      postion: "relative",
                      "@media (max-width:959.59px)": {
                        height: "321px",
                      },
                    }}
                  >
                    <Box
                      component="a"
                      href="#"
                      sx={{
                        display: "block",
                        position: "relative",
                        width: "285px",
                        height: "480px",
                        borderRadius: "8px",
                        "@media (max-width:959.59px)": {
                          height: "321px",
                          width: "191px",
                        },
                        "&::after": {
                          content: "''",
                          position: "absolute",
                          top: 0,
                          left: 0,
                          width: "100%",
                          height: "100%",
                          background:
                            "linear-gradient(180deg, rgba(12, 12, 12, 0.05) 53.65%, #161616 100%)",
                          borderRadius: "8px",
                        },
                      }}
                    >
                      <Box
                        component="img"
                        alt="Ris8"
                        src="https://gatherbox.appspot.com.storage.googleapis.com/restaurants/ris8/thumbnail.png"
                        sx={{
                          position: "absolute",
                          top: 0,
                          left: 0,
                          width: "100%",
                          height: "100%",
                          objectFit: "cover",
                          borderRadius: "8px",
                        }}
                      />
                      <Box
                        sx={{
                          paddingTop: "360PX",
                          paddingBottom: "28px",
                        }}
                      >
                        <Typography
                          sx={{
                            color: "rgb(255, 255, 255)!important",
                            fontSize: "32px",
                            fontFamily: "EB Garamond",
                            fontWeight: "normal",
                            lineHeaight: "36px",
                            display: "block",
                            position: "relative",
                          }}
                        >
                          Ris8
                        </Typography>
                        <Box
                          component="hr"
                          sx={{
                            marginTop: "12px",
                            color: "rgb(255, 255, 255)!important",
                            width: "24px",
                            height: "1px",
                            margin: "0px auto",
                            backgroundColor: "rgb(255, 255, 255)",
                            opacity: 0.5,
                          }}
                        />
                      </Box>
                    </Box>
                  </Box>
                </Link>
                <Link to="/restaurants/mamemi">
                  <Box
                    sx={{
                      height: "400px",
                      cursor: "pointer",
                      margin: "12px",
                      postion: "relative",
                      "@media (min-width:600px)": {
                        height: "321px",
                      },
                    }}
                  >
                    <Box
                      component="a"
                      href="#"
                      sx={{
                        display: "block",
                        position: "relative",
                        width: "285px",
                        height: "480px",
                        borderRadius: "8px",
                        "@media (max-width:959.59px)": {
                          height: "321px",
                          width: "191px",
                        },
                        "&::after": {
                          content: "''",
                          position: "absolute",
                          top: 0,
                          left: 0,
                          width: "100%",
                          height: "100%",
                          background:
                            "linear-gradient(180deg, rgba(12, 12, 12, 0.05) 53.65%, #161616 100%)",
                          borderRadius: "8px",
                        },
                      }}
                    >
                      <Box
                        component="img"
                        alt="MaMeMi"
                        src="https://gatherbox.appspot.com.storage.googleapis.com/restaurants/mamemi/thumbnail.png"
                        sx={{
                          position: "absolute",
                          top: 0,
                          left: 0,
                          width: "100%",
                          height: "100%",
                          objectFit: "cover",
                          borderRadius: "8px",
                        }}
                      />
                      <Box
                        sx={{
                          paddingTop: "360px",
                          paddingBottom: "28px",
                        }}
                      >
                        <Typography
                          sx={{
                            color: "rgb(255, 255, 255)!important",
                            fontSize: "32px",
                            fontFamily: "EB Garamond",
                            fontWeight: "normal",
                            lineHeaight: "36px",
                            display: "block",
                            position: "relative",
                          }}
                        >
                          MaMeMi
                        </Typography>
                        <Box
                          component="hr"
                          sx={{
                            color: "rgb(255, 255, 255)!important",
                            width: "24px",
                            height: "1px",
                            margin: "0px auto",
                            backgroundColor: "rgb(255, 255, 255)",
                            opacity: 0.5,
                          }}
                        />
                      </Box>
                    </Box>
                  </Box>
                </Link>
                <Link to="/restaurants/laltro">
                  <Box
                    sx={{
                      height: "400px",
                      cursor: "pointer",
                      margin: "12px",
                      postion: "relative",
                      "@media (min-width:600px)": {
                        height: "321px",
                      },
                    }}
                  >
                    <Box
                      component="a"
                      href="#"
                      sx={{
                        display: "block",
                        position: "relative",
                        width: "285px",
                        height: "480px",
                        borderRadius: "8px",
                        "@media (max-width:959.59px)": {
                          height: "321px",
                          width: "191px",
                        },
                        "&::after": {
                          content: "''",
                          position: "absolute",
                          top: 0,
                          left: 0,
                          width: "100%",
                          height: "100%",
                          background:
                            "linear-gradient(180deg, rgba(12, 12, 12, 0.05) 53.65%, #161616 100%)",
                          borderRadius: "8px",
                        },
                      }}
                    >
                      <Box
                        component="img"
                        alt="L'Altro"
                        src="https://gatherbox.appspot.com.storage.googleapis.com/restaurants/l-altro/thumbnail.png"
                        sx={{
                          position: "absolute",
                          top: 0,
                          left: 0,
                          width: "100%",
                          height: "100%",
                          objectFit: "cover",
                          borderRadius: "8px",
                        }}
                      />
                      <Box
                        sx={{
                          paddingTop: "360px",
                          paddingBottom: "28px",
                        }}
                      >
                        <Typography
                          sx={{
                            color: "rgb(255, 255, 255)!important",
                            fontSize: "32px",
                            fontFamily: "EB Garamond",
                            fontWeight: "normal",
                            lineHeaight: "36px",
                            display: "block",
                            position: "relative",
                          }}
                        >
                          L'Altro
                        </Typography>
                        <Box
                          component="hr"
                          sx={{
                            color: "rgb(255, 255, 255)!important",
                            width: "24px",
                            height: "1px",
                            margin: "0px auto",
                            backgroundColor: "rgb(255, 255, 255)",
                            opacity: 0.5,
                          }}
                        />
                      </Box>
                    </Box>
                  </Box>
                </Link>
              </Box>
            </Box>

            <Box
              sx={{
                display: "flex",
                marginTop: "48px",
                justifyContent: "center",
              }}
            >
              <ButtonBox
                buttonText="SEE ALL RESTAURANTS"
                linkto="/restaurants"
                buttonColor="buttonface"
                textColor="#2A2A2A"
                textFontFamily="Lato"
              />
            </Box>
          </Box>
        </Box>
        <Box
          sx={{
            alignItems: "center",
          }}
        >
          <Container
            sx={{
              width: "100%",
              padding: "0px !important",

              "@media (min-width:1620px)": {
                maxWidth: "1620px !important",
              },
              "@media (min-width:600px)": {
                paddingLeft: "24px",
                paddingRight: "24px",
              },
              //width: "100%",
              display: "block",
              boxSizing: "border-box",
              alignItems: "center",
            }}
          >
            <Grid
              justifyContent="center"
              sx={{
                marginTop: "76px",
                marginBottom: "80px",
                width: "100%",
                display: "flex",
                flexWrap: "wrap",
                marginLeft: "auto",
                marginRight: "auto",
              }}
            >
              <Grid
                item
                xs={12}
                sx={{
                  flexGrow: 0,
                  width: "100%",
                  flexBasis: "100%",
                  position: "relative",
                  maxWidth: "1300px",
                }}
              >
                <Box
                  sx={{
                    // "@media (max-width:959.95px)": {
                    //   float: "none",

                    //   width: "87%",
                    //   margin: "auto",
                    //   position: "relative",
                    // },

                    float: "right",
                    maxWidth: "832px",
                    width: "100%",
                    height: "483px",
                    backgroundImage: `url(https://www.gatherbox.dk/static/media/image_3.b4c6618e.png)`,

                    backgroundPosition: "center",
                    backgroundRepeat: "no-repeat",
                  }}
                >
                  <Box
                    sx={{
                      left: "0px",
                      right: "0px",
                      height: "483px",
                      position: "absolute",
                      background:
                        "linear-gradient(90deg, rgba(11, 11, 11, 1) 35%, rgba(11, 11, 11, 0) 80%)",
                    }}
                  >
                    <Box
                      sx={{
                        textAlign: "initial",
                        top: "0px",
                        left: "75px",
                        width: "390px !important",
                        height: "340px",
                        position: "absolute",
                        transform: `translate(0%,50%)`,
                      }}
                    >
                      <Typography
                        sx={{
                          fontSize: "40px",
                          fontFamily: "EB Garamond",
                          fontWeight: "normal",
                          lineHeight: "48px",
                          color: "#ffffff",
                        }}
                      >
                        A universe of meal kits
                      </Typography>
                      <Box
                        sx={{
                          "@media (min-width:0px)": {
                            marginTop: "14.4px",
                          },
                          marginTop: "8px",
                          "@media (min-width:960px)": {
                            marginTop: "14.4px",
                          },
                        }}
                      >
                        <Typography
                          sx={{
                            fontSize: "18px",
                            fontFamily: "Lato",
                            fontWeight: "normal",
                            lineHeaight: "26px",
                            letterSpacing: "0.02em",
                            color: "#ffffff",
                          }}
                        >
                          Explore what Gather has to offer by searching through
                          our selection of chef-prepared meal kits. We offer an
                          abundance of delicious meals to please everyone.
                        </Typography>
                      </Box>
                      <Box
                        sx={{
                          "@media (min-width:960px)": {
                            marginTop: "27.7px",
                          },
                          "@media (min-width:0px)": {
                            marginTop: "24px",
                          },
                        }}
                      >
                        <ButtonBox
                          buttonText="Explore our meal kits"
                          linkto="/mealKits"
                          buttonColor="#e1e1e1"
                          textColor="#2A2A2A"
                          textFontFamily="Lato"
                        />
                      </Box>
                    </Box>
                  </Box>
                </Box>
              </Grid>
            </Grid>
          </Container>
        </Box>
        <Box sx={{}}>
          <Container
            sx={{
              padding: "0px",
              "@media (min-width:600px)": {
                paddingLeft: " 24px",
                paddingRight: "24px",
              },
              "@media (min-width:1620px)": {
                maxWidth: "1620px",
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
            <Box
              sx={{
                paddingTop: "16px",
                "@media (min-width:960px)": {
                  paddingLeft: "72px",
                  paddingRight: "72px",
                  paddingBottom: "64px",
                },
                "@media (min-width:600px)": {
                  paddingLeft: "24px",
                  paddingRight: "24px",
                  paddingBottom: "24px",
                },
                "@media (min-width:0px)": {
                  paddingLeft: "24px",
                  paddingRight: "24px",
                  paddingBottom: "0px",
                },
              }}
            >
              <Grid
                sx={{
                  width: "100%",
                  display: "flex",
                  flexWrap: "wrap",
                  boxSizing: "border-box",
                }}
              >
                <Grid
                  sx={{
                    "@media (min-width:960px)": {
                      flexGrow: "0",
                      maxWidth: "33.333333%",
                      flexBasis: "33.333333%",
                    },
                    margin: "0",
                    boxSizing: "border-box",
                  }}
                >
                  <Box
                    sx={{
                      position: "sticky",
                      top: "0px",
                      "@media (min-width:960px)": {
                        paddingTop: "264px",
                        paddingBottom: "264px",
                      },
                      "@media (min-width:600px)": {
                        padding: "48px 24px 32px",
                      },
                      "@media (min-width:0px)": {
                        paddingTop: "48px",
                        paddingBottom: "32px",
                      },
                    }}
                  >
                    <Typography
                      sx={{
                        fontStyle: "normal",
                        letterSpacing: "0.01071em",
                        fontSize: "56px",
                        fontFamily: "EB Garamond",
                        fontWeight: "normal",
                        lineHeight: "64px",
                      }}
                    >
                      Make authentic meals with the chef's prepared meal kits.
                    </Typography>
                  </Box>
                </Grid>
                <Grid
                  sx={{
                    "& .MuiGrid-item": {
                      marginTop: "0px",
                    },
                    "@media (min-width:960px)": {
                      flexGrow: "0 !important",
                      maxWidth: "33.333% ",
                      flexBasis: "33.33333%",
                      margin: "0px",
                      boxSizing: "border-box",
                    },
                    margin: "0px",
                    boxSizing: "border-box",
                  }}
                >
                  <Box
                    sx={{
                      //opacity: isInView ? "1" : "0.3",
                      transition: "margin-top 0.7s ease 0s, opacity 1s ease 0s",
                      marginTop: "0px",
                      "@media (min-width:0px)": {
                        padding: "8px 0px",
                      },
                      "@media (min-width:960px)": {
                        padding: "32px 48px",
                      },
                      "@media (min-width:600px)": {
                        padding: "16px 24px",
                      },

                      boxSizing: "inherit",
                      display: "block",
                      // backgroundSize: "contain",
                      // backgroundPosition: "center",
                      // backgroundRepeat: "no-repeat",
                      // position: "relative",
                      // display: "flex",
                      // justifyContent: "center",
                      // alignItems: "center",
                      // overflow: "hidden",
                      // objectFit: "cover",
                      // boxSizing: "inherit",
                    }}
                  >
                    <Box
                      sx={{
                        backgroundImage:
                          'url("https://www.gatherbox.dk/static/media/restro1.c98b6edf.jpg")',
                        width: "100%",
                        borderRadius: "8px",
                        boxSizing: "inherit",
                        height: "27vh",
                        "& img": {
                          overflowClipMargin: "content-box",
                          overflow: "clip",
                          opacity: 0.3,
                          transition: "opacity 1s ease-in-out",
                        },
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                        backgroundRepeat: "no-repeat",
                      }}
                      // ref={ref}
                    ></Box>
                    <Box
                      sx={{
                        "@media (min-width:960px)": {
                          marginTop: "16px",
                        },
                        "@media (min-width:600px)": {
                          marginTop: "16px",
                        },
                        "@media (min-width:0px)": {
                          marginTop: "16px",
                        },
                        display: "block",
                      }}
                    >
                      <Typography
                        sx={{
                          fontSize: "15px",
                          fontFamily: "Lato",
                          fontWeight: "bold",
                          lineHeight: "20px",
                          letterSpacing: "0.01em",
                        }}
                      >
                        Let the chef choose for you
                      </Typography>
                    </Box>
                    <Box
                      sx={{
                        "@media (min-width:960px)": {
                          paddingTop: "8px",
                          paddingBottom: "8px",
                        },
                        "@media (min-width:600px)": {
                          paddingTop: "8px",
                          paddingBottom: "8px",
                        },
                        "@media (min-width:0px)": {
                          paddingTop: "8px",
                          paddingBottom: "8px",
                        },
                        textAlign: "center",
                      }}
                    >
                      <Typography
                        sx={{
                          fontSize: "18px",
                          fontFamily: "Lato",
                          fontWeight: "normal",
                          lineHeight: "26px",
                          letterSpacing: "0.02em",
                        }}
                      >
                        The ingredients you receive in the meal kits are
                        handpicked by the chef. Therefore, you get only the best
                        seasonal and quality ingredients in your meal kit.
                      </Typography>
                    </Box>
                  </Box>

                  <Box
                    sx={{
                      "@media (min-width:960px)": {
                        padding: "240px 48px",
                      },
                      "@media (min-width:600px)": {
                        padding: "40px 24px",
                      },
                      "@media (min-width:0px)": {
                        padding: "32px 0px",
                      },
                      display: "block",
                    }}
                  >
                    <Box
                      sx={{
                        backgroundImage:
                          'url("https://www.gatherbox.dk/static/media/restro3.0aca469e.jpg")',
                        width: "100%",
                        borderRadius: "8px",
                        boxSizing: "inherit",
                        height: "27vh",
                        "& img": {
                          overflowClipMargin: "content-box",
                          overflow: "clip",
                          opacity: 0.3,
                          transition: "opacity 1s ease-in-out",
                        },
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                        backgroundRepeat: "no-repeat",
                      }}
                      // ref={ref}
                    ></Box>
                    <Box
                      sx={{
                        "@media (min-width:960px)": {
                          marginTop: "16px",
                        },
                        "@media (min-width:600px)": {
                          marginTop: "16px",
                        },
                        "@media (min-width:0px)": {
                          marginTop: "16px",
                        },
                      }}
                    >
                      <Typography
                        sx={{
                          fontSize: "15px",
                          fontFamily: "Lato",
                          fontWeight: "bold",
                          lineHeight: "20px",
                          letterSpacing: "0.01em",
                        }}
                      >
                        Choose your favourite food universe
                      </Typography>
                    </Box>
                    <Box
                      sx={{
                        "@media (min-width:960px)": {
                          paddingTop: "8px",
                          paddingBottom: "8px",
                        },

                        "@media (min-width:600px)": {
                          paddingTop: "8px",
                          paddingBottom: "8px",
                        },
                        "@media (min-width:0px)": {
                          paddingTop: "8px",
                          paddingBottom: "8px",
                        },
                        textAlign: "center",
                      }}
                    >
                      <Typography
                        sx={{
                          fontSize: "18px",
                          fontFamily: "Lato",
                          fontWeight: "normal",
                          lineHeight: "26px",
                          letterSpacing: "0.02em",
                        }}
                      >
                        We work with a number of restaurants specialising in
                        various cuisines. Let us help you experience a vacation
                        to a culinary destination of any cuisine you’re craving.
                      </Typography>
                    </Box>
                  </Box>
                </Grid>

                <Grid
                  sx={{
                    "& .MuiGrid-item": {
                      marginTop: "0px",
                    },
                    "@media (min-width:960px)": {
                      flexGrow: "0 !important",
                      maxWidth: "33.333% ",
                      flexBasis: "33.33333%",
                      margin: "0px",
                      boxSizing: "border-box",
                    },
                    margin: "0px",
                    boxSizing: "border-box",
                  }}
                >
                  <Box
                    sx={{
                      opacity: "0.3",
                      transition: "margin-top 0.7s ease 0s, opacity 1s ease 0s",
                      marginTop: "0px",
                      "@media (min-width:0px)": {
                        padding: "32px 0px",
                      },
                      "@media (min-width:960px)": {
                        padding: "520px 48px",
                      },
                      "@media (min-width:600px)": {
                        padding: "48px 24px",
                      },

                      boxSizing: "inherit",
                      display: "block",
                    }}
                  >
                    <Box
                      id="scroll-opacity-box"
                      sx={{
                        backgroundImage:
                          'url("https://www.gatherbox.dk/static/media/restro2.cc4888d7.jpg")',
                        width: "100%",
                        borderRadius: "8px",
                        boxSizing: "inherit",
                        height: "27vh",
                        "& img": {
                          overflowClipMargin: "content-box",
                          overflow: "clip",
                          opacity: opacity,
                          transition: "opacity 1s ease-in-out",
                        },
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                        backgroundRepeat: "no-repeat",
                      }}
                      //ref={ref}
                    ></Box>
                    <Box
                      sx={{
                        "@media (min-width:960px)": {
                          marginTop: "16px",
                        },
                        "@media (min-width:600px)": {
                          marginTop: "16px",
                        },
                        "@media (min-width:0px)": {
                          marginTop: "16px",
                        },
                        display: "block",
                      }}
                    >
                      <Typography
                        sx={{
                          fontSize: "15px",
                          fontFamily: "Lato",
                          fontWeight: "bold",
                          lineHeight: "20px",
                          letterSpacing: "0.01em",
                        }}
                      >
                        Benefit the restaurants and you
                      </Typography>
                    </Box>
                    <Box
                      sx={{
                        "@media (min-width:960px)": {
                          paddingTop: "8px",
                          paddingBottom: "8px",
                        },
                        "@media (min-width:600px)": {
                          paddingTop: "8px",
                          paddingBottom: "8px",
                        },
                        "@media (min-width:0px)": {
                          paddingTop: "8px",
                          paddingBottom: "8px",
                        },
                        textAlign: "center",
                      }}
                    >
                      <Typography
                        sx={{
                          fontSize: "18px",
                          fontFamily: "Lato",
                          fontWeight: "normal",
                          lineHeight: "26px",
                          letterSpacing: "0.02em",
                        }}
                      >
                        Our mission is to create a connection between the
                        restaurants and you, and not only on the weekends. You
                        can use Gather any day of the week and explore the
                        restaurant’s selected ingredients and inspiring recipes,
                        all the while supporting your local restaurants.
                      </Typography>
                    </Box>
                  </Box>

                  <Box
                    sx={{
                      "@media (min-width:960px)": {
                        padding: "0px 48px",
                      },
                      "@media (min-width:600px)": {
                        padding: "40px 24px",
                      },
                      "@media (min-width:0px)": {
                        padding: "32px 0px",
                      },
                      display: "block",
                    }}
                  >
                    <Box
                      sx={{
                        backgroundImage:
                          'url("https://www.gatherbox.dk/static/media/restro4.5536d681.jpg")',
                        width: "100%",
                        borderRadius: "8px",
                        boxSizing: "inherit",
                        marginTop: "-230px",
                        height: "27vh",
                        "& img": {
                          overflowClipMargin: "content-box",
                          overflow: "clip",
                          opacity: 0.3,
                          transition: "opacity 1s ease-in-out",
                        },
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                        backgroundRepeat: "no-repeat",
                      }}
                      // ref={ref}
                    ></Box>
                    <Box
                      sx={{
                        "@media (min-width:960px)": {
                          marginTop: "16px",
                        },
                        "@media (min-width:600px)": {
                          marginTop: "16px",
                        },
                        "@media (min-width:0px)": {
                          marginTop: "16px",
                        },
                      }}
                    >
                      <Typography
                        sx={{
                          fontSize: "15px",
                          fontFamily: "Lato",
                          fontWeight: "bold",
                          lineHeight: "20px",
                          letterSpacing: "0.01em",
                        }}
                      >
                        It’s time to add variety
                      </Typography>
                    </Box>
                    <Box
                      sx={{
                        "@media (min-width:960px)": {
                          paddingTop: "8px",
                          paddingBottom: "8px",
                        },

                        "@media (min-width:600px)": {
                          paddingTop: "8px",
                          paddingBottom: "8px",
                        },
                        "@media (min-width:0px)": {
                          paddingTop: "8px",
                          paddingBottom: "8px",
                        },
                        textAlign: "center",
                      }}
                    >
                      <Typography
                        sx={{
                          fontSize: "18px",
                          fontFamily: "Lato",
                          fontWeight: "normal",
                          lineHeight: "26px",
                          letterSpacing: "0.02em",
                        }}
                      >
                        Gather enables you to create unique, tasty, and
                        easy-to-prep dishes that do not repeat themselves week
                        by week.
                      </Typography>
                    </Box>
                  </Box>
                </Grid>
              </Grid>
            </Box>
          </Container>
        </Box>
        <Box
          sx={{
            // display: "flex",
            justifyContent: "center",
            padding: "64px 24px",
            backgroundColor: "#ffffff",
            boxSizing: "inherit",
          }}
        >
          <Box
            sx={{
              maxWidth: "940px",
              background: "#ffffff",
            }}
          >
            <Box
              sx={{
                textAlign: "center",
                paddingBottom: "24px",
                boxSizing: "inherit",
              }}
            >
              <Typography className={classes.headingTypography}>
                Frequently asked questions
              </Typography>
            </Box>

            <Typography
              sx={{
                fontSize: "18px",
                fontFamily: "Lato",
                fontWeight: "normal",
                lineHeight: "26px",
                letterSpacing: "0.02em",
                color: "#014836",
                textAlign: "initial",
              }}
            >
              General
            </Typography>
          </Box>
          <Box
            sx={{
              paddingTop: `16px`,
              "@media (min-width:0px)": {
                paddingBottom: "32px",
              },
              "@media (min-width:600px)": {
                paddingBottom: "48px",
              },
              "@media (min-width:960px)": {
                paddingBottom: "88px",
              },
            }}
          >
            <QuestionCard
              title="What is Gather?"
              subtitle="Gather offers uncooked dishes from the country's best restaurants. It allows you to make tasty dishes and bring the authentic restaurant experience to your home. It is uncomplicated, straightforward, and delicious."
              marginTop={0}
            />
            <QuestionCard
              title="What is included in my Gatherbox?"
              subtitle="Inside your Gatherbox includes a meal kit with the ingredients to create the restaurant's dish. On our website, you can find recipes and guides, along with an overview of the included ingredients in the box and the ingredients you need on hand. Our boxes are 100% sutainable and contain only the amount of raw materials you need to avoid food waste."
              marginTop={10}
            />
            <QuestionCard
              title="Which Gatherbox will work best for me?"
              subtitle="This depends on how many of you there are and what type of food you're looking for. You can filter your search- whether it is Nordic, vegan, or something completely different."
              marginTop={10}
            />
            <QuestionCard
              title="How do I order?"
              subtitle="Firstly, ordering should be done on our website, www.gatherbox.dk Simply enter your zip code and find the restaurants that offer delicious meal-kits near you. You can choose to search at different levels-under restaurants, types of food, or meal-kits."
              marginTop={10}
            />
          </Box>
          <Typography
            sx={{
              fontSize: "18px",
              fontFamily: "Lato",
              fontWeight: "normal",
              lineHeight: "26px",
              letterSpacing: "0.02em",
              color: "#014836",
              textAlign: "initial",
            }}
          >
            Pricing & Payment
          </Typography>
          <Box
            sx={{
              paddingTop: `16px`,
              "@media (min-width:0px)": {
                paddingBottom: "32px",
              },
              "@media (min-width:600px)": {
                paddingBottom: "48px",
              },
              "@media (min-width:960px)": {
                paddingBottom: "88px",
              },
            }}
          >
            <QuestionCard
              title="How much does it cost?"
              subtitle="A meal-kit from Gather should fit within your budget. You get the same quality as in the restaurant, but at a cheaper price. Since you only get the ingredients you need, you do not have to pay for whole ingredients. You get cheap, tasty, and inspiring dishes that can be made any day of the week."
              marginTop={0}
            />
            <QuestionCard
              title="How often can I order?"
              subtitle="We have an open concept that is non-binding. You can order meals as often as you want and from several different restaurants in one week. You can order one-meal-at-a-time or as many as you want. You can even book two or three weeks ahead- it's completely up to you!"
              marginTop={10}
            />
          </Box>
        </Box>
        <Footer />
        {/* <Scroll /> */}
      </div>
    </div>
  );
};
import { Container } from "@mui/material";
import QuestionCard from "../../components/questionCard";
import Scroll from "../../components/scroll";
export default HomePage;

// const [activeTab,setActiveTab] = useState('RestaurantList')

//   const getCorrectScreen = (tab: string) => {
//   switch(tab){
//         case 'HomePage':
//           return <HomePage/>
//         case 'RestaurantList':
//           return <Restaurants/>
//         case 'MealKits':
//           return <MealKits/>
//         case 'MyCalendar':
//           return <MyCalender/>
//         case 'MyMeals':
//           return <MyMeals/>
//         case 'User':
//           return <UserAuth/>
//         default:
//           return <Restaurants/>
//       }
//   }

{
  /* <Box
  sx={{
    width: "100%",
    height: "100%",
    position: "relative",
  }}
>
  <img
    src="https://www.gatherbox.dk/static/media/restro1.c98b6edf.jpg"
    alt="alt text"
    style={{
      objectFit: "cover",
      width: "100%",
      height: "100%",
      position: "absolute",
      top: 0,
      left: 0,
    }}
  />
  <Box
    sx={{
      width: "100%",
      height: "100%",
      position: "absolute",
      justifyContent: "center",
      alignItems: "center",

      "@media (min-width:0px)": {
        padding: "8px 0px",
      },
      opacity: "1",
      transition: "margin-top 0.7s ease 0s, opacity 1s ease 0s",
      "@media (min-width:960px)": {
        padding: "32px 48px",
      },
      "@media (min-width:600px)": {
        padding: "124px",
      },
    }}
  >
    {/* Your content here */
}
