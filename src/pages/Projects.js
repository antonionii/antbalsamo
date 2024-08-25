import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
//Images

//Animations
import { motion } from "framer-motion";
import { pageAnimation } from "../animation";
import { thumbnailAnim } from "../animation";
import { useMediaQuery } from "beautiful-react-hooks";
import Marquee from "react-fast-marquee";

const ProjectsBox = styled(motion.div)`
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
            padding-right: 20px;
    }
    ul li:nth-child(even) a > div {
      padding-left: 20px;

      /*width: 100%;
      transform: translateX(100%) translateY(-50%); */
    }

    ul li:nth-child(odd) .gifWrapper {
      position: absolute;
      left: 40px;
      right: 60px;
    }

    ul li:nth-child(even) .gifWrapper {
      position: absolute;
      left: 60px;
      right: 40px;
    }

    ul li .thumbnailImg {
      width: 100%;
      object-fit: cover;
      transition: all 1s ease-out;
    }

    ul li .thumbnailGif {
      width: 100%;
      object-fit: cover;
      transition: all 1s ease-out;
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
        {/* <motion.img
          src={isMouseOver ? gif : thumbnailImage}
          alt={label}
          width={640}
          height={360}
          variants={thumbnailAnim()}
        /> */}
        <motion.img
          src={thumbnailImage}
          alt={label}
          width={640}
          height={360}
          style={{
            opacity: isMouseOver ? "0" : "1",
          }}
          className="thumbnailImg"
        />
        {isLargeDisplay && (
          <div className="gifWrapper">
            <motion.img
              src={gif}
              alt={label}
              className="thumbnailGif"
              style={{
                opacity: isMouseOver ? "1" : "0",
              }}
            />
          </div>
        )}

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

const Projects = () => {
  // const [element, controls] = useScroll();
  // const [element2, controls2] = useScroll();
  const w = window.innerWidth;
  console.log(w);

  useEffect(() => {
    console.log("rendered!");
  });

  const isLargeDisplay = useMediaQuery("(min-width: 48rem)");

  // const col2ScrollSpeed = isLargeDisplay ? "2" : "1";

  return (
    <StyledProjects
      variants={pageAnimation}
      initial="hidden"
      animate="show"
      exit="exit"
    >
      <div>
        <ProjectsBox>
          <ul data-scroll-section>
            <li
            // data-scroll
            // data-scroll-id="1"
            // data-scroll-speed="1"
            // data-scroll-position="top"
            >
              <VideoCard
                thumbnailImage="https://image.mux.com/UtcFf00t6a6IN3NI500e9s16vkg3XVwAjq4IUPk31SGdE/thumbnail.png?width=640&height=360&fit_mode=smartcrop&time=33"
                gif="https://image.mux.com/UtcFf00t6a6IN3NI500e9s16vkg3XVwAjq4IUPk31SGdE/animated.gif?start=32&end=37"
                linkTo="/Projects/jll-academy-event"
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
                thumbnailImage="https://image.mux.com/9e3J1zOm01c00warTLiITcT01AVnXl8TlaJoImu4NN6784/thumbnail.png?width=640&height=360&fit_mode=smartcrop&time=40"
                gif="https://image.mux.com/9e3J1zOm01c00warTLiITcT01AVnXl8TlaJoImu4NN6784/animated.gif?start=05&end=10"
                linkTo="/Projects/jll-industrial-tech"
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
                thumbnailImage="https://image.mux.com/E3atw01lGC8qxz21FL59qp8x6005xJkHpJn7bAgbMxpXQ/thumbnail.png?width=640&height=360&fit_mode=smartcrop&time=1"
                gif="https://image.mux.com/E3atw01lGC8qxz21FL59qp8x6005xJkHpJn7bAgbMxpXQ/animated.gif"
                linkTo="/Projects/coming-out-fearless-website-design"
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
                thumbnailImage="https://image.mux.com/qdUIrnh5wjsvZTP001f00o7dArfYZmOXveZiAqvtOuQpE/thumbnail.png?width=640&height=360&fit_mode=smartcrop&time=2"
                gif="https://image.mux.com/qdUIrnh5wjsvZTP001f00o7dArfYZmOXveZiAqvtOuQpE/animated.gif"
                linkTo="/Projects/my-little-tattoo"
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
                thumbnailImage="https://image.mux.com/ANh02Tm1rh8XxOLQ6ZHdH00KwDdm1lW2V8kj7xUlIb2u4/thumbnail.png?width=640&height=360&fit_mode=smartcrop&time=45"
                gif="https://image.mux.com/ANh02Tm1rh8XxOLQ6ZHdH00KwDdm1lW2V8kj7xUlIb2u4/animated.gif?start=5"
                linkTo="/Projects/adobe-max-2019"
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
                thumbnailImage="https://image.mux.com/K7ltcJE3jhqAUcAYTjCAHPCCzM01qEiy21stgME6j9fo/thumbnail.png?width=640&height=360&fit_mode=smartcrop&time=2"
                gif="https://image.mux.com/K7ltcJE3jhqAUcAYTjCAHPCCzM01qEiy21stgME6j9fo/animated.gif?start=11&end=16"
                linkTo="/Projects/jll-life-sciences"
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
                thumbnailImage="https://image.mux.com/Mhak00CKbxc02WfQ01OFyiNxpinmKIpLH8gK9rWtRPQCSc/thumbnail.png?width=640&height=360&fit_mode=smartcrop&time=2"
                gif="https://image.mux.com/Mhak00CKbxc02WfQ01OFyiNxpinmKIpLH8gK9rWtRPQCSc/animated.gif?start=09&end=14"
                linkTo="/Projects/oakbrook-reserve-property-teaser"
                label="gif of video"
                title="OAKBROOK RESERVE PROPERTY TEASER"
              />
            </li>
          </ul>
        </ProjectsBox>
      </div>
    </StyledProjects>
  );
};

const StyledProjects = styled(motion.div)`
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
export default Projects;
