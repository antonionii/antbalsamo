"use client";

import React, { useEffect, useState, createContext } from "react";
import dynamic from "next/dynamic";
import { usePathname } from "next/navigation";
import "./globals.css";
import Footer from "./components/Footer";
import { applyTheme } from "./components/theme/tokens";
import Script from "next/script";

const NavHeader = dynamic(() => import("./components/NavHeader"), { ssr: false });
const ProjectHeader = dynamic(() => import("./components/ProjectHeader"), { ssr: false });

/* ---- Modal context for image zoom ---- */
interface ModalContextValue {
  openImageModal: (src: string) => void;
  closeModal: () => void;
}

export const ModalContext = createContext<ModalContextValue>({
  openImageModal: () => {},
  closeModal: () => {},
});

/* ---- Root Layout ---- */
export default function RootLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const isProjectPage = pathname.startsWith("/Blocks");
  const [colorSchemeType, setColorSchemeType] = useState<"light" | "dark">("light");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalImage, setModalImage] = useState<string | null>(null);
  const [zoomLevel, setZoomLevel] = useState(1);
  const [isZoomed, setIsZoomed] = useState(false);
  const [zoomPosition, setZoomPosition] = useState({ x: 0.5, y: 0.5 });
  const [dragPosition, setDragPosition] = useState({ x: 0, y: 0 });
  const [isDragging, setIsDragging] = useState(false);

  /* Scroll to top on navigation — also forces mobile repaint of sticky header */
  useEffect(() => {
    if (typeof window === "undefined") return;
    window.scrollTo({ top: 0, behavior: "auto" });
  }, [pathname]);

  /* Image modal handlers */
  const openImageModal = (imageSrc: string) => {
    setModalImage(imageSrc);
    setIsZoomed(false);
    setZoomLevel(1);
    setZoomPosition({ x: 0.5, y: 0.5 });
    setDragPosition({ x: 0, y: 0 });
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setModalImage(null);
    setIsDragging(false);
  };

  const handleZoomClick = (e: React.MouseEvent<HTMLImageElement>) => {
    if (!isZoomed) {
      const rect = e.currentTarget.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width;
      const y = (e.clientY - rect.top) / rect.height;
      setZoomPosition({ x, y });
      setZoomLevel(2.4);
      setIsZoomed(true);
    } else {
      setZoomLevel(1);
      setIsZoomed(false);
    }
  };

  const handleDragStart = () => {
    if (isZoomed) setIsDragging(true);
  };

  const handleDragMove = (e: React.MouseEvent) => {
    if (isDragging && isZoomed) {
      setDragPosition((prev) => ({
        x: prev.x + e.movementX,
        y: prev.y + e.movementY,
      }));
    }
  };

  const handleDragEnd = () => {
    setIsDragging(false);
  };

  /* Apply theme on change */
  useEffect(() => {
    applyTheme(colorSchemeType);
  }, [colorSchemeType]);

  return (
    <ModalContext.Provider value={{ openImageModal, closeModal }}>
      <html lang="en">
        <head>
          <meta charSet="utf-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <meta name="theme-color" content="#000000" />

          {/* Preconnect for fonts */}
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />

          {/* Google Fonts */}
          <link href="https://fonts.googleapis.com/css2?family=Noto+Sans:wght@400;500;600;700;900&display=swap" rel="stylesheet" />
          <link href="https://fonts.googleapis.com/css2?family=Roboto+Slab:wght@400;500;600;700&display=swap" rel="stylesheet" />
          <link href="https://fonts.googleapis.com/css2?family=Inter:wght@100..900&display=swap" rel="stylesheet" />
          <link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined&display=swap" rel="stylesheet" />

          <style jsx global>{`
            .material-symbols-outlined {
              font-variation-settings: "FILL" 0, "wght" 400, "GRAD" 0, "opsz" 24;
            }
          `}</style>

          {/* Favicon and icons */}
          <link rel="icon" href="/favicon.ico" />
          <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
          <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
          <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
          <link rel="icon" type="image/png" sizes="192x192" href="/android-chrome-192x192.png" />
          <link rel="icon" type="image/png" sizes="512x512" href="/android-chrome-512x512.png" />

          {/* SEO Meta Tags */}
          <meta name="description" content="Portfolio showcasing senior product design expertise. Specializing in UX/UI design and interactive experiences." />
          <meta name="keywords" content="senior product design, UX design, UI design, creative design, art, product designer" />
          <meta name="author" content="Anthony Balsamo" />
          <meta property="og:title" content="Senior Product Designer | Anthony Balsamo" />
          <meta property="og:description" content="Portfolio showcasing senior product design expertise. Specializing in UX/UI design and interactive experiences." />
          <meta property="og:url" content="https://www.antbalsamo.com" />
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:title" content="Senior Product Designer | Anthony Balsamo" />
          <meta name="twitter:description" content="Portfolio showcasing senior product design expertise. Specializing in UX/UI design and interactive experiences." />

          <Script src="/lottie-player.js" strategy="afterInteractive" />
          <Script
            src="https://www.googletagmanager.com/gtag/js?id=G-TYV9TCCG65"
            strategy="afterInteractive"
          />
          <Script id="google-analytics" strategy="afterInteractive">
            {`
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-TYV9TCCG65');
            `}
          </Script>
        </head>
        <body>
          <div className="flex flex-col min-h-screen">
            {isProjectPage ? (
              <ProjectHeader
                colorSchemeType={colorSchemeType}
                setColorSchemeType={setColorSchemeType}
              />
            ) : (
              <NavHeader
                colorSchemeType={colorSchemeType}
                setColorSchemeType={setColorSchemeType}
              />
            )}
            <main className="flex-1 flex flex-col relative">{children}</main>
            <Footer />
          </div>

          {/* Image zoom modal */}
          {isModalOpen && (
            <div
              className="fixed inset-0 w-screen h-screen bg-[var(--color-overlay-heavy)] flex justify-center items-center z-[1000]"
              onClick={closeModal}
            >
              <div
                onMouseDown={handleDragStart}
                onMouseMove={handleDragMove}
                onMouseUp={handleDragEnd}
                onClick={(e) => e.stopPropagation()}
                className="relative flex justify-center items-center"
                style={{
                  cursor: isZoomed ? "zoom-out" : "zoom-in",
                  transform: `translate(${dragPosition.x}px, ${dragPosition.y}px)`,
                }}
              >
                <img
                  src={modalImage ?? undefined}
                  onClick={handleZoomClick}
                  className="max-w-[80vw] max-h-[80vh] object-contain transition-transform duration-300"
                  style={{
                    transform: `translate(${(0.5 - zoomPosition.x) * (zoomLevel - 1) * 100}%, ${(0.5 - zoomPosition.y) * (zoomLevel - 1) * 100}%) scale(${zoomLevel})`,
                  }}
                />
              </div>
            </div>
          )}

        </body>
      </html>
    </ModalContext.Provider>
  );
}
