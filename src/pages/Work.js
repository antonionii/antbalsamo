import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
//Images

//Animations
import { motion } from "framer-motion";
import {
  pageAnimation,
  titleAnim,
  fade,
  photoAnim,
  lineAnim,
  slider,
  sliderContainer,
  rotateText,
} from "../animation";
import { AnimatePresence } from "framer-motion";
import { useScroll } from "../components/useScroll";
import { scrollReveal, vertAnim, thumbnailAnim } from "../animation";
import { useMediaQuery } from "beautiful-react-hooks";
import Marquee from "react-fast-marquee";
import Footer from "../components/Footer.js";

import {
  BasicLayout,
  StyledDescription,
  StyledImage,
  StyledHide,
} from "../styles";

const WorkBox = styled(motion.div)`
  width: 95%;
  max-width: 1400px;
  margin: 100px auto;
  position: relative;
  z-index: 5;
  display: flex;
  align-content: center;

  ul {
    margin: 0;
    padding: 0;
    align-content: center;
  }
  ul li {
    list-style: none outside none;
    padding: 0;
    margin: 0;
    width: 100%;
    display: inline-flex;
  }

  &,
  ul,
  ul li {
    pointer-events: none;
  }

  ul li a {
    pointer-events: auto;
  }

  ul li a > div {
    padding: 20px 0 60px;
    pointer-events: auto;
  }

  ul li h3 {
    text-align: center;
  }

  @media screen and (min-width: 750px) {
    &:after {
      content: "";
      /* border-right: 1px solid black; */
      position: absolute;
      left: 50%;
      top: 0;
      height: 100%;
      width: 1px;
      transform: translateX(-50%);
      z-index: 10;
    }

    ul {
      margin: 0;
      padding: 0;
    }
    ul li {
      list-style: none outside none;
      padding: 0;
      margin: 0;
      width: 50%;
      display: inline-block;
    }

    ul li a > div {
      width: 100%;
      padding: 20px 0 60px;
    }

    ul li:nth-child(odd) a > div {
      border-right: 1px solid var(--line-color, "#000");
      padding-right: 20px;
    }
    ul li:nth-child(even) a > div {
      padding-left: 20px;

      /*width: 100%;
      transform: translateX(100%) translateY(-50%); */
    }
  }
`;

const StyledVideoCard = styled(motion.div)`
  width: 100%;
  height: auto;
  display: inline-flex;
  flex-direction: column;
  align-items: center;
  padding-bottom: 2rem;

  h3 {
    font-family: "Karla", sans-serif;
    font-weight: 700;
  }

  img {
    width: 100%;
    height: auto;
    object-fit: cover;
  }

  .titleWrapper {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 60px;
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
  }

  .marqueeWrapper {
    display: block;
    width: 100%;
    max-width: 100%;
    /* outline: 1px solid red; */
  }

  @media screen and (min-width: 750px) {
    border-bottom: 1px solid var(--line-color, #000);
  }
`;

const VideoCard = ({ thumbnailImage, gif, label, title, linkTo }) => {
  const [isMouseOver, setIsMouseOver] = useState(false);
  const isLargeDisplay = useMediaQuery("(min-width: 750px)");

  const handleMouseOver = () => {
    if (!isLargeDisplay) return;
    setIsMouseOver(true);
  };

  const handleMouseOut = () => {
    if (!isLargeDisplay) return;
    setIsMouseOver(false);
  };

  return (
    <Link to={linkTo}>
      <StyledVideoCard
        onMouseOver={handleMouseOver}
        onMouseOut={handleMouseOut}
      >
        <motion.img
          src={isMouseOver ? gif : thumbnailImage}
          alt={label}
          width={640}
          height={360}
          variants={thumbnailAnim()}
        />

        <div className="titleWrapper">
          {isMouseOver ? (
            <div className="marqueeWrapper">
              <Marquee direction="left" gradient={false} classname="marquee">
                {Array.from(Array(4)).map((num, index) => (
                  <h3 key={index}>
                    &nbsp;&nbsp;&nbsp;&nbsp;{title}&nbsp;&nbsp;&nbsp;&nbsp;
                  </h3>
                ))}
              </Marquee>
            </div>
          ) : (
            <motion.h3>{title}</motion.h3>
          )}
        </div>
      </StyledVideoCard>
    </Link>
  );
};

