import React, { useState, useEffect } from "react";
import { Snackbar } from "@mui/material";
import styled from "styled-components";

// Custom StyledSnackbar component
const StyledSnackbar = ({ open, onClose, message, autoHideDuration = 3200, ...props }) => {
  const accentTextColor = getComputedStyle(document.documentElement).getPropertyValue('--accentText-color').trim();
  const cardColor = getComputedStyle(document.documentElement).getPropertyValue('--card-color').trim();

  // Snackbar queue state
  const [snackbarQueue, setSnackbarQueue] = useState([]);
  const [displayedSnackbars, setDisplayedSnackbars] = useState([]);

  // Add a new Snackbar to the queue when `open` changes
  useEffect(() => {
    if (open && message) {
      setSnackbarQueue((prevQueue) => [
        ...prevQueue, 
        { message, key: new Date().getTime() }
      ]);
    }
  }, [open, message]);

  // Manage Snackbar display (limit to 5 Snackbars at a time)
  useEffect(() => {
    if (snackbarQueue.length > 0 && displayedSnackbars.length < 5) {
      const nextSnackbar = snackbarQueue[0];
      setDisplayedSnackbars((prev) => [...prev, nextSnackbar]);
      setSnackbarQueue((prev) => prev.slice(1));
    }
  }, [snackbarQueue, displayedSnackbars]);

  // Function to close a specific Snackbar
  const handleCloseSnackbar = (key) => {
    setDisplayedSnackbars((prev) => prev.filter((snackbar) => snackbar.key !== key));
    onClose();
  };

  return (
    <>
      {displayedSnackbars.map((snackbar, index) => (
        <Snackbar
          key={snackbar.key}
          open={true}
          autoHideDuration={autoHideDuration}
          onClose={() => handleCloseSnackbar(snackbar.key)}
          message={snackbar.message}
          anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
          sx={{
            '& .MuiSnackbarContent-root': {
              backgroundColor: cardColor,
              color: accentTextColor,
              fontSize: '1.4rem',
              fontWeight: 500,
              fontFamily: "Inter",
              boxShadow: "1rem 0.6rem 0rem 0rem black",
              width: '100%',
              maxWidth: '600px',
              position: 'relative',
              top: `${index * 2.5}rem`, // Adds vertical spacing between Snackbars
              '@media (max-width: 780px)': {
                maxWidth: '70%',
                fontSize: '1rem',
                padding: '8px 16px',
              },
            },
          }}
          {...props}
        />
      ))}
    </>
  );
};

export default StyledSnackbar;
