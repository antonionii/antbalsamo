import React, { useState } from "react";
import styled from "styled-components";
import Toggle from "./Toggle";
import {
  BasicLayout,
  StyledDescription,
  StyledImage,
  StyledHide,
} from "../styles";

import { AnimateSharedLayout } from "framer-motion";
import { useScroll } from "./useScroll";
import { scrollReveal } from "../animation";
import Marquee from "react-fast-marquee";
import { motion } from "framer-motion";

const Footer = () => {
  const [element, controls] = useScroll();
  return (
    <div>
      <FooterDiv>
        <div>
          <p>
            <span>antbalsamo</span>
            <span>@gmail.com</span>
            <span>(954) 234-3133</span>
          </p>
        </div>
        <div>
          <p>
            <span>instagram</span>
            <span>linkedin</span>
            <span>vimeo</span>
          </p>
        </div>
      </FooterDiv>
      <FooterDiv2>
        <div>
          <p>
            <span>Coded</span>
            <span>by</span>
            <span>hand</span>
          </p>
        </div>
        <div>
          <p>
            <span>no webflow</span>
            <span>just react</span>
            <span>(-.-)Zzz...</span>
          </p>
        </div>
      </FooterDiv2>

      <MarqueeFooter
      // variants={scrollReveal}
      // animate={controls}
      // ref={element}
      // initial="hidden"
      >
        <Marquee
          variants={scrollReveal}
          animate={controls}
          ref={element}
          initial="hidden"
          direction="left"
          gradient={false}
          classname="marqueeWrapper"
          speed={"75"}
        >
          <h1>
            &nbsp;&nbsp;&nbsp;&nbsp;welcome&nbsp;&nbsp;&nbsp;&nbsp;moshi moshi
          </h1>
        </Marquee>
      </MarqueeFooter>
    </div>
  );
};

// <StyledFaq
//   variants={scrollReveal}
//   animate={controls}
//   ref={element}
//   initial="hidden"
// >
//   <h2>
//     Any Questions? <span>FAQ</span>
//   </h2>
//   <AnimateSharedLayout>
//     <Toggle title="How Do I Start?">
//       <div className="answer">
//         <p>Lorem ipsum dolor sit amet.</p>
//         <p>
//           Lorem ipsum dolor, sit amet consectetur adipisicing elit.
//           Praesentium, adipisci aspernatur.
//         </p>
//       </div>
//     </Toggle>
//     <Toggle title="Daily Schedule?">
//       <div className="answer">
//         <p>Lorem ipsum dolor sit amet.</p>
//         <p>
//           Lorem ipsum dolor, sit amet consectetur adipisicing elit.
//           Praesentium, adipisci aspernatur.
//         </p>
//       </div>
//     </Toggle>
//     <Toggle title="Different Payment Methods?">
//       <div className="answer">
//         <p>Lorem ipsum dolor sit amet.</p>
//         <p>
//           Lorem ipsum dolor, sit amet consectetur adipisicing elit.
//           Praesentium, adipisci aspernatur.
//         </p>
//       </div>
//     </Toggle>
//     <Toggle title="What products do you offer?">
//       <div className="answer">
//         <p>Lorem ipsum dolor sit amet.</p>
//         <p>
//           Lorem ipsum dolor, sit amet consectetur adipisicing elit.
//           Praesentium, adipisci aspernatur.
//         </p>
//       </div>
//     </Toggle>
//   </AnimateSharedLayout>
// </StyledFaq>

const InfoPadding = styled(motion.div)`
  display: block;
  box-sizing: border-box;
`;
const FooterDiv = styled(motion.div)`
  display: block;
  width: 100%;
  margin: 30rem 0rem 0rem 0rem;
  pointer-events: auto;
  box-sizing: border-box;
  div {
    border-top: 2px solid var(--line-color);
    margin: 0rem 0rem;
    padding: 4rem 0rem;
    display: inline-block;
    box-sizing: border-box;
  }
  p {
    text-transform: uppercase;
    margin: 0;
    font-family: "Karla", sans-serif;
    font-size: 1.1rem;
    color: var(--text-color);
    padding: 0rem 4rem;
  }

  p span {
    display: block;
  }
`;

const FooterDiv2 = styled(motion.div)`
  display: block;
  width: 100%;
  margin: 0;
  pointer-events: auto;
  box-sizing: border-box;
  div {
    border-top: 2px solid var(--line-color);
    margin: 0rem 0rem;
    padding: 4rem 0rem;
    display: inline-block;
    box-sizing: border-box;
  }
  p {
    text-transform: uppercase;
    margin: 0;
    font-family: "Karla", sans-serif;
    font-size: 1.1rem;
    color: var(--text-color);
    padding: 0rem 4rem;
  }

  p span {
    display: block;
  }
`;

const MarqueeFooter = styled(motion.div)`
  border-top: 2px solid var(--line-color);
  border-bottom: 2px solid var(--line-color);
  padding: 0rem 5rem;
  margin: 2rem 0rem;
  width: 100%;
  height: auto;

  h1 {
    font-size: 09rem;
    font-weight: 200;
    color: var(--text-color);
    text-transform: uppercase;
  }

  .marqueeWrapper {
    display: block;
    width: 100%;
    max-width: 100%;

    /* outline: 1px solid red; */
  }
`;
const StyledFaq = styled(BasicLayout)`
  width: 80%;
  height: auto;
  display: block;
  z-index: 10;
  pointer-events: auto;
  span {
    display: block;
  }
  h2 {
    padding-bottom: 2rem;
    font-weight: lighter;
  }
  .faq-line {
    background: #cccccc;
    height: 0.2rem;
    margin: 2rem 0rem;
    width: 100%;
  }

  .question {
    padding: 3rem 0rem;
    cursor: pointer;
  }

  .answer {
    padding: 2rem 0rem;
    p {
      padding: 1rem 0rem;
    }
  }
`;
export default Footer;
