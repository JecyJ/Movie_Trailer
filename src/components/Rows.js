import { useEffect, useState } from "react";
import MovieCards from "./detailPage/MovieCards";
import { Link } from "react-router-dom";


const Rows = ({title, fetchURL}) => {
  const [movies, setMovies] = useState([]);  
  // const [randomMovieIndex, setRandomMovieIndex] = useState(null);


  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const response = await fetch(fetchURL);
        if (response.ok) {
          const data = await response.json();
          setMovies(data.results);
          // const randomIndex = Math.floor(Math.random() * data.results.length);
          // setRandomMovieIndex(randomIndex);
        } else {
          console.error("Failed to fetch movies:", response.status);
        }
      } catch (error) {
        console.error("Error:", error);
      }
    };

    fetchMovies();
  }, [fetchURL]);

  const renderUpcomingMovies = () => (
    <div id="slider" className="w-full h-auto overflow-x-scroll whitespace-nowrap scroll-smooth scrollbar-hide relative">
      {movies.map((movie) => (
        <div key={movie.id} className="inline-block mr-4">
          <Link to={`/movieDetails/${movie.id}`}>
            <MovieCards movie={movie} />
          </Link>
        </div>
      ))}
    </div>
  );


  return (
    <section>
        <div className="flex items-center justify-between text-white px-3">
            <h1 className="font-bold md:text-xl p-4">{title}</h1>
            <Link to={fetchURL === "/movies" ? "/movies" : fetchURL === "/toprated" ? "/toprated" : "/series"} className="text-blue-500 hover:text-blue-900 animate-bounce">See More</Link>            
        </div>
        <div className="text-white overflow-x-auto">
          {renderUpcomingMovies()}
        </div>
    </section>
  )
}

export default Rows;