"use client";
import React, { useEffect, useState } from "react";
import Link from 'next/link';
import styled from "styled-components";
import { motion } from "framer-motion";
import PageHeaderText from "../components/PageHeaderText";
import HeroText from "../components/HeroText";
import { pageAnimation, cardAnimation, slideleftAnim, slidedownAnim } from "../styles/animation";

const Blog = () => {
  const [accentTextColor, setAccentTextColor] = useState("");
  const [isClient, setIsClient] = useState(false);
  const [selectedBlogTitle, setSelectedBlogTitle] = useState("");

  useEffect(() => {
    setIsClient(true);

    if (typeof window !== "undefined") {
      const accentColor = getComputedStyle(document.documentElement).getPropertyValue('--accentText-color').trim();
      setAccentTextColor(accentColor);
    }
  }, []);

  // The blog data
  const blogs = [
    {
      title: "~Personal Website Refresh~",
      link: "/Blogs/9d0ed34b21cf442a87542001fd9d07bc",
      date: "Sept 9, 2024",
    },
  ];

  // Separate out the most recent blog and filter for 2024 blogs
  const mostRecentBlog = blogs[0];
  const blogsIn2024 = blogs.filter((blog) => blog.date.includes("2024"));

  return (
    // Ensure the component renders only on the client side to prevent SSR issues
    isClient && (
      <motion.div
        variants={pageAnimation}
        initial="hidden"
        animate="show"
        exit="exit"
        style={{ textAlign: "center" }}
      >
        <BlogsHeaderContainer>
        {/* Page Header */}
        <PageHeaderText
          numOfItems={4}
          variant={slidedownAnim}
          itemsText={["✏️", "Occasionally", "Blogging", "✏️"]}
          fontSize="1.4rem"
        />
        </BlogsHeaderContainer>
        {/* Parent container to control the animation sequence */}
        <motion.div variants={pageAnimation} initial="hidden" animate="show" exit="exit">
          {/* Most Recent Section */}
          {/* <motion.div variants={cardAnimation} style={{ display: "block" }}>
            <StyledSection>
              <HeaderContainter>
                <ResponsiveHeroText
                  numOfItems={2}
                  itemsText={["Most", "Recent"]}
                  variant={slideleftAnim}
                  fontColor={accentTextColor}
                />
              </HeaderContainter>

              <BlogItemContainer>
                <BlogLink
                  href={{
                    pathname: mostRecentBlog.link,
                    query: { title: mostRecentBlog.title }
                  }}
                >
                  {mostRecentBlog.title}
                </BlogLink>
                <BlogDate>{mostRecentBlog.date}</BlogDate>
              </BlogItemContainer>
            </StyledSection>
          </motion.div> */}

          {/* 2024 Blogs Section */}
          <motion.div variants={cardAnimation} style={{ display: "block" }}>
            <StyledSection>
              <HeaderContainter>
                <ResponsiveHeroText
                  numOfItems={2}
                  itemsText={["2024"]}
                  variant={slideleftAnim}
                  fontColor={accentTextColor}
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
    )
  );
};

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
  margin: 4rem 0rem 0rem 0rem; /* Reduce top margin */
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
  background-color: var(--card-color);
  color: var(--text-color);
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
