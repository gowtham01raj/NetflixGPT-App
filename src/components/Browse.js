import React, { useEffect, useRef, useState } from "react";
import Header from "./Header";
import {
  moviesList,
  MOVIE_URL,
  PlayingMovies,
  topRatedMovies,
  UpcomingMovies,
} from "../Utils/constants";
import { useDispatch, useSelector } from "react-redux";
import {
  addNowPlayingMovies,
  addPopularMovies,
  addTrendingMovies,
  addUpcomingMovies,
} from "../Utils/moviesSlice";
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
    const data1 = await fetch(PlayingMovies, options).then((data) =>
      data.json()
    );
    dispatch(addNowPlayingMovies(data1.results));
    const data2 = await fetch(popularityMovies, options).then((data) =>
      data.json()
    );
    dispatch(addPopularMovies(data2.results));
    const data3 = await fetch(topRatedMovies, options).then((data) =>
      data.json()
    );
    dispatch(addTrendingMovies(data3.results));
    const data4 = await fetch(UpcomingMovies, options).then((data) =>
      data.json()
    );
    dispatch(addUpcomingMovies(data4.results));
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
