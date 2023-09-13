import { useEffect, useState } from 'react';
import {AiOutlineSearch} from 'react-icons/ai'
import { Link, useParams } from 'react-router-dom';
import SearchedCards from '../components/SearchedCard';

const SearchedMovie = () => {
    const params = useParams();
    const [searched, setSearched] = useState('');
    const API_URL = "https://api.themoviedb.org/3/";

    useEffect(() => {
        const fetchMovies = async (page) => {
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
          {searched.map((results) => (
            <div key={results.id}>
              <Link to={`/searched/` + results.id}>
                <SearchedCards results={results} />
              </Link>
            </div>
          ))}
        </div>
      );

  return (
    <section>
        <form className='relative w-full h-9 max-w-[400px] sm:max-w-[550px] m-auto'>
        <div className="flex items-center">
            <AiOutlineSearch className='absolute z-3 fill-milk ml-1 ' size={25} />
            <input 
            className='w-full h-9 pl-8 bg-dark/60 rounded-xl text-milk' 
            type={searched}
            onChange={(e) => {setSearched(e.target.value)}} />
        </div>
        </form>
        <div>{renderMovies()}</div>
    </section>
  )
}

export default SearchedMovie;