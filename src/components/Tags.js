import React from "react";
import { motion } from "framer-motion";
import { slideleftAnim, sliderightAnim } from "../styles/animation";


 const Tags = () => (
        <div className="link-container">
  <motion.a             
    variants={sliderightAnim(0.3)}
    className="link twitter"
    href="https://www.linkedin.com/in/antbalsamo/"
  >
    LinkedIn
  </motion.a>
  <motion.a
      variants={sliderightAnim(0.4)}

    className="link github"
    href="https://github.com/antonionii/"
  >
    GitHub
  </motion.a>
  <motion.a
      variants={sliderightAnim(0.5)}

    className="link dribbble"
    href="https://antonioni.itch.io/"
  >
    itch.io
  </motion.a>
</div>
);


export default Tags;

