import {
  Box,
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

export const Debugger = () => {
  return (
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
          display: "flex",
          flexWrap: "wrap",
          // marginLeft: "-12px",
          // marginRight: "-12px",
          justifyContent: "center",
          boxSizing: "border-box",
        }}
      >
        <Box
          sx={{
            maxWidth: "20%",
            flexBasis: "20%",
            height: "290px !important",

            "@media (max-width: 1279.95px)": {
              maxWidth: "25%",
              flexBasis: "25%",
              height: "242px",
            },

            "@media (max-width: 599.95px)": {
              maxWidth: "50%",
              flexBasis: "50%",
              height: "242px",
            },

            padding: "12px 12px 24px",
          }}
        >
          <CardMedia
            sx={{
              borderRadius: "4px",
              objectFit: "cover",
              height: "290px !important",
              "@media (max-width: 1279.95px)": {
                height: "242px",
              },

              "@media (max-width: 599.95px)": {
                height: "242px",
              },
            }}
            component="img"
            image="https://gatherbox.appspot.com.storage.googleapis.com/mealkits/ris8-classico--risotto-/thumbnail.png"
            alt="Classico (Risotto)"
          />
          <CardContent
            sx={{
              paddingLeft: "0px",
            }}
          >
            <Box
              sx={{
                padding: "0",
              }}
            >
              <Box
                sx={{
                  display: "flex",
                }}
              >
                <Box
                  sx={{
                    display: "inline-flex",
                    padding: "4px 8px",
                    alignItems: "center",
                    marginRight: "8px",
                    borderRadius: "12px",
                    background: "#f2f2f2",
                    height: "24px",
                  }}
                >
                  <Typography
                    sx={{
                      fontSize: "10px",
                      textAlign: "center",
                      lineHeight: "1.6",
                      letterSpacing: "0.05em",
                      textTransform: "uppercase",
                    }}
                  >
                    20 MIN
                  </Typography>
                </Box>
                <Box
                  sx={{
                    display: "inline-flex",
                    padding: "4px 8px",
                    alignItems: "center",
                    marginRight: "8px",
                    borderRadius: "12px",
                    background: "#f2f2f2",
                    height: "24px",
                  }}
                >
                  <Typography
                    sx={{
                      fontSize: "10px",
                      textAlign: "center",
                      lineHeight: "1.6",
                      letterSpacing: "0.05em",
                      textTransform: "uppercase",
                    }}
                  >
                    Exclusive
                  </Typography>
                </Box>
              </Box>
              <Box
                sx={{
                  marginTop: "12px",
                  padding: "0",
                  textAlign: "left",
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
                  Classico (Risotto)
                </Typography>
              </Box>
              <Box
                sx={{
                  marginTop: "8px",
                  alignItems: "center",
                  display: "flex",
                }}
              >
                <Typography
                  sx={{
                    fontSize: "14px",
                    fontFamily: "Lato",
                    fontWeight: "bold",
                    lineHeight: "18px",
                    letteSpacing: "0.02em",
                  }}
                >
                  From
                </Typography>
                <CardActions
                  sx={{
                    alignItems: "inital",
                  }}
                >
                  <Button
                    sx={{
                      padding: "0",
                      "&:focus": {
                        outline: "none",
                        border: "none",
                      },
                      justifyContent: "initial",
                    }}
                  >
                    <Typography
                      sx={{
                        color: "#014836",
                        fontSize: "13px",
                        fontFamily: "Lato",
                        fontWeight: "bold",
                        lineHeight: "18px",
                        letteSpacing: "0.01em",
                      }}
                    >
                      RIS 8
                    </Typography>
                  </Button>
                </CardActions>
              </Box>
              <Box
                sx={{
                  padding: "0",
                  textAlign: "left",
                }}
              >
                <Typography
                  sx={{
                    fontSize: "15px",
                    fontFamily: "Lato",
                    lineHeight: "20px",
                    letterSpacing: "0.01em",
                  }}
                >
                  Classico (Risotto)
                </Typography>
              </Box>
            </Box>
          </CardContent>
        </Box>
        <Box
          sx={{
            maxWidth: "20%",
            flexBasis: "20%",
            height: "290px !important",

            "@media (max-width: 1279.95px)": {
              maxWidth: "25%",
              flexBasis: "25%",
              height: "242px",
            },

            "@media (max-width: 599.95px)": {
              maxWidth: "50%",
              flexBasis: "50%",
              height: "242px",
            },

            padding: "12px 12px 24px",
          }}
        >
          <CardMedia
            sx={{
              borderRadius: "4px",
              objectFit: "cover",
              height: "290px !important",
              "@media (max-width: 1279.95px)": {
                height: "242px",
              },

              "@media (max-width: 599.95px)": {
                height: "242px",
              },
            }}
            component="img"
            image="https://gatherbox.appspot.com.storage.googleapis.com/mealkits/l-altro-la-carbonara/thumbnail.png"
            alt="Carbona"
          />
        </Box>
      </Box>
    </Box>
  );
};

export default Debugger;

{
  /* <CardContent>
                  <Box sx ={{
                    marginTop:'12px',
                    display: 'flex',
                    alignItems:'center',
                    justifyContent:'space-between',

                  }}>
                    <Button sx = {{
                      height: '24px',
                      display: 'inline-flex',
                      padding: '4px 8px',
                      alignItems: 'center',
                      marignRight:'8px',
                      borderRadius: '12px'
                    }} disabled
                    >20 MIN</Button>
                    <Button sx ={{
                      height: '24px',
                      display: 'inline-flex',
                      padding: '4px 8px',
                      alignItems: 'center',
                      marignRight:'8px',
                      borderRadius: '12px'
                    }} disabled>EXCLUSIVE</Button>
                  </Box>
                </CardContent> */
}
