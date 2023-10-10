import {Route, Routes} from 'react-router-dom'
import Home from "./Home";
import MovieDetails from './MovieDetails';
import Movies from './Movies';
import Series from './Series';
import SearchedMovie from './SearchedMovie';
import TopRated from './TopRated';


const Pages = () => {
  return (
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path='/movies' element={<Movies />} />
        <Route path='/toprated' element={<TopRated />} />
        <Route path='/searched/:search' element={<SearchedMovie />} />
        <Route path='/series' element={<Series />} />
        <Route path='/movieDetails/:details' element={<MovieDetails />} />
    </Routes>
  )
}

export default Pages;