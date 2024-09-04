// StyledSnackbar.js
import React from "react";
import { Snackbar } from "@mui/material";
import styled from "styled-components";

// Custom StyledSnackbar component
const StyledSnackbar = ({ open, onClose, message, autoHideDuration = 4000, ...props }) => {
  const accentTextColor = getComputedStyle(document.documentElement).getPropertyValue('--accentText-color').trim();
  const cardColor = getComputedStyle(document.documentElement).getPropertyValue('--card-color').trim();

  return (
    <Snackbar
      open={open}
      autoHideDuration={autoHideDuration}
      onClose={onClose}
      message={message}
      anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
      sx={{
        '& .MuiSnackbarContent-root': {
          backgroundColor: cardColor, // Use your custom background color
          color: accentTextColor, // Use your custom text color
          fontSize: '1.4rem', // Match the p tag's font size
          fontWeight: 500, // Match the p tag's font weight
          fontFamily: "Inter",
          boxShadow: "1rem 0.6rem 0rem 0rem black",
          width: '100%', // Full width by default
          maxWidth: '600px', // Limit max width
          '@media (max-width: 780px)': {
            maxWidth: '70%', // Smaller width on small screens
            fontSize: '1rem', // Adjust font size on small screens
            padding: '8px 16px', // Adjust padding on small screens
          },
        },
      }}
      {...props}
    />
  );
};

export default StyledSnackbar;
