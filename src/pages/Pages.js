import {Route, Routes} from 'react-router-dom'
import Home from "./Home";
import MovieDetails from './MovieDetails';


const Pages = () => {
  return (
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path='/movieDetails/:details' element={<MovieDetails />} />
    </Routes>
  )
}

export default Pages;