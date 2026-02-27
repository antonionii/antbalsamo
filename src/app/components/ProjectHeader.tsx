"use client";

import React from "react";
import { useRouter } from "next/navigation";
import { useThemeToggle } from "../hooks/useThemeToggle";

interface ProjectHeaderProps {
  colorSchemeType: "light" | "dark";
  setColorSchemeType: (scheme: "light" | "dark") => void;
}

const ProjectHeader: React.FC<ProjectHeaderProps> = ({ colorSchemeType, setColorSchemeType }) => {
  const router = useRouter();
  const { containerRef, startAnimation } = useThemeToggle({ colorSchemeType, setColorSchemeType });

  return (
    <header
      className="
        sticky top-0 z-[15] px-4 py-2
        bg-[var(--color-bg-base)]
        md:px-10 md:py-4
        xl:px-16
      "
    >
      <div className="max-w-[1100px] mx-auto w-full flex justify-between items-center md:pt-[0.2rem]">
        <button
          onClick={() => router.back()}
          className="
            flex items-center justify-center
            bg-transparent border-none p-0 cursor-pointer
            text-[var(--color-text-primary)]
            w-8 h-8 min-w-0 shrink-0 rounded-full
            transition-colors duration-200
            hover:bg-[var(--color-bg-hover)]
            [&_.material-symbols-outlined]:text-2xl
          "
        >
          <span className="material-symbols-outlined">arrow_back</span>
        </button>

        <div
          ref={containerRef}
          onClick={startAnimation as React.MouseEventHandler}
          className="w-[30px] h-[30px] cursor-pointer"
        />
      </div>
    </header>
  );
};

export default ProjectHeader;
