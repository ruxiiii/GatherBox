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

type RoundedPhotoProps = {
  imageUrl: string;
  cuisine: string;
};

export const RoundPhotos: React.FC<RoundedPhotoProps> = ({
  imageUrl,
  cuisine,
}) => {
  return (
    <>
      <Box
        sx={{
          "@media (min-width:600px)": {
            marginRight: "12px",
          },
          "@media (min-width:0px)": {
            marginRight: "4px",
          },
          width: "132px",
          textAlign: "center",
        }}
      >
        <Box
          component="div"
          sx={{
            backgroundImage: `url(${imageUrl})`,
            border: "2px solid transparent",
            cursor: "pointer",
            borderRadius: "50%",
            height: "132px",
            width: "132px",
            backgroundClip: "content-box",
            backgroundSize: "cover",
            backgroundColor: "transparent",
            padding: "4px",
            position: "relative",
            alignItems: "center",
            justifyContent: "center",
            marginBottom: "4px",
          }}
        />
        <Typography
          sx={{
            fontSize: "14px",
            fontFamilt: "Lato",
            fontWeight: "normal",
            lineHeight: "18px",
            letterSpacing: "0.02em",
          }}
        >
          {cuisine}
        </Typography>
      </Box>
    </>
  );
};
