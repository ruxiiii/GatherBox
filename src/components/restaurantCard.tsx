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

interface restaurantProps {
  imageSrc: string;
  restaurantName: string;
  bio: string;
}

export const RestaurantCard: React.FC<restaurantProps> = ({
  imageSrc,
  restaurantName,
  bio,
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
        alt={restaurantName}
      />
      <CardContent
        sx={{
          paddingLeft: "0px",
        }}
      >
        <Box
          sx={{
            padding: "0",
            textAlign: "initial",
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
              paddingBottom: "4px",
              textAlign: "initial",
            }}
          >
            <Typography
              sx={{
                fontSize: "18px",
                textAlign: "initial",
                lineHeight: "26px",
                letterSpacing: "0.05em",
                fontStyle: "EB Garamond",
                textTransform: "uppercase",
                background: "none",
              }}
            >
              {restaurantName}
            </Typography>
          </Box>
        </Box>
        <Box
          sx={{
            width: "95%",
            height: "54px",
            paddingTop: "8px",
            overflow: "hidden",
            textOverflow: "ellipsis",
            textAlign: "initial",
          }}
        >
          <Typography
            sx={{
              fontSize: "14px",
              fontFamily: "Lato",
              fontWeight: "normal",
              lineHeight: "18px",
              letterSpacing: "0.02em",
              color: "#676767",
            }}
          >
            {bio}
          </Typography>
        </Box>
      </CardContent>
    </Box>
  );
};

export default RestaurantCard;
