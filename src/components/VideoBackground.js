import React, { useEffect } from "react";
import { useSelector } from "react-redux";

const VideoBackground = () => {
  const movieID = useSelector((store) => store.movies?.trailerVideo);

  function getRandomInt(max) {
    return movieID[Math.floor(Math.random() * max)];
  }
  return (
    <div className="w-screen ">
      <iframe
      className="w-screen aspect-video "
        src={"https://www.youtube.com/embed/" + getRandomInt(18) +"?autoplay=1&mute=1&amp;start=30"}
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
      ></iframe>
    </div>
  );
};

export default VideoBackground;
