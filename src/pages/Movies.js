import { useEffect, useState } from "react";
import { BiLeftArrow, BiRightArrow } from 'react-icons/bi'
import { Link, NavLink } from "react-router-dom";
import Search from "../components/Search";
import requests from "../Request";
import Cards from "../components/Cards";

const Movies = () => {
  const [Movies, setMovies] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);


  const fetchMovies = async (page) => {
    try {
      const response = await fetch(`${requests.requestUpcoming}&page=${page}`);
      if (response.ok) {
        const data = await response.json();
        setMovies(data.results);
        setTotalPages(data.total_pages);
      } else {
        console.error("Failed to fetch movies:", response.status);
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  useEffect(() => {
    fetchMovies(currentPage);
  }, [currentPage]);

  const handlePrev = (event) => {
    event.preventDefault()
    const prevPage = currentPage === 1 ? totalPages : currentPage - 1;
    setCurrentPage(prevPage);
  };

  const handleNext = (event) => {
    event.preventDefault()
    const nextPage = currentPage === totalPages ? 1 : currentPage + 1;
    setCurrentPage(nextPage);
  };


  const renderMovies = () => (
    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-8" key={currentPage}>
      {Movies.map((movie) => (
        <div key={movie.id}>
          <Link to={`/movieDetails/` + movie.id}>
            <Cards movie={movie} />
          </Link>
        </div>
      ))}
    </div>
  );

  


  return (
    <section className="w-full h-auto pt-28 md:pt-14">
      <div className="max-w-[400px] sm:max-w-[600px] md:max-w-[800px] lg:max-w-[1200px] m-auto">
        <h1 className="text-xl text-center text-white font-bold pb-5">
          Movies
        </h1>
        <Search />
        <div className="flex flex-col items-center justify-center mt-9">
          {renderMovies()}
          <div className="flex space-x-3 pt-3">
            <div
              className="flex justify-center items-center text-orange-500 cursor-pointer"
              style={{ zIndex: 1 }}              
            >
              <NavLink to={`/?page=${currentPage - 1}`}>
                <p onClick={handlePrev}><BiLeftArrow size={20} /></p>
              </NavLink>
            </div>
            <p className="text-white">{currentPage}</p>
            <div
              className="flex justify-center items-center text-orange-500 cursor-pointer"
              style={{ zIndex: 1 }}
            >
              <NavLink to={`/?page=${currentPage + 1}`}>
                <p onClick={handleNext}><BiRightArrow size={20} /></p>
              </NavLink>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Movies;