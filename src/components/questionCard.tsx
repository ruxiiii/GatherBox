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
} from "@mui/material";
import { makeStyles } from "@mui/styles";
import { ClassNames } from "@emotion/react";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

interface questionProps {
  title: string;
  subtitle: string;
  marginTop: Number;
}
const useStyles = makeStyles(() => ({
  headingTypography: {
    fontSize: "40px !important",
    fontFamily: "EB Garamond !important",
    fontWeight: "normal !important",
    lineHeight: "48px !important",
  },
}));
export const QuestionCard: React.FC<questionProps> = ({
  title,
  subtitle,
  marginTop,
}) => {
  const classes = useStyles();
  return (
    // <Box
    //   sx={{
    //     display: "flex",
    //     justifyContent: "center",
    //     padding: "64px 24px",
    //     backgroundColor: "#ffffff",
    //     boxSizing: "inherit",
    //   }}
    // >
    //   <Box
    //     sx={{
    //       maxWidth: "940px",
    //       background: "#ffffff",
    //     }}
    //   >
    //     <Box
    //       sx={{
    //         textAlign: "center",
    //         paddingBottom: "24px",
    //         boxSizing: "inherit",
    //       }}
    //     >
    //       <Typography className={classes.headingTypography}>
    //         Frequently asked questions
    //       </Typography>
    //     </Box>

    //     <Typography
    //       sx={{
    //         fontSize: "18px",
    //         fontFamily: "Lato",
    //         fontWeight: "normal",
    //         lineHeight: "26px",
    //         letterSpacing: "0.02em",
    //         color: "#014836",
    //         textAlign: "initial",
    //       }}
    //     >
    //       General
    //     </Typography>
    // <Box
    //   sx={{
    //     paddingTop: `16px`,
    //     "@media (min-width:0px)": {
    //       paddingBottom: "88px",
    //     },
    //     "@media (min-width:600px)": {
    //       paddingBottom: "48px",
    //     },
    //     "@media (min-width:960px)": {
    //       paddingBottom: "32px",
    //     },
    //   }}
    // >
    <Paper
      sx={{
        background: "rgb(242,242,242)",
        boxShadow: "none",
        "& .MuiAccordion-rounded:first-child": {
          borderTopLeftRadius: "4px",
          borderTopRightRadius: "4px",
        },
        padding: "6px 16px",
        borderRadius: "4px",
        marginTop: `${marginTop}px`,
        //boxShadow: "0px 2px 1px -1px rgba(0,0,0,0.2)",
        width: "100%",
      }}
    >
      <Accordion
        sx={{
          border: "none",
          // display: "flex",
          minHeight: "48px",
          boxShadow: "none",
          borderRadius: "0px",
          "&:first-child": {
            borderTopLeftRadius: "4px",
            borderTopRightRadius: "4px",
            background: "rgb(242,242,242)",
          },
          width: "100%",
          padding: "8px 8px 16px",
        }}
      >
        <AccordionSummary
          sx={{
            width: "100%",
            flexGrow: 1,
          }}
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>{title}</Typography>
        </AccordionSummary>
        <AccordionDetails
          sx={{
            margin: "0",
            padding: "12px 12px 16px",
            width: "100%",
            textAlign: "initial",
            minHeight: "0px",
            height: "auto",
            transitionDuration: "ms",
            "& .MuiCollapse-entered": {
              height: "auto",
              overflow: "visible",
            },
            "& .MuiCollapse-root": {
              height: "0px",
              overflow: "hidden",
              transition: "height 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms",
            },
          }}
        >
          <Typography>{subtitle}</Typography>
        </AccordionDetails>
      </Accordion>
    </Paper>

    // </Box>
    //   </Box>
    // </Box>
  );
};

export default QuestionCard;
