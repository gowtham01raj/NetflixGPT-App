import { useSelector } from "react-redux";

const movieID = useSelector((store) => store.movies?.trailerVideo);
const movies = useSelector((store) => store.movies?.nowPlayingMovies);

export function getRandomInt(max) {
  return movies[Math.floor(Math.random() * max)];
}
