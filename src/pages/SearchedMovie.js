import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import Search from '../components/Search';
import MovieCards from '../components/detailPage/MovieCards';

const SearchedMovie = () => {
    const params = useParams();
    const [searched, setSearched] = useState([]);
    const API_URL = "https://api.themoviedb.org/3/";

    useEffect(() => {
        const fetchMovies = async () => {
            try {
              const response = await fetch(
                `${API_URL}/search/movie/query=${params.search}?language=en-US&api_key=${process.env.REACT_APP_API_KEY}`
              );
              if (response.ok) {
                const data = await response.json();
                setSearched(data.results);
                // setTotalPages(data.total_pages);
              } else {
                console.error("Failed to fetch movies:", response.status);
              }
            } catch (error) {
              console.error("Error:", error);
            }
          };
          fetchMovies();
    }, [params.search]);



    const renderMovies = () => (
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4" >
          {searched.map((movie) => (
            <div key={movie.id}>
              <Link to={`/movieDetails/` + movie.id}>
                <MovieCards movie={movie} />
              </Link>
            </div>
          ))}
        </div>
      );

  return (
    <section>
        <Search />
        <div>{renderMovies()}</div>
    </section>
  )
}

export default SearchedMovie;