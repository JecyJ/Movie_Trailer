import { useEffect, useState } from "react";
import { BiLeftArrow, BiRightArrow } from 'react-icons/bi'
import MovieCards from "../detailPage/MovieCards";
import { NavLink, Link } from "react-router-dom";

const PopularSeries = () => {
  const API_URL = "https://api.themoviedb.org/3/";
  const [popularSeries, setPopularSeries] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);


  const fetchPopularSeries = async (page) => {
    try {
      const response = await fetch(
        `${API_URL}tv/top_rated?language=en-US&api_key=${process.env.REACT_APP_API_KEY}&page=${page}`
      );
      if (response.ok) {
        const data = await response.json();
        setPopularSeries(data.results);
        setTotalPages(data.total_pages);
      } else {
        console.error("Failed to fetch movies:", response.status);
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  useEffect(() => {
    fetchPopularSeries(currentPage);
  }, [currentPage]);

  const handlePrev = (event) => {
    event.preventDefault();
    const prevPage = currentPage === 1 ? totalPages : currentPage - 1;
    setCurrentPage(prevPage);
  };
  
  const handleNext = (event) => {
    event.preventDefault();
    const nextPage = currentPage === totalPages ? 1 : currentPage + 1;
    setCurrentPage(nextPage);
  };


  const renderPopularSeries = () => (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4" key={currentPage}>
      {popularSeries.map((movie) => (
        <div key={movie.id}>
          <Link to={`/movieDetails/` + movie.id}>
            <MovieCards movie={movie} />
          </Link>
        </div>
      ))}
    </div>
  );

  


  return (
    <section className="w-full h-auto my-3">
      <div className="max-w-[400px] sm:max-w-[600px] md:max-w-[800px] lg:max-w-[1200px] m-auto">
        <h1 className="text-xl text-center text-white font-bold pb-5">
          Series
        </h1>
        <div className="flex flex-col items-center justify-center space-x-4">
          <div className="flex overflow-x-auto">
            {renderPopularSeries()}
          </div>
          <div className="flex space-x-3 pt-3">
            <div
              className="flex justify-center items-center text-orange-500 cursor-pointer"
              style={{ zIndex: 1 }}              
            >
              <NavLink href={`?page=${currentPage - 1}`} >
                <p onClick={handlePrev}><BiLeftArrow size={20} /></p>
              </NavLink>
            </div>
            <p className="text-white">{currentPage}</p>
            <div
              className="flex justify-center items-center text-orange-500 cursor-pointer"
              style={{ zIndex: 1 }}              
            >
              <NavLink href={`?page=${currentPage + 1}`} >
                <p onClick={handleNext}><BiRightArrow size={20} /></p>
              </NavLink>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PopularSeries;














// 'use client'


// import { useEffect, useState } from "react";
// import Link from "next/link";
// import PopularSeriesCard from "./PopularSeriesCard";



// const PopularSeries = () => {
//   const API_URL = "https://api.themoviedb.org/3/";
//   const [popularSeries, setPopularSeries] = useState([]);



//   const fetchPopularSeries = async () => {
//     try {
//       const response = await fetch(
//         `${API_URL}tv/top_rated?language=en-US&page=1&api_key=${process.env.NEXT_PUBLIC_MOVIE_API_KEY}`
//       );
//       if (response.ok) {
//         const data = await response.json();
//         setPopularSeries(data.results);
//       } else {
//         console.error("Failed to fetch movies:", response.status);
//       }
//     } catch (error) {
//       console.error("Error:", error);
//     }
//   };

//   useEffect(() => {
//     fetchPopularSeries();
//   }, []);


//   const renderPopularSeries = () => (
//     <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
//       {popularSeries.map((movie) => (
//         <div key={movie.id} >
//           <PopularSeriesCard movie={movie} />
//         </div>
//       ))}
//     </div>
//   );


//   return (
//     <section className="w-full h-auto my-8">
//       <div className="max-w-[400px] sm:max-w-[600px] md:max-w-[800px] lg:max-w-[1200px] m-auto">
//         <Link href='/series'>
//             <h1 className="text-xl text-center text-white font-bold pb-5">Popular Series</h1>
//         </Link>        
//         <div className="flex flex-col items-center justify-center space-x-4">
//           <div className="flex overflow-x-auto">
//             {renderPopularSeries()}
//           </div>                    
//         </div>
//       </div>
//     </section>
//   )
// }

// export default PopularSeries;
