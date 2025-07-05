import React from "react";
import { IMAGE_URL } from "../Utils/constants";

const MovieCard = ({ poster_path, title }) => {
  return (
    <div className="w-[200px] p-3 hover:scale-[1.25] cursor-pointer transform transition-transform  rounded-lg ">
      <img className="" src={IMAGE_URL + poster_path} alt={title} />
    </div>
  );
};

export default MovieCard;
