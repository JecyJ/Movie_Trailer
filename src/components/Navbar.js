import {FcFilmReel} from 'react-icons/fc'
import {Link} from 'react-router-dom'
import {TbMenuOrder} from 'react-icons/tb'
import { useState } from 'react';
import {motion} from 'framer-motion'


const Navbar = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <section className={`absolute w-full h-auto py-1 z-[100]`}>
        <div className='flex items-center justify-between max-w-[400px] sm:max-w-[600px] md:max-w-[800px] lg:max-w-[1200px] m-auto bg-transparent text-white'>
            <Link to={'/'}>
                <h1 className='flex items-center text-3xl text-blue-500 font-semibold font-pacifico'>
                    <FcFilmReel size={70} />
                    Movie Trailer
                </h1>
            </Link>
            <div className='hidden sm:flex items-center text-lg w-[250px] justify-between'>
              <Link to={'/movies'}>
                <h2>Movies</h2>
              </Link>
              <Link to={'/toprated'}>
                <h2>Film</h2>z
              </Link>
              <Link to={'/series'}>
                <h2>Series</h2>
              </Link>
            </div>
            <div className="relative sm:hidden inline-block">
              <TbMenuOrder
                size={25}
                className='animate-pulse cursor-pointer text-blue-700'
                onMouseEnter={() => setIsHovered(true)}
                onClick={() => setIsHovered((prevIsHovered) => !prevIsHovered)}
                // onClick={() => setIsHovered(false)}
                // onMouseLeave={() => setIsHovered(false)}
              />
              {isHovered && (
                <motion.div 
                  initial={{opacity:0}}
                  animate={{opacity:1, transition:{duration:1.2}}}
                  exit={{opacity:0}}
                  className="absolute top-6 -left-5 text-xl bg-transparent p-2 rounded space-y-1 cursor-pointer"
                >
                  <Link to={'/movies'}>
                    <motion.h2
                    whileHover={{scale:1.1, transition:{duration:0.2}}}>Movies</motion.h2>
                  </Link>
                  <Link to={'/toprated'}>
                    <motion.h2
                    whileHover={{scale:1.1, transition:{duration:0.2}}}>Film</motion.h2>
                  </Link>
                  <Link to={'/series'}>
                    <motion.h2
                     whileHover={{scale:1.1, transition:{duration:0.2}}}>Series</motion.h2>
                  </Link>
                </motion.div>
              )}
            </div>
        </div>
    </section>
  )
}

export default Navbar;