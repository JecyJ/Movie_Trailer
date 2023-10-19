import { useEffect, useState } from "react";
import MovieCards from "./detailPage/MovieCards";
import { Link } from "react-router-dom";
import {MdChevronLeft, MdChevronRight} from 'react-icons/md'


const Rows = ({title, fetchURL, route, rowId}) => {
  const [movies, setMovies] = useState([]);


  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const response = await fetch(fetchURL);
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
  }, [fetchURL]);

  const slideLeft = () => {
    const slider = document.getElementById("slider" + rowId);
    slider.scrollLeft = slider.scrollLeft - 500
  }

  const slideRight = () => {
    const slider = document.getElementById("slider" + rowId);
    slider.scrollLeft = slider.scrollLeft + 500
  }

  const renderUpcomingMovies = () => (
    <section className="flex items-center w-full h-auto group">
      <MdChevronLeft 
        onClick={slideLeft}
        className="bg-white left-0 text-black rounded-full absolute opacity-50 hover:opacity-100 cursor-pointer z-10 hidden group-hover:block" size={40} />    
      <div id={"slider" + rowId} className="w-full h-auto overflow-x-scroll whitespace-nowrap scroll-smooth scrollbar-hide relative">
        {movies.map((movie) => (
          <div key={movie.id} className="inline-block mr-4">
            <Link to={`/movieDetails/${movie.id}`}>
              <MovieCards movie={movie} />
            </Link>
          </div>
        ))}
      </div>
      <MdChevronRight 
        onClick={slideRight}
        className="bg-white right-0 text-black rounded-full absolute opacity-50 hover:opacity-100 cursor-pointer z-10 hidden group-hover:block" size={40} />
    </section>
  );


  return (
    <section>
        <div className="flex items-center justify-between text-white px-3">
            <h1 className="font-bold md:text-xl p-4">{title}</h1>
            <Link to={route} className="text-blue-500 hover:text-blue-900 animate-bounce">See More</Link>            
        </div>
        <div className="items-center text-white overflow-x-auto">
          {renderUpcomingMovies()}
        </div>
    </section>
  )
}

export default Rows;