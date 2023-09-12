import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import UpcomingMovieCard from "./UpcomingMovieCard";
import { BiLeftArrow, BiRightArrow } from 'react-icons/bi'
import { NavLink } from "react-router-dom";

const UpcomingMovies = () => {
  const API_URL = "https://api.themoviedb.org/3/";
  const [upcomingMovies, setUpcomingMovies] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);


  const fetchUpcomingMovies = async (page) => {
    try {
      const response = await fetch(
        `${API_URL}movie/upcoming?language=en-US&api_key=${process.env.REACT_APP_API_KEY}&page=${page}`
      );
      if (response.ok) {
        const data = await response.json();
        setUpcomingMovies(data.results);
        setTotalPages(data.total_pages);
      } else {
        console.error("Failed to fetch movies:", response.status);
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  useEffect(() => {
    fetchUpcomingMovies(currentPage);
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


  const renderUpcomingMovies = () => (
    <AnimatePresence mode='wait'>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4" key={currentPage}>
        {upcomingMovies.map((movie) => (
          <div key={movie.id}>
          <a href={`/MovieDetails`}>
            <UpcomingMovieCard movie={movie} />
            </a>
          </div>
        ))}
      </div>
    </AnimatePresence>
  );

  


  return (
    <section className="w-full h-auto my-3">
      <div className="max-w-[400px] sm:max-w-[600px] md:max-w-[800px] lg:max-w-[1200px] m-auto">
        <h1 className="text-xl text-center text-white font-bold pb-5">
          Upcoming Movies
        </h1>
        <div className="flex flex-col items-center justify-center space-x-4">
          <div className="flex overflow-x-auto">
            {renderUpcomingMovies()}
          </div>
          <div className="flex space-x-3 pt-3">
            <motion.div
              className="flex justify-center items-center text-orange-500 cursor-pointer"
              style={{ zIndex: 1 }}              
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              transition={{ duration: 0.3 }}
            >
              <NavLink to={`/?page=${currentPage - 1}`}>
                <p onClick={handlePrev}><BiLeftArrow size={20} /></p>
              </NavLink>
            </motion.div>
            <p className="text-white">{currentPage}</p>
            <motion.div
              className="flex justify-center items-center text-orange-500 cursor-pointer"
              style={{ zIndex: 1 }}              
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              transition={{ duration: 0.3 }}
            >
              <NavLink to={`/?page=${currentPage + 1}`}>
                <p onClick={handleNext}><BiRightArrow size={20} /></p>
              </NavLink>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default UpcomingMovies;

















// 'use client'


// import Link from "next/link";
// import { useEffect, useState } from "react";
// import { BiLeftArrow, BiRightArrow } from "react-icons/bi";
// import UpcomingMovieCard from "./UpcomingMovieCard";
// import { motion } from "framer-motion";



// const UpcomingMovies = () => {
//   const API_URL = "https://api.themoviedb.org/3/";
//   const [upcomingMovies, setUpcomingMovies] = useState([]);
//   // const [currentIndex, setCurrentIndex] = useState(0);



//   const fetchUpcomingMovies = async () => {
//     try {
//       const response = await fetch(
//         `${API_URL}movie/upcoming?language=en-US&api_key=${process.env.NEXT_PUBLIC_MOVIE_API_KEY}`
//       );
//       if (response.ok) {
//         const data = await response.json();
//         setUpcomingMovies(data.results);
//       } else {
//         console.error("Failed to fetch movies:", response.status);
//       }
//     } catch (error) {
//       console.error("Error:", error);
//     }
//   };

//   useEffect(() => {
//     fetchUpcomingMovies();
//   }, []);


//   const handlePrev = () => {
//     setCurrentIndex((prevIndex) => (prevIndex === 0 ? upcomingMovies.length - 1 : prevIndex - 1));
//   };

//   const handleNext = () => {
//     setCurrentIndex((prevIndex) => (prevIndex === upcomingMovies.length - 1 ? 0 : prevIndex + 1));
//   };

//   const renderUpcomingMovies = () => (
//     <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
//       {upcomingMovies.map((movie) => (
//         <div key={movie.id} >
//           <UpcomingMovieCard movie={movie} />
//         </div>
//       ))}
//     </div>
//   );
  



//   return (
//     <section className="w-full h-auto my-3">
//         <div className="max-w-[400px] sm:max-w-[600px] md:max-w-[800px] lg:max-w-[1200px] m-auto">
//           <Link href='/movies'>
//             <h1 className="text-xl text-center text-white font-bold pb-5">Upcoming Movies</h1>
//           </Link>
//           <div className="flex flex-col items-center justify-center space-x-4">
//             <div className="flex overflow-x-auto">
//               {renderUpcomingMovies()}
//             </div>
//             <div className="flex space-x-3">
//               <motion.div
//                 className="flex justify-center items-center"
//                 style={{ zIndex: 1 }}
//                 onClick={handlePrev}
//               >
//                 <BiLeftArrow size={30} className="text-orange-600" />
//               </motion.div>
//               <p className="text-white">1</p>
//               <motion.div
//                 className="flex justify-center items-center"
//                 style={{ zIndex: 1 }}
//                 onClick={handleNext}
//               >
//                 <BiRightArrow size={30} className="text-orange-600" />
//               </motion.div>
//             </div>
            
//         </div>
//         </div>
//     </section>
//   )
// }

// export default UpcomingMovies;









 //   const renderUpcomingMovies = () => (
  //   <div className="flex space-x-3">
  //     {upcomingMovies.map((movie, index) => (
  //       <motion.div
  //         key={movie.id}
  //         className={`w-full h-auto ${index === currentIndex ? "flex" : "hidden"}`}
  //         initial={{ opacity: 0 }}
  //         animate={{ opacity: index === currentIndex ? 1 : 0 }}
  //         transition={{ duration: 0.3 }}
  //       >
  //         <UpcomingMovieCard movie={movie} />
  //       </motion.div>
  //     ))}
  //   </div>
  // );