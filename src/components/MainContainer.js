import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import VideoTitle from "./VideoTitle";
import VideoBackground from "./VideoBackground";
const MainContainer = () => {
  const movies = useSelector((store) => store.movies?.nowPlayingMovies);

  if (movies === null) return; 

  return (
    <div className="">
      <VideoTitle
        title={movies[0]?.title}
        overview={movies[0].overview}
        released={movies[0]?.release_date}
      />
      <VideoBackground />
    </div>
  );
};

export default MainContainer;
