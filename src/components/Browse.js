import React, { useEffect, useRef, useState } from "react";
import Header from "./Header";
import { moviesList, MOVIE_URL } from "../Utils/constants";
import { useDispatch, useSelector } from "react-redux";
import { addNowPlayingMovies } from "../Utils/moviesSlice";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";

const Browse = () => {
  const dispatch = useDispatch();
  const getPopularityMovies = async () => {
    moviesList.map(async (movie, index) => {
      const data = await fetch(MOVIE_URL + movie);
      const json = await data.json();
      dispatch(addNowPlayingMovies(json));
    });
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
