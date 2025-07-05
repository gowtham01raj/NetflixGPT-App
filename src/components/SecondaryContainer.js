import React from "react";
import MovieList from "./MovieList";
import { useSelector } from "react-redux";

const SecondaryContainer = () => {
  const movie = useSelector((store) => store.movies);
  return (
    <div className="bg-black text-white">
      <div className="-top-80 relative z-10">
        <MovieList title={"Now Playing"} data={movie.nowPlayingMovies} />
        <MovieList title={"Trending Movies"} data={movie.TrendingMovies} />
        <MovieList title={"Popular Movies"} data={movie.PopularMovies} />
        <MovieList title={"Upcoming Movies"} data={movie.UpcomingMovies} />
      </div>
    </div>
  );
};

export default SecondaryContainer;
