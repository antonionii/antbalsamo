import React from "react";
import styled from "styled-components";

const StyledButton = styled.button`
  border-width: 6px;
  border-radius: 16px;
  margin-top: 4rem;
  padding: 1rem; /* Increase padding for better spacing */
  width: auto; /* Fixed width */
  height: 6rem; /* Fixed height to match width, creating a square */
  margin-left: auto;
  margin-right: auto;
  display: flex;
  justify-content: center;
  align-items: center; /* Center text vertically and horizontally */
  background-color: var(--background-color);
  box-shadow: 0.3rem 0.3rem 0rem 0rem black;
  cursor: pointer;
  transition: box-shadow 0.3s ease, transform 0.3s ease;
  font-size: 1.4rem; /* Adjust size as needed */
  color: var(--text-color); /* Use a variable for text color, or a specific color */
  text-align: center; /* Center the text horizontally */
  white-space: normal; /* Allow text to wrap */
  word-wrap: break-word; /* Wrap long words to prevent overflow */
  word-break: break-word; /* Ensure text wraps inside the box */
  overflow: hidden; /* Prevent overflowing content */
  &:hover {
    background-color: var(--card-color);

    box-shadow: 1rem 1rem 0rem 0rem black;
    transform: translateY(-10px);
    color: black; /* Use a variable for text color, or a specific color */
  }
`;



const Button = ({ children, onClick }) => {
  return <StyledButton onClick={onClick}>{children}</StyledButton>;
};

export default Button;