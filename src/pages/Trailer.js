import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import YouTube from "react-youtube";



const API_URL = "https://api.themoviedb.org/3/";

const Trailer = () => {
  const params = useParams();
  const [trailerKey, setTrailerKey] = useState(null);

  

  useEffect(() => {
    const fetchMovieTrailer = async () => {
      try {
        const response = await fetch(
          `${API_URL}movie/${params.details}/videos?api_key=${process.env.REACT_APP_API_KEY}&language=en-US`
        );
        if (response.ok) {
          const data = await response.json();
          const trailer = data.results.find(
            (result) => result.type === "Trailer"
          );
          if (trailer) {
            setTrailerKey(trailer.key);
          }
        } else {
          console.error("Failed to fetch trailer:", response.status);
        }
      } catch (error) {
        console.error("Error:", error);
      }
    };

    console.log(fetchMovieTrailer())
    fetchMovieTrailer();
  }, [params.details]);

 

 

  const display = (cssClass) => {
    let size;

    if(cssClass === 'max-w-[400px]') {
      size = {
        height: '350',
        width: '500',
      }
    } else {
      size = {
        height: '350',
        width: '600',
      }
    }
    return size;
  }

  const opts = display('max-w-[400px]');

  return (
    <section className="w-full h-auto py-20 mb-10 max-w-[400px] sm:max-w-[600px] md:max-w-[800px] m-auto">
      <div className="flex flex-col items-center justify-center space-y-4">        
        <h2 className="text-white text-xl">Movie Trailer</h2>
        {trailerKey && (
          <div>
            <YouTube opts={opts} videoId={trailerKey} />
          </div>
        )}    
      </div>
    </section>
  );
};

export default Trailer;