import {Route, Routes} from 'react-router-dom'
import Home from "./Home";
import MovieDetails from './MovieDetails';
import Movies from './Movies';
import Series from './Series';
import TopRated from './TopRated';
import Searched from './Searched';


const Pages = () => {
  return (
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path='/movies' element={<Movies />} />
        <Route path='/toprated' element={<TopRated />} />
        <Route path='/series' element={<Series />} />
        <Route path='/movieDetails/:details' element={<MovieDetails />} />
        <Route path="/searched/:mediatype/:search" element={<Searched />} />
    </Routes>
  )
}

export default Pages;