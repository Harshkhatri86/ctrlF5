import React, { useRef } from "react";
import { Button as ButtonMUI } from "@mui/material";
// import "../../styles/Button.css";

const Button = ({
  disabled = false,
  variant = "contained",
  startIcon,
  endIcon,
  backgroundColor = "#1975D1",
  label,
  onClick,
  width = "30%",
  type = "button",
  isPrimary,
}) => {
  const buttonRef = useRef(null);

  const handleKeyDown = (event) => {
    if (isPrimary && event.key === "Enter") {
      onClick?.(event);
    }
  };

  return (
    <>
      <ButtonMUI
        data-testid="submitButton"
        disabled={disabled}
        startIcon={startIcon}
        endIcon={endIcon}
        variant={variant}
        type={type}
        onClick={onClick}
        onKeyDown={handleKeyDown}
        ref={buttonRef}
        sx={{
          width: width,
          backgroundColor: backgroundColor,
          '&:hover': {
            backgroundColor: backgroundColor
          }
        }}
        className={`button ${variant} ${isPrimary ? "primary" : "secondary"}`}
      >
        {label}
      </ButtonMUI>
    </>
  );
};

export default Button;
