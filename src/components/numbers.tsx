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
import { useState } from "react";

interface NumberProps {
  value: number;
  onSelect: (value: number) => void;
  selectedNumber: number | null;
}

export const Numbers: React.FC<NumberProps> = ({
  value,
  onSelect,
  selectedNumber,
}) => {
  const handlePeopleClick = () => {
    onSelect(value);
  };

  return (
    <>
      <Box
        sx={{
          paddingTop: "12px",
          pb: "12px",
        }}
      >
        <Button
          sx={{
            width: "64px",
            cursor: "pointer",
            height: "64px",
            boxShadow: "none",
            borderRadius: "32px",
            justifyContent: "center",
            backgroundColor: "#f2f2f2",
            display: "flex",
            alignItems: "center",
          }}
          onClick={handlePeopleClick}
        >
          <Typography
            sx={{
              color: "#676767",
              fontSize: "22px",
              fontWeight: "normal",
              letterSpacing: "0.02em",
              lineHeight: "32px",
            }}
          >
            {value}
          </Typography>
        </Button>
      </Box>
    </>
  );
};
