"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useThemeToggle } from "../hooks/useThemeToggle";

interface NavHeaderProps {
  colorSchemeType: "light" | "dark";
  setColorSchemeType: (scheme: "light" | "dark") => void;
}

const NavHeader: React.FC<NavHeaderProps> = ({ colorSchemeType, setColorSchemeType }) => {
  const pathname = usePathname();
  const [activeItem, setActiveItem] = useState("/");
  const [useCards, setUseCards] = useState(false);
  const { containerRef, startAnimation } = useThemeToggle({ colorSchemeType, setColorSchemeType });

  useEffect(() => {
    const handler = (e: CustomEvent<{ useCards: boolean }>) => setUseCards(e.detail.useCards);
    window.addEventListener("toggleViewMode", handler as EventListener);
    return () => window.removeEventListener("toggleViewMode", handler as EventListener);
  }, []);

  useEffect(() => {
    if (pathname.startsWith("/Projects") || pathname.startsWith("/Blocks")) {
      setActiveItem("/Projects");
    } else if (pathname.startsWith("/Blog") || pathname.startsWith("/Blogs")) {
      setActiveItem("/Blog");
    } else {
      setActiveItem(pathname);
    }
  }, [pathname]);

  return (
    <header
      className="
        sticky top-0 z-[15] px-4 py-2
        bg-[var(--color-bg-base)]
        md:px-10 md:py-4
        xl:px-16
      "
    >
      <div
        className="
          max-w-[1100px] mx-auto w-full flex justify-between items-center gap-4
          text-[var(--color-text-primary)]
          max-[1100px]:flex-col max-[1100px]:items-end max-[1100px]:gap-2 max-[1100px]:w-fit
        "
      >
        {/* Name */}
        <div className="flex items-center list-none">
          <div>
            <li
              className="relative list-none h-[2.8rem] leading-[2.1rem] pl-0"
              onClick={() => setActiveItem("/")}
            >
              <div>
                <Link
                  href="/"
                  onClick={() => setActiveItem("/")}
                  className={`
                    font-[family-name:'Roboto_Slab',serif]
                    ${activeItem === "/" ? "text-[2rem] text-[var(--color-text-primary)] font-black" : "text-[1.6rem] text-inherit font-normal"}
                  `}
                >
                  Anthony Balsamo
                </Link>
              </div>
              <div
                className="h-2 bg-[var(--color-border-default)] absolute rounded-full transition-all duration-500"
                style={{ width: activeItem === "/" ? "100%" : "0%" }}
              />
            </li>
          </div>
        </div>

        {/* Links */}
        <ul
          className="
            flex items-center list-none flex-1 justify-end gap-8
            max-[1100px]:justify-end max-[1100px]:flex-none max-[1100px]:gap-4
          "
        >
          {useCards && (
            <li className="relative list-none h-[2.8rem] leading-[2.1rem]">
              <div>
                <Link
                  href="/Projects"
                  onClick={() => setActiveItem("/Projects")}
                  className={`
                    font-[family-name:'Roboto_Slab',serif]
                    ${activeItem === "/Projects" ? "text-[2rem] text-[var(--color-text-primary)] font-black" : "text-[1.6rem] text-inherit font-normal"}
                  `}
                >
                  Projects
                </Link>
              </div>
              <div
                className="h-2 bg-[var(--color-border-default)] absolute rounded-full transition-all duration-500"
                style={{ width: activeItem === "/Projects" ? "80%" : "0%" }}
              />
            </li>
          )}

          <li className="relative list-none h-[2.8rem] leading-[2.1rem] flex items-center">
            <div>
              <a
                href="/Anthony Balsamo Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="no-underline text-[1.6rem] text-inherit font-black font-[family-name:'Roboto_Slab',serif]"
              >
                Resume
              </a>
            </div>
          </li>

          <li className="flex items-center list-none">
            <div
              ref={containerRef}
              onClick={startAnimation as React.MouseEventHandler}
              className="w-[30px] h-[30px] cursor-pointer"
            />
          </li>
        </ul>
      </div>

      {/* Decorative nav line */}
      <div className="h-1 bg-[var(--color-deco-red)] w-full absolute -top-[10%] left-0 after:content-[''] after:h-1 after:bg-[var(--color-deco-yellow)] after:w-full after:absolute after:top-full after:left-0" />
    </header>
  );
};

export default NavHeader;
