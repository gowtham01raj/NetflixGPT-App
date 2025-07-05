import React from "react";
import { IMAGE_URL } from "../Utils/constants";

const MovieCard = ({ poster_path, title }) => {
  return (
    <div className="w-[200px] pr-6">
      <img className=""src={IMAGE_URL + poster_path} alt={title} />
    </div>
  );
};

export default MovieCard;
