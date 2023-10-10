import {AiTwotoneStar} from 'react-icons/ai'
import {FaHeart, FaRegHeart} from 'react-icons/fa'
import { useState } from 'react';
import CustomImageComponent from './CustomImageComponent';

const IMAGE_BASE_URL = "https://image.tmdb.org/t/p/w500";


const SeriesCard = ({ movie }) => {
  const ratingColor = movie.vote_average >= 5 ? "text-green-600" : "text-red-600";
  const [like, setLike] = useState(false)

  return (
    <section className="w-full h-auto">    
        <div className="relative w-[150px] sm:w-[200px] md:w-[240px] lg:w-[280px] cursor-pointer border border-slate-700 shadow-2xl">
          
          <CustomImageComponent
            className="w-[150px] sm:w-[200px] md:w-[240px] lg:w-[280px] border border-slate-700"
            src={`${IMAGE_BASE_URL}${movie.poster_path}`}
            alt="/"
            width={1000}
            height={1000}
          />
          <div className='hover:bg-black/80 absolute top-0 left-0 w-full h-full opacity-0 hover:opacity-100 text-white'>
            <h1 className="text-white whitespace-normal  text-xs md:text-base px-2 pt-2 pb-2">{movie.original_name}</h1>

            <div className="flex justify-between px-2">
              <h1 className="flex items-center text-white text-xs">
                <AiTwotoneStar className="text-orange-500" size={20} />
                <span className={ratingColor}>{movie.vote_average}</span>/10
              </h1>
              <h1 className="text-white text-xs">{movie.first_air_date}</h1>
            </div>

            <div className='w-full h-full absolute top-0 flex items-center justify-center'> 
              {like ? <FaHeart size={20} className='fill-red-500' /> : <FaRegHeart size={20} />}           
            </div>
          </div>          
        </div>
    </section>
  );
};

export default SeriesCard;