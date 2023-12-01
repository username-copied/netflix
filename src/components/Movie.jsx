import React from "react";
import { FaRegHeart } from "react-icons/fa";
import MoviePage from "../pages/MoviePage";
import { Link } from "react-router-dom";


const Movie = ({ item }) => {
  const linkTo = {
    pathname: "/moviePage/" + item?.id,
  };
  return (
    <>
    
      <div className="w-[160px] sm:w-[200px] md:w-[240px] lg:w-[280px] inline-block cursor-pointer relative p-2">
      <Link to={linkTo}>
      <img
        className="w-full h-auto block"
        src={`https://image.tmdb.org/t/p/w500/${item?.backdrop_path}`}
        alt={item?.title}
      />
      <div className="absolute top-0 left-0 w-full h-full hover:bg-black/80 opacity-0 text-white hover:opacity-100 duration-[1s]">
        <p className="flex items-center justify-center text-center h-full text-sm sm:text-m ">
          {item?.title}
        </p>
        <p>
          
            <FaRegHeart className="absolute top-4 left-4 text-gray-400" />
        
        </p>
          </div>
          </Link>
      </div>
      </>
  );
};

export default Movie;
