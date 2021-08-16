import React, { useRef } from "react";
import picofme from "../img/picofme.JPG";
//Framer Motion
import { motion } from "framer-motion";
import { fade, photoAnim, thumbnailAnim } from "../animation";
import sefcGIF from "../img/sefcGIF.gif";
import { useWindowScroll } from "beautiful-react-hooks";
import { InView } from "react-intersection-observer";

import {
  BasicLayout,
  StyledDescription,
  StyledImage,
  StyledHide,
} from "../styles";

const VideoSection = () => {
  //Ref for our element

  return (
    <BasicLayout>
      <motion.img
        src={sefcGIF}
        variants={thumbnailAnim(2)}
        alt="gif of video"
      />
    </BasicLayout>
  );
};

//Styled Components were here before

export default VideoSection;
