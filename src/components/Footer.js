import React from "react";
import styled from "styled-components";
import {useScroll} from "./useScroll";
import {motion} from "framer-motion";

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
                        <span>&lt;source code here&gt;</span>
                    </p>
                </div>
            </FooterDiv2>


        </div>
    );
};

const FooterDiv = styled(motion.div)`
    display: block;
    width: 100%;
    margin: 30rem 0rem 0rem 0rem;
    pointer-events: auto;
    box-sizing: border-box;

    div {
        border-top: 4px solid var(--line-color);
        margin: 0rem 0rem;
        padding: 4rem 0rem;
        display: flex;
        box-sizing: border-box;
        justify-content: flex-start;
    }

    p {
        margin: 0;
        font-family: "Karla", sans-serif;
        font-size: 1.1rem;
        color: var(--text-color);
        padding: 0rem 4rem;
        display: flex;
        gap: 4rem; 
    }

    span {
        display: inline-block;

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
        border-top: 4px solid var(--line-color);
        margin: 0rem 0rem;
        padding: 4rem 0rem;
        box-sizing: border-box;
        width: 100%;
    }

    p {
        margin: 0;
        font-family: "Karla", sans-serif;
        font-size: 1.1rem;
        color: var(--text-color);
        padding: 0rem 4rem;
        display: flex;
        gap: 4rem;

    }

    p span {
        display: inline-block;
        
    }
`;

export default Footer;
