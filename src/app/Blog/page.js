"use client";
import React, { useEffect, useState } from "react";
import Link from 'next/link';
import styled from "styled-components";
import { motion } from "framer-motion";
import PageHeaderText from "../components/PageHeaderText";
import HeroText from "../components/HeroText";
import { pageAnimation, cardAnimation, slideleftAnim, slidedownAnim } from "../styles/animation";

const Blog = () => {
  const [colorForegroundTextDefault, setColorForegroundTextDefault] = useState("");
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);

    if (typeof window !== "undefined") {
      const colorForegroundTextDefault = getComputedStyle(document.documentElement).getPropertyValue('--color-Foreground-Text-Default').trim();
      setColorForegroundTextDefault(colorForegroundTextDefault);
    }
  }, []);

  const blogs = [
    {
      title: "~Personal Website Refresh~",
      link: "/Blogs/9d0ed34b21cf442a87542001fd9d07bc",
      date: "Sept 9, 2024",
    },
  ];

  const mostRecentBlog = blogs[0];
  const blogsIn2024 = blogs.filter((blog) => blog.date.includes("2024"));

  return (
    isClient && (
      <PageContainer>
        <motion.div
          variants={pageAnimation}
          initial="hidden"
          animate="show"
          exit="exit"
          style={{ textAlign: "center" }}
        >
          <BlogsHeaderContainer>
            <PageHeaderText
              numOfItems={4}
              variant={slidedownAnim}
              itemsText={["✏️", "Occasionally", "Blogging", "✏️"]}
              fontSize="1.4rem"
            />
          </BlogsHeaderContainer>
          <motion.div variants={pageAnimation} initial="hidden" animate="show" exit="exit">
            <motion.div variants={cardAnimation} style={{ display: "block" }}>
              <StyledSection>
                <HeaderContainter>
                  <ResponsiveHeroText
                    numOfItems={2}
                    itemsText={["2024"]}
                    variant={slideleftAnim}
                    fontColor={colorForegroundTextDefault}
                  />
                </HeaderContainter>
                {blogsIn2024.map((blog, index) => (
                  <BlogItemContainer key={index}>
                    <BlogLink
                      href={{
                        pathname: blog.link,
                        query: { title: blog.title }
                      }}
                    >
                      {blog.title}
                    </BlogLink>
                    <BlogDate>{blog.date}</BlogDate>
                  </BlogItemContainer>
                ))}
              </StyledSection>
            </motion.div>
          </motion.div>
        </motion.div>
      </PageContainer>
    )
  );
};

// New container to apply min-height
const PageContainer = styled.div`
  min-height: 84vh; /* Ensure the container takes up the full viewport height */
  display: flex;
  flex-direction: column;
  justify-content: space-between; /* This pushes the footer down */
`;

const BlogItemContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 0;
`;

const BlogLink = styled(Link)`
  font-size: 1.2rem;
  color: var(--link-color);
  font-weight: bold;
  text-align: left;
  padding: 0rem 2rem 0rem 0rem;

  &:hover {
    text-decoration: underline;
  }
`;

const BlogsHeaderContainer = styled(motion.div)`
  margin: 4rem 0rem 0rem 0rem;
`;

const BlogDate = styled.span`
  font-size: 1rem;
  color: var(--accentText-color);
  text-align: right;
  font-weight: bold;
  font-family: Inter;
`;

const HeaderContainter = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1rem;

  @media (max-width: 780px) {
    flex-direction: column-reverse;
    align-items: flex-end;
  }
`;

const StyledSection = styled(motion.div)`
  width: 80%;
  margin: 4rem auto 0 auto;
  padding: 1rem;
  border-radius: 1rem;
  background-color: var(--color-Background-Default);
  color: var(--color-Foreground-Text-Default);
  box-sizing: border-box;
  overflow: hidden;

  @media (min-width: 780px) {
    width: 55%;
    padding: 0rem 2rem 2rem 2rem;
  }

  @media (min-width: 1300px) {
    width: 45%;
    padding: 0rem 2rem 2rem 2rem;
  }
`;

const ResponsiveHeroText = styled(HeroText)`
  text-align: left;

  h1 {
    font-size: 1.5rem;
    text-align: left;

    @media (min-width: 780px) {
      font-size: 2.2rem;
    }

    @media (min-width: 1300px) {
      font-size: 3rem;
    }
  }
`;

export default Blog;
