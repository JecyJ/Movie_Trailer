import {Route, Routes} from 'react-router-dom'
import Home from "./Home";
import MovieDetails from './MovieDetails';
import Movies from './Movies';
import Series from './Series';
import TopRated from './TopRated';
import Searched from './Searched';
import Login from './Login';
import SignUp from './SignUp';
import Account from './Account';
import ProtectedRoute from '../components/ProtectedRoute';


const Pages = () => {
  return (
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path='/movies' element={<Movies />} />
        <Route path='/toprated' element={<TopRated />} />
        <Route path='/series' element={<Series />} />
        <Route path='/movieDetails/:details' element={<MovieDetails />} />
        <Route path="/searched/:mediatype/:search" element={<Searched />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/account" element=
          {
            <ProtectedRoute>
              <Account />
            </ProtectedRoute>
          } 
        />
    </Routes>
  )
}

export default Pages;