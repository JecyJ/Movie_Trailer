import { MdChevronLeft, MdChevronRight } from "react-icons/md";
import CustomImageComponent from "./CustomImageComponent";
import { useEffect, useState } from "react";
import { AiOutlineClose, AiTwotoneStar } from 'react-icons/ai';
import { Link } from "react-router-dom";
import { UserAuth } from "./context/AuthContext";
import { doc, getDoc, updateDoc } from "firebase/firestore";
import { db } from "../pages/firebase";

const IMAGE_BASE_URL = "https://image.tmdb.org/t/p/w500";

const SavedShows = () => {
  const { user } = UserAuth();
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    async function fetchSavedShows() {
      if (user && user.uid) {
        try {
          const userDocRef = doc(db, "users", user.uid); // Reference to the user's document
          const userDocSnap = await getDoc(userDocRef); // Get the user's document

          if (userDocSnap.exists()) {
            const userData = userDocSnap.data();
            if (userData.savedShows) {
              setMovies(userData.savedShows);
            }
          }
        } catch (error) {
          alert("Error fetching saved shows:", error);
        }
      }
    }

    fetchSavedShows();
  }, [user]); 

  const slideLeft = () => {
    const slider = document.getElementById("slider");
    slider.scrollLeft = slider.scrollLeft - 500;
  }

  const slideRight = () => {
    const slider = document.getElementById("slider");
    slider.scrollLeft = slider.scrollLeft + 500;
  }

  const movieRef = doc(db, "users", user.uid)
  const deleteShow = async (passedID) => {
    try {
      const result = movies.filter((movie) => movie.id !== passedID)
      await updateDoc(movieRef, {
        savedShows: result,
      })
    } catch (error) {
      console.log("error")
    }
  }

  return (
    <section className="flex items-center w-full pt-5 h-auto group">
      <MdChevronLeft
        onClick={slideLeft}
        className="bg-white left-0 text-black rounded-full absolute opacity-50 hover:opacity-100 cursor-pointer z-10 hidden group-hover:block"
        size={40}
      />
      <div id="slider" className="w-full h-auto overflow-x-scroll whitespace-nowrap scroll-smooth scrollbar-hide relative">
        {movies.map((movie) => (
          <div key={movie.id} className="inline-block mr-4">
            <Link to={`/movieDetails/${movie.id}`}>
              <div className="w-full h-full">
                <div className="relative w-[150px] sm:w-[200px] md:w-[240px] lg:w-[280px] cursor-pointer border border-slate-700 shadow-2xl">

                  <CustomImageComponent
                    className="w-[150px] sm:w-[200px] md:w-[300px] border border-slate-700"
                    src={`${IMAGE_BASE_URL}${movie.img}`}
                    alt="/"
                    width={1000}
                    height={1000}
                  />
                  <div className='hover:bg-black/80 absolute top-0 left-0 w-full h-full opacity-0 hover:opacity-100 text-white'>
                    <h1 className="text-white whitespace-normal text-xs md:text-base px-2 pt-2 pb-2">{movie.title}</h1>

                    <div className="flex justify-between px-2">
                      <h1 className="flex items-center text-white text-xs">
                        <AiTwotoneStar className="text-orange-500" size={20} />
                        <span>{movie.average}/10</span>
                      </h1>
                      <h1 className="text-white text-xs">{movie.release}</h1>
                    </div>
                    <p onClick={() => deleteShow(movie.id)} className="absolute text-red-500 top-2 right-2">
                      <AiOutlineClose size={20} />
                    </p>
                  </div>
                </div>
              </div>
            </Link>
            
          </div>
        ))}
      </div>
      <MdChevronRight
        onClick={slideRight}
        className="bg-white right-0 text-black rounded-full absolute opacity-50 hover:opacity-100 cursor-pointer z-10 hidden group-hover:block"
        size={40}
      />
    </section>
  )
}

export default SavedShows;

// -top-[220px] sm:-top-[295px] md:-top-[410px] left-[125px] sm:left-[175px] md:left-[255px]