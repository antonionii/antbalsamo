"use client";
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import PageHeaderText from "../components/PageHeaderText";
import { pageAnimation, slidedownAnim } from "../styles/animation";
import CardComponent from "../components/CardComponent";
import projectCardData from "../data/projectCardData";
import { useRouter } from "next/navigation";
import PasswordModal from "../components/PasswordModal";
import { PageContainer } from "../styles/PageContainer";


const Projects = () => {
  const [accentTextColor, setAccentTextColor] = useState("");
  const [windowWidth, setWindowWidth] = useState(null);
  const [pendingCard, setPendingCard] = useState(null);
  const [showPasswordModal, setShowPasswordModal] = useState(false);
  const router = useRouter();

  useEffect(() => {
    // Ensure code runs only on the client-side
    if (typeof window !== "undefined") {
      // Fetch computed styles safely on the client
      const accentColor = getComputedStyle(document.documentElement).getPropertyValue('--accentText-color').trim();
      setAccentTextColor(accentColor);

      // Get window width
      setWindowWidth(window.innerWidth);

      // Add event listener for resizing
      const handleResize = () => setWindowWidth(window.innerWidth);
      window.addEventListener("resize", handleResize);

      // Cleanup on component unmount
      return () => window.removeEventListener("resize", handleResize);
    }
  }, []); // Empty dependency array ensures it runs once on mount

  const handlePasswordSuccess = () => {
    setShowPasswordModal(false);
    if (pendingCard) {
      router.push(pendingCard.linkTo);
      setPendingCard(null);
    }
  };

    useEffect(() => {
      if (typeof window !== 'undefined') {
        window.isPasswordModalOpen = showPasswordModal;
      }
    }, [showPasswordModal]);



  return (
    <PageContainer>
    <motion.div
      variants={pageAnimation}
      initial="hidden"
      animate="show"
      exit="exit"
      style={{ display: 'flex', flexDirection: 'column', gap: '3rem' }}
    >
      <motion.div
        initial="hidden"
        animate="show"
        exit="exit"
        style={{ textAlign: "center" }}
      >
        <ProjectsContainer>
            <ProjectsHeaderWrapper>

          <PageHeaderText
            numOfItems={8}
            itemsText={["🐸", "Hop", "around", "my", "projects", "🐸"]}
            variant={slidedownAnim}
            fontSize="1.4rem"
          />
            </ProjectsHeaderWrapper>

        </ProjectsContainer>
      </motion.div>
      <CardComponent
        cards={projectCardData}
        onCardClick={card => { }}
        onProtectedCardClick={card => {
          setPendingCard(card);
          setShowPasswordModal(true);
        }}
      />
      {showPasswordModal && (
        <PasswordModal
          isOpen={showPasswordModal}
          onClose={() => setShowPasswordModal(false)}
          onSuccess={handlePasswordSuccess}
        />
      )}
    </motion.div>
    </PageContainer>
  );
};

// Styled components
const ProjectsContainer = styled(motion.div)``;

const ProjectsHeaderWrapper = styled.div`
  margin-top: 0;
`;

export default Projects;
