import React from "react";

const VideoTitle = ({ title, released, year }) => {
  return (
    <div className="p-42 px-24 pt-[20%] w-screen aspect-video absolute text-white bg-gradient-to-r from-black">
      <h1 className="text-6xl font-extrabold">{title}</h1>
      <h1 className="py-6 text-lg w-1/4">{released}</h1>
      <div className="">
        <button className="bg-white opacity-70 cursor-pointer font-bold border hover:bg-gray-500 text-center roudned-lg text-black p-4 rounded-lg mx-2 px-16 gap-1.5">
          ▶Play
        </button>
        <button className="bg-gray-500 opacity-70  cursor-pointer text-center bg-gradient-to-r hover:bg-red-800 from-black roudned-lg text-white p-4 rounded-lg mx-2 px-16 gap-1.5">
          ℹ️More Info
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
