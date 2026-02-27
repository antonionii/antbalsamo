"use client";

import { useEffect, useRef, useState, useCallback } from "react";
import lottie, { type AnimationItem } from "lottie-web";
import { applyTheme } from "../components/theme/tokens";

/* ============================================
   useThemeToggle Hook
   Manages the Lottie day/night animation and
   light ↔ dark theme switching.

   Shared by NavHeader and ProjectHeader.
   ============================================ */

interface UseThemeToggleProps {
  colorSchemeType: "light" | "dark";
  setColorSchemeType: (scheme: "light" | "dark") => void;
}

interface UseThemeToggleReturn {
  containerRef: React.RefObject<HTMLDivElement | null>;
  startAnimation: (event?: React.MouseEvent | Event) => void;
  isLight: boolean;
}

export function useThemeToggle({
  colorSchemeType,
  setColorSchemeType,
}: UseThemeToggleProps): UseThemeToggleReturn {
  const isDark = colorSchemeType === "dark";
  const [direction, setDirection] = useState(isDark ? -1 : 1);
  const [isLight, setIsLight] = useState(!isDark);
  const containerRef = useRef<HTMLDivElement | null>(null);
  const animRef = useRef<AnimationItem | null>(null);

  const startAnimation = useCallback(
    (event?: React.MouseEvent | Event) => {
      if (event) event.stopPropagation();
      if (!animRef.current) return;

      animRef.current.setDirection(direction);
      animRef.current.play();

      if (direction === -1) {
        animRef.current.setSpeed(2);
        applyTheme("light");
        setColorSchemeType("light");
        setIsLight(true);
      } else {
        animRef.current.setSpeed(1);
        applyTheme("dark");
        setColorSchemeType("dark");
        setIsLight(false);
      }

      setDirection(direction * -1);
    },
    [direction, setColorSchemeType],
  );

  /* Sync if colorSchemeType changes externally */
  useEffect(() => {
    setIsLight(colorSchemeType === "light");
    const newDirection = colorSchemeType === "light" ? 1 : -1;
    if (newDirection !== direction) {
      setDirection(newDirection);
      startAnimation();
    }
  }, [colorSchemeType, direction, startAnimation]);

  /* Initialize Lottie animation */
  useEffect(() => {
    if (!animRef.current && typeof window !== "undefined" && containerRef.current) {
      animRef.current = lottie.loadAnimation({
        container: containerRef.current,
        renderer: "svg",
        loop: false,
        autoplay: false,
        path: "https://assets1.lottiefiles.com/packages/lf20_ebutdyzo.json",
      });

      if (colorSchemeType === "dark") {
        animRef.current.addEventListener("DOMLoaded", () => {
          animRef.current?.goToAndStop(animRef.current.totalFrames - 1, true);
        });
      }
    }

    return () => {
      if (animRef.current) {
        animRef.current.destroy();
        animRef.current = null;
      }
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return { containerRef, startAnimation, isLight };
}
