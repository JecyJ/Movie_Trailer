import CustomImageComponent from "../CustomImageComponent";

const IMAGE_BASE_URL = "https://image.tmdb.org/t/p/w500";

const MovieCard = ({movie}) => {
  return (
    <section className="w-[400px] m-auto h-auto my-4">
      <div className="space-y-3">
        <CustomImageComponent
          className="border rounded-3xl w-auto sm:w-auto"
          src={`${IMAGE_BASE_URL}${movie.backdrop_path}`}
          alt="/"
          width={1000}
          height={1000}
        />
        <div className="text-white">
          <h1 className="text-center text-lg">{movie.title}</h1>
          <h1 className="text-center text-lg">{movie.release_date}</h1>
        </div>
      </div>
    </section>
  );
};

export default MovieCard;








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