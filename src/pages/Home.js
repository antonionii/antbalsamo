import React from "react";
import IntroSection from "../components/IntroSection";
//Animations
import {motion} from "framer-motion";
import AboutMe from "./AboutMe";

const Home = () => {
  return (
    <motion.div initial="hidden" animate="show" exit="exit">
      <IntroSection />
     <AboutMe></AboutMe>
    </motion.div>
  );
};

export default Home;
