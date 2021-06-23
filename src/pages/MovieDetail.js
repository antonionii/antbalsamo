import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { useHistory } from "react-router-dom";
import { Link } from "react-router-dom";
import { MovieState } from "../movieState";
//Animation
import { motion } from "framer-motion";
import { pageAnimation } from "../animation";
import { AnimatePresence } from "framer-motion";

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
        <StyledMovieDetails
          variants={pageAnimation}
          initial="hidden"
          animate="show"
          exit="exit"
          style={{ background: "#d6aa9e" }}
        >
          <StyledHeadline>
            <h2>{movie.title}</h2>
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
        </StyledMovieDetails>
      )}
    </>
  );
};

const StyledMovieDetails = styled(motion.div)`
  color: d6aa9e;
`;

const StyledHeadline = styled.div`
  min-height: 90vh;
  padding-top: 30vh;
  position: relative;
  h2 {
    position: absolute;
    top: 10%;
    left: 42%;
    transform: translateX(-50%, -10%);
    color: black;
    @media (max-width: 1300px) {
      left: 38%;
    }
    @media (max-width: 1000px) {
      left: 35%;
    }
    @media (max-width: 700px) {
      left: 30%;
    }
    @media (max-width: 300px) {
      left: 20%;
    }
  }

  img {
    width: 100%;
    height: 70vh;
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
