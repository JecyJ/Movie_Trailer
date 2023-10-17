import React, { useEffect, useState } from "react";
import requests from "../Request";
import { Link, useParams } from "react-router-dom";
import MovieCards from "../components/detailPage/MovieCards";
import SeriesCard from "../components/SeriesCard";
import Cards from "../components/Cards";

const Searched = ({mediaType}) => {
    const [searchResults, setSearchResults] = useState([]);
    const params = useParams();

    useEffect(() => {
        const fetchSearchResults = async () => {
            try {
                const apiUrl = mediaType === "movie" ? requests.searchMovies : mediaType === "series" ? requests.searchSeries : requests.searchMulti;
                // const apiUrl = mediaType === "movie" ? requests.searchMovies : requests.searchSeries;
                const response = await fetch(`${apiUrl}&query=${params.search}`);
            if (response.ok) {
                const data = await response.json();
                setSearchResults(data.results);
            } else {
                console.error("Failed to fetch search results:", response.status);
            }
            } catch (error) {
            console.error("Error:", error);
            }
        };

        fetchSearchResults();

    }, [params.search, mediaType])
  return (
    <div className="w-full h-auto pt-28 md:pt-14">
        <div className="max-w-[400px] sm:max-w-[600px] md:max-w-[800px] lg:max-w-[1200px] m-auto">
            <h1 className="text-xl text-center text-white font-bold pb-2">
            Search Results
            </h1>
            <p className="text-white text-center pb-4">Search query: {params.search}</p>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-4 gap-8">
                {searchResults.map((movie) => (
                    <div key={movie.id}>
                        <Link to={`/movieDetails/` + movie.id}>
                            {mediaType === "movie" ? (<MovieCards movie={movie} />) : mediaType === "series" ? (<SeriesCard movie={movie} />) : (<Cards movie={movie} />)}
                        </Link>
                    </div>
                ))}
            </div>
        </div>
     </div>
  )
}

export default Searched;