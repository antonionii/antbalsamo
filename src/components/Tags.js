import React, { useState } from "react";
import { motion } from "framer-motion";
import { slideleftAnim, sliderightAnim } from "../styles/animation";
import StyledSnackbar from "../components/StyledSnackbar"; // Import StyledSnackbar

const Tags = () => {
  const [emailText, setEmailText] = useState("antbalsamo@gmail.com");
  const [isCopied, setIsCopied] = useState(false);
  const [openSnackbar, setOpenSnackbar] = useState(false); // State for controlling Snackbar visibility

  const handleCloseSnackbar = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setOpenSnackbar(false);
  };

  const handleEmailClick = () => {
    navigator.clipboard.writeText("antbalsamo@gmail.com");
    setIsCopied(true);
    setEmailText("Copied!");

    // Show the Snackbar when email is clicked
    setOpenSnackbar(true);

    setTimeout(() => {
      setEmailText("antbalsamo@gmail.com");
      setIsCopied(false);
    }, 2000); // Change back after 2 seconds
  };

  return (
    <div className="link-container">
 
      <motion.a
        variants={sliderightAnim(0.4)}
        initial="hidden"
        animate="show"
        className="link github"
        href="https://github.com/antonionii/"
      >
        GitHub
      </motion.a>
      <motion.a
        variants={sliderightAnim(0.3)}
        initial="hidden"
        animate="show"
        className="link twitter"
        href="https://www.linkedin.com/in/antbalsamo/"
      >
        LinkedIn
      </motion.a>
      <motion.div
        onClick={handleEmailClick}
        variants={sliderightAnim(0.5)}
        initial="hidden"
        animate="show"
        className="link dribbble"
        style={{
          cursor: "pointer",
          display: "inline-block",
          minWidth: "200px", // Set a minimum width to ensure adequate space
          textAlign: "center",
          borderRadius: "8px", // Add border radius for a smoother look
        }}
      >
        <motion.a
          style={{ display: "block", whiteSpace: "nowrap" }}
          animate={{ opacity: isCopied ? 0.8 : 1 }}
          transition={{ ease: "easeInOut", duration: 0.3 }}
        >
          {emailText}
        </motion.a>
      </motion.div>

      <StyledSnackbar
        open={openSnackbar}
        onClose={handleCloseSnackbar}
        message="Copied link: Tony's Email" // Custom message for the email
      />
    </div>
  );
};

export default Tags;