const Work = () => {
  // const [element, controls] = useScroll();
  // const [element2, controls2] = useScroll();
  const w = window.innerWidth;
  console.log(w);

  useEffect(() => {
    console.log("rendered!");
  });

  const isLargeDisplay = useMediaQuery("(min-width: 48rem)");

  const col2ScrollSpeed = isLargeDisplay ? "2" : "1";

  return (
    <StyledWork
      variants={pageAnimation}
      initial="hidden"
      animate="show"
      exit="exit"
    >
      <div>
        <WorkBox>
          <ul data-scroll-section>
            <li
            // data-scroll
            // data-scroll-id="1"
            // data-scroll-speed="1"
            // data-scroll-position="top"
            >
              <VideoCard
                thumbnailImage="https://imgur.com/SdYzPQu.jpg"
                gif="https://imgur.com/ccQhVIs.gif"
                linkTo="/Work/jll-academy-event"
                label="gif of video"
                title="JLL ACADEMY EVENT"
              />
            </li>
            <li
            // data-scroll
            // data-scroll-id="2"
            // data-scroll-speed={col2ScrollSpeed}
            // data-scroll-position="top"
            >
              <VideoCard
                thumbnailImage="https://imgur.com/ak5EkSu.jpg"
                gif="https://imgur.com/7NGClAn.gif"
                linkTo="/Work/jll-industrial-tech"
                label="gif of video"
                title="JLL INDUSTRIAL TECH "
              />
            </li>
            <li
            // data-scroll
            // data-scroll-id="1"
            // data-scroll-speed="1"
            // data-scroll-position="top"
            >
              <VideoCard
                thumbnailImage="https://imgur.com/iIpyoZM.jpg"
                gif="https://imgur.com/dhgntZX.gif"
                linkTo="/Work/coming-out-fearless-website-design"
                label="gif of video"
                title="COMING OUT FEARLESS WEBSITE DESIGN"
              />
            </li>
            <li
            // data-scroll
            // data-scroll-id="2"
            // data-scroll-speed={col2ScrollSpeed}
            // data-scroll-position="top"
            >
              <VideoCard
                thumbnailImage="https://imgur.com/q2D4m5T.jpg"
                gif="https://imgur.com/0qQh5uq.gif"
                linkTo="/Work/the-athlete"
                label="gif of video"
                title="MY LITTLE TATTOO"
              />
            </li>
            <li
            // data-scroll
            // data-scroll-id="1"
            // data-scroll-speed="1"
            // data-scroll-position="top"
            >
              <VideoCard
                thumbnailImage="https://imgur.com/irsks3Z.jpg"
                gif="https://imgur.com/1g97bYo.gif"
                linkTo="/Work/the-athlete"
                label="gif of video"
                title="ADOBE MAX 2019"
              />
            </li>
            <li
            // data-scroll
            // data-scroll-id="2"
            // data-scroll-speed={col2ScrollSpeed}
            // data-scroll-position="top"
            >
              <VideoCard
                thumbnailImage="https://imgur.com/IIohS3r.jpg"
                gif="https://imgur.com/gQQ11tW.gif"
                linkTo="/Work/the-athlete"
                label="gif of video"
                title="JLL LIFE SCIENCES"
              />
            </li>
            <li
            // data-scrollx
            // data-scroll-id="1"
            // data-scroll-speed="1"
            // data-scroll-position="top"
            >
              <VideoCard
                thumbnailImage="https://imgur.com/61uvEmy.jpg"
                gif="https://imgur.com/IAlPgpF.gif"
                linkTo="/Work/the-athlete"
                label="gif of video"
                title="JLL OAKBROOK RESERVE PROPERTY TEASER"
              />
            </li>
          </ul>
        </WorkBox>
      </div>
    </StyledWork>
  );
};

const StyledWork = styled(motion.div)`
  min-height: 100vh;
  padding: 5rem 10rem;
  min-height: 100vh;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 10;

  @media (max-width: 1300px) {
    padding: 2rem 2rem;
  }
`;
export default Work;
