import {AiTwotoneStar} from 'react-icons/ai'
import {FaHeart, FaRegHeart} from 'react-icons/fa'
import { useState } from 'react';
import CustomImageComponent from './CustomImageComponent';
import { arrayUnion, doc, updateDoc } from 'firebase/firestore';
import { UserAuth } from './context/AuthContext';
import { db } from '../pages/firebase';

const IMAGE_BASE_URL = "https://image.tmdb.org/t/p/w500";


const Cards = ({ movie }) => {
  const ratingColor = movie.vote_average >= 5 ? "text-green-600" : "text-red-600";
  const [like, setLike] = useState(false)
  const [ setSaved] = useState(false)
  const {user} = UserAuth();

  const saveShow = async (e) => {
    e.stopPropagation();
    // e.preventDefault();
    if (user && user.uid) {
      setLike(!like);
      setSaved(true);

      const userDocRef = doc(db, "users", user.uid);

      // Update the user's Firestore document using arrayUnion to avoid duplicates
      await updateDoc(userDocRef, {
        savedShows: arrayUnion({
          id: movie.id,
          title: movie.original_title,
          img: movie.poster_path,
          average: movie.vote_average,
          release: movie.release_date,
        }),
      });

      setTimeout(() => {
        setLike(false);
      }, 1000);
    } else {
      alert("Please log in to save a movie");
    }
  };


  // const saveShow = async () => {
  //   if (user && user.uid) {
  //     setLike(!like);
  //     setSaved(true);

  //     const userDocRef = doc(db, "users", user.uid);

  //     // Update the user's Firestore document using arrayUnion to avoid duplicates
  //     await updateDoc(userDocRef, {
  //       savedShows: arrayUnion({
  //         id: movie.id,
  //         title: movie.original_title,
  //         img: movie.poster_path,
  //       }),
  //     });
  //   } else {
  //     alert("Please log in to save a movie");
  //   }
  // };

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
            <h1 className="text-white whitespace-normal text-xs md:text-base px-2 pt-2 pb-2">{movie.original_title}</h1>

            <div className="flex justify-between px-2">
              <h1 className="flex items-center text-white text-xs">
                <AiTwotoneStar className="text-orange-500" size={20} />
                <span className={ratingColor}>{movie.vote_average}</span>/10
              </h1>
              <h1 className="text-white text-xs">{movie.release_date}</h1>
            </div>

            <p onClick={saveShow} className='w-full h-full absolute top-0 flex items-center justify-center'> 
              {like ? <FaHeart size={20} className='fill-red-500' /> : <FaRegHeart size={20} />}           
            </p>
          </div>          
        </div>
    </section>
  );
};

export default Cards;