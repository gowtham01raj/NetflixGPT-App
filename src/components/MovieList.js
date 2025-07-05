import React from "react";
import MovieCard from "./MovieCard";
const MovieList = ({ title, data }) => {
  return (
    <div className="p-6">
      <h1 className="font-bold text-2xl">{title}</h1>
      <div className="flex overflow-y-hidden overflow-x-scroll no-scrollbar">
        <div className=" flex ">
          {data &&
            data.map((movie) => (
              <MovieCard
                key={movie?.id}
                title={movie?.title}
                poster_path={movie?.poster_path}
              />
            ))}
        </div>{" "}
      </div>
    </div>
  );
};

export default MovieList;
