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
  CardActions,
} from "@mui/material";

interface menuProps {
  imageSrc: string;
  dishName: string;
  restaurantName: string;
  distance: string;
}

export const MenuCard: React.FC<menuProps> = ({
  imageSrc,
  dishName,
  restaurantName,
  distance,
}) => {
  return (
    <Box>
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
          "@media (max-width: 959.95px)": {
            height: "203px",
          },
        }}
        component="img"
        image={imageSrc}
        alt={dishName}
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
              {dishName}
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
                fontFamily: "La to",
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
                  {restaurantName}
                </Typography>
              </Button>
            </CardActions>
          </Box>
          <Box
            sx={{
              padding: "0",
              textAlign: "left",
              display: "flex",
            }}
          >
            {" "}
            <Typography
              sx={{
                fontSize: "14px",
                fontFamily: "Lato",

                letteSpacing: "0.02em",
              }}
            >
              From
            </Typography>
            <Typography></Typography>
            <Typography
              sx={{
                fontSize: "15px",
                fontFamily: "Lato",

                letterSpacing: "0.01em",
              }}
            >
              {distance}
            </Typography>
          </Box>
        </Box>
      </CardContent>
    </Box>
  );
};

export default MenuCard;
