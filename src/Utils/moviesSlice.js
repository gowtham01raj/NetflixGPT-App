import { createSlice } from "@reduxjs/toolkit";

const moviesSlice = createSlice({
  name: "movies",
  initialState: {
    nowPlayingMovies: null,
    trailerVideo: [
      "hXzcyx9V0xw",
      "Eyl4sQFkQiM",
      "S27THSM8yd4",
      "C2ZkygJXpss8BxWK",
      "zJVimAeVXk4",
      "ZnH_2I0WoFQ",
      "uUeV7yVC3fQ",
      "2VtK6DW3QuU",
      "wSCKINuweRM",
      "rXXpbBGF8iQ",
      "_c-HiBCkm_o",
      "AdUsjUkxbe8",
      "ItcWZidolsE",
      "x6jm5pjxykM",
      "AEdb8sQp3qA",
      "lHy5uu0NxWo",
      "NlyhXwxoO6o",
    ],
  },
  reducers: {
    addNowPlayingMovies: (state, action) => {
      // Toolkit + Immer lets us push directly
      state.nowPlayingMovies = action.payload;
    },
    addTrailerVideos: (state, action) => {
      state.trailerVideo = action.payload;
    },
  },
});

export const { addNowPlayingMovies } = moviesSlice.actions;
export default moviesSlice.reducer;
