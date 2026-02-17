import React from "react";
import styled from "styled-components";

const BigSpecialButton = styled.button`
  border: none; 
  border-radius: 99px;

  padding: 1rem;
  width: auto;
  margin-left: auto;
  margin-right: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  transition: box-shadow 0.1s ease;
  font-size: 1rem;
  background-color: var(--color-Intent-Positive-Primary);
  color: var(--color-Foreground-Text-Inverse);
  text-align: center;
  white-space: normal;
  word-wrap: break-word;
  word-break: break-word;
  overflow: hidden;

    box-shadow: 0 0 0 0px var(--color-Foreground-Text-Inverse);

  &:hover {

    box-shadow: 0 0 0 4px var(--color-Foreground-Text-Inverse);
  }
`;



const Button = ({ children, onClick }) => {
  return <BigSpecialButton onClick={onClick}>{children}</BigSpecialButton>;
};

export default Button;