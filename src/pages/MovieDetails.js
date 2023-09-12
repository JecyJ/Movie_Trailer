import { useEffect, useState } from "react";
import {AiTwotoneStar} from 'react-icons/ai'
import Trailer from "./Trailer";
import { useParams } from "react-router-dom";
import CustomImageComponent from "../components/CustomImageComponent";



const MovieDetails = () => {
    const params = useParams();
  const API_URL = "https://api.themoviedb.org/3/";
  const IMAGE_BASE_URL = "https://image.tmdb.org/t/p/w500";
  const [movieDetails, setMovieDetails] = useState([]);
  const ratingColor = movieDetails.vote_average >= 5 ? "text-green-600" : "text-red-600";
  

  useEffect(() => {
    const fetchMovieDetails = async () => {
      try {
        const response = await fetch(
          `${API_URL}movie/${params.details}?language=en-US&api_key=${process.env.REACT_APP_API_KEY}`
        );
        if (response.ok) {
          const data = await response.json();
          setMovieDetails(data);
        } else {
          console.error("Failed to fetch movies:", response.status);
        }
      } catch (error) {
        console.error("Error:", error);
      }
    };

    fetchMovieDetails();
  }, [params.details]);
  


  return (
    <section className="w-full h-auto my-10 max-w-[400px] sm:max-w-[600px] md:max-w-[800px] m-auto">
      <div className="flex flex-col items-center justify-center space-y-4">
        <div className="space-y-2">
          <CustomImageComponent
          src={`${IMAGE_BASE_URL}${movieDetails.poster_path}`}
          alt={'/'}
          width={300}
          height={200}
          />
          <h1 className="text-xl font-bold text-white">{movieDetails.original_title}</h1>
          <div className="flex justify-between">
            <h3 className="flex items-center border-l-2 border-gray-400 text-white pl-1">
              <AiTwotoneStar className="text-orange-500" size={20} />
              <span className={ratingColor}>{movieDetails.vote_average}</span>/10
            </h3>
            <h3 className="text-white border-l-2 border-gray-400 pl-1">{movieDetails.original_language}</h3>
          </div>  
        </div>     
        <div>
          <h2 className="text-left text-xl text-white">Overview</h2>
          <p className="text-white text-lg">{movieDetails.overview}</p>
        </div>               
      </div>
      <Trailer /> 
    </section>
  );
};

export default MovieDetails;