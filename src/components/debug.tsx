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
} from "@mui/material";
import { makeStyles } from "@mui/styles";
import { ClassNames } from "@emotion/react";

const useStyles = makeStyles(() => ({
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
    alignItems: "center",
    objectPosition: "center",
    objectFit: "cover",
    display: "flow",
    height: "221px",
    // maxwidth: "221px",
    overflowClipMargin: "content-box",
    overflow: "clip",
    "& img": {
      height: "100%",
      objectFit: "cover",
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
export const Debug = () => {
  const classes = useStyles();
  return (
    <Box
      sx={
        {
          // width: "100%",
        }
      }
    >
      <Box
        sx={{
          padding: "32px 40px 88px",
        }}
      >
        <Box>
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
                  flexBasis: "33.33%",
                  margin: 0,
                  boxSizing: "border-box",
                  display: "block",
                }}
              >
                <Typography
                  sx={{
                    fontFamily: "EB Garamond ",
                    fontWeight: "normal",
                    lineHeight: "48px",
                    fontSize: "40px",
                  }}
                >
                  {" "}
                  This is how it works
                </Typography>
              </Grid>
            </Grid>
          </Box>
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
                      Using the apps recipe/guides, prepare and cook the meal at
                      home and enjoy!
                    </Typography>
                  </Box>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </Box>
  );
};

export default Debug;
