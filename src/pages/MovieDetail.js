import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { useHistory } from "react-router-dom";
import { Link } from "react-router-dom";
import { MovieState } from "../movieState";
//Animation
import { motion } from "framer-motion";
import { pageAnimation, rotateText } from "../animation";
import { AnimatePresence } from "framer-motion";
import { BasicLayout } from "../styles";

const MovieDetail = () => {
  const history = useHistory();
  const url = history.location.pathname;
  const [movies, setMovies] = useState(MovieState);
  const [movie, setMovie] = useState(null);

  //useEffect
  useEffect(() => {
    const currentMovie = movies.filter((stateMovie) => stateMovie.url === url);
    setMovie(currentMovie[0]);
  }, [movies, url]);

  return (
    <>
      {movie && (
        <BasicLayout
          variants={pageAnimation}
          initial="hidden"
          animate="show"
          exit="exit"
          style={{}}
        >
          <StyledHeadline>
            <motion.h2 variants={rotateText()}>{movie.title}</motion.h2>
            <img src={movie.mainImg} alt="movie" />
          </StyledHeadline>
          <StyledAwards>
            {movie.awards.map((award) => (
              <Award
                title={award.title}
                description={award.description}
                key={award.title}
              />
            ))}
          </StyledAwards>
          <ImageDisplay>
            <img src={movie.secondaryImg} alt="secondary image" />
          </ImageDisplay>
        </BasicLayout>
      )}
    </>
  );
};

const StyledMovieDetails = styled(motion.div)`
  background: "var(--background-color)";
`;

const StyledHeadline = styled.div`
  min-height: 90vh;
  margin-top: 15vh;
  position: relative;
  background: "var(--background-color)";
  z-index: 10;
  pointer-events: none;

  h2 {
    font-size: 5.5rem;

    color: black;
    text-transform: uppercase;

    @media (min-width: 780px) {
    }

    @media (min-width: 1300px) {
    }
  }

  img {
    width: 80%;
    height: auto;
    object-fit: cover;
  }
`;

const StyledAwards = styled.div`
  color: black;
  min-height: 80vh;
  display: flex;
  margin: 5rem 10rem;
  align-items: center;
  justify-content: space-around;
  pointer-events: none;
  @media (max-width: 1300px) {
    display: block;
    margin: 2rem 2rem;
  }
`;

const StyledAward = styled.div`
  padding: 5rem;
  h3 {
    font-size: 2rem;
    color: black;
  }

  .line {
    width: 100%;
    background: #120000;
    height: 0.5rem;
    margin: 1rem 0rem;
  }
  p {
    padding: 2rem 0rem;
    color: black;
  }
`;

const ImageDisplay = styled.div`
  min-height: 50vh;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

//Award Component

const Award = ({ title, description }) => {
  return (
    <StyledAward>
      <h3>{title}</h3>
      <div className="line"></div>
      <p>{description}</p>
    </StyledAward>
  );
};

export default MovieDetail;
