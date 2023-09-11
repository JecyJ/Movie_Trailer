import {Route, Routes} from 'react-router-dom'
import Home from "./Home";
import Trending from './Trending';

const Pages = () => {
  return (
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path='/Trending' element={<Trending />} />
    </Routes>
  )
}

export default Pages;