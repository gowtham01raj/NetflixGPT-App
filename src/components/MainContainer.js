import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import VideoTitle from "./VideoTitle";
import VideoBackground from "./VideoBackground";

const MainContainer = () => {
  const movies = useSelector((store) => store.movies?.nowPlayingMovies);

  if (movies.length === 0) return;

  return (
    <div>
      <VideoTitle
        title={movies[4]?.Title}
        year={movies[4]?.Year}
        released={movies[4]?.Released}
      />
      <VideoBackground />
    </div>
  );
};

export default MainContainer;
