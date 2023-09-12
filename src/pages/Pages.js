import {Route, Routes} from 'react-router-dom'
import Home from "./Home";
import Trending from './Trending';
import MovieDetails from '../components/detailPage/MovieDetails';

const Pages = () => {
  return (
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path='/:name' element={<Trending />} />
        <Route path='/:name' element={<MovieDetails />} />
    </Routes>
  )
}

export default Pages;