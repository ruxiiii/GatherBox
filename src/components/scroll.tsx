// import React, { useState } from "react";
// import { makeStyles, ThemeProvider } from "@mui/styles";
// import {
//   IconButton,
//   InputBase,
//   Paper,
//   TextField,
//   MenuItem,
//   Box,
//   Grid,
//   Typography,
//   useScrollTrigger,
// } from "@mui/material";
// import LocationOnIcon from "@mui/icons-material/LocationOn";
// import Autocomplete from "@mui/material/Autocomplete";
// import { InputProps } from "@mui/material";
// import { Transition } from "react-transition-group";
// import { useRef } from "react";

// const duration = 300;
// const defaultStyle = {
//   transition: `opacity ${duration}ms ease-in-out, margin-top ${duration}ms ease-in-out`,
//   opacity: 0,
// };

// const transitionStyles = {
//   entering: { opacity: 0.3 },
//   entered: { opacity: 1 },
//   exiting: { opacity: 1 },
//   exited: { opacity: 0.3 },
// };

// const Scroll = () => {
//   const classes = useStyles();
//   const trigger = useScrollTrigger({
//     disableHysteresis: true,
//     threshold: 100,
//   });

//   return (
//     <Transition nodeRef={nodeRef} inProp={inProp} timeout={duration}>
//       {(state) => (
//         <div
//           ref={nodeRef}
//           style={{
//             ...defaultStyle,
//             ...transitionStyles[state],
//           }}
//         >)}
//         </Transition>
//           <Box
//             sx={{
//               "@media (min-width:960px)": {
//                 padding: "240px 48px",
//               },
//               "@media (min-width:600px)": {
//                 padding: "40px 24px",
//               },
//               "@media (min-width:0px)": {
//                 padding: "32px 0px",
//               },
//               display: "block",
//             }}
//           >
//             <Box
//               sx={{
//                 backgroundImage:
//                   'url("https://www.gatherbox.dk/static/media/restro3.0aca469e.jpg")',
//                 width: "100%",
//                 borderRadius: "8px",
//                 boxSizing: "inherit",
//                 height: "27vh",
//                 "& img": {
//                   overflowClipMargin: "content-box",
//                   overflow: "clip",
//                   opacity: 0.3,
//                   transition: "opacity 1s ease-in-out",
//                 },
//                 backgroundSize: "cover",
//                 backgroundPosition: "center",
//                 backgroundRepeat: "no-repeat",
//               }}
//               // ref={ref}
//             ></Box>
//             <Box
//               sx={{
//                 "@media (min-width:960px)": {
//                   marginTop: "16px",
//                 },
//                 "@media (min-width:600px)": {
//                   marginTop: "16px",
//                 },
//                 "@media (min-width:0px)": {
//                   marginTop: "16px",
//                 },
//               }}
//             >
//               <Typography
//                 sx={{
//                   fontSize: "15px",
//                   fontFamily: "Lato",
//                   fontWeight: "bold",
//                   lineHeight: "20px",
//                   letterSpacing: "0.01em",
//                 }}
//               >
//                 Choose your favourite food universe
//               </Typography>
//             </Box>
//             <Box
//               sx={{
//                 "@media (min-width:960px)": {
//                   paddingTop: "8px",
//                   paddingBottom: "8px",
//                 },

//                 "@media (min-width:600px)": {
//                   paddingTop: "8px",
//                   paddingBottom: "8px",
//                 },
//                 "@media (min-width:0px)": {
//                   paddingTop: "8px",
//                   paddingBottom: "8px",
//                 },
//                 textAlign: "center",
//               }}
//             >
//               <Typography
//                 sx={{
//                   fontSize: "18px",
//                   fontFamily: "Lato",
//                   fontWeight: "normal",
//                   lineHeight: "26px",
//                   letterSpacing: "0.02em",
//                 }}
//               >
//                 We work with a number of restaurants specialising in various
//                 cuisines. Let us help you experience a vacation to a culinary
//                 destination of any cuisine you’re craving.
//               </Typography>
//             </Box>
//           </Box>

//       )}

//   );
// };

// export default Scroll;

import React, { useState, useEffect, useRef } from "react";
import { Transition } from "react-transition-group";
import { Box, Typography } from "@mui/material";

const transitionStyles = {
  //entering: { opacity: 0.3, },
  entered: { opacity: 1 },
  //exiting: { opacity: 1 },
  exited: { opacity: 0.3 },
};

const nodeRef = useRef(null);
const Scroll = () => {
  const [inProp, setInProp] = useState(false);
  const duration = 1000; // Transition duration in milliseconds
  const defaultStyle = {
    transition: `opacity ${duration}ms ease-in-out`,
    opacity: 0,
  };
  const state = inProp ? "entered" : "exited";
  const [isIntersecting, setIsIntersecting] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setInProp(true);
            observer.unobserve(entry.target);
          }
        });
      },
      { rootMargin: "-300px" } // Adjust the margin as needed
    );

    if (nodeRef.current) {
      observer.observe(nodeRef.current);
    }
    return () => {
      if (nodeRef.current) {
        observer.unobserve(nodeRef.current);
      }
    };
  }, []);

  const opacity = inProp ? 1 : 0.3;
  // useEffect(() => {
  //   const observer = new IntersectionObserver(
  //     (entries) => {
  //       entries.forEach((entry) => {
  //         if (entry.isIntersecting) {
  //           setInProp(true);
  //           observer.unobserve(entry.target);
  //         }
  //       });
  //     },
  //     { threshold: 0.1 } // Adjust the threshold as needed
  //   );

  //   observer.observe(nodeRef.current);

  //   return () => {
  //     observer.disconnect();
  //   };
  // }, []);

  return (
    // <Transition nodeRef={nodeRef} in={inProp} timeout={duration}>
    //   {(state) => (
    //     <div
    //       ref={nodeRef}
    //       style={{
    //         ...defaultStyle,
    //         ...transitionStyles[state],
    //       }}
    //     >
    <Box
      ref={nodeRef}
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
        opacity: "0.3",
        display: "block",
        marginTop: "0px",
        transition: "margin-top 0.7s ease 0s, opacity 1s ease 0s",
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
          We work with a number of restaurants specialising in various cuisines.
          Let us help you experience a vacation to a culinary destination of any
          cuisine you’re craving.
        </Typography>
      </Box>
    </Box>
    // </div>
    // )}
    // </Transition>
  );
};

export default Scroll;
