import axios from "axios";
import React, { useEffect } from "react";
import { useState } from "react";
import requests from "../Requests";

const Main = () => {
  const [movies, setMovies] = useState([]);

  const movie = movies[Math.floor(Math.random() * movies.length)];

  useEffect(() => {
    axios.get(requests.requestPopular).then((response) => {
      setMovies(response.data.results);
    });
  }, []);

  // console.log(movie);
  return (
    <div className="w-full h-[550px] text-white ">
      <div className="w-full h-full ">
        <div className="absolute w-full h-[550px] bg-gradient-to-r from-black  "></div>
        <img
          className="w-full h-full object-cover"
          src={`https://image.tmdb.org/t/p/original/${movie?.backdrop_path}`}
          alt={movie?.title}
        />
        <div className="absolute w-full top-[20%] p-4 md:p-8">
          <h1 className="text-white py-4 mx-4 uppercase text-4xl font-bold">
            {movie?.title}
          </h1>
          <div>
            <button className="bg-white text-black px-4 py-2 mx-4">Play</button>
            <button className="bg-transparent border-white border-[0.5px] px-4 py-2 ">
              Watch Later
            </button>
          </div>
          <h1 className="px-4 py-2 text-gray-400">
            Released on {movie?.release_date}
          </h1>
          <p className="ml-4 md:max-w-[70%] lg:max-w-[50%] xl:[35%] ">
            {movie?.overview.slice(0, 300)}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Main;
