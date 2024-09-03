import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";

const Footer = () => {
    return (
            <FooterDiv>
                <ContentDiv>
                    <p>
                        <span><a style= {{textDecoration:"underline"}}href={"https://github.com/antonionii/antbalsamo"} target="_blank" rel="noopener noreferrer">
&lt;source code here&gt;
</a></span>
                    </p>
                </ContentDiv>
            </FooterDiv>
    );
};

const FooterDiv = styled(motion.div)`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    margin: 20rem 0rem 0rem 0rem; /* Adjust the margin as needed */
    pointer-events: auto;
    box-sizing: border-box;
`;

const ContentDiv = styled.div`
    padding: 0rem 2rem;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: var(--card-color); 
    border-radius: 12px 12px 0 0; 
    border-bottom: none; 
    box-sizing: border-box;
    width: auto;
    color: var(--accentText-color);
    font-weight: normal;


`;


export default Footer;
