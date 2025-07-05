import React, { useEffect, useRef, useState } from "react";
import Header from "./Header";
import { moviesList, MOVIE_URL } from "../Utils/constants";
import { useDispatch, useSelector } from "react-redux";
import { addNowPlayingMovies } from "../Utils/moviesSlice";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";
import { popularityMovies, options } from "../Utils/constants";
const Browse = () => {
  const dispatch = useDispatch();
  // const getPopularityMovies = async () => {
  //   moviesList.map(async (movie, index) => {
  //     const data = await fetch(MOVIE_URL + movie);
  //     const json = await data.json();
  //     dispatch(addNowPlayingMovies(json));
  //   });
  // };
  const getPopularityMovies = async () => {
    const data = await fetch(popularityMovies, options);
    const json = await data.json();
    dispatch(addNowPlayingMovies(json.results));
  };

  useEffect(() => {
    getPopularityMovies();
  }, []);

  return (
    <div className="">
      <Header />
      <MainContainer />
      <SecondaryContainer />
    </div>
  );
};

export default Browse;
