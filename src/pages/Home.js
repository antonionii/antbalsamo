import React from "react";
import IntroSection from "../components/IntroSection";
import VideoSection from "../components/VideoSection";

import ServicesSection from "../components/ServicesSection";
import Footer from "../components/Footer";
//Animations
import { motion } from "framer-motion";
import { pageAnimation } from "../animation";
import { AnimatePresence } from "framer-motion";
import { photoAnim } from "framer-motion";
import ScrollToTop from "../components/ScrollToTop";
import ReactPlayer from "react-player";

const Home = () => {
  return (
    <motion.div initial="hidden" animate="show" exit="exit">
      <IntroSection />
      <VideoSection />
    </motion.div>
  );
};

export default Home;
