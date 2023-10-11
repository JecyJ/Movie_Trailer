import { useEffect, useState } from "react";
import MovieCard from "./MovieCard";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import '@splidejs/react-splide/css';
// import { Link } from "react-router-dom";
import requests from "../../Request";

const Hero = () => {
  const [movies, setMovies] = useState([]);  
  const [randomMovieIndex, setRandomMovieIndex] = useState(null);


  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const response = await fetch(requests.requestTrending);
        if (response.ok) {
          const data = await response.json();
          setMovies(data.results);
          const randomIndex = Math.floor(Math.random() * data.results.length);
          setRandomMovieIndex(randomIndex);
        } else {
          console.error("Failed to fetch movies:", response.status);
        }
      } catch (error) {
        console.error("Error:", error);
      }
    };

    fetchMovies();
  }, []);


  return (
    <section className="w-full h-[380px] md:h-full">
      <div className=" relative">
        <Splide 
          options={{
            drag:'free',
            perPage:1,
            arrows:false,
            pagination:false,
            autoplay: "play",
            type: 'loop',
          }}
        >
        {randomMovieIndex && movies.map((movie) => (
          <SplideSlide key={movie.id}>
            <MovieCard movie={movie} />
          </SplideSlide>
        ))}
        </Splide>
      </div>
    </section>
  );
};

export default Hero;

// <Link to={`/movieDetails/` + movie.id}>
// </Link>

// const displayMovie = movies[Math.floor(Math.random() * movies.length)]