import React from "react";
import styled from "styled-components";
import { useScroll } from "./useScroll";
import { scrollReveal } from "../animation";
import { motion } from "framer-motion";

const Footer = () => {
  const [element, controls] = useScroll();
  return (
    <div>
      <FooterDiv>
        <div
          style={{
            position: "relative",
            zIndex: "10",
          }}
        >
          <p>
            <span>
              <a
                href="mailto: antbalsamo@gmail.com"
                target="_blank"
                rel="noreferrer"
              >
                antbalsamo@gmail.com
              </a>
            </span>
          </p>
        </div>
        <div
          style={{
            position: "relative",
            zIndex: "10",
          }}
        >
          <p>
       
            <span>
              <a
                href="https://www.linkedin.com/in/antbalsamo/"
                target="_blank"
                rel="noreferrer"
              >
                LinkedIn
              </a>
            </span>
          </p>
        </div>
      </FooterDiv>
      <FooterDiv2>
        <div>
          <p>
            <span>i made this website</span>

          </p>
        </div>
        <div>
          <p>

            <span>&lt;source code here&gt;</span>
          </p>
        </div>
      </FooterDiv2>

     
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
    margin: 0;
    font-family: "Karla", sans-serif;
    font-size: 1.1rem;
    color: var(--text-color);
    padding: 0rem 4rem;
  }

  span {
    display: block;

    font-size: 1.1rem;
  }

  a {
    font-size: 1.1rem;
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

export default Footer;
