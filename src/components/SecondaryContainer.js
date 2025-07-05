import React from "react";
import MovieList from "./MovieList";
import { useSelector } from "react-redux";

const SecondaryContainer = () => {
  const movie = useSelector((store) => store.movies);
  return (
    <div className="bg-black text-white">
      <MovieList title={"Now Playing"} data={movie.nowPlayingMovies} />
      <MovieList title={"Popular Movies"} data={movie.nowPlayingMovies} />
      <MovieList title={"Trending Movies"} data={movie.nowPlayingMovies} />
      <MovieList title={"Crime Movies"} data={movie.nowPlayingMovies} />
      <MovieList title={"Love Movies"} data={movie.nowPlayingMovies} />
      <MovieList title={"Action Movies"} data={movie.nowPlayingMovies} />
    </div>
  );
};

export default SecondaryContainer;
