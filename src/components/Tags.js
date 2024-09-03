import React, { useState } from "react";
import { motion } from "framer-motion";
import { slideleftAnim, sliderightAnim } from "../styles/animation";

const Tags = () => {
  const [emailText, setEmailText] = useState("antbalsamo@gmail.com");
  const [isCopied, setIsCopied] = useState(false);

  const handleEmailClick = () => {
    navigator.clipboard.writeText("antbalsamo@gmail.com");
    setIsCopied(true);
    setEmailText("Copied!");

    setTimeout(() => {
      setEmailText("antbalsamo@gmail.com");
      setIsCopied(false);
    }, 2000); // Change back after 2 seconds
  };

  return (
    <div className="link-container">
      <motion.a
        variants={sliderightAnim(0.3)}
        initial="hidden"
        animate="show"
        className="link twitter"
        href="https://www.linkedin.com/in/antbalsamo/"
      >
        LinkedIn
      </motion.a>
      <motion.a
        variants={sliderightAnim(0.4)}
        initial="hidden"
        animate="show"
        className="link github"
        href="https://github.com/antonionii/"
      >
        GitHub
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
    </div>
  );
};

export default Tags;
