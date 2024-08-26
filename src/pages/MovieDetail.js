import React, {useEffect, useState} from "react";
import styled from "styled-components";
import {useHistory} from "react-router-dom";
import {ProjectsState} from "../projectsState";
//Animation
import {motion} from "framer-motion";
import {pageAnimation} from "../animation";
import VideoPlayer from "../components/VideoPlayer";
import Marquee from "react-fast-marquee";
import ImageSlider from "../components/ImageSlider";

const MovieDetail = () => {
  const history = useHistory();
  const url = history.location.pathname;
  const [movies, setMovies] = useState(ProjectsState);
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
        >
          <StyledHeadline>
            <>
              <Marquee
                direction="left"
                gradient={false}
                classname="marqueeWrapper"
                speed={"45"}
              >
                <h2>
                  &nbsp;&nbsp;&nbsp;&nbsp;{movie.title}&nbsp;&nbsp;&nbsp;&nbsp;
                  {movie.title}&nbsp;&nbsp;&nbsp;&nbsp;{movie.title}
                  &nbsp;&nbsp;&nbsp;&nbsp;
                  {movie.title}
                </h2>
              </Marquee>
            </>
          </StyledHeadline>

          {!movie.hasSlider ? (
            <VideoPlayer playbackUrl={movie.videoURL} />
          ) : (
            <ImageSlider slides={movie.sliderData} />
          )}

          {/* <ImageDisplay>
            {" "}
            <img src={movie.mainImg} />
          </ImageDisplay> */}

          <StyledAwards>
            {movie.awards.map((award) => (
              <Award
                // title={award.title}
                description={award.description}
                key={award.title}
              />
            ))}
          </StyledAwards>
          <ImageDisplay>
            <img src={movie.secondaryImg} alt="" />
          </ImageDisplay>
        </StyledMovieDetails>
      )}
    </>
  );
};

const StyledMovieDetails = styled(motion.div)`
  min-height: 50vh;
  display: block;
  align-items: center;
  justify-content: center;
  color: white;
  width: 100%;
  height: auto;
  padding: 2rem 0rem;

  img {
    width: 90%;
    height: auto;
    object-fit: cover;
  }

  @media (max-width: 750px) {
    h2 {
      padding: 0rem 0rem;
    }
  }
  @media (min-width: 780px) {
    text-align: center;

    img {
      width: 70%;
      height: auto;
    }
  }
  @media (min-width: 1300px) {
    display: block;
    text-align: center;
    padding: 0rem 0rem;

    img {
      width: 50%;
      height: auto;
    }
  }
`;

const StyledHeadline = styled.div`
  padding: 5rem 0rem 0rem 0rem;
  /* position: relative; */

  h2 {
    width: 100%;
    font-family: "Karla";
    text-align: center;
    margin: 0 auto;
    font-size: 2.5rem;

    /* transform: translateX(-50%, -10%); */
    /* @media (max-width: 1300px) {
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
    } */
  }

  video {
    object-fit: cover;
  }

  @media (min-width: 750px) {
    padding: 6rem 0rem 0rem 0rem;
    h2 {
      font-size: 4.5rem;
    }
  }

  @media (min-width: 1300px) {
    padding: 0rem 5rem 0rem 5rem;
  }

  @media (max-height: 750px) {
    margin: 1rem 0rem;
  }
`;

const StyledAwards = styled.div`
  align-content: center;

  color: var(--text-color);
  display: block;
  align-items: center;
  margin: 0rem auto;
  width: 80%;
  height: auto;
  /* @media (max-width: 1300px) {
    display: block;
    margin: 2rem 2rem;
  } */
`;

const StyledAward = styled.div`
  margin: 4rem 0rem 0rem;
  padding: 0rem 0rem 6rem 0rem;
  width: 100%;
  height: 0;

  h3 {
    font-size: 2rem;
    color: var(--text-color);
  }
  /* .line {
    width: 100%;
    background: var(--line-color);
    height: 2px;
    margin: 0rem 0rem;
  } */
  p {
    padding: 2rem 0rem;
    color: var(--text-color);
    text-transform: uppercase;
    font-weight: 200;
    /* font-family: karla; */

  }
  @media (min-width: 780px) {
    p {
      font-size: 2rem;
    }


`;

const ImageDisplay = styled.div`
  img {
    width: 100%;
    height: auto;
    object-fit: cover;
    max-width: 1200px;
  }
`;

/* Award Component */
const Award = ({ title, description }) => {
  return (
    <StyledAward>
      <p>{description}</p>
    </StyledAward>
  );
};
/* // const Award = ({ title, description }) => {
//   return (
//     <StyledAward>
//       <h3>{title}</h3>
//       <div className="line"></div>
//       <p>{description}</p>
//     </StyledAward>
//   );
// }; */

export default MovieDetail;
