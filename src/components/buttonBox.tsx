import { Button, Typography } from "@mui/material";
import { Link } from "react-router-dom";

interface ButtonBoxProps {
  buttonText: string;
  linkto: string;
  buttonColor: string;
  textColor: string;
  textFontFamily: string;
  onButtonClick?: () => void;
}

export const ButtonBox: React.FC<ButtonBoxProps> = ({
  buttonText,
  linkto,
  onButtonClick,
  buttonColor,
  textColor,
  textFontFamily,
}) => {
  const handleClick = () => {
    if (linkto && linkto !== "") {
      // If linkto is provided, navigate to the specified path
      return;
    }

    if (onButtonClick) {
      // If onButtonClick is provided, call the custom click event handler
      onButtonClick();
    }
  };

  if (linkto && linkto !== "") {
    // Render the button with linkto
    return (
      <Button
        sx={{
          height: "48px",
          paddingLeft: "16px",
          paddingRight: "16px",
          backgroundColor: buttonColor,
          color: `${textColor} !important`,
          fontFamily: textFontFamily,
          cursor: "pointer",
          fontSize: "12px",
          lineHeight: "1.3333333333333333",
          borderRadius: "8px",
          letterSpacing: "0.05em",
        }}
        component={Link}
        to={linkto}
        onClick={handleClick}
      >
        {buttonText}
      </Button>
    );
  }

  // Render the button without linkto
  return (
    <Button
      sx={{
        height: "48px",
        paddingLeft: "16px",
        paddingRight: "16px",
        backgroundColor: buttonColor,
        color: `${textColor} !important`,
        fontFamily: textFontFamily,
        cursor: "pointer",
        fontSize: "12px",
        lineHeight: "1.3333333333333333",
        borderRadius: "8px",
        letterSpacing: "0.05em",
      }}
      onClick={handleClick}
    >
      {buttonText}
    </Button>
  );
};
