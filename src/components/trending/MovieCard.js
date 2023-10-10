import { Link } from "react-router-dom";
import CustomImageComponent from "../CustomImageComponent";

const IMAGE_BASE_URL = "https://image.tmdb.org/t/p/original";

const MovieCard = ({movie}) => {
  return (
    <section className="w-full m-auto h-[650px] md:h-[550px]">
      <div className="absolute w-full h-[350px] md:h-[550px] bg-gradient-to-r from-black/90" />
      <CustomImageComponent
        className="h-[350px] md:h-full w-full object-cover"
        src={`${IMAGE_BASE_URL}${movie.backdrop_path}`}
        alt="/"
      />
      
      <div className="text-white absolute w-full top-[25%] sm:top-[25%] md:top-[55%] pl-[5%]">
        <h1 className="text-lg md:text-3xl">{movie.title}</h1>
        <h1 className="text-lg text-gray-300">Released: {movie.release_date}</h1>
        
        <div className="space-x-3 space-y-3">
          <Link to={`/movieDetails/` + movie.id}>
            <button className="border bg-gray-300 text-black border-gray-300 py-1 md:py-2 px-5">Play</button>
          </Link>
          <button className="border bg-transparent text-white border-gray-300 py-1 md:py-2 px-5">Watch Later</button>
        </div>
        <p className="text-sm md:text-base md:w-[700px] line-clamp-2 mt-3">{movie.overview}</p>
      </div>
    </section>
  );
};

export default MovieCard;





// 


// import Image from "next/image";
// import Link from "next/link";
// const IMAGE_BASE_URL = "https://image.tmdb.org/t/p/w500";


// const MovieCard = ({movie}) => {
//   return (
//     <section className="w-full h-auto my-4">
//         <div className="flex items-center space-x-3 max-w-[400px] sm:max-w-[600px] md:max-w-[800px] lg:max-w-[1200px] m-auto">            
//             <Link href='/details'>
//                 <div className="space-y-3">
//                     <Image className="border rounded-3xl" src={`${IMAGE_BASE_URL}${movie.backdrop_path}`} alt="/" width={800} height={800} />
//                     <div>
//                         <h1 className="text-center text-lg">{movie.title}</h1>
//                         <h1 className="text-center text-lg">{movie.release_date}</h1>
//                     </div>
//                 </div> 
//             </Link>                    
//         </div>
//     </section>
//   )
// }

// export default MovieCard;