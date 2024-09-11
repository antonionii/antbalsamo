import React from "react";
import styled from "styled-components";
import {motion} from "framer-motion";
import PageHeaderText from "../components/PageHeaderText";
import HeroText from "../components/HeroText";
import { slidedownAnim, slideleftAnim } from "../styles/animation";

const Blog = () => {
  const accentTextColor = getComputedStyle(document.documentElement).getPropertyValue('--accentText-color').trim();

  // The blog data
  const blogs = [

    {
      title: "Overscoping a memory match coding exercise",
      link: "https://github.com/antonionii/antbalsamo",
      date: "Aug 30, 2024"
    },
    {
      title: "The line between scalable UX patterns and trends.",
      link: "https://github.com/antonionii/antbalsamo",
      date: "July 15, 2024"
    }
  ];

  // Separate out the most recent blog and filter for 2024 blogs
  const mostRecentBlog = blogs[0];
  const blogsIn2024 = blogs.filter(blog => blog.date.includes("2024"));

  return (
    <div>
      <motion.div initial="hidden" animate="show" exit="exit" style={{ textAlign: "center" }}>
        <PageHeaderText
          numOfItems={4}
          variant={slidedownAnim}
          itemsText={["✏️", "Occasionally", "Blogging", "✏️"]}
          fontSize="1.4rem"
        />
      </motion.div>

      {/* Most Recent Section */}
      <motion.div initial="hidden" animate="show" exit="exit" style={{ display: 'block' }}>
        <StyledSection className="bg-section">
          <HeaderContainter>
            <ResponsiveHeroText
              numOfItems={2}
              itemsText={["Most", "Recent"]}
              variant={slideleftAnim}
              fontColor={accentTextColor}
            />
          </HeaderContainter>

          <BlogItemContainer>
            <BlogLink href={mostRecentBlog.link} target="_blank" rel="noopener noreferrer">
              {mostRecentBlog.title}
            </BlogLink>
            <BlogDate>{mostRecentBlog.date}</BlogDate>
          </BlogItemContainer>
        </StyledSection>
      </motion.div>

      {/* 2024 Blogs Section */}
      <motion.div initial="hidden" animate="show" exit="exit" style={{ display: 'block' }}>
        <StyledSection className="bg-section">
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
              <BlogLink href={blog.link} target="_blank" rel="noopener noreferrer">
                {blog.title}
              </BlogLink>
              <BlogDate>{blog.date}</BlogDate>
            </BlogItemContainer>
          ))}
        </StyledSection>
      </motion.div>
    </div>
  );
};

// Blog item container to hold the blog link and date
const BlogItemContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 0;
`;

const BlogLink = styled.a`
  font-size: 1.2rem;
  color: var(--link-color);
  font-weight: bold;

  &:hover {
    text-decoration: underline;
  }
`;

const BlogDate = styled.span`
  font-size: 1rem;
  color: var(--accentText-color);
  margin-left: auto;
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

const StyledSection = styled.section`
  width: 80%;
  margin: 12rem auto 0 auto;
  padding: 1rem;
  border-radius: 1rem;
  background-color: var(--card-color);
  color: var(--text-color);
  box-sizing: border-box;
  overflow: hidden;

  @media (min-width: 780px) {
    width: 55%;
    margin: 12rem auto 0 auto;
    padding: 0rem 2rem 2rem 2rem;
  }

  @media (min-width: 1300px) {
    width: 35%;
    margin: 12rem auto 0 auto;
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