import { useEffect, useState } from "react";
import MovieCard from "./MovieCard";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import '@splidejs/react-splide/css';

const Hero = () => {
  const [movies, setMovies] = useState([]);  

  useEffect(() => {
    

    const fetchMovies = async () => {
      try {
        const response = await fetch(
          `https://api.themoviedb.org/3/trending/movie/week?language=en-US&api_key=${process.env.REACT_APP_API_KEY}`
        );
        if (response.ok) {
          const data = await response.json();
          setMovies(data.results);
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
    <section className="relative z-[-2] w-full h-auto py-5">
      <div className="max-w-[400px] sm:max-w-[600px] md:max-w-[800px] lg:max-w-[1200px] m-auto relative">
        <h1 className="text-3xl text-center text-red-500 font-bold">Trending Movies</h1>
        <Splide 
          options={{
            drag:'free',
            perPage:1,
            arrows:'true',
            pagination:false
          }}
        >
        {movies.map((movie) => (
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