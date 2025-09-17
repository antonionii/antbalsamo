import styled from "styled-components";
import React, { useState, useEffect } from "react";



const ModalOverlay = styled.div`
  position: fixed; top: 0; left: 0; width: 100vw; min-height: 100vh;
  background: rgba(0,0,0,0.7); display: flex; align-items: center; justify-content: center; z-index: 1000;
`;
const ModalBox = styled.div`
  background: rgba(255, 255, 255, 1) !important;
  color: var(--color-Foreground-Default);
  opacity: 1 !important;
  padding: 1.2rem;
  border-radius: 12px;
  min-width: 0;
  max-width: 95vw;
  width: 95vw;
  box-shadow: 0px 16px 48px 0px rgba(0,0,0,0.175);
  margin: 0 auto;

  @media (min-width: 480px) {
    width: 340px;
    max-width: 420px;
    padding: 2rem;
  }
`;

const ModalTitle = styled.h2`
  font-size: 2rem;
  text-align: center;
  margin-bottom: -2rem;
  color: var(--color-Foreground-Text-Default);
`;
const ModalIcon = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 40px;
  height: 40px;
  margin: 0 auto 1rem auto;
  color: var(--color-Foreground-Text-Default);

  .material-symbols-outlined {
    font-size: 48px; /* Set icon size here */
    line-height: 1;
  }
`;
const ModalBody = styled.p`
  font-size: 1rem;
    margin-bottom: -2rem;

  color: var(--color-Foreground-Text-Default);
    text-align: center;       // Center the body text

`;
const InputWrapper = styled.div`
  display: flex;
  margin-left: auto; // aligns to the right
  width: 100%;
  margin-top:2rem;
  margin-bottom: 2rem;
`;
const VisibilityToggle = styled.span`
  margin-left: 0.5rem;
  cursor: pointer;
  color: #ccc;
  transition: all 0.3s ease;
  font-size: 1.5rem;
  user-select: none;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #e9e9ed63;
  
  width: auto;
  height: auto;
  padding: 0 0.2rem;
  border-radius: 10%;
  box-sizing: border-box;

  &:hover {
    color: var(--color-Foreground-Text-Default);
    border-color: var(--color-Foreground-Text-Default);
  }

  .material-symbols-outlined {
    font-size: 1.5rem;
    line-height: 1;
  }
`;

const ErrorContainer = styled.div`
  background: var(--color-Background-Negative);
  color: var(--color-Foreground-Text-Default);
  border-radius: 8px;
  font-size: 0.8rem;
  padding: 0.75rem 1rem;
  margin: 1rem auto 0 auto;
  text-align: center;
  width: fit-content;
  max-width: 90%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const ModalInput = styled.input`
  width: 100%;
  height: 32px;
  font-size: 1rem;
  padding: 0 1rem;
  border-radius: 8px;
  border: 2px solid #ccc;
  box-sizing: border-box;
  font-family: "Inter", system-ui;

  &:focus {
    outline: none;
    border-color: var(--color-Blue-500);
  }
`;
const ButtonRow = styled.div`
  display: flex;
  gap: 1rem;
  margin-top: 0.5rem;
  justify-content: flex-end;
`;


const ModalButton = styled.button`
  padding: 0 1rem;
  height: 40px;
  line-height: 40px;
  font-size: 1rem;
  border-radius: 99px;
  border: none;
  background: var(--color-Intent-Positive-Primary);
  color: #fff;
  cursor: pointer;
  transition: background 0.2s;
  white-space: nowrap;
    &:hover {
    filter: brightness(0.9); /* Darken by 10% */
  }

  @media (max-width: 768px) {
    height: 32px;
    line-height: 32px;
    font-size: 0.9rem;
  }
`;
const SecondaryModalButton = styled.button`
  box-sizing: border-box;
  padding: 0 1rem;
  height: 40px;
  line-height: 40px;
  font-size: 1rem;
  border-radius: 99px;

  color: var(--color-Foreground-Text-Default);
  cursor: pointer;
  transition: all 0.2s ease;
  white-space: nowrap;
  font-family: "Inter", system-ui;
  font-weight: bold;
  border: none;
  &:hover{      
}

  @media (max-width: 768px) {
    height: 32px;
    line-height: 32px;
    font-size: 0.9rem;

  }
`;
export default function PasswordModal({ isOpen, onClose, onSuccess }) {
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
 const [showPassword, setShowPassword] = useState(false);
 
  useEffect(() => {
    if (!isOpen) return;
    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        onClose();
      }
    };
    if (typeof window !== "undefined") {
      window.addEventListener("keydown", handleKeyDown);
    }
    return () => {
      if (typeof window !== "undefined") {
        window.removeEventListener("keydown", handleKeyDown);
      }
    };
  }, [isOpen, onClose]);

  
  if (!isOpen) return null;
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    try {
      const res = await fetch("/api/blocks", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ password }),
      });
      if (res.ok) {
        setPassword("");
        onSuccess();
        onClose();
      } else {
        const data = await res.json();
        setError(data.message || "Incorrect password");
      }
    } catch {
      setError("Server error");
    }
    setLoading(false);
  };
  
return (
  <ModalOverlay>
    <ModalBox>
          <ModalIcon>
      <span className="material-symbols-outlined">lock</span>
    </ModalIcon>
      <ModalTitle>Protected Page</ModalTitle>
          <ModalBody>
      Please enter the password below to view this project.
    </ModalBody>
      <form onSubmit={handleSubmit}>
<InputWrapper>
  <ModalInput
    type={showPassword ? "text" : "password"}
    value={password}
    onChange={e => setPassword(e.target.value)}
    placeholder="Enter your password"
    disabled={loading}
  />
  <VisibilityToggle
    onClick={() => setShowPassword(v => !v)}
    aria-label={showPassword ? "Hide password" : "Show password"}
    tabIndex={0}
    onKeyDown={e => { if (e.key === "Enter" || e.key === " ") setShowPassword(v => !v); }}
  >
    <span className="material-symbols-outlined">
      {showPassword ? "visibility" : "visibility_off"}
    </span>
  </VisibilityToggle>
</InputWrapper>
        
        <ButtonRow>
          
          <SecondaryModalButton type="button" onClick={onClose} disabled={loading} >
            Cancel
          </SecondaryModalButton>
          <ModalButton type="submit" disabled={loading}>Submit</ModalButton>
        </ButtonRow>
      </form>
{error && (
  <ErrorContainer>
    Incorrect password. Please try again.
  </ErrorContainer>
)}    </ModalBox>
  </ModalOverlay>
  );
}
