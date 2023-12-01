import React from 'react'
import { useState } from 'react'
import { useLocation } from 'react-router-dom';
import axios from 'axios';

const MoviePage = ({item}) => {
    const location = useLocation();
    const tokenID = location.pathname.split("/")[2];

    const [movie, setMovie] = useState(null);

    const fetchMovieDetails = async () => {
        try {
            
            const apiKey = 'fac0695824b19e2521d19e4b0e03831c';
            const response = await axios.get(`https://api.themoviedb.org/3/movie/${tokenID}?api_key=${apiKey}`);
  
            setMovie(response.data);
        } catch (error) {
            console.error('Error fetching movie details:', error);
        }
    };
  
    fetchMovieDetails();
   
      

    return (
        <>
        <div className="w-full h-[550px] text-white ">
            <div className="w-full h-full ">
            <div className="absolute w-full h-[550px]   "></div>
                <img
                    className=" object-cover"
                    src={`https://image.tmdb.org/t/p/original/${movie?.backdrop_path}`}
                    alt={movie?.title}
                />
        <div className="absolute w-full top-[20%] p-4 md:p-8   bg-gradient-to-r from-black">
          <h1 className="text-white py-4 mx-4 uppercase text-4xl font-bold">
            {movie?.title}
          </h1>
          <h1 className="text-white py-4 mx-4 uppercase text-xl ">
            {movie?.tagline}
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
            {movie?.overview}
          </p>
          <p className="ml-4 md:max-w-[10%] mt-2 lg:max-w-[15%] xl:[35%] px-2 py-2 bg-gradient-to-r from-gray-800 to-gray-200">
            Total Runtime: {movie?.runtime} minutes
          </p>
          <div>
  </div>
        </div>
      </div>
    </div>
        </>
    )
};

export default MoviePage;