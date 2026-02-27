"use client";

import React, { useState, useEffect, useCallback } from "react";
import { createPortal } from "react-dom";

/* ---- Props ---- */

interface StyledSnackbarProps {
  open: boolean;
  onClose: () => void;
  message: string;
  autoHideDuration?: number;
}

interface ToastProps {
  message: string;
  textColor: string;
  bgColor: string;
  autoHideDuration: number;
  onClose: () => void;
}

interface SnackbarEntry {
  message: string;
  key: number;
}

/* ---- Toast ---- */

const Toast: React.FC<ToastProps> = ({ message, textColor, bgColor, autoHideDuration, onClose }) => {
  useEffect(() => {
    const timer = setTimeout(onClose, autoHideDuration);
    return () => clearTimeout(timer);
  }, [autoHideDuration, onClose]);

  const isMobile = typeof window !== "undefined" && window.innerWidth <= 780;

  return (
    <div
      role="alert"
      style={{
        backgroundColor: bgColor,
        color: textColor,
        fontSize: isMobile ? "1rem" : "1.4rem",
        fontWeight: 500,
        fontFamily: "'Roboto Slab', serif",
        boxShadow: `.6rem 0.6rem 0rem 0rem ${getComputedStyle(document.documentElement).getPropertyValue("--color-shadow").trim() || "#3E3E3E"}`,
        padding: isMobile ? "8px 16px" : "6px 16px",
        maxWidth: isMobile ? "70%" : "600px",
        width: "auto",
        paddingLeft: "1rem",
        paddingRight: "1rem",
        boxSizing: "border-box",
        borderRadius: "4px",
        pointerEvents: "auto",
      }}
      onClick={onClose}
    >
      {message}
    </div>
  );
};

/* ---- StyledSnackbar ---- */

const StyledSnackbar: React.FC<StyledSnackbarProps> = ({
  open,
  onClose,
  message,
  autoHideDuration = 3200,
}) => {
  const [displayedSnackbars, setDisplayedSnackbars] = useState<SnackbarEntry[]>([]);

  useEffect(() => {
    if (open && message) {
      setDisplayedSnackbars((prev) => {
        const newQueue = [...prev, { message, key: Date.now() }];
        if (newQueue.length > 5) newQueue.shift();
        return newQueue;
      });
    }
  }, [open, message]);

  const handleClose = useCallback(
    (key: number) => {
      setDisplayedSnackbars((prev) => prev.filter((s) => s.key !== key));
      onClose();
    },
    [onClose]
  );

  if (displayedSnackbars.length === 0) return null;

  const textColor = getComputedStyle(document.documentElement)
    .getPropertyValue("--color-text-secondary")
    .trim();
  const bgColor = getComputedStyle(document.documentElement)
    .getPropertyValue("--color-bg-surface")
    .trim();

  return createPortal(
    <div
      style={{
        position: "fixed",
        top: "0.75rem",
        left: 0,
        right: 0,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: "0.5rem",
        zIndex: 99999,
        pointerEvents: "none",
      }}
    >
      {displayedSnackbars.map((snackbar) => (
        <Toast
          key={snackbar.key}
          message={snackbar.message}
          textColor={textColor}
          bgColor={bgColor}
          autoHideDuration={autoHideDuration}
          onClose={() => handleClose(snackbar.key)}
        />
      ))}
    </div>,
    document.body
  );
};

export default StyledSnackbar;
